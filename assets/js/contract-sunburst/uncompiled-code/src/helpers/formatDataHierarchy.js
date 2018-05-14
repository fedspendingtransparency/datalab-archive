import memoize from "helpers/memoize.js";

function formatDataHierarchy({ data, key }) {
  const hierarchy = {
    name: "Contract spending in Fiscal Year 2017",
    id: 0,
    children: []
  };
  const data2 = data.map(c => {
    c.path = [c.agen, c.sub, c.recip];
    return c;
  });

  data2.forEach(c => {
    let parentContainer = hierarchy.children;
    c.path.forEach((levelId, i) => {
      if (i === 2) {
        // outermost ring
        parentContainer.push({ id: levelId, size: c.val });
      }

      /*************** opportunity to imporove performance and make parentTemp cached ***************/
      let parentTemp = parentContainer.find(e => e.id === levelId);

      if (!parentTemp) {
        // branch hasn't been created yet
        const newObj = { id: levelId, children: [] };
        parentContainer.push(newObj);
        parentContainer = newObj.children;
      } else {
        // branch has been created
        parentContainer = parentTemp.children;
      }
    });
  });

  return hierarchy;
}

const memoizedFormatDataHierarchy = memoize(formatDataHierarchy);

export default memoizedFormatDataHierarchy;