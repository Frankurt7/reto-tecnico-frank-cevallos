import whiteLogo from 'assets/quotation/quotation-white-logo.png';

import './quotation-footer.scss';

const QuotationFooter = () => (
  <div className={"quotation-footer"}>
    <img className={"quotation-footer__img"} src={whiteLogo} alt="" />
    <span className={"quotation-footer__text"}>© 2023 RIMAC Seguros y Reaseguros.</span>
  </div>
);

export default QuotationFooter;
