import { Pageheader, OrangeButton } from '../imports';
import { Container, Row, Col } from 'react-bootstrap';

const AddressBook = () => {
  const userInfo = [
    { id: 1, title: 'Home', address: '9, Omole Estate, Mayfair' },
    { id: 2, title: 'Work', address: '9, Omole Estate, Mayfair' },
    { id: 3, title: 'School', address: '9, Omole Estate, Mayfair' },
    { id: 4, title: 'Others', address: '9, Omole Estate, Mayfair' }
  ];
  return (
    <Container className="user_address_book" fluid>
      <Pageheader title="Address Book" />
      <Row>
        <Col sm={12} className="py-2 px-3">
          <h5 className="my-2">Saved Address</h5>
          <ul>
            {userInfo.map(info => (
              <li key={info.id}>
                <span>
                  <h3>{info.title}</h3>
                  <p>{info.address}</p>
                </span>
              </li>
            ))}
          </ul>
        </Col>
        <Col className="mx-4" sm={12}>
          <OrangeButton
            text="Add new address"
            icon="fas fa-plus-square"
            className="justify-content-between"
            btnMargin="120px auto"
          />
        </Col>
      </Row>
      <style jsx>
        {`
          li:last-child {
            border-bottom: 1px solid #3e4044;
          }

          li {
            border: 1px solid #3e4044;
            border-radius: 5px;
            padding: 5px 10px !important;
            border-bottom: 0px;
            align-items: center;
            justify-content: space-between;
            display: flex;
          }
          li span,
          h5 {
            display: flex;
            flex-direction: column;
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
          }
          h5 {
            font-size: 12px;
            line-height: 14px;
          }
          li h3 {
            font-weight: bold;
            font-size: 14px;
            line-height: 16px;
          }
          li p {
            font-size: 12px;
            line-height: 14px;
          }
          li svg {
            color: #f29100;
          }
          span.btnSpan {
            display: flex;
            justify-content: space-between;
          }
        `}
      </style>
    </Container>
  );
};

export default AddressBook;

{
  /* <span className="btnSpan">
  <p>add new address</p>
  <i className="fas fa-plus-square"></i>
</span>; */
}
