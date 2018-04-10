# Sunburst data manipulation

## index.js & index.html
These files are used to load csv files into the browser and parse using d3. There are some tools to do this for free online but some of the files were too big for these services.

1. Install http server
    ```bash
    npm install http-server -g
    ```
2. Serve the html file
    ```bash
    http-server sunburst
    ```
3. Inspect the console
4. Right click one logs, "Store as local variable" (saves name as temp1 by default)
5. Copy variable to clipboard in browser console
    ```bash
    copy(temp1)
    ```
6. Paste from clipboard into json file (into data/json)

## dataManipulation.js
This is the main function that is used to transform the data

1. Use index.js & index.html (see instructions above)
2. Change around logic as necessary in dataManipulation.js
3. Install any necessary dependencies and run data manipulation script
    ```bash
    npm install
    node dataManipulation.js
    ```
