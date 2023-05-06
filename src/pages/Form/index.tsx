import DishAddForm from 'components/DishAddForm';
import { FormStyled } from './styles';
import axios from 'axios';


const submit = (values: any) => {
  // e.preventDefault();

  const requestObject = {
    name: values.name,
    preparation_time: values.preparation_time,
    type: values.type,
    no_of_slices: values?.no_of_slices,
    diameter: values?.diameter,
    spiciness_scale: values?.spiciness_scale,
    slices_of_bread: values?.slices_of_bread,
  };
  // {"name": "HexOcean pizza", "preparation_time": "01:30:22", "type": "pizza", "no_of_slices": 4, "diameter": 33.4}

  console.log('Submit', requestObject);

  // axios
  //   .post(
  //     'https://umzzcc503l.execute-api.us-west-2.amazonaws.com/dishes/',
  //     requestObject
  //   )
  //   .then(function (response) {
  //     console.log(response.data);
  //     console.log(response.status);
  //     console.log(response.statusText);
  //     console.log(response.headers);
  //     console.log(response.config);
  //   });
};

const Form = () => {
  return (
    <FormStyled>
      <DishAddForm onSubmit={submit} />
    </FormStyled>
  );
};

export default Form;
