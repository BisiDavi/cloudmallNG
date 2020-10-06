import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import {
  Container,
  InputGroup,
  Row,
  Col,
  Form,
  Button,
  FormControl
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { searchIcon, eyeIcon } from "../imports";
import Skeleton from "react-loading-skeleton";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import styles from "../styles/category.module.css";
import Link from "next/link";
import style from "../styles/storeComponent.module.css";
import { useRouter } from "next/router";

export const StoreHeader = props => {
  return (
    <section className={`${style.storeHeader} d-flex`}>
      <Link href="/stores">
        <a>
          <ArrowBackIcon />
        </a>
      </Link>
      <h5 className="d-flex m-auto">{props.storeName}</h5>
    </section>
  );
};

export const StoreBanner = props => {
  return (
    <section className={style.banner}>
      <h3>{props.bannerName}</h3>
    </section>
  );
};

export const StoreAddress = props => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Container className="storeAddress mx-auto px-3 mb-3">
      <Row>
        <Col className="mr-2" xs={12}>
          <Form
            className={`${style.searchform} w-100 px-1`}
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputGroup className="searchbar">
              <FormControl
                ref={register}
                name="search"
                placeholder="Search"
                aria-label="search"
                aria-describedby="user-search "
              />
              <InputGroup.Append>
                <InputGroup.Text id="user-search">
                  <img
                    className={style.searchIcon}
                    src={searchIcon}
                    alt="search products"
                  />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          {errors.search && <span>Not Available</span>}
        </Col>
      </Row>
      <Row className={`${style.store_address} d-flex`}>
        <div className={style.address}>
          <span className="icon mr-2">
            <RoomOutlinedIcon />
          </span>
          {props.address}
        </div>
        <div className={style.rating}>
          <span className="icon mr-2">
            <StarOutlinedIcon />
          </span>
          <p>4.5(200)</p>
        </div>
        <div className={style.deliveryTime}>
          <p className="float-left">Average Delivery Time</p>
          <p className="float-right">40 to 60 mins.</p>
        </div>
      </Row>
    </Container>
  );
};

export const DisplayOffers = ({ offers, linkName }) => {
  const fourOffers = offers.splice(0, 4);
  return (
    <>
      <div className={style.offers}>
        {offers.length > 4
          ? fourOffers.map(offer => (
              <div key={offer.id} className={styles.productStore}>
                <span className={styles.eyeicon}>
                  <img src={eyeIcon} alt="product view" />
                </span>
                {(
                  <img
                    className={styles.productImage}
                    src={offer.image}
                    alt={offer.name}
                  />
                ) || <Skeleton duration={2} />}

                <span className={styles.duration}>{offer.duration}</span>
                <Container className={styles.details}>
                  <Row>
                    <Col xs={8}>
                      <h5>{offer.name}</h5>
                    </Col>
                    <Col xs={4}>
                      <strong>{offer.price}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col xs={12}>
                      <Button variant="outline-success">Order</Button>
                    </Col>
                  </Row>
                </Container>
              </div>
            ))
          : null}
      </div>
      <div className={style.moreView}>
        <Link href={`/restaurant/${linkName}`}>
          <a>{offers.length - 4} more</a>
        </Link>
      </div>
    </>
  );
};

export const SeeMore = ({ moreOffers }) => {
  moreOffers.map(moreOffer => {
    <div className="moreOffers">
      <div key={moreOffer.id} className={styles.product}>
        <span className={styles.eyeicon}>
          <img src={eyeIcon} alt="product view" />
        </span>
        {(
          <img
            className={styles.productImage}
            src={moreOffer.image}
            alt={moreOffer.name}
          />
        ) || <Skeleton duration={2} />}

        <span className={styles.duration}>{moreOffer.duration}</span>
        <Container className={styles.details}>
          <Row>
            <Col xs={8}>
              <h5>{moreOffer.name}</h5>
            </Col>
            <Col xs={4}>
              <strong>{moreOffer.price}</strong>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <Button variant="outline-success">Order</Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>;
  });
};

export const CategoryView = ({ availableSubscribers }) => {
  return (
    <Container className="categoryview" fluid>
      {availableSubscribers.map(subscriber => {
        <Container className="view d-flex" fluid>
          <Row>
            <div className="thumbnail img-thumbnail"></div>
          </Row>
          <Row className={`${style.store_address} d-flex`}>
            <div>
              <h3>{subscriber.name}</h3>
            </div>
            <div className={style.address}>
              <span className="icon mr-2">
                <RoomOutlinedIcon />
              </span>
              {props.address}
            </div>
            <div className={style.rating}>
              <span className="icon mr-2">
                <StarOutlinedIcon />
                <p>4.5(200)</p>
              </span>
              <div className={style.subscriberStatus}>
                <p>Open</p>
              </div>
            </div>
            <div className={style.deliveryTime}>
              <p className="float-left">Average Delivery Time</p>
              <p className="float-right">40 to 60 mins.</p>
            </div>
          </Row>
        </Container>;
      })}
    </Container>
  );
};
