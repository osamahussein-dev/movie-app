import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${"https://api.themoviedb.org/3/movie/popular"}?api_key=${"1e24799ceafc73bd6e73ad7c2a8f695b"}`
      )
      .then((response) => {
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <Container className="my-4">
      <h1 className="text-center">Popular Movies</h1>
      <Row xs={1} sm={2} md={3} lg={4} className="g-4">
        {movies.map((movie) => (
          <Col key={movie.id}>
            <Card>
              <Card.Img
                variant="top"
                src={`${"https://image.tmdb.org/t/p/w500"}${movie.poster_path}`}
                alt={movie.title}
              />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Link to={`/movies/${movie.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Movies;
