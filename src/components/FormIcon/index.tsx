import { useAppSelector } from 'hooks/hooks';
import {
  FormIconStyled,
} from './styles';
import IconAdd from 'img/icons/icon-add.svg';
import IconPizza from 'img/icons/icon-pizza.svg';
import IconSandwich from 'img/icons/icon-sandwich.svg';
import IconSoup from 'img/icons/icon-soup.svg';

const FormIcon = () => {
  const formContent = useAppSelector((state) => state.form.form);
  const formType = formContent?.values?.type

  switch (formType) {
    case undefined:
      return <FormIconStyled src={IconAdd} alt="Add dish" />;
    case 'pizza':
      return <FormIconStyled src={IconPizza} alt="Add dish" />;
    case 'soup':
      return <FormIconStyled src={IconSoup} alt="Add dish" />;
    case 'sandwich':
      return <FormIconStyled src={IconSandwich} alt="Add dish" />;
    default:
      return <FormIconStyled src={IconAdd} alt="Add dish" />;
  }
};

export default FormIcon;