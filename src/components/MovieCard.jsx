/* eslint-disable react/prop-types */
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

const MovieCard = (props) => {
  const { movie = {}, removeMovieFromWishlist } = props;

  const { Title, Poster } = movie;

  const handleOnClick = () => {
    removeMovieFromWishlist(movie.imdbID);
  };

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={Poster} height={300} />
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
      </Card.Body>

      {removeMovieFromWishlist && (
        <Card.Footer>
          <Button variant="danger" onClick={handleOnClick}>
            Remove
          </Button>
        </Card.Footer>
      )}
    </Card>
  );
};

export default MovieCard;
