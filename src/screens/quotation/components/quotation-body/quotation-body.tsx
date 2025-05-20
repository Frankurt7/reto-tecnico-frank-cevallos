import rimacQuotationImage from 'assets/quotation/quotation-image.png';
import leftBlurImage from 'assets/quotation/quotation-left-blur.png';
import rightBlurImage from 'assets/quotation/quotation-right-blur.png';
import useWindowSize from 'shared/hooks/use-window-size.hooks';
import { QuotationForm } from './components/quotation-form';

import './quotation-body.scss';

const QuotationBody = () => {
  const { isMobile } = useWindowSize();

  return (
    <div className={"quotation-body"}>

      <img className={"quotation-body__blur-left"} src={leftBlurImage} alt="" />
      <img className={"quotation-body__blur-right"} src={rightBlurImage} alt="" />


      {!isMobile &&
        <div className={"quotation-body__picture-side"}>
          <img className={"quotation-body__picture-img"}
            data-testid="desktop-picture"
            src={rimacQuotationImage} alt="" />
        </div>}

      <div className={"quotation-body__form-side"}>
        <div className='quotation-body__description'>
          <div className='quotation-body__title-container'>
            <div>
              <div className={"quotation-body__gradient"}>
                <span>Seguro Salud Flexible</span>
              </div >
              <h2 className={"quotation-body__title"}>Creado para ti y tu familia</h2>
            </div>
            {isMobile &&
              <img className={"quotation-body__picture-img-mobile"}
                data-testid="mobile-picture"
                src={rimacQuotationImage} alt="" />}
          </div>

          {isMobile && <hr className={'quotation-body__hr'} />
          }
          <h4 className={"quotation-body__subtitle"}>Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra asesoría. 100% online.</h4>
        </div>

        <QuotationForm />
      </div >
    </div>
  )
};

export default QuotationBody;
