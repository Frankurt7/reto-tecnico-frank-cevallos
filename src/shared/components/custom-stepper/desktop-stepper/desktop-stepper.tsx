
import './desktop-stepper.scss';

interface IDesktopStepperProps extends React.HTMLAttributes<HTMLSelectElement> {
  steps: Array<string>;
  activeStep: number;
}

const DesktopStepper = ({ steps, activeStep }: IDesktopStepperProps) => {
  return (
    <div className='desktop-stepper'>
      {
        steps.map((step, indx) =>
        (
          <div key={`step_${indx}`} className="desktop-stepper__step">
            <div className="desktop-stepper__container">
              <div className={`desktop-stepper__number ${activeStep === indx && 'desktop-stepper__number--active'}`}>
                {indx + 1}
              </div>

              <span className={`desktop-stepper__title ${activeStep === indx && 'desktop-stepper__title--active'}`}>{step}</span>

            </div>
            {
              (indx !== (steps.length - 1)) && <hr className={`desktop-stepper__hr ${activeStep === indx && 'desktop-stepper__hr--active'}`} />
            }
          </div>
        ))
      }
    </div>
  )
};

export default DesktopStepper;
