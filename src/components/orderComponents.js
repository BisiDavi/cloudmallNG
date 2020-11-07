import { useState } from "react";
import { Container, Button, Row, Col } from "react-bootstrap";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import style from "../styles/order.module.css";

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
    <Container className={style.orderPage}>
      <Row className={`${style.orderButton} my-3`}>
        <Col xs={6} className="mr-4">
          <Button className="btn btn-success ml-2 w-100">
            Order {/* ({totalPrice}) */}
          </Button>
        </Col>
        <Col xs={5} className="ml-0">
          <div className={`${style.menu} d-flex`}>
            <div /* onClick=({decreaseCounter}) */>
              <RemoveIcon />
            </div>
            <div className={style.counter}>{orderCounter}</div>
            <div /* onClick=({increaseCounter}) */>
              <AddIcon />
            </div>
          </div>
        </Col>
      </Row>
      <Row className={style.mealMenu}>
        {meals.map((meal, index) => (
          <div
            className={`${style.orderMeal} 
          px-3 d-flex`}
            key={meal.id}
          >
            <Col xs={5}>{meal.meal}</Col>
            <Col xs={2}>N{meal.price}</Col>
            <Col xs={5}>
              <div className={`${style.menu} d-flex`}>
                <div onClick={decreaseCounter}>
                  <RemoveIcon />
                </div>
                <div className={style.counter}>{orderCounter}</div>
                <div onClick={increaseCounter}>
                  <AddIcon />
                </div>
              </div>
            </Col>
          </div>
        ))}
      </Row>
    </Container>
  );
};
