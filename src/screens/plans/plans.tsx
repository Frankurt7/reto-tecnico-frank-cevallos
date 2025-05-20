import { useUser } from 'core/hooks/master-entities';
import Header from 'shared/components/header';
import { Button } from 'shared/components/button';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { usePlansList } from './hooks/use-plans-list.hooks';
import PlanList from './components/plan-list';
import ToCustomerSelector from './components/to-customer-selector';
import { STEP_LIST } from 'core/constants/steps.constant';
import { PulseLoader } from 'react-spinners';
import { useAppDispatch, useAppSelector } from 'core/store';
import { stepSelector } from 'core/store/layout/selectors';
import { EStepperListCode } from 'core/model/enums/stepper.enum';
import { setPlan } from 'core/store/plan';
import { useEffect } from 'react';
import { CustomStepper } from 'shared/components/custom-stepper/custom-stepper';
import { useNavigate } from 'react-router';
import { quotationRoutePath } from 'core/constants/routes.constants';
import useWindowSize from 'shared/hooks/use-window-size.hooks';

import './plans.scss';

const Plans = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { isMobile } = useWindowSize();

  const { user, userLoading } = useUser();
  const { name, birthDay } = user;

  const { plansList, plansListLoading } = usePlansList(birthDay);
  const step = useAppSelector(stepSelector);

  const handleBack = () => {
    dispatch({ type: 'reset' })
    navigate(quotationRoutePath);
  }

  useEffect(() => {
    dispatch(setPlan(null))
  }, [dispatch]);

  return (
    <div className={"plans"} >
      <Header />
      <CustomStepper steps={STEP_LIST} activeStep={EStepperListCode[step]} handleBack={handleBack} />

      {!isMobile &&
        <Button className={'plans__back-button'} onClick={() => handleBack()}>
          <FontAwesomeIcon className='plans__button-icon' icon={faCircleChevronLeft} />
          <span className='plans__button-text'>Volver</span>
        </Button>
      }

      <div className='plans__container'>
        <div className='plans__title-container'>
          <div className='plans__title'>
            {userLoading ? <PulseLoader color={'#4f4fff'} /> : <span>{name}</span>} ¿Para quién deseas cotizar?
          </div>
          <div className='plans__subtitle'>
            Selecciona la opción que se ajuste más a tus necesidades.
          </div>
        </div>

        <ToCustomerSelector />

        <PlanList loading={plansListLoading} planList={plansList} />
      </div>
    </div>
  );
};

export default Plans;
