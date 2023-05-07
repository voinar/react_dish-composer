// Utility function used in component conditional rendering. Receives boolean as argument. If false then alters component CSS so that the item is hidden. If true then lets the component display it's original CSS display values and be seen.
const getComponentVisibility = (isVisible: undefined | boolean) => {
  return isVisible
    ? {}
    : {
        opacity: 0,
        maxHeight: '0px',
        margin: 0,
        padding: 0,
        width: 0,
      };
};

export default getComponentVisibility;
