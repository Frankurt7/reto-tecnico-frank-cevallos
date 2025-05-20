import useWindowSize from 'shared/hooks/use-window-size.hooks';
import DesktopStepper from './desktop-stepper';
import MobileStepper from './mobile-stepper';

import './custom-stepper.scss';

interface IStepperProps extends React.HTMLAttributes<HTMLSelectElement> {
  steps: Array<string>;
  activeStep: number;
  handleBack?: () => void
}

export const CustomStepper = ({ steps, activeStep, handleBack }: IStepperProps) => {
  const { isMobile } = useWindowSize();


  if (isMobile)
    return <MobileStepper steps={steps} activeStep={activeStep} handleBack={handleBack} />
  else
    return <DesktopStepper steps={steps} activeStep={activeStep} />
};
