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
              <td>
                <p>Current location</p>
                <p>
                  {" "}
                  <i className="fas fa-map-marked-alt"></i> 9 Omole Estate
                  Mayfair
                </p>
              </td>
            </tr>
            <tr className="px-3">
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
              <td class="text-right">N3600</td>
            </tr>
            <tr>
              <th scope="row">Delivery Fee </th>
              <td class="text-right">N400</td>
            </tr>
            <tr>
              <th scope="row">Service Fee</th>
              <td class="text-right">N61</td>
            </tr>
            <tr>
              <th scope="row">Total Amount</th>
              <td class="text-right">N4061</td>
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
            }
            .text-right {
              margin-right: 40px !important;
            }
          `}
        </style>
      </div>
    </Layout>
  );
};

export default Delivery;
