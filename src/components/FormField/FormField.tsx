import sprite from '../../assets/sprite.svg';
import {
  CheckValueIcon,
  ErrorText,
  IconEye,
  Input,
  Label,
  NotificationField,
} from './FormField.styled';

type FormFieldProps = {
  label: string;
  type: string;
  placeholder: string;
  register: any;
  name: string;
  error?: string;
  touched?: boolean;
  showPassword?: boolean;
  toggleShowPassword?: () => void;
};

export default function FormField({
  label,
  type,
  placeholder,
  register,
  name,
  error,

  touched,
  showPassword,
  toggleShowPassword,
}: FormFieldProps) {
  return (
    <Label error={!!error} valid={touched && !error}>
      <Input
        {...register(name)}
        placeholder={placeholder}
        type={showPassword && name === 'password' ? 'text' : type}
      />
      {name === 'password' && (
        <IconEye width="20px" height="20px" onClick={toggleShowPassword}>
          <use
            href={
              showPassword ? `${sprite}#icon-eye` : `${sprite}#icon-eye-close`
            }
          ></use>
        </IconEye>
      )}
      {error && (
        <NotificationField>
          <CheckValueIcon width="16px" height="16px">
            <use
              href={`${sprite}#icon-error-warning`}
              width="16px"
              height="16px"
            ></use>
          </CheckValueIcon>
          <ErrorText>{error}</ErrorText>
        </NotificationField>
      )}
      {touched && !error && (
        <NotificationField>
          <CheckValueIcon width="16px" height="16px">
            <use
              href={`${sprite}#icon-success`}
              width="16px"
              height="16px"
            ></use>
          </CheckValueIcon>
          <ErrorText>Success {label.toLowerCase()}</ErrorText>
        </NotificationField>
      )}
    </Label>
  );
}
