import { TRootState } from '../reducers';
import { EStepperList } from 'core/model/enums/stepper.enum';

export const stepSelector = (state: TRootState): EStepperList => state.layout.step;
