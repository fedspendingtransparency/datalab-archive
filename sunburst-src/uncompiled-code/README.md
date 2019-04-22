# Federal Spending Transparency Sunburst

## To run

```shell
git clone https://github.boozallencsn.com/michals-lucas/fedspendingtransparency-sandbox.git
cd fedspendingtransparency-sandbox/sunburst/
npm intall
npm run
```

## Component Hierarchy

* App
  * SunburstContainer
    * SunburstPanel
      * SunburstPanelTitle
      * SunburstPanelDetail
        * PSCCard (many)
        * SubagencyCard (many)
    * Sunburst

## Page Layout

* #burst_container
  * #legend_color_key
  * #sunburst-panel
    * #tab
    * switch
      * #tab_2
      * #psc_panel
  * #sunburst

## D3 helper functions

* formatNumber
* x
* y
* partition
* arc

## Custom functions

* createTableTitle

## Important Variables

```javascript
const hierarchy = {
  name: "FY17 Q3 ...",
  children: [
    {
      name: "Department of Defense",
      children: [
        {
          name: "Department of the Navy",
          children: [
            {
              name: "Lockheed Martin",
              size: 6678
            },
            {},
            {}
          ]
        },
        {},
        {}
      ]
    },
    {},
    {}
  ]
};

const root = [
  {
    name: "FY Q3 ...",
    children: [{}, {}],
    depth: 0,
    value: 5555,
    x: 0,
    y: 0,
    dx: 1,
    dy: 0.25
  },
  {},
  {}
];

const newData = [
  {
    Agency: "",
    Subagency: "",
    Recipient: "",
    Obligation: "",
    path: []
  },
  {},
  {}
];
```
