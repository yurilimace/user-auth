import Form from 'react-bootstrap/Form';
import {
  FieldError,
  FieldErrors,
  FieldValues,
  FormState,
  UseFormRegister,
  UseFormRegisterReturn,
  UseFormStateReturn,
} from 'react-hook-form';

type InputProps<T extends string> = {
  type: string;
  placeholder?: string;
  register?: UseFormRegisterReturn<T>;
  validationErrorMessage?: string;
  label: string;
};

export const Input = <T extends string>({
  type,
  placeholder,
  register,
  validationErrorMessage,
  label,
}: InputProps<T>) => {
  return (
    <Form.Group className="mb-3" controlId="customValidation">
      <Form.Label> {label} </Form.Label>
      <Form.Control
        type={type}
        placeholder={placeholder}
        {...register}
        isInvalid={!!validationErrorMessage}
      />

      <Form.Control.Feedback type="invalid">
        {validationErrorMessage}
      </Form.Control.Feedback>
    </Form.Group>
  );
};
