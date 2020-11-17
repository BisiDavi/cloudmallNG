import { MealCalculator } from "./orderComponents";
import { meals } from "./temp";
import style from "../styles/order.module.css";

const OrderProduct = props => {
  return (
    <div className="ordermenu" onClick={props.closeOrderMenu}>
      <div className="orderProduct">
        <div className={style.orders}>
          <MealCalculator meals={meals} />
        </div>
      </div>
      <style jsx>
        {`
          .ordermenu {
            position: absolute;
            background-color: rgba(0, 0, 0, 0.5);
            height: 100vh;
            width: 100vw;
            bottom: 0px;
            z-index: 10000;
          }
          .orderProduct {
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
