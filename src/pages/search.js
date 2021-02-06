import React from 'react';
import { InputGroup, Container, Row, Col, FormControl } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Searchbar.module.css';

const SearchForm = () => {
  return (
    <Container className={`${styles.Searchform} Searchform`} fluid>
      <Row>
        <Col>
          <InputGroup>
            <InputGroup.Prepend>
              <InputGroup.Text className={styles.inputText}>
                <FontAwesomeIcon
                  className={style.searchIcon}
                  icon={faSearch}
                  size="2x"
                />
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
