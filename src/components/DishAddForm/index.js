import { Field, reduxForm } from 'redux-form';
import { DishAddFormStyled, FormSection, Button } from './styles';
import { useAppSelector } from 'hooks/hooks';

const FormElement = (props) => {
  switch (props.name) {
    case 'name':
      return (
        <FormSection>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
          />
        </FormSection>
      );
    case 'preparation_time':
      return (
        <FormSection>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
          />
        </FormSection>
      );
    case 'type':
      return (
        <FormSection>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            options={props.options}
          >
            {props.options.map((option) => (
              <option key={option} value={option}>
                {option.charAt(0).toUpperCase() + option.slice(1)}
              </option>
            ))}
          </Field>
        </FormSection>
      );
    case 'no_of_slices' || 'slices_of_bread':
      return (
        <FormSection>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
            step={props.step}
            min={props.min}
            max={props.max}
          />
        </FormSection>
      );
    case 'diameter':
      return (
        <FormSection>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
            step={props.step}
            min={props.min}
            max={props.max}
          />
        </FormSection>
      );
    case 'spiciness':
      return (
        <FormSection>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
            options={props.options}
          >
            {props.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Field>
        </FormSection>
      );
    default:
      return (
        <FormSection>
          <label htmlFor={props.htmlFor || 'default'}>
            {props.label || 'default'}
          </label>
          <Field
            name={props.name || 'default'}
            component={props.component || 'input'}
            type={props.type || 'text'}
            step={props.step || 'default'}
            min={props.min || 0}
            max={props.max || 99}
            placeholder={props.placeholder || 'default'}
            options={props.options || []}
          />
        </FormSection>
      );
  }
};

let DishAddForm = (props) => {
  const { handleSubmit } = props;
  const formContent = useAppSelector((state) => state.form);
  const displayFormContent = JSON.stringify(formContent);

  return (
    <DishAddFormStyled onSubmit={handleSubmit}>
      {/* {displayFormContent} */}
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
        type="text"
        placeholder="00:10:00"
      />
      <FormElement
        name="type"
        label="Select type"
        htmlFor="type"
        component="select"
        options={['pizza', 'sandwich', 'soup']}
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
      />
      <FormElement
        name="spiciness"
        label="Spiciness"
        component="select"
        type="select"
        options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
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
  );
};

DishAddForm = reduxForm({
  // a unique name for the form
  form: 'form',
})(DishAddForm);

export default DishAddForm;
