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
              <li key={info.id} className="info d-flex justify-content-around">
                <span className="d-flex flex-column">
                  <h3>{info.title}</h3>
                  <p>{info.address}</p>
                </span>
                <i className="fas fa-chevron-right"></i>
              </li>
            ))}
          </ul>
        </Col>
        <Col sm={12}>
          <OrangeButton>
            <span className="d-flex justify-content-between">
              <p>add new address</p>
              <i className="fas fa-plus-square"></i>
            </span>
          </OrangeButton>
        </Col>
      </Row>
    </Container>
  );
};

export default AddressBook;
