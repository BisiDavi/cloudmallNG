import { useState } from 'react';
import { RadioButton } from '../imports';

const modalLabel = ['Current Location', 'Home', 'Work'];

const ChangeLocationModal = () => {
  const [locationModal, setLocationModal] = useState(false);

  const closeHandler = () => {
    setLocationModal(true);
  };
  return (
    <Container fluid>
      <Row>
        <Col sm={12}>
          {locationModal}
          <div className="overlay" onClick={closeHandler}></div>
          <div className="changeLocationModal">
            <h3>Now</h3>
            <ul>
              {modalLabel.map(label => (
                <li key={label}>
                  <RadioButton value={label} label={label} />
                </li>
              ))}
            </ul>
            <Link href="/location">
              <a>
                <p>Select another location +</p>
              </a>
            </Link>
          </div>
        </Col>
      </Row>
      <style jsx>
        {`
          .changeLocationModal {
            display: flex;
            flex-direction: column;
            padding: 10px 20px;
          }
          .changeLocationModal li {
            margin: 10px 0px;
          }
        `}
      </style>
    </Container>
  );
};
export default ChangeLocationModal;
