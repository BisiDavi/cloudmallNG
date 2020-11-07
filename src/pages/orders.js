import { MealCalculator } from "../components/orderComponents";
import { meals } from "../components/temp";
import { Layout } from "../imports";
import style from "../styles/order.module.css";

const Orders = () => {
  return (
    <Layout showFooter headerTitle="Order">
      <div className={style.orders}>
        <div className={style.header}></div>
        <MealCalculator meals={meals} />
      </div>
    </Layout>
  );
};

export default Orders;
