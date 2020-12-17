import { OrangeButton, walletImg, Pageheader } from "../imports";

const Wallet = () => {
  return (
    <Pageheader title="My Wallet">
      <div className="user_wallet">
        <p className="text-center mt-3">
          The current balance in your colud wallet is{" "}
        </p>
        <button className="amountBtn btn btn-outline mx-auto">N1,040.00</button>

        <img src={walletImg} alt="wallet icon" />

        <form className="walletForm">
          <label>Enter amount to add</label>
          <input name="wallet_amount" />
          <OrangeButton text="Add Amount" />
        </form>
      </div>
      <style jsx>{`
        .walletForm input {
          border: 1px solid #f29100;
          margin-bottom: 30px;
        }
      `}</style>
    </Pageheader>
  );
};

export default Wallet;
