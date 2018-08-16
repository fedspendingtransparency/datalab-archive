import React, { Component } from "react";

class SunburstDataToggle extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        dataTypes: [],
        currentDataType: ''
      }
    }
    render() {
      const yourPick = this.props.currentDataType
      const options = this.props.dataTypes.map((loan, key) => {
        const isCurrent = this.props.currentDataType === loan
        return (
          
          <div 
            key={key} 
            className="radioPad"
          >
            <div>
              <label 
                className={
                  isCurrent ? 
                    'radioPad__wrapper radioPad__wrapper--selected' :
                    'radioPad__wrapper'
                  }
              >
                <input
                  className="radioPad__radio"
                  type="radio" 
                  name="coffeeTypes" 
                  id={loan} 
                  value={loan}
                  checked={isCurrent}
                  onChange={this.props.handleDataTypeChange.bind(this)}
                />
                {loan}
              </label>
            </div>
          </div>
        )
      })
      return (
        <div className="container text-center">
          <div className="row">
            {options}
          </div>
        </div>
      )
    }
    handleRadio(e) {
      this.setState({ yourPick: e.target.value })
    }
  }

    export default SunburstDataToggle;
