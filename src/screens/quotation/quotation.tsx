
import QuotationFooter from './components/quotation-footer';
import QuotationBody from './components/quotation-body';
import Header from 'shared/components/header';

import './quotation.scss';


const Quotation = () =>
(
  <div className={"quotation"} >
    <Header />
    <QuotationBody />
    <QuotationFooter />
  </div>
);

export default Quotation;
