import { Field, reduxForm } from 'redux-form';
import {
  DishAddFormStyled,
  FormHeader,
  FormHeaderText,
  FormSection,
  Button,
  FormIcon,
} from './styles';
import { useAppSelector } from 'hooks/hooks';
import FormElement from 'components/FormElement';
import IconAdd from 'img/icons/icon-add.svg';
import IconPizza from 'img/icons/icon-pizza.svg';
import IconSandwich from 'img/icons/icon-sandwich.svg';
import IconSoup from 'img/icons/icon-soup.svg';

const FormIconContainer = () => {
  const formContent = useAppSelector((state) => state.form.form);
  const formType = formContent?.values?.type

  switch (formType) {
    case undefined:
      return <FormIcon src={IconAdd} alt="Add dish" />;
    case 'pizza':
      return <FormIcon src={IconPizza} alt="Add dish" />;
    case 'soup':
      return <FormIcon src={IconSoup} alt="Add dish" />;
    case 'sandwich':
      return <FormIcon src={IconSandwich} alt="Add dish" />;
    default:
      return <FormIcon src={IconAdd} alt="Add dish" />;
  }
};

let DishAddForm = (props) => {
  const { handleSubmit } = props;
  const formContent = useAppSelector((state) => state.form.form);
  const formType = formContent?.values?.type

  return (
    <>
      <DishAddFormStyled onSubmit={handleSubmit}>
        <FormHeader>
          <FormIconContainer />
          <FormHeaderText>Add dish</FormHeaderText>
        </FormHeader>
        <FormElement
          name="name"
          label="Dish name"
          htmlFor="name"
          component="input"
          type="text"
          placeholder="name"
        />
        <FormElement
          name="preparation_time"
          label="Preparation time"
          htmlFor="preparation_time"
          component="input"
          type="time"
          placeholder="00:10:00"
        />
        <FormElement
          name="type"
          label="Select type"
          htmlFor="type"
          component="select"
          options={['none', 'pizza', 'sandwich', 'soup']}
        />
        <FormElement
          name="no_of_slices"
          label="No. of slices"
          component="input"
          type="number"
          step="1"
          min="1"
          max="99"
          placeholder="How many slices?"
          isVisible={formType === 'pizza'}
        />
        <FormElement
          name="diameter"
          label="Diameter"
          component="input"
          type="number"
          step="0.1"
          min="10"
          max="60"
          placeholder="enter diameter"
          isVisible={formType === 'pizza'}
        />
        <FormElement
          name="spiciness_scale"
          label="Spiciness"
          component="select"
          type="select"
          options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          isVisible={formType === 'soup'}
        />
        <FormElement
          name="slices_of_bread"
          label="Slices of bread"
          component="input"
          type="number"
          step="1"
          min="1"
          max="99"
          placeholder="How many slices?"
          isVisible={formType === 'sandwich'}
        />
        {/* <FormSection>
        <label htmlFor="slices_of_bread">Slices of bread</label>
        <Field
          name="slices"
          component="input"
          type="number"
          step="1"
          min="0"
          max="99"
          placeholder="enter no. of slices"
        />
      </FormSection> */}

        {/* <FormSection>
        <label htmlFor="name">Dish name</label>
        <Field name="name" component="input" type="text" placeholder="enter" />
      </FormSection> */}
        {/* <FormSection>
        <label htmlFor="preparation_time">Preparation time</label>
        <Field
          name="preparation_time"
          component="input"
          type="number"
          placeholder="00:10:00"
        />
      </FormSection> */}
        {/* <FormSection>
        <label htmlFor="type">Type</label>
        <Field name="type" component="select" placeholder="enter">
          <option value="pizza">Pizza</option>
          <option value="soup">Soup</option>
          <option value="sandwich">Sandwich</option>
        </Field>
      </FormSection> */}
        {/* <FormSection>
        <label htmlFor="no_of_slices">Number of slices</label>
        <Field
          name="no_of_slices"
          component="input"
          type="number"
          placeholder="enter number"
        />
      </FormSection> */}
        {/* <FormSection>
        <label htmlFor="diameter">Diameter</label>
        <Field
          name="diameter"
          component="input"
          type="number"
          step="0.1"
          min="10"
          max="30"
          placeholder="enter diameter"
        />
      </FormSection> */}
        {/* <FormSection>
        <label htmlFor="spiciness_scale">Spiciness</label>
        <Field
          name="spiciness"
          component="input"
          type="number"
          step="1"
          min="1"
          max="10"
          placeholder="enter spiciness"
        />
      </FormSection> */}
        {/* <FormSection>
        <label htmlFor="slices_of_bread">Slices of bread</label>
        <Field
          name="slices"
          component="input"
          type="number"
          step="1"
          min="0"
          max="99"
          placeholder="enter no. of slices"
        />
      </FormSection> */}

        {/* <FormSectionWithProps props={props} /> */}

        <Button type="submit">Submit</Button>
      </DishAddFormStyled>
    </>
  );
};

DishAddForm = reduxForm({
  // a unique name for the form
  form: 'form',
})(DishAddForm);

export default DishAddForm;
