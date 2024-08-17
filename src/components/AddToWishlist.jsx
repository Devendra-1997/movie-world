/* eslint-disable react/prop-types */
import { Alert, Button, Stack } from "react-bootstrap";

const AddToWishlist = (props) => {
  const { movie, wishlist = [], addMovieToWishlist } = props;

  const handleOnClick = (genre) => {
    const movieWithGenre = { ...movie, Genre: genre };

    addMovieToWishlist(movieWithGenre);
  };

  const disableButtons = wishlist.find((item) => item.imdbID === movie.imdbID);

  return (
    <Stack className="my-auto">
      <Alert>{movie.Plot}</Alert>

      <Stack direction="horizontal" gap={4}>
        <Button
          variant="outline-primary"
          onClick={() => handleOnClick("action")}
          disabled={disableButtons}
        >
          + Add to Action
        </Button>

        <Button
          variant="outline-success"
          onClick={() => handleOnClick("comedy")}
          disabled={disableButtons}
        >
          + Add to Comedy
        </Button>
      </Stack>
    </Stack>
  );
};

export default AddToWishlist;
