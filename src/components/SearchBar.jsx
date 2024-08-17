/* eslint-disable react/prop-types */
import { Stack, Button, Form } from "react-bootstrap";
import { useRef } from "react";
const SearchBar = (props) => {
  const { searchMovie } = props;

  const searchInputRef = useRef(null);

  const handleOnClick = (searchInputRef) => {
    searchMovie(searchInputRef.current.value);
    searchInputRef.current.value = "";
  };

  return (
    <Stack direction="horizontal" gap={4}>
      <Form.Control
        size="lg"
        type="text"
        placeholder="Enter movie title"
        ref={searchInputRef}
      />
      <Button
        variant="outline-primary"
        size="lg"
        onClick={() => handleOnClick(searchInputRef)}
      >
        Search
      </Button>
    </Stack>
  );
};

export default SearchBar;
