import { render, screen, cleanup } from '@testing-library/react';
import QuotationBody from './quotation-body';

afterEach(cleanup);

jest.mock('./components/quotation-form', () => ({
  QuotationForm: jest.fn(() => <div />),
}));


describe('Quotation Body Section', () => {
  beforeEach(() => jest.clearAllMocks());

  it('should render correctly', () => {
    const view = render(<QuotationBody />);
    expect(view).toBeTruthy();
  });

  it('should render texts correctly', () => {
    render(<QuotationBody />);
    expect(screen.getByText('Seguro Salud Flexible')).toBeInTheDocument();
    expect(screen.getByText('Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.')).toBeInTheDocument();
  });

  it('should render mobile picture when it is mobile', () => {
    render(<QuotationBody />);
    const desktopPictureElement = screen.queryByTestId('desktop-picture');
    const mobilePictureElement = screen.queryByTestId('mobile-picture');
    expect(desktopPictureElement).toBeInTheDocument();
    expect(mobilePictureElement).not.toBeInTheDocument();
  });
})

