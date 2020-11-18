import { MealCalculator } from "./orderComponents";
import { meals } from "./temp";
import style from "../styles/order.module.css";

const OrderProduct = props => {
  return (
    <div className="ordermenuWrapper d-flex flex-column">
      <div className="ordermenu" onClick={props.closeOrderMenu}></div>
      <div className="orderProduct">
        <div className={style.orders}>
          <MealCalculator meals={meals} />
        </div>
      </div>
      <style jsx>
        {`
          .ordermenuWrapper {
            height: 100vh !important;
            position: absolute;
            bottom: 0px;
            left: 0px;
            width: 100vw !important;
          }
          .ordermenu {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5);
            height: 40vh;
            width: 100vw;
            left: 0px;
            z-index: 10000;
          }
          .orderProduct {
            left: 0px;
            position: absolute;
            bottom: 0px !important;
            z-index: 20000 !important;
            width: 100vw !important;
            height: 60vh !important;
            overflow-y: scroll;
            transform: translateY(100%);
            transition: 0.5s ease;
            background-color: white !important;
          }
        `}
      </style>
    </div>
  );
};

export default OrderProduct;
