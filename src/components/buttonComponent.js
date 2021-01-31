import  Link from 'next/link';

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
            font-size: 18px;
            display: flex;
            margin: ${btnMargin} !important;
          }
          button:hover {
            background-color: #db8300;
          }
          button:active {
            background-color: #b86e00;
          }
        `}
      </style>
    </>
  );
};

export const ButtonLink = ({ text, linkTo }) => {
  return (
    <>
      <Link href={`/${linkTo}`}>
        <a>
        <button className="link_button">{text}</button>
        </a>
      </Link>
      <style jsx>
        {`
          .link_button {
            color: white;
            font-family: 'Roboto';
            background: #f29100;
            border: none;
            font-style: normal;
            font-weight: 500;
            font-size: 14px;
            text-align: center;
            line-height: 16px;
          }
        `}
      </style>
    </>
  );
};
