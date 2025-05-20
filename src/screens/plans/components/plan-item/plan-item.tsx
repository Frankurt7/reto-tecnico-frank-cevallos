import { Button } from 'shared/components/button';
import { DEFAULT_CURRENCY } from 'core/constants/currency.constants';
import { IPlan } from 'core/model/interfaces/plans';
import planImage from 'assets/plans/plan-icon.png';
import { formatNumberWithCommas } from 'shared/utils/format-numbers.utils';
import { usePlanItem } from './hooks/use-plan-item.hooks';

import './plan-item.scss';


export interface IPlanProps {
  plan: IPlan;
}

const PlanItem = ({ plan }: IPlanProps) => {
  const { name, price, description } = plan;
  const { hasDiscount, finalPrice, handleSelectPlan } = usePlanItem(plan);

  return (
    <div className='plan-item'>
      <div className={'plan-item__header'}>

        <div className={'plan-item__header-texts'}>
          <span className='plan-item__name'>{name}</span>
          <span className='plan-item__subtitle'>COSTO DEL PLAN</span>

          <span className={`plan-item__price ${hasDiscount ? 'plan-item__price--before' : ''}`}>{DEFAULT_CURRENCY.symbol}{formatNumberWithCommas(price)} al mes</span>
          {hasDiscount && <span className='plan-item__final-price'>{DEFAULT_CURRENCY.symbol}{formatNumberWithCommas(finalPrice)} al mes</span>}
        </div>

        <div>
          <img className={"plan-item__img"} src={planImage} alt="" />
        </div>
      </div>

      <hr className={'plan-item__hr'} />

      <ul className='plan-item__description-list'>
        {
          description.map((description, indx) => (
            <li key={`description-${indx}`} className='plan-item__description'>
              <span className='plan-item__description-item'>
                {description}
              </span>
            </li>
          ))
        }
      </ul>

      <div className={'plan-item__footer'}>
        <Button className={'plan-item__select-button'} onClick={() => handleSelectPlan()}>
          <span className={'plan-item__text-button'}>Seleccionar Plan</span>
        </Button>
      </div>
    </div>
  );
};

export default PlanItem;
