import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
export const Input = ({ label, type, placeholder, eyeIcon }) => {
  const [passwordType, setPasswordType] = useState(type);

  const ShowPassword = () => {
    setPasswordType('text');
  };
  const HidePassword = () => {
    setPasswordType('password');
  };

  const Password = () => {
    return (
      <div className="inputAdornment">
        {passwordType === 'password' ? (
          <span onClick={() => ShowPassword()} className="eyeIcon open">
            <FontAwesomeIcon icon={faEye} />
          </span>
        ) : passwordType === 'text' ? (
          <span onClick={() => HidePassword()} className="eyeIcon closed">
            <FontAwesomeIcon icon={faEyeSlash} />
          </span>
        ) : null}
        <style jsx>
          {`
            .inputAdornment {
              position: absolute;
              bottom: 10px;
              right: 15px;
            }
            .eyeIcon {
              color: #f29100;
              font-size: 15px;
            }
          `}
        </style>
      </div>
    );
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input type={passwordType} placeholder={placeholder} required />

      {typeof eyeIcon === 'undefined' ? null : Password()}

      <style jsx>
        {`
          .formInput {
            display: flex;
            flex-direction: column;
            position: relative;
            margin: 20px 0px;
          }
          .formInput input::placeholder {
            padding: 0px 10px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            color: #c4c4c4;
          }
          .formInput input {
            width: 100%;
            height: 40px;
            border: 1px solid #f29100;
            border-radius: 5px;
            margin: 0px;
          }

          label {
            margin: 0px;
            font-family: 'Roboto';
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #3e4044;
          }
        `}
      </style>
    </div>
  );
};
