import { Button } from 'shared/components/button';
import { faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './mobile-stepper.scss';

interface IMobileStepperProps extends React.HTMLAttributes<HTMLSelectElement> {
  steps: Array<string>;
  activeStep: number;
  handleBack?: () => void
}

const MobileStepper = ({ steps, activeStep, handleBack }: IMobileStepperProps) => {

  return (
    <div className='mobile-stepper'>
      <div className='mobile-stepper__container'>
        <div className='mobile-stepper__step-container'>
          <Button className={'mobile-stepper__back-button'} onClick={() => handleBack()}>
            <FontAwesomeIcon className='mobile-stepper__button-icon' icon={faCircleChevronLeft} />
          </Button>

          <span className='mobile-stepper__step-text'>
            PASO {activeStep + 1} DE {steps.length}
          </span>
        </div>

        <progress value={activeStep + 1} max={steps.length} />
      </div>
    </div>
  )
};

export default MobileStepper;
