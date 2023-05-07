export interface IFormElement {
  name: string;
  htmlFor?: string;
  label?: string;
  component?: string;
  type?: string;
  placeholder?: string;
  options?: number[] | string[] | [];
  isVisible?: boolean;
  step?: number | string;
  min?: number | string;
  max?: number | string;
}
