const getComponentVisibility = (isVisible: undefined | boolean) => {
  const visibility = isVisible!;

  return visibility
    ? {
        opacity: 1,
        transform: 'scaleY(1)',
      }
    : {
        opacity: 0,
        transform: 'scaleY(0)',
        maxHeight: '0px',
        margin: 0,
        width: 0
      };
};

export default getComponentVisibility;
