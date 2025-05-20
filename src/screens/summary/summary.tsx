import Header from 'shared/components/header';
import { Button } from 'shared/components/button';
import { faCircleChevronLeft, faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppDispatch, useAppSelector } from 'core/store';
import { selectedPlanSelector } from 'core/store/plan/selectors';
import { DEFAULT_CURRENCY } from 'core/constants/currency.constants';
import { formatNumberWithCommas } from 'shared/utils/format-numbers.utils';
import { STEP_LIST } from 'core/constants/steps.constant';
import { stepSelector } from 'core/store/layout/selectors';
import { EStepperList, EStepperListCode } from 'core/model/enums/stepper.enum';
import { changeToStep } from 'core/store/layout';
import { useNavigate } from 'react-router';
import { plansRoutePath } from 'core/constants/routes.constants';
import useWindowSize from 'shared/hooks/use-window-size.hooks';
import { CustomStepper } from 'shared/components/custom-stepper/custom-stepper';

import './summary.scss';


const Summary = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isMobile } = useWindowSize();

  const { user } = useAppSelector(state => state.user);
  const { name: userName, lastName, documentNumber, typeDocument, phone } = user;

  const selectedPlan = useAppSelector(selectedPlanSelector);
  const { name: planName, price } = selectedPlan;
  const step = useAppSelector(stepSelector);

  const handleBack = () => {
    dispatch(changeToStep(EStepperList.PLAN_LIST))
    navigate(plansRoutePath);
  }

  return (
    <div className={"summary"} >
      <Header />
      <CustomStepper steps={STEP_LIST} activeStep={EStepperListCode[step]} handleBack={handleBack} />

      {!isMobile &&
        <Button className={'plans__back-button'} onClick={() => handleBack()}>
          <FontAwesomeIcon className='plans__button-icon' icon={faCircleChevronLeft} />
          <span className='plans__button-text'>Volver</span>
        </Button>
      }

      <div className={"summary__container"}>
        <span className='summary__title'>Resumen del seguro </span>

        <div className={"summary__card"}>
          <span className={"summary__calculated-to"}>Precios calculados para:</span>
          <div>
            <FontAwesomeIcon icon={faPeopleGroup} size={'lg'} />
            <span className={"summary__full-name"}>{userName} {lastName}</span>
          </div>

          <hr className={'summary__hr'} />

          <div className='summary__userData'>
            <span className='summary__subtitle'>Responsable de pago</span>
            <div>
              <span className='summary__data-text'>{typeDocument}: {documentNumber}</span>
            </div>
            <div>
              <span className='summary__data-text'>Celular: {phone}</span>
            </div>
          </div>

          <div className='summary__userData'>
            <span className='summary__subtitle'>Plan elegido</span>
            <div>
              <span className='summary__data-text'>{planName}</span>
            </div>
            <div>
              <span className='summary__data-text'>Costo del Plan: {DEFAULT_CURRENCY.symbol}{formatNumberWithCommas(price)} al mes</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Summary;
