import React from 'react';
import { Card, CardColumns, CardDeck, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SearchPage = ({searchText,movies}) => {
    return ( 
        <Container className="mt-5">
        {(movies==null)?
        <Row className="text-muted text-center h4 justify-content-center">
            Search found no results
        </Row>:
        <Container>
        <Row className="text-muted text-center h4 justify-content-center">
            Search results for "{searchText}"
        </Row>
        <CardColumns>
					{movies.map((movie, i) => (
						<Card className="cardd shadow-sm rounded">
                            <Link to={`/movie?title=${movie.title}`}>
								<Card.Img variant="top" height="400" width="300" src={movie.poster} />
                            </Link>    
							<Card.Body>
									<Card.Title className="text-black p-0 m-0 pl-2 h3" style={{color:'black'}}>{movie.title}</Card.Title>
							</Card.Body>
						
						</Card>
					))}
				</CardColumns>
                </Container>
        }
        </Container>        
     );
}
 
export default SearchPage;