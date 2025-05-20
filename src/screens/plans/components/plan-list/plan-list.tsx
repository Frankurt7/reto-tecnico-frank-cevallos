import { IPlan } from 'core/model/interfaces/plans';
import { PulseLoader } from 'react-spinners';
import PlanItem from '../plan-item';
import { toSelector } from 'core/store/plan/selectors';
import { useAppSelector } from 'core/store';
import useWindowSize from 'shared/hooks/use-window-size.hooks';

import './plan-list.scss';

export interface IPlanListProps {
  loading: boolean;
  planList: Array<IPlan>;
}

const PlanList = ({ planList, loading }: IPlanListProps) => {
  const selectedTo = useAppSelector(toSelector);
  const { isMobile } = useWindowSize();
  const acttiveScroll = isMobile && planList.length > 1;

  if (!selectedTo) return <></>
  return (
    <div className={`plan-list ${acttiveScroll ? 'plan-list--scroll-x' : ''}`}>
      {
        loading === true ?
          <PulseLoader color={'#4f4fff'} /> :
          <>
            {planList.map((plan, indx) => <PlanItem key={`plan-${indx}`} plan={plan} />)}
          </>
      }
    </div>
  )
}

export default PlanList;
