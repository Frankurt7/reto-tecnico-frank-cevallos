import { summaryRoutePath } from 'core/constants/routes.constants';
import { EPlanToList } from 'core/model/enums/plans.enum';
import { EStepperList } from 'core/model/enums/stepper.enum';
import { IPlan } from 'core/model/interfaces/plans';
import { useAppDispatch, useAppSelector } from 'core/store';
import { changeToStep } from 'core/store/layout';
import { setPlan } from 'core/store/plan';
import { toSelector } from 'core/store/plan/selectors';
import { useNavigate } from 'react-router';

export const usePlanItem = (plan: IPlan) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { price } = plan;
  const selectedTo = useAppSelector(toSelector);
  const hasDiscount = selectedTo === EPlanToList.TO_OTHER;
  const finalPrice = hasDiscount ? price * 0.95 : price;

  const handleSelectPlan = () => {
    dispatch(setPlan({ ...plan, price: finalPrice }));
    dispatch(changeToStep(EStepperList.SUMMARY));
    navigate(summaryRoutePath);
  };
  return { hasDiscount, finalPrice, handleSelectPlan };
};
