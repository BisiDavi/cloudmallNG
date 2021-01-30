import { Pageheader, OrangeButton } from '../imports';

import { Container, Row, Col } from 'react-bootstrap';

const Contact = () => {
  const contactList = [
    { id: 1, icon: 'fas fa-phone-alt', text: '07012345678' },
    {
      id: 2,
      icon: 'far fa-envelope',
      text: 'cloudmallng@awsapps.com'
    },
    { id: 3, icon: 'fab fa-instagram', text: 'cloudmallng' },
    { id: 4, icon: 'fab fa-twitter', text: '@cloudmallng' },
    {
      id: 5,
      icon: 'fab fa-facebook-square',
      text: 'Cloudmallng'
    },
    { id: 6, icon: 'fab fa-linkedin', text: 'CloudmallNG' }
  ];
  return (
    <Container>
      <Pageheader title="Contact" />
      <Row>
        <Col className="mt-5">
          <ul>
            {contactList.map(contact => (
              <li key={contact.id}>
                <i className={contact.icon}></i>
                <p>{contact.text}</p>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <style jsx>
        {`
          li {
            display: flex;
          }
          li svg {
            margin: 0px 20px 0px 10px;
            font-size: 1.2em;
          }
          li p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 14px;
            color: #3e4044;
            margin-top: 5px;
          }

          li:nth-child(4) svg {
            color: #55acee;
          }

          li:nth-child(5) svg {
            color: #395185;
          }

          li:last-child svg {
            color: #0a66c2;
          }
        `}
      </style>
    </Container>
  );
};

export default Contact;
