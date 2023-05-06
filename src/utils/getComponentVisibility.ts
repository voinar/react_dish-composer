const getComponentVisibility = (isVisible: any) => {
  return isVisible
    ? {
        opacity: 1,
        transform: 'scaleY(1)',
      }
    : {
        opacity: 0,
        transform: 'scaleY(0)',
        maxHeight: '0px',
        margin: 0,
      };
};

export default getComponentVisibility;
