import './button.scss';

export interface IButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  backgroundColor?: string;
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, backgroundColor = 'black', type = 'button', onClick, className, ...rest }: IButtonProps) => (
  <button type={type} className={`button ${className}`} style={{ backgroundColor }} onClick={onClick} {...rest}>
    <span className='button__text'>{children}</span>
  </button>
);
