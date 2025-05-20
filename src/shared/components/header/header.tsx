import redLogo from 'assets/quotation/quotation-red-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { accessibleOnClick } from 'shared/utils/a11y.utils';
import useWindowSize from 'shared/hooks/use-window-size.hooks';

import './header.scss';

const Header = () => {
  const { isMobile } = useWindowSize();

  return (
    <div className='header'>
      <img className={"header__logo"} src={redLogo} alt="" />
      <div className={"header__text"}>
        {!isMobile && <span>¡Compra por este medio!</span>}
        <span className={"header__phone-text"} {...accessibleOnClick(() => null)}>
          <FontAwesomeIcon className='header__phone-text__icon' icon={faPhone} />
          <span >(01) 411 6001</span>
        </span>
      </div>
    </div>
  )
};

export default Header;
