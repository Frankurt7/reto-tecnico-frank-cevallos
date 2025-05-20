import { useFormContext } from "react-hook-form";
import './check-box.scss';

interface ICheckboxProps extends React.HTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

export const Checkbox = ({ label, name, onChange, ...rest }: ICheckboxProps) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className={`checkbox-container`} >
      <div className={`checkbox-container__form`} >
        <input
          id={name}
          type="checkbox"
          {...register(name, onChange && { onChange })}
          name={name}
          aria-label={label}
          {...rest}
        />

        <div className="checkbox-container__label">
          {label}
        </div>
      </div>

      <div className="checkbox-container__error-container">
        {errors?.[name] && <span >{errors[name]?.message.toString()}</span>}
      </div >
    </div>
  )
};
