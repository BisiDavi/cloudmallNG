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
      <Row>
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
          <Form>
            {filterCategories.map(category => (
              <Form.Group controlId="formBasicCheckbox">
                <CheckButton value={category} label={category} />
              </Form.Group>
            ))}
          </Form>
        </Col>
        <Col className={styles.btnGroup} sm={12}>
          <OutlineButton text="Clear All" />
          <OrangeButton text="Apply" className="justify-center" />
        </Col>
      </Row>
    </Container>
  );
};

export default Filters;
