import { Layout } from "../imports";
import { cart } from "../components/temp";
import { CartView } from "../components/cartComponent";

const Cart = () => {
  return (
    <Layout showFooter headerTitle="Cart">
      <div className="cart">
        <CartView cartItems={cart} />
      </div>
    </Layout>
  );
};

export default Cart;
