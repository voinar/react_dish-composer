import { Field, reduxForm } from 'redux-form';
import {
  DishAddFormStyled,
  FormElementStyled,
  Button,
} from 'components/DishAddForm/styles';

const FormElement = (props) => {
  switch (props.name) {
    case 'name':
      return (
        <FormElementStyled>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
          />
        </FormElementStyled>
      );
    case 'preparation_time':
      return (
        <FormElementStyled>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
            step="1"
          />
        </FormElementStyled>
      );
    case 'type':
      return (
        <FormElementStyled>
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
        </FormElementStyled>
      );
    case 'no_of_slices':
    case 'slices_of_bread':
      return (
        <FormElementStyled
          style={
            props.isVisible
              ? { height: 'auto', opacity: '1' }
              : { height: '0px', opacity: '0' }
          }
        >
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
        </FormElementStyled>
      );
    case 'diameter':
      return (
        <FormElementStyled
          style={
            props.isVisible
              ? { height: 'auto', opacity: '1' }
              : { height: '0px', opacity: '0' }
          }
        >
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
        </FormElementStyled>
      );
    case 'spiciness':
      return (
        <FormElementStyled
          style={
            props.isVisible
              ? { height: 'auto', opacity: '1' }
              : { height: '0px', opacity: '0' }
          }
        >
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
        </FormElementStyled>
      );
    default:
      return (
        <FormElementStyled>
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
        </FormElementStyled>
      );
  }
};

export default FormElement;
