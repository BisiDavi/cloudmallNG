import { Container, Row, Col, Form } from 'react-bootstrap';
import {
  OutlineButton,
  OrangeButton,
  CheckButton,
  Pageheader
} from '../imports';
import styles from '../styles/filters.module.css';

const Filters = () => {
  const filtersConditions = [
    { icons: '/static/images/sort.svg', name: 'Sort' },
    { icons: '/static/images/dealsicon.svg', name: 'Deals' },
    { icons: '/static/images/sort.svg', name: 'Deals' },
    { icons: '/static/images/recommendicon.png', name: 'Recommended' }
  ];
  const filterCategories = [
    'English',
    'Swallow',
    'Fries',
    'Vegetable',
    'Frozen foods'
  ];
  return (
    <Container fluid>
      <Pageheader title="Filters" />
      <Row className="position-relative">
        <Col sm={12}>
          <ul>
            {filtersConditions.map(filterCondition => (
              <li>
                <img src={filterCondition.icons} />
                <p>{filterCondition.name}</p>
              </li>
            ))}
          </ul>
        </Col>
        <Col className={styles.category} sm={12}>
          <h3>Categories</h3>
        </Col>
        <Col sm={12}>
          <Form className={styles.form}>
            {filterCategories.map(category => (
              <span className="categorylist">
                <p>{category}</p>
                <CheckButton value="category" />
              </span>
            ))}
            <Col className={styles.btnGroup} sm={12}>
              <OutlineButton text="Clear All" />
              <OrangeButton className="justify-content-center" text="Apply" />
            </Col>
          </Form>
        </Col>
        <hr className="buttonBorder" />
      </Row>
      <style jsx>
        {`
          li {
            list-style: none;
            display: flex;
            height: 30px;
            align-items: center;
            margin: 5px 10px;
          }
          li img {
            margin: 0px 20px 0px 0px;
          }
          .categorylist {
            display: flex;
            justify-content: space-between;
            height: 30px;
            align-items: center;
            padding: 0px 10px;
          }
          p,
          h3 {
            font-family: 'Roboto', sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 16px;
            color: #3e4044;
            margin: 0px;
          }
          h3 {
            font-weight: bold;
          }
          .buttonBorder {
            border: 1px solid rgba(62, 64, 68, 0.25);
            position: absolute;
            bottom: 90px;
            width: 100%;
            margin: 0px;
          }
        `}
      </style>
    </Container>
  );
};

export default Filters;
