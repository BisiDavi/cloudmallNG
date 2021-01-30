import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Pageheader } from '../imports';

const settings = [
  { text: 'Change Password', className: '', hasToggle: false },
  { text: 'Notifications', className: 'menu', hasToggle: null },
  { text: 'Pop-up', className: '', hasToggle: true },
  { text: 'Email', className: '', hasToggle: true },
  { text: 'Test', className: '', hasToggle: true },
  { text: 'Change Language', className: '', hasToggle: false },
  { text: 'Change Phone number', className: '', hasToggle: false }
];

const Settings = () => {
  const [toggleBtn, setToggleBtn] = useState(true);

  const toggleHandler = () => {
    setToggleBtn(!toggleBtn)
    toggleBtn ? 'fas fa-toggle-on' : 'fas fa-toggle-off';
  }
    ;

  console.log('toggleBtn state:', toggleBtn);

  const selectIcon = link => {
    const linkIcon = link ? (
      <i className="fas fa-chevron-right icon"></i>
    ) : toggleBtn ? (
      <i className="fas fa-toggle-on icon"></i>
    ) : (
      <i className="fas fa-toggle-off icon"></i>
    );
    return <span onClick={toggleHandler}>{linkIcon}</span>;
  };

  const toggleBtnState = toggleBtn ? 'fas fa-toggle-on' : 'fas fa-toggle-off';

  return (
    <Container className="px-0" fluid>
      <Pageheader title="Settings" />
      <Row className="mx-auto px-0">
        <Col className="px-0" lg={12} xs={12} sm={12}>
          <ul className="mt-4">
            {settings.map(settingsLink => (
              <li key={settingsLink.text} className={settingsLink.className}>
                <p>{settingsLink.text}</p>
                {/* <span>{selectIcon(settingsLink.hasToggle)}</span> */}
                <span>
                  {settingsLink.hasToggle ? (
                    <i className="fas fa-chevron-right"></i>
                  ) : (
                    <span onClick={toggleHandler}>
                      <i className={toggleBtnState}></i>
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
      <style jsx>
        {`
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            box-sizing: border-box;
            padding: 15px 30px;
            background: white;
            height: 60px;
            border-bottom: 1px solid rgba(62, 64, 68, 0.25);
          }
          li p {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: 500;
            font-size: 12px;
            line-height: 14px;
            color: #3e4044;
            margin: 0px;
          }
          li span {
            color: #f29100;
          }
          li.menu {
            background: #f5f5f5;
          }
        `}
      </style>
    </Container>
  );
};

export default Settings;
