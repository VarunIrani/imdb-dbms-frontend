import React, { Component } from 'react';
import {Card,CardDeck,Row,CardGroup,CardImg,CardImgProps,CardProps, Container} from 'react-bootstrap'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faPlay,faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { COLORS } from '../../colors';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
const titles = ['In theatres','Most watched','Top rated']


class MovieCards extends Component {
    constructor(props) {
		super(props);
		this.state = {
		};
	}

    

    render() { 
        const movieDetails = this.props.movieDetails;
        console.log(movieDetails);
        return ( 
            <div>
            {titles.map((value,index)=>(

            <Container style={{marginTop:50}}>
            <Row>
            <h1 style={{borderLeftStyle:'solid',borderLeftColor:COLORS.primary,borderWidth:5,paddingLeft:8,paddingRight:8}}>{value}</h1>
            <FontAwesomeIcon className="p-0 m-0" icon={faAngleRight} style={{color: 'black'}} size='3x'/>
            </Row>
            {movieDetails?(

            <Carousel responsive={responsive}>
<CardDeck>
  <Card>
    <Card.Img variant="top" src={movieDetails.Poster} />
    <Card.Body>
      <Card.Title>{movieDetails.Title}</Card.Title>
      <Row>
      <FontAwesomeIcon icon={faStar} style={{color: COLORS.primary}}/>
      <Card.Subtitle className="text-muted p-0 m-0 pl-2">{movieDetails.imdbRating}</Card.Subtitle>
      </Row>
    </Card.Body>
    <Card.Footer>
    <Row className="justify-content-center">
    <FontAwesomeIcon icon={faPlay} style={{color: COLORS.primary}}/>
      <small className="text-muted pl-2">Watch Trailer</small>
      </Row>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={movieDetails.Poster} />
    <Card.Body>
      <Card.Title>{movieDetails.Title}</Card.Title>
      <Row>
      <FontAwesomeIcon icon={faStar} style={{color: COLORS.primary}}/>
      <Card.Subtitle className="text-muted p-0 m-0 pl-2">{movieDetails.imdbRating}</Card.Subtitle>
      </Row>
    </Card.Body>
    <Card.Footer>
    <Row className="justify-content-center">
    <FontAwesomeIcon icon={faPlay} style={{color: COLORS.primary}}/>
      <small className="text-muted pl-2">Watch Trailer</small>
      </Row>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={movieDetails.Poster} />
    <Card.Body>
      <Card.Title>{movieDetails.Title}</Card.Title>
      <Row>
      <FontAwesomeIcon icon={faStar} style={{color: COLORS.primary}}/>
      <Card.Subtitle className="text-muted p-0 m-0 pl-2">{movieDetails.imdbRating}</Card.Subtitle>
      </Row>
    </Card.Body>
    <Card.Footer>
    <Row className="justify-content-center">
    <FontAwesomeIcon icon={faPlay} style={{color: COLORS.primary}}/>
      <small className="text-muted pl-2">Watch Trailer</small>
      </Row>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={movieDetails.Poster} />
    <Card.Body>
      <Card.Title>{movieDetails.Title}</Card.Title>
      <Row>
      <FontAwesomeIcon icon={faStar} style={{color: COLORS.primary}}/>
      <Card.Subtitle className="text-muted p-0 m-0 pl-2">{movieDetails.imdbRating}</Card.Subtitle>
      </Row>
    </Card.Body>
    <Card.Footer>
    <Row className="justify-content-center">
    <FontAwesomeIcon icon={faPlay} style={{color: COLORS.primary}}/>
      <small className="text-muted pl-2">Watch Trailer</small>
      </Row>
    </Card.Footer>
  </Card>
</CardDeck>



<CardDeck>
  <Card>
    <Card.Img variant="top" src={movieDetails.Poster} />
    <Card.Body>
      <Card.Title>{movieDetails.Title}</Card.Title>
      <Row>
      <FontAwesomeIcon icon={faStar} style={{color: COLORS.primary}}/>
      <Card.Subtitle className="text-muted p-0 m-0 pl-2">{movieDetails.imdbRating}</Card.Subtitle>
      </Row>
    </Card.Body>
    <Card.Footer>
    <Row className="justify-content-center">
    <FontAwesomeIcon icon={faPlay} style={{color: COLORS.primary}}/>
      <small className="text-muted pl-2">Watch Trailer</small>
      </Row>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={movieDetails.Poster} />
    <Card.Body>
      <Card.Title>{movieDetails.Title}</Card.Title>
      <Row>
      <FontAwesomeIcon icon={faStar} style={{color: COLORS.primary}}/>
      <Card.Subtitle className="text-muted p-0 m-0 pl-2">{movieDetails.imdbRating}</Card.Subtitle>
      </Row>
    </Card.Body>
    <Card.Footer>
    <Row className="justify-content-center">
    <FontAwesomeIcon icon={faPlay} style={{color: COLORS.primary}}/>
      <small className="text-muted pl-2">Watch Trailer</small>
      </Row>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={movieDetails.Poster} />
    <Card.Body>
      <Card.Title>{movieDetails.Title}</Card.Title>
      <Row>
      <FontAwesomeIcon icon={faStar} style={{color: COLORS.primary}}/>
      <Card.Subtitle className="text-muted p-0 m-0 pl-2">{movieDetails.imdbRating}</Card.Subtitle>
      </Row>
    </Card.Body>
    <Card.Footer>
    <Row className="justify-content-center">
    <FontAwesomeIcon icon={faPlay} style={{color: COLORS.primary}}/>
      <small className="text-muted pl-2">Watch Trailer</small>
      </Row>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src={movieDetails.Poster} />
    <Card.Body>
      <Card.Title>{movieDetails.Title}</Card.Title>
      <Row>
      <FontAwesomeIcon icon={faStar} style={{color: COLORS.primary}}/>
      <Card.Subtitle className="text-muted p-0 m-0 pl-2">{movieDetails.imdbRating}</Card.Subtitle>
      </Row>
    </Card.Body>
    <Card.Footer>
    <Row className="justify-content-center">
    <FontAwesomeIcon icon={faPlay} style={{color: COLORS.primary}}/>
      <small className="text-muted pl-2">Watch Trailer</small>
      </Row>
    </Card.Footer>
  </Card>
</CardDeck>


</Carousel>
            ):(<h1>Loading</h1>)}
</Container>
            ))}
            </div>

         );
    }
}
 
export default MovieCards;