export const OrangeButton = ({ btnMargin, text, onClick, icon, className }) => {
  return (
    <>
      <button onClick={onClick} className="rounded">
        <span className={className}>
          {text}
          <i className={icon}></i>
        </span>
      </button>
      <style jsx>
        {`
          button span {
            display: flex;
            align-items: center;
            display: flex;
            padding: 0 10px 0 15px !important;
            width: 100%;
            align-items: center;
          }
          button {
            background-color: #f29100;
            border: none;
            height: 40px;
            text-align: center;
            justify-content: center;
            align-items: center;
            font-family: 'Roboto', san-serif;
            width: 100%;
            color: white;
            font-size: 20px;
            display: flex;
            margin: ${btnMargin} !important;
          }
        `}
      </style>
    </>
  );
};

export const ButtonLink = ({ text }) => {
  return (
    <>
      <button className="link_button">{text}</button>
      <style jsx>
        {`
          .link_button {
            color: #f29100 !important;
            font-family: Roboto;
            background: none;
            border: none;
            font-family: Roboto;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            line-height: 16px;
          }
        `}
      </style>
    </>
  );
};
