import { useAppSelector } from 'hooks/hooks';
import { FormIconStyled } from './styles';
import IconAdd from 'img/icons/icon-add.svg';
import IconPizza from 'img/icons/icon-pizza.svg';
import IconSandwich from 'img/icons/icon-sandwich.svg';
import IconSoup from 'img/icons/icon-soup.svg';
import getComponentVisibility from 'utils/getComponentVisibility';

const FormIcon: () => JSX.Element = () => {
  const formContent = useAppSelector((state) => state.form.form);
  const formType = formContent?.values?.type;

  const icons = [
    { src: IconAdd, alt: 'Add dish', type: undefined },
    { src: IconPizza, alt: 'Add pizza', type: 'pizza' },
    { src: IconSoup, alt: 'Add soup', type: 'soup' },
    { src: IconSandwich, alt: 'Add sandwich', type: 'sandwich' },
  ];

  return (
    <>
      {icons.map((icon) => (
        <FormIconStyled
          key={icon.src}
          src={icon.src}
          alt={icon.alt}
          style={getComponentVisibility(
            (icon.type === undefined && formType === 'none') ||
              formType === icon.type
          )}
        />
      ))}
    </>
  );
};

export default FormIcon;
