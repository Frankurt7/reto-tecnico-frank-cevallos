import { useFormContext } from "react-hook-form";
import './select.scss';

interface ISelectProps extends React.HTMLAttributes<HTMLSelectElement> {
  label?: string;
  name: string;
  optionList: Array<any>;
}

export const Select = ({ name, onChange, optionList, ...rest }: ISelectProps) => {
  const {
    formState: { errors },
    register,
  } = useFormContext();

  return (
    <div className={"select-container"} >
      <select
        name={name}
        {...register(name, onChange && { onChange })}
        aria-label={name}
        {...rest}
      >
        {optionList.map((option, indx) => <option key={`${indx} - ${option.label}`} value={option.value}>{option.label}</option>)}
      </select>

      <div className="select-container__error-container">
        {errors?.[name] && <span>{errors[name]?.message.toString()}</span>}
      </div >
    </div >

  )
};
