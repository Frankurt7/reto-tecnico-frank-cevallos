import { useFormContext } from "react-hook-form";
import './input-value.scss';

interface IInputValueProps extends React.HTMLAttributes<HTMLInputElement> {
  label?: string;
  name: string;
  className?: string;
  type?: 'text' | 'password' | 'email' | 'number' | 'tel';
}

export const InputValue = ({ label, className, name, onChange, type = 'text', ...rest }: IInputValueProps) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className={`input-container ${className && className}`} >
      <input
        required
        className={className}
        type={type}
        {...register(name, onChange && { onChange })}
        name={name}
        aria-label={label}
        {...rest}
      />

      {label &&
        <label className="input-container__label">
          {label}
        </label>
      }

      <div className="input-container__error-container">
        {errors?.[name] && <span >{errors[name]?.message.toString()}</span>}
      </div >
    </div>
  )
};
