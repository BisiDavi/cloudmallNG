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
        <table className="table table-borderless">
          <tbody>
            <tr>
              <th scope="row">Address</th>
              <td className="text-right">
                <p>Current location</p>
                <p>
                  {" "}
                  <i className="fas fa-map-marker-alt"></i> 9 Omole Estate
                  Mayfair
                </p>
              </td>
            </tr>
            <tr>
              <th scope="row">Delivery Time</th>
              <td className="text-right">Now (30 - 40 mins)</td>
            </tr>
            <tr>
              <th scope="row">Phone Number</th>
              <td className="text-right">+234707070707070</td>
            </tr>
            <tr>
              <th scope="row">Additional Note</th>
            </tr>
            <tr>
              <th scope="row">Promo Code</th>
              <td>
                <form className="form">
                  <input type="text" placeholder="Enter promo code" />
                </form>
              </td>
            </tr>
            <tr>
              <th scope="row">Sub Total</th>
              <td className="text-right">N3600</td>
            </tr>
            <tr>
              <th scope="row">Delivery Fee </th>
              <td className="text-right">N400</td>
            </tr>
            <tr>
              <th scope="row">Service Fee</th>
              <td className="text-right">N61</td>
            </tr>
            <tr>
              <th scope="row">Total Amount</th>
              <td className="text-right">N4061</td>
            </tr>
          </tbody>
        </table>
        <Button className="btn btn-secondary d-flex m-auto p-2 text-white font-weight-bold">
          Proceed to Payment
        </Button>
        <style jsx>
          {`
            .table.table-borderless {
              height: 75vh !important;
              width: 95vw !important;
              margin: 10px !important;
            }
            .form input {
              float: right;
              border-radius: 5px;
              text-align: center;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Delivery;
