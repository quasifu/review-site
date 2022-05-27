import appStyle from '../../App.module.scss';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './ActionBar.module.scss';
import Chevron from 'react-chevron';
import AnimateHeight from 'react-animate-height';

function ActionBar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  function navigateToPage(page) {
    navigate(page);
    setOpen(false);
  }

  return (
    <>
      <div className={style.actionBarWrapper}>
        <div className={style.actionBarHandle} onClick={() => setOpen(!open)}>
          <Chevron direction={open ? 'down' : 'up'} className={style.chevron} />
        </div>
        <AnimateHeight
          id='actionBar'
          duration={500}
          height={open ? 'auto' : 0} // see props documentation below
        >
          <div className={open ? style.actionBar : style.closedActionBar}>
            <button
              className={appStyle.toggleButton}
              onClick={() => navigateToPage('/')}
            >
              Home
            </button>
            <button
              className={appStyle.toggleButton}
              onClick={() => navigateToPage('/about')}
            >
              Learn More
            </button>
            <button
              className={appStyle.toggleButton}
              onClick={() => navigateToPage('/share')}
            >
              Share your story
            </button>
            <button className={appStyle.toggleButton}>Buy this domain</button>
          </div>
        </AnimateHeight>
      </div>
    </>
  );
}

export default ActionBar;
