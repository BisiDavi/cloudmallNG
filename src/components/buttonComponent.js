export const OrangeButton = ({ buttonMargin, text, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="orange_button text-white w-100 rounded"
      >
        {text}
      </button>
      <style jsx>
        {`
          .orange_button {
            background-color: #f29100 !important;
            border: none;
            height: 40px;
            text-align: center !important;
            justify-content: center;
            align-content: center !important;
            align-items: center;
            font-family: Roboto;
            font-size: 20px;
            display: flex;
            margin: ${buttonMargin};
          }
        `}
      </style>
    </>
  );
};
