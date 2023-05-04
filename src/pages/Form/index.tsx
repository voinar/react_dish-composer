import DishAddForm from 'components/DishAddForm';
let submit = (values: any) => {
  // e.preventDefault();
  console.log('Submit', values);
};
const Form = () => {
  return (
    <div>
      <DishAddForm onSubmit={submit} />
    </div>
  );
};

export default Form;
