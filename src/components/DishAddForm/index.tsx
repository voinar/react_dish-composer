import { reduxForm } from 'redux-form';
import { useAppSelector } from 'hooks/reduxHooks';
import {
  DishAddFormStyled,
  FormHeader,
  FormHeaderText,
  Button,
} from './styles';
import FormElement from 'components/FormElement';
import FormIcon from 'components/FormIcon';

let DishAddForm: any = (props: { handleSubmit: () => void }) => {
  const { handleSubmit } = props;
  const formContent = useAppSelector((state) => state.form.form);
  const formType = formContent?.values?.type;

  return (
    <DishAddFormStyled onSubmit={handleSubmit}>
      <FormHeader>
        <FormIcon />
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
        options={['', 'pizza', 'sandwich', 'soup']}
      />
      <FormElement
        name="no_of_slices"
        label="No. of slices"
        htmlFor="no_of_slices"
        component="input"
        type="number"
        step="1"
        min="1"
        max="20"
        placeholder="How many slices?"
        isVisible={formType === 'pizza'}
      />
      <FormElement
        name="diameter"
        label="Diameter"
        htmlFor="diameter"
        component="input"
        type="number"
        step="0.1"
        min="10"
        max="60"
        placeholder="Enter number"
        isVisible={formType === 'pizza'}
      />
      <FormElement
        name="spiciness_scale"
        label="Spiciness"
        htmlFor="spiciness_scale"
        component="select"
        type="select"
        options={['', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']}
        isVisible={formType === 'soup'}
      />
      <FormElement
        name="slices_of_bread"
        label="Slices of bread"
        htmlFor="slices_of_bread"
        component="input"
        type="number"
        step="1"
        min="1"
        max="6"
        placeholder="How many slices?"
        isVisible={formType === 'sandwich'}
      />
      <Button type="submit">Submit</Button>
    </DishAddFormStyled>
  );
};

DishAddForm = reduxForm({
  form: 'form',
})(DishAddForm);

export default DishAddForm;
