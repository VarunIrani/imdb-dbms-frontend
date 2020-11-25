import React, {Component} from 'react';
import {ReactComponent as IMDBLogo} from "../../assets/img/imdb.svg"
import {Button, Col, FormControl, InputGroup, Row} from 'react-bootstrap';
import {COLORS} from "../../colors";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from "@fortawesome/free-solid-svg-icons";


class IMDBNavbar extends Component {
  render() {
    return (
      <div className='px-5 py-4'>
        <Row>
          <Col>
            <Row>
              <Col lg={2}>
                <IMDBLogo className="p-0 m-0 w-100 h-100"/>
              </Col>
              <Col lg={10} className='my-auto'>
                <InputGroup>
                  <FormControl
                    placeholder="Search for Movies, TV Shows and more.."
                    aria-label="Search"
                    aria-describedby="search-bar"
                  />
                  <InputGroup.Append>
                    <Button style={{
                      backgroundColor: COLORS.primary,
                      border: `1px solid ${COLORS.primary}`}}>
                      <FontAwesomeIcon icon={faSearch}/>
                    </Button>
                  </InputGroup.Append>
                </InputGroup>
              </Col>
            </Row>
          </Col>
          <Col className='d-flex align-items-center justify-content-end'>
            <Row>
              <p className='font-weight-bold p-0 m-0 mr-5'>Movies</p>
              <p className='font-weight-bold p-0 m-0 mr-5'>TV Shows</p>
              <p className='font-weight-bold p-0 m-0 mr-4'>Photos</p>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default IMDBNavbar;