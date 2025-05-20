import { EPlanToList } from 'core/model/enums/plans.enum';
import { useAppDispatch, useAppSelector } from 'core/store';
import { setTo } from 'core/store/plan';
import { toSelector } from 'core/store/plan/selectors';

export const useToCustomerSelector = () => {
  const dispatch = useAppDispatch();
  const selectedTo = useAppSelector(toSelector);

  const isToMeSelected = selectedTo === EPlanToList.TO_ME;
  const isToOtherSelected = selectedTo === EPlanToList.TO_OTHER;

  const handleSelectTo = (to: EPlanToList) => dispatch(setTo(to));

  return { isToMeSelected, isToOtherSelected, handleSelectTo };
};
