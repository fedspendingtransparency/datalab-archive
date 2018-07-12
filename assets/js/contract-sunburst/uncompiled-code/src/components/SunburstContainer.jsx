// import libraries
import React, { Component } from "react";
import axios from "axios";

// import components
import BreadCrumbs from "./BreadCrumbs";
import Sunburst from "components/Sunburst";
import SunburstSearchbar from "components/SunburstSearchbar";
import SunburstPanel from "components/SunburstPanel";
import Tooltip from "components/Tooltip";

// import helper functions
import formatDataHierarchy from "helpers/formatDataHierarchy.js";
import { partition } from "helpers/d3Helpers.js";

function getURLParams() {
  let match;
  let pl     = /\+/g;
  let search = /([^&=]+)=?([^&]*)/g;
  let decode = s => { return decodeURIComponent(s.replace(pl, " ")); };
  let query  = window.location.search.substring(1);

  let urlParams = {};
  while (match = search.exec(query)) {
    urlParams[decode(match[1])] = decode(match[2]);
  }
  return urlParams;
}

function jsonToQueryString(json) {
  return '?' + 
    Object.keys(json).map(key => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(json[key]);
    }).join('&');
}

class SunburstContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataLoaded: false,
      hierarchy: {},
      root: [],
      activePanelNode: {},
      lastNodeClicked: {},
      searchbarText: "",
      tooltipShown: false,
      tooltipCoordinates: { x: 0, y: 0 },
      searchbarSuggestions: {
        Agencies: [],
        Contractors: []
      },
      searchbarOptionSelected: "Agencies",
      sunburstFilterByText: "",
      staticData: {
        unfilteredSearchbarSuggestions: {
          Agencies: [],
          Contractors: []
        },
        others: [],
        PSCByRecip: {},
        recipDetails: []
      }
    };
  }

  componentWillMount = () => {
    const awardsContractsPromise = axios
      .get("./../../data-lab-data/sunburst/awards_contracts_.json")
      .then(({ data }) => data);
    const colorsPromise = axios
      .get("./../../data-lab-data/sunburst/colors_.json")
      .then(({ data }) => data);
    const agenciesPromise = axios
      .get("./../../data-lab-data/sunburst/agencies_.json")
      .then(({ data }) => data);
    const subagenciesPromise = axios
      .get("./../../data-lab-data/sunburst/subagencies_.json")
      .then(({ data }) => data);
    const subagenciesAbbrvPromise = axios
    .get("./../../data-lab-data/sunburst/subagencies_abbrv_.json")
    .then(({ data }) => data);
    const agenciesAbbrvPromise = axios
    .get("./../../data-lab-data/sunburst/agencies_abbrv_.json")
    .then(({ data }) => data);
    const recipientsPromise = axios
      .get("./../../data-lab-data/sunburst/recipients_.json")
      .then(({ data }) => data);
    const awardsContractsAgenciesPromise = axios
      .get(
        "./../../data-lab-data/sunburst/awards_contracts_agencies_subagencies_.json"
      )
      .then(({ data }) => data);
    const awardsContractsRecipeintsPromise = axios
      .get("./../../data-lab-data/sunburst/awards_contracts_recipients_.json")
      .then(({ data }) => data);

    Promise.all([
      awardsContractsPromise,
      colorsPromise,
      agenciesPromise,
      subagenciesPromise,
      agenciesAbbrvPromise,
      subagenciesAbbrvPromise,
      recipientsPromise,
      awardsContractsAgenciesPromise,
      awardsContractsRecipeintsPromise
    ]).then(values => {
      const [
        awardsContracts,
        colors,
        agencies,
        subagencies,
        agenciesAbbrv,
        subagenciesAbbrv,
        recipients,
        awardsContractsAgencies,
        awardsContractsRecipeints
      ] = values;
      const currState = this.state;

      const hierarchy = formatDataHierarchy({
        key: "Contract spending in Fiscal Year 2017",
        data: awardsContracts
      });
      const root = partition.nodes(hierarchy);
      const activePanelNode = root[0];

      this.setState({
        dataLoaded: true,
        hierarchy,
        root,
        activePanelNode,
        searchbarSuggestions: {
          Agencies: awardsContractsAgencies,
          Contractors: awardsContractsRecipeints
        },
        staticData: {
          ...currState.staticData,
          unfilteredSearchbarSuggestions: {
            Agencies: awardsContractsAgencies,
            Contractors: awardsContractsRecipeints
          },
          awardsContracts,
          colors,
          agencies,
          subagencies,
          agenciesAbbrv,
          subagenciesAbbrv,
          recipients
        }
      });
    });
  };

  componentDidMount = () => {
    const othersPromise = axios
      .get("./../../data-lab-data/sunburst/others_.json")
      .then(({ data }) => data);
    const PSCByRecipPromise = axios
      .get("./../../data-lab-data/sunburst/PSC_by_Recip_.json")
      .then(({ data }) => data);
    const PSCsPromise = axios
      .get("./../../data-lab-data/sunburst/PSCs_.json")
      .then(({ data }) => data);

    Promise.all([othersPromise, PSCByRecipPromise, PSCsPromise]).then(
      values => {
        const [others, PSCByRecip, PSCs] = values;
        const currState = this.state;

        this.setState({
          staticData: {
            ...currState.staticData,
            others,
            PSCByRecip,
            PSCs
          }
        });

        let o = getURLParams();
        if (o != null && o.search) {
          this.handleSearchbarSelect(o.search);
        }
      }
    );
  };

  handleClick = selected => {
    this.setState({ lastNodeClicked: selected });
    this.filterSunburst(selected);
  };

  filterSunburst = selected => {
    const {
      awardsContracts,
      agencies,
      subagencies,
      recipients
    } = this.state.staticData;
    let selectedName;
    const { id, depth } = selected;
    let filteredData = {
      key: `${id}-${depth}`,
      data: null
    };

    switch (depth) {
      case 0: // root
        filteredData.data = [...awardsContracts];
        selectedName = "Contract spending in Fiscal Year 2017";
        break;

      case 1: // agency
        filteredData.data = awardsContracts.filter(d => d.agen === id);
        selectedName = agencies[id];
        break;

      case 2: // subagency
        filteredData.data = awardsContracts.filter(d => d.sub === id);
        selectedName = subagencies[id];
        break;

      case 3: // contractor
        filteredData.data = awardsContracts.filter(d => d.recip === id);
        selectedName = recipients[id];
        break;

      default:
        console.log("something went wrong", { selected });
    }
    
    window.Analytics.event({
        category: 'Contract Explorer - Click Node',
        action: selectedName
    });

    window.history.replaceState(null, null, jsonToQueryString({search: selectedName}));

    const hierarchy = formatDataHierarchy(filteredData);
    const root = partition.nodes(hierarchy);
    const sunburstFilterByText =
      selectedName === "Contract spending in Fiscal Year 2017"
        ? ""
        : selectedName;
    const searchbarText = "";

    this.setState({ hierarchy, root, sunburstFilterByText, searchbarText });
  };

  handleHover = selected => {
    this.setState({ activePanelNode: selected, tooltipShown: true });
  };

  handleMouseMove = (x, y) => {
    this.setState({ tooltipCoordinates: { x, y } });
  };

  handleUnhover = () => {
    this.setState({ tooltipShown: false });
  };

  handleSearchbarSelect = selected => {
    const { awardsContracts } = this.state.staticData;

    this.setState({ searchbarText: selected }, () => {
      const { recipients, agencies, subagencies } = this.state.staticData;

      let filteredData;

      filteredData = awardsContracts.filter(d => {
        return agencies[d.agen] === selected || subagencies[d.sub] === selected;
      });

      if (!filteredData.length) {
        filteredData = awardsContracts.filter(d => {
          return selected === recipients[d.recip];
        });
      }

      if (!filteredData.length) return;
      const hierarchy = formatDataHierarchy({
        key: selected,
        data: filteredData
      });
      const root = partition.nodes(hierarchy);

      /** can be optimized */
      const activePanelNode = root[0];
      // const activePanelNode = root.find(e => e.name === selected);
      const sunburstFilterByText = selected;

      let node = activePanelNode.children[0];
      
      window.Analytics.event({
        category: 'Contract Explorer - Search Node',
        action: sunburstFilterByText
      });

      window.history.replaceState(null, null, jsonToQueryString({search: selected}));

      this.setState({ hierarchy, root, activePanelNode, sunburstFilterByText });
    });
  };

  handleSearchbarTextChange = selected => {
    this.setState({ searchbarText: selected });
  };

  setSearchbarSuggestions = suggestions => {
    let searchbarSuggestions = { ...this.state.searchbarSuggestions };
    searchbarSuggestions[this.state.searchbarOptionSelected] = suggestions;
    this.setState({ searchbarSuggestions });
  };

  clearSunburstFilters = () => {
    this.filterSunburst(this.state.root[0]);
  };

  handleSearchbarOptionChange = e => {
    this.setState({ searchbarOptionSelected: e.target.value });
  };

  render() {
    if (!this.state.dataLoaded) return <div />;

    const {
      root,
      activePanelNode,
      unfilteredSearchbarSuggestions,
      searchbarText,
      sunburstFilterByText,
      lastNodeClicked,
      staticData,
      searchbarOptionSelected,
      tooltipShown,
      tooltipCoordinates
    } = this.state;

    const {
      handleClick,
      handleHover,
      handleUnhover,
      handleSearchbarSelect,
      setSearchbarSuggestions,
      handleSearchbarTextChange,
      clearSunburstFilters,
      handleSearchbarOptionChange,
      handleMouseMove
    } = this;

    let searchbarSuggestions = this.state.searchbarSuggestions.Agencies
        .concat(this.state.searchbarSuggestions.Contractors);


    return (
      <div>

        <div className="sunburst-panel-grid">
          <div className="sunburst-panel-col">
            <SunburstSearchbar
            unfilteredSearchbarSuggestions={unfilteredSearchbarSuggestions}
            searchbarSuggestions={searchbarSuggestions}
            searchbarText={searchbarText}
            handleSearchbarSelect={handleSearchbarSelect}
            handleSearchbarTextChange={handleSearchbarTextChange}
            setSearchbarSuggestions={setSearchbarSuggestions}
            staticData={staticData}
            clearSunburstFilters={clearSunburstFilters}
            searchbarOptionSelected={searchbarOptionSelected}
            handleSearchbarOptionChange={handleSearchbarOptionChange}
          />
            <SunburstPanel
              activePanelNode={activePanelNode}
              sunburstFilterByText={sunburstFilterByText}
              staticData={staticData}
            />
          </div>
          <div className="sunburst-panel-col">
            <BreadCrumbs
            root={root}
            activePanelNode={activePanelNode}
            lastNodeClicked = {lastNodeClicked}
            tooltipShown={tooltipShown}
            handleClick={handleClick}
            handleHover={handleHover}
            handleUnhover={handleUnhover}
            staticData={staticData}
            colors={staticData.colors}
            />
            <Sunburst
              root={root}
              handleClick={handleClick}
              handleHover={handleHover}
              colors={staticData.colors}
              tooltipShown={tooltipShown}
              handleUnhover={handleUnhover}
              handleMouseMove={handleMouseMove}
            />
            <span className="prime-badge"> This visualization contains data on primary awards to recipients. Sub-awards are not included.</span>
          </div>
          {this.state.tooltipShown ? (
            <Tooltip
              depth={activePanelNode.depth}
              coordinates={tooltipCoordinates}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}

export default SunburstContainer;
