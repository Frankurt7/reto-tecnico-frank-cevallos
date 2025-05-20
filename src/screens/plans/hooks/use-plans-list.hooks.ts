import { useState, useEffect } from 'react';
import { apiService } from 'core/services';
import { IPlan } from 'core/model/interfaces/plans';

export const usePlansList = (birthDay: string) => {
  const [plansList, setPlansList] = useState<Array<IPlan>>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchPlansList = async () => {
      try {
        setLoading(true);
        const plansListRemote = await apiService.plans.getPlansList(birthDay);
        setPlansList(plansListRemote);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    if (!!birthDay) fetchPlansList();

    return () => {
      setPlansList([]);
    };
  }, [birthDay]);

  return { plansList, plansListLoading: loading };
};
