import {
  Container,
  InputGroup,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { searchIcon, filterIcon } from "../imports";

const Searchbar = () => {
  const { register, handleSubmit, watch, errors } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Container className="Home mx-auto">
      <Row>
        <Col className="mr-2" xs={9}>
          <Form className="m-auto" onSubmit={handleSubmit(onSubmit)}>
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
                    className="searchIcon"
                    src={searchIcon}
                    alt="search products"
                  />
                </InputGroup.Text>
              </InputGroup.Append>
            </InputGroup>
          </Form>
          {errors.search && <span>Not Available</span>}
        </Col>
        <Col xs={2}>
          <img
            src={filterIcon}
            className="filterIcon"
            alt="filter our products"
          />
        </Col>
      </Row>
      <style jsx>
        {`
          .searchIcon {
            width: 30px;
            height: 30px;
          }
          .filterIcon {
            width: 30px;
            height: 30px;
          }
        `}
      </style>
    </Container>
  );
};

export default Searchbar;
