import appStyle from '../../App.module.scss';
import { useNavigate } from 'react-router-dom';
import style from './ActionBar.module.scss';

function ActionBar() {
  const navigate = useNavigate();
  return (
    <div className={style.actionBar}>
      <button className={appStyle.toggleButton} onClick={() => navigate('/')}>
        Home
      </button>
      <button
        className={appStyle.toggleButton}
        onClick={() => navigate('/about')}
      >
        Learn More
      </button>
      <button className={appStyle.toggleButton}>Share your story</button>
      <button className={appStyle.toggleButton}>Buy this domain</button>
    </div>
  );
}

export default ActionBar;
