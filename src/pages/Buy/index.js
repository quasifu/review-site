import { useState, useEffect } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import style from './Buy.module.scss';
import appStyle from '../../App.module.scss';
import axios from 'axios';

function Buy() {
  const [isValid, setIsValid] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(undefined);
  const [email, setEmail] = useState();
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [message, setMessage] = useState();
  const onChange = (value) => {
    setCaptchaToken(value);
    setMessage(undefined);
  };

  useEffect(() => {
    if (email && captchaToken && isEmailValid) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [email, captchaToken, isEmailValid, isValid]);

  return (
    <>
      <div className={appStyle.wrapper}>
        <h1>Buy this Domain</h1>
        <div>
          <span>Would you like to buy this domain? Great! </span>
          <br />
          <span>Please share your email address and we will contact you.</span>
        </div>
        <div className={style.formWrapper}>
          {message && message}
          {captchaToken ? (
            <>
              <input
                type='email'
                placeholder='john@doe.com'
                className={appStyle.input}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setIsEmailValid(e.target.validity.valid);
                }}
              />

              <button
                className={
                  isValid ? appStyle.toggleButton : appStyle.disabledButton
                }
                disabled={!isValid}
                onClick={async () => {
                  try {
                    await axios.put('/api/buy', {
                      email,
                      captchaToken,
                    });
                    setMessage(
                      'Your email has been submitted successfully.  We will be in touch soon. Thank you.'
                    );
                    setCaptchaToken(undefined);
                    setIsEmailValid(false);
                    setEmail(undefined);
                  } catch (err) {
                    setMessage('An error occurred.  Please try again.');
                  }
                }}
              >
                Submit
              </button>
            </>
          ) : (
            <div className={style.captchaWrapper}>
              Are you human?
              <ReCAPTCHA
                sitekey='6Ld9xyIgAAAAAHKMQKuYX9ZVlk9IlHR7g-rFxFeB'
                onChange={onChange}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default Buy;
