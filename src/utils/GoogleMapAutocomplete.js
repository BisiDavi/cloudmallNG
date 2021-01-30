import React, { Component } from 'react';
import { withRouter } from 'next/router';
import { connect } from 'react-redux';
import { Form, Button, Container, Row, Col, Spinner } from 'react-bootstrap';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {
  withGoogleMap,
  GoogleMap,
  withScriptjs,
  InfoWindow,
  Marker
} from 'react-google-maps';
import Geocode from 'react-geocode';
import Autocomplete from 'react-google-autocomplete';
import { Layout, PageSpinner, Pageheader } from '../imports';
import { UserPreferredAddress } from '../store/action/userActions';
import style from '../styles/Location.module.css';

Geocode.setApiKey(process.env.API_KEY);
Geocode.enableDebug();

class GoogleMapAutocomplete extends Component {
  state = {
    address: '',
    mapPosition: {
      lat: this.props.center.lat,
      lng: this.props.center.lng
    },
    markerPosition: {
      lat: this.props.center.lat,
      lng: this.props.center.lng
    }
  };
  componentDidMount() {
    Geocode.fromLatLng(
      this.state.mapPosition.lat,
      this.state.mapPosition.lng
    ).then(
      response => {
        const address = response.results[0].formatted_address;

        console.log('address', address);

        this.setState({
          address: address ? address : ''
        });
      },
      error => {
        console.error(error);
      }
    );
  }
  /* 
  @param nextProps
  @param nextState
  @return {boolean} 
*/

  shouldComponentUpdate(nextProps, nextState) {
    if (
      this.state.markerPosition.lat !== this.props.center.lat ||
      this.state.address !== nextState.address
    ) {
      return true;
    } else if (this.props.center.lat === nextProps.center.lat) {
      return false;
    }
  }

  onChange = event => {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  };

  onInfoWindowClose = event => {
    event.preventDefault();
  };

  onMarkerDragEnd = event => {
    if (event.cancelable) event.preventDefault();
    let newLat = event.latLng.lat(),
      newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
      response => {
        const address = response.results[0].formatted_address;
        this.setState({
          address: address ? address : '',
          markerPosition: {
            lat: newLat,
            lng: newLng
          },
          mapPosition: {
            lat: newLat,
            lng: newLng
          }
        });
      },
      error => {
        console.error(error);
      }
    );
  };

  handleFormSubmit = e => {
    e.preventDefault();
    console.log('i was clicked');
    this.props.userPreferredAddress(this.state.address, this.props.router);
  };

  onPlaceSelected = place => {
    console.log('state', this.state);
    const address = place.formatted_address,
      latValue = place.geometry.location.lat(),
      lngValue = place.geometry.location.lng();

    console.log('formatted_address', address);

    this.setState({
      address: address ? address : '',
      markerPosition: {
        lat: latValue,
        lng: lngValue
      },
      mapPosition: {
        lat: latValue,
        lng: lngValue
      }
    });
  };

  render() {
    const { loading } = this.props.userLocation;

    console.log('loading', loading);

    const AsyncMap = withScriptjs(
      withGoogleMap(props => (
        <GoogleMap
          google={this.props.google}
          defaultZoom={this.props.zoom}
          defaultCenter={{
            lat: this.state.mapPosition.lat,
            lng: this.state.mapPosition.lng
          }}
        >
          <InfoWindow
            onClose={this.onInfoWindowClose}
            position={{
              lat: this.state.markerPosition.lat + 0.0018,
              lng: this.state.markerPosition.lng
            }}
          >
            <div>
              <span style={{ padding: 0, margin: 0 }}>
                {this.state.address}
              </span>
            </div>
          </InfoWindow>
          <Marker
            google={this.props.google}
            name={'Please select your current location'}
            draggable={true}
            onDragEnd={this.onMarkerDragEnd}
            position={{
              lat: this.state.markerPosition.lat,
              lng: this.state.markerPosition.lng
            }}
          ></Marker>
          <Autocomplete
            style={{
              height: '40px',
              width: ' 90%',
              borderRadius: '5px',
              display: 'flex',
              background: '#ffffff',
              border: '1px solid #f29100',
              boxSizing: 'border-box'
            }}
            placeholder="Enter your Preferred Address"
            onPlaceSelected={this.onPlaceSelected}
            types={['geocode']}
            componentRestrictions={{ country: 'ng' }}
            required
          />
        </GoogleMap>
      ))
    );

    let map;
    if (this.props.center.lat !== undefined) {
      map = (
        <Container className="location" fluid>
          <Pageheader title="Enter your Address" />
          <Row className={style.header}>
            <Col>
              <div
                className={style.arrow}
                onClick={() => this.props.router.back()}
              >
                <ArrowBackIcon />
              </div>
              <h3 className="text-center">Enter your Address</h3>
            </Col>
          </Row>
          <Row>
            <Col lg={9} xs={12} className={`${style.mapContainer} 100vh px-0`}>
              <AsyncMap
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.API_KEY}&libraries=places`}
                loadingElement={<PageSpinner />}
                containerElement={<div style={{ height: this.props.height }} />}
                mapElement={<div style={{ height: `100%` }} />}
              />
            </Col>
            <Col lg={3} xs={12} className={`${style.formAddress} 100vh`}>
              <Form onSubmit={this.handleFormSubmit}>
                <Form.Group controlId="userAddress">
                  <Form.Label className={`${style.formText} mb-5`}>
                    Press the confirm button if this your preferred address
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    className={style.inputField}
                    onChange={this.onChange}
                    value={this.state.address}
                    readOnly="readOnly"
                    required
                  />
                  {loading ? (
                    <Button variant="primary" className="py-2" disabled>
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        className="mr-3"
                        role="status"
                        aria-hidden="true"
                      />
                      <span className="sr-only">Loading...</span> Please wait
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      className={`${style.formbutton}
                  btn btn-primary p-2 mt-lg-5 mb-2 m-auto text-white`}
                    >
                      Confirm Address
                    </Button>
                  )}
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      );
    } else {
      map = <PageSpinner />;
    }
    return map;
  }
}

const mapStateToProps = state => ({
  userLocation: state.location
});

const mapDispatchToProps = dispatch => ({
  userPreferredAddress: (address, router) =>
    dispatch(UserPreferredAddress(address, router))
});

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(GoogleMapAutocomplete)
);
