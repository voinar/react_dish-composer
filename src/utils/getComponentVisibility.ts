const getComponentVisibility = (isVisible: undefined | boolean) => {
  return isVisible
    ? {}
    : {
        opacity: 0,
        // transform: 'scaleY(0)',
        maxHeight: '0px',
        margin: 0,
        padding: 0,
        width: 0,
      };
};

export default getComponentVisibility;
