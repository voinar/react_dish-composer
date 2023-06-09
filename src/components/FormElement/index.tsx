import { Field } from 'redux-form';
import { FormElementStyled } from './styles';
import getComponentVisibility from 'utils/getComponentVisibility';
import type { IFormElement } from 'types/iFormElement';

const FormElement = (props: IFormElement) => {
  
  switch (props.name) {
    // Display form elements conditionally. Each case displays form element if evaluated to true.
    case 'name':
      return (
        <FormElementStyled>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
            required
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
            value="05:00"
            required
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
            required
          >
            {props?.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Field>
        </FormElementStyled>
      );

    case 'no_of_slices':
    case 'slices_of_bread':
      return (
        <FormElementStyled style={getComponentVisibility(props.isVisible)}>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
            step={props.step}
            min={props.min}
            max={props.max}
            required={props.isVisible}
          />
        </FormElementStyled>
      );

    case 'diameter':
      return (
        <FormElementStyled style={getComponentVisibility(props.isVisible)}>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
            step={props.step}
            min={props.min}
            max={props.max}
            required={props.isVisible}
          />
        </FormElementStyled>
      );

    case 'spiciness_scale':
      return (
        <FormElementStyled style={getComponentVisibility(props.isVisible)}>
          <label htmlFor={props.htmlFor}>{props.label}</label>
          <Field
            name={props.name}
            component={props.component}
            type={props.type}
            placeholder={props.placeholder}
            options={props.options}
            required={props.isVisible}
          >
            {props?.options?.map((option) => (
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
