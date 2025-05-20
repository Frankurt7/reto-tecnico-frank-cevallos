
import planForMeImage from 'assets/plans/plan-for-me-icon.png';
import planForOtherImage from 'assets/plans/plan-for-other-icon.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { accessibleOnClick } from 'shared/utils/a11y.utils';
import { EPlanToList } from 'core/model/enums/plans.enum';
import { useToCustomerSelector } from './hooks/use-to-customer-selector.hooks';

import './to-customer-selector.scss';


const ToCustomerSelector = () => {
  const { isToMeSelected, isToOtherSelected, handleSelectTo } = useToCustomerSelector();

  return (
    <div className={"to-customer-selector"}>

      <div
        className={`to-customer-selector__item ${isToMeSelected && 'to-customer-selector__item--selected'}`}
        {...accessibleOnClick(() => handleSelectTo(EPlanToList.TO_ME))}>
        <div className='to-customer-selector__radio-button'>
          {
            isToMeSelected && <FontAwesomeIcon className='to-customer-selector__check-icon' icon={faCheckCircle} />
          }
        </div>
        <img className={"to-customer-selector__img"} src={planForMeImage} alt="" />
        <div className={"to-customer-selector__content-text"}>
          <span className={"to-customer-selector__title"}>Para mí</span>
          <span className={"to-customer-selector__subtitle"}>Cotiza tu seguro de salud y agrega familiares si así lo deseas.</span>
        </div>
      </div>


      <div
        className={`to-customer-selector__item ${isToOtherSelected && 'to-customer-selector__item--selected'}`}
        {...accessibleOnClick(() => handleSelectTo(EPlanToList.TO_OTHER))}>
        <div className='to-customer-selector__radio-button'>
          {
            isToOtherSelected && <FontAwesomeIcon className='to-customer-selector__check-icon' icon={faCheckCircle} />
          }
        </div>
        <img className={"to-customer-selector__img"} src={planForOtherImage} alt="" />
        <div className={"to-customer-selector__content-text"}>
          <span className={"to-customer-selector__title"}>Para alguien más</span>
          <span className={"to-customer-selector__subtitle"}>Realiza una cotización para uno de tus familiares o cualquier persona.</span>
        </div>
      </div>

    </div >
  );
};

export default ToCustomerSelector;
