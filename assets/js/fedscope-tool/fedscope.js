---
---

$(() => {
	const {
		dataModule, barchartModule, mapModule, treemapModule
	} = window;

	const {
		loadEmployeeCountData,
		loadEmployeeSalaryData,
		loadStates,
		loadAgencies,
		loadOccupationCategories,
		mem
	} = dataModule;

	const mapAgencyDropdown = $("#mapAgencyDropdown");
	const mapOccupationDropdown = $("#mapOccupationDropdown");
	let occupationDropdownMasterList;
	let agencyOccupationIds = [];
	let occupationDropdownOptions;

	loadStates(states => {
		loadAgencies(agencies => {
			loadOccupationCategories(occupationCategories => {
				loadEmployeeCountData([mapModule.draw, barchartModule.draw, initAgencyOccupationIds], {
					states,
					agencies,
					occupationCategories
				});

				loadEmployeeSalaryData([treemapModule.draw], {
					agencies
				});

				const sorter = (a, b) => {
					if (a.name < b.name) return -1;
					if (a.name > b.name) return 1;
					return 0;
				};

				const stateDropdownOptions = Object.values(states)
					.sort(sorter)
					.map(s => `<option value="${s.abbreviation}">${s.name}</option>`)
					;
				$("#barchartStateDropdown").append(...stateDropdownOptions);

				const agencyDropdownOptions = Object.values(agencies)
					.sort(sorter)
					.map(a => `<option value="${a.id}">${a.name}</option>`)
					;
				mapAgencyDropdown.append(...agencyDropdownOptions);
				$("#barchartAgencyDropdown").append(...agencyDropdownOptions);

				occupationDropdownMasterList = Object.values(occupationCategories).sort(sorter);
				filterOccupationsList();
			});
		});
	});

	// create array of agency IDs, each an array of occupation IDs within that agency
	function initAgencyOccupationIds() {
		for (let e of mem.employeeCounts) {
			if (!agencyOccupationIds[e.agencyId]) {
				agencyOccupationIds[e.agencyId] = [];
			}
			if (!agencyOccupationIds[e.agencyId].includes(e.occupationCategoryId)) {
				agencyOccupationIds[e.agencyId].push(e.occupationCategoryId);
			}
		}
	}

	let changes = 0;
	mapAgencyDropdown.change(() => {
		changes++;
		let local_change = changes;

		setTimeout(() => { // wait 1 sec to see if user is done making changes
			if (local_change === changes) {
				filterOccupationsList(mapAgencyDropdown.val());
			}
		}, 1000);
	});

	function filterOccupationsList(selectedAgencies) {
		if (selectedAgencies) {
			let currentOccupations = agencyOccupationIds[selectedAgencies[0]].slice();
			if (selectedAgencies.length > 1) { // add to array of unique occupation IDs for the other selected agencies (besides above)
				selectedAgencies.slice(1).forEach(agencyId => {
					agencyOccupationIds[agencyId].forEach(occupationId => {
						if (!currentOccupations.includes(occupationId)) {
							currentOccupations.push(occupationId);
						}
					})
				})
			}
			occupationDropdownOptions = occupationDropdownMasterList.filter(o => currentOccupations.includes(o.id));
		} else {
			occupationDropdownOptions = occupationDropdownMasterList;
		}

		mapOccupationDropdown
			.find("option")
			.remove()
			.end()
			.append('<option value="any">(Any Type)</option>')
			.append(...occupationDropdownOptions.map(o => `<option value="${o.id}">${o.name}</option>`))
			;
	}

	$("#mapFilter").click(() => {
		const filterAgencies = mapAgencyDropdown.val();
		const filterOccupations = mapOccupationDropdown.val();
		const { employeeCounts, states, occupationCategories } = mem;
		let newData = [...employeeCounts];

		const filterAgenciesName = $("#mapAgencyDropdown option:selected").text();
		const filterOccupationsName = $("#mapOccupationDropdown option:selected").text();

		window.Analytics.event({
			category: 'Federal Employees - Panel 2 - Filter',
			action: filterAgenciesName + " - " + filterOccupationsName
		});

		if (filterAgencies) {
			newData = newData.filter(e =>
				filterAgencies.some(a => e.agencyId === +a)
			);
		}

		if (filterOccupations.length && filterOccupations[0] !== 'any') {
			newData = newData.filter(e =>
				filterOccupations.some(o => e.occupationCategoryId === +o)
			);
		}

		mapModule.draw(newData, {
			states,
			occupationCategories
		});
	});

	$("#mapMask").find("#button1").click(e => {
		e.preventDefault();

		$("#mapAgencyDropdown > option").attr("selected", false);
		$("#mapOccupationDropdown > option").attr("selected", false);

		const { employeeCounts, states, occupationCategories } = mem;

		mapModule.draw([...employeeCounts], {
			states,
			occupationCategories
		});
	});

	$("#barchartFilter").click(() => {
		const filterStates = $("#barchartStateDropdown").val();
		const filterAgencies = $("#barchartAgencyDropdown").val();
		const filterStatesName = $("#barchartStateDropdown option:selected").text();
		const filterAgenciesName = $("#barchartAgencyDropdown option:selected").text();

		window.Analytics.event({
			category: 'Federal Employees - Panel 3 - Filter',
			action: filterAgenciesName + " - " + filterStatesName
		});

		const { employeeCounts, agencies, occupationCategories } = mem;
		let newData = employeeCounts;

		if (filterStates) {
			newData = newData.filter(e =>
				filterStates.some(s => e.stateAbbreviation === s)
			);
		}

		if (filterAgencies) {
			newData = newData.filter(e =>
				filterAgencies.some(a => e.agencyId === +a)
			);
		}

		barchartModule.draw(newData, {
			agencies,
			occupationCategories
		});
	});

	$("#barchartMask").find("#button1").click(e => {
		e.preventDefault();

		$("#barchartAgencyDropdown > option").attr("selected", false);
		$("#barchartStateDropdown > option").attr("selected", false);

		const { employeeCounts, states, occupationCategories } = mem;

		barchartModule.draw([...employeeCounts], {
			states,
			occupationCategories
		});
	});
});
