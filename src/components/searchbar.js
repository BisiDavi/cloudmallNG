import {
  Container,
  InputGroup,
  Row,
  Col,
  Form,
  FormControl
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import {  filterIcon } from "../imports";
import style from "../styles/Searchbar.module.css";

const Searchbar = () => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Container className="Home mx-auto">
      <Row>
        <Col className="pr-0" xs={10}>
          <Form
            className={style.searchform}
            onSubmit={handleSubmit(onSubmit)}
          >
            <InputGroup className="searchbar">
              <InputGroup.Prepend className={style.inputprepend}>
                <InputGroup.Text id="user-search">
                  <FontAwesomeIcon
                    className={style.searchIcon}
                    icon={faSearch}
                    size="2x"
                  />
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                ref={register}
                name="search"
                placeholder="Search for products or store"
                aria-label="search"
                aria-describedby="user-search "
              />
            </InputGroup>
          </Form>
          {errors.search && <span>Not Available</span>}
        </Col>
        <Col xs={2}>
          <img
            src={filterIcon}
            className={style.filterIcon}
            alt="filter our products"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Searchbar;
