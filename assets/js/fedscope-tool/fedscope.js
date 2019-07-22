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

	let occupationDropdownMasterList;
	let occupationDropdownOptions;
	
	loadStates(states => {
		loadAgencies(agencies => {
			loadOccupationCategories(occupationCategories => {
				loadEmployeeCountData([mapModule.draw, barchartModule.draw], {
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
				$("#mapAgencyDropdown").append(...agencyDropdownOptions);
				$("#barchartAgencyDropdown").append(...agencyDropdownOptions);

				occupationDropdownMasterList = Object.values(occupationCategories).sort(sorter);
				filterOccupationsList();
			});
		});
	});

	let changes = 0;
	$("#mapAgencyDropdown").change(() => {
		changes++;
		let local_change = changes;

		setTimeout(function () { // wait 1 sec to see if they're done making changes
			if (local_change === changes) {
				filterOccupationsList($("#mapAgencyDropdown").val());
			}
		}, 1000);
	})

	function filterOccupationsList(selectedAgencies) {
		if (selectedAgencies) {
			const { employeeCounts } = mem;
			const agencyOccupationIds = [];
			for (let e of employeeCounts) {
				if (selectedAgencies.includes(e.agencyId)) {
					agencyOccupationIds.push(e.occupationCategoryId);
				}
			};
			occupationDropdownOptions = occupationDropdownMasterList
				.filter(o => agencyOccupationIds.includes(o.id))
				.map(o => `<option value="${o.id}">${o.name}</option>`);
		} else {
			occupationDropdownOptions = occupationDropdownMasterList
				.map(o => `<option value="${o.id}">${o.name}</option>`);
		}

		$("#mapOccupationDropdown")
			.find("option")
			.remove()
			.end()
			.append('<option value="any">(Any Type)</option>')
			.append(...occupationDropdownOptions)
		;
	}

	$("#mapFilter").click(() => {
		const filterAgencies = $("#mapAgencyDropdown").val();
		const filterOccupations = $("#mapOccupationDropdown").val();
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
