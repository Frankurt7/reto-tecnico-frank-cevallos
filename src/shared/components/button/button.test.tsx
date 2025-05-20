import { render, screen, cleanup } from '@testing-library/react';
import { Button } from './button';
import userEvent from '@testing-library/user-event';

afterEach(cleanup);

const onClickMock = jest.fn();

describe('Button Section', () => {
  beforeEach(() => jest.clearAllMocks());

  const buttonText = "Aceptar";

  it('should render correctly', () => {
    const view = render(<Button children={buttonText} />);
    expect(view).toBeTruthy();
  });

  it('should render children (text) correctly', () => {
    render(<Button children={buttonText} />);
    expect(screen.getByText(buttonText)).toBeInTheDocument();
  });

  it('Should call event button when the button is clicked', async () => {
    render(<Button children={buttonText} onClick={() => onClickMock()} />);
    const button = screen.getByRole('button', { name: buttonText });
    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
})

