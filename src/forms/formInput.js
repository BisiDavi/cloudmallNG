export const Input = ({ label, type, placeholder, fieldVisible }) => {
  const handleChange = isVisible => {
    let visibility = !isVisible;
    if (visibility === true) {
      type = 'text';
      return type;
    } else {
      type = 'password';
    }
    console.log('visibility', visibility);
    console.log('type', type);
    return visibility;
  };

  const showPassword = () => {
    return (
      <div
        onClick={() => handleChange(fieldVisible)}
        className="inputAdornment"
      >
        {fieldVisible ? (
          <span className="eyeIcon open">
            <i className="fas fa-eye"></i>
          </span>
        ) : (
          <span className="eyeIcon closed">
            <i className="fas fa-eye-slash"></i>
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="formInput">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} required />

      {typeof fieldVisible === 'undefined' ? null : showPassword()}

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
          .inputAdornment {
            position: absolute;
            bottom: 10px;
            right: 15px;
          }
          .eyeIcon {
            color: #f29100;
            font-size: 15px;
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
