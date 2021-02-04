import { useState } from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { OrangeButton } from '../imports';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import styles from '../styles/order.module.css';

export const MealCalculator = ({ meals }) => {
  const [orderCounter, setOrderCounter] = useState(0);
  /* const  [menuItem, setMenuItem] = ([
    {name:Rice,}
  ]) */

  const increaseCounter = () => {
    setOrderCounter(orderCounter + 1);
  };

  const decreaseCounter = () => {
    if (orderCounter > 0) {
      setOrderCounter(orderCounter - 1);
    }
  };

  const totalPrice = () => {
    const mealPrice = meals.price * orderCounter;
    return mealPrice;
  };

  return (
    <Container className={styles.orderPage}>
      <Row className="my-3">
        <Col xs={12} className={styles.orderBtn}>
          <OrangeButton className="justify-content-center" text={`Order`} />

          <div className={styles.menu}>
            <div className={styles.button}>
              <RemoveIcon />
            </div>
            <div className={styles.counter}>{orderCounter}</div>
            <div className={styles.button}>
              <AddIcon />
            </div>
          </div>
        </Col>
      </Row>
      <Row className={styles.mealMenu}>
        <Col>
          {meals.map((meal, index) => (
            <div
              className={`${styles.orderMeal} 
          px-3 d-flex`}
              key={meal.id}
            >
              <Col xs={5}>{meal.meal}</Col>
              <Col xs={2}>N{meal.price}</Col>
              <Col xs={5}>
                <div className={`${styles.menu} d-flex`}>
                  <div onClick={decreaseCounter}>
                    <RemoveIcon />
                  </div>
                  <div className={styles.counter}>{orderCounter}</div>
                  <div onClick={increaseCounter}>
                    <AddIcon />
                  </div>
                </div>
              </Col>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
