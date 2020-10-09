import { Layout } from "../imports";
import { cart } from "../components/temp";
import { CartView } from "../components/cartComponent";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { Button } from "react-bootstrap";
import { PageHeader } from "../components/pageComponent";

const Delivery = () => {
  return (
    <Layout showFooter headerTitle="Delivery Details">
      <PageHeader title="Delivery Details" />
      <div className="delivery">
        <table class="table">
          <tbody>
            <tr>
              <th scope="row">Address</th>
              <td>
                <p>Current location</p>
                <p>9 Omole Estate Mayfair</p>
              </td>
            </tr>
            <tr>
              <th scope="row">Delivery Time</th>
              <td>Now (30 - 40 mins)</td>
            </tr>
            <tr>
              <th scope="row">Phone Number</th>
              <td>+234707070707070</td>
            </tr>
            <tr>
              <th scope="row">Additional Note</th>
            </tr>
            <tr>
              <th scope="row">Promo Code</th>
              <td></td>
            </tr>
            <tr>
              <th scope="row">Sub Total</th>
              <td>N3600</td>
            </tr>
            <tr>
              <th scope="row">Delivery Fee </th>
              <td>N400</td>
            </tr>
            <tr>
              <th scope="row">Service Fee</th>
              <td>N61</td>
            </tr>
            <tr>
              <th scope="row">Total Amount</th>
              <td>N4061</td>
            </tr>
          </tbody>
        </table>
        <Button className="btn btn-success text-white font-weight-bold">
          Proceed to Payment
        </Button>
      </div>
    </Layout>
  );
};

export default Delivery;
