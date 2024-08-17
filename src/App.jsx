import { Container } from "react-bootstrap";
import "./App.css";
import MovieWishlistContainer from "./components/MovieWishlistContainer";

function App() {
  return (
    <>
      <Container className="my-4">
        <MovieWishlistContainer />
      </Container>
    </>
  );
}

export default App;
