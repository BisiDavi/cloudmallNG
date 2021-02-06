import React from 'react';
import { InputGroup, Container, Row, Col, FormControl } from 'react-bootstrap';
import styles from '../styles/layout.module.css';

const SearchForm = () => {
  return (
    <Container className={`${styles.Searchform} Searchform`} fluid>
      <Row>
        <Col>
          <InputGroup className="">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon1" className={styles.inputText}>
                <i className="fas fa-search"></i>
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              className={styles.formControl}
              placeholder="Search"
              aria-label="search"
              aria-describedby="search"
            />
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default SearchForm;
