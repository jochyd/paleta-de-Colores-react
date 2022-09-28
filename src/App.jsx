import { Container } from "react-bootstrap";
import FormCard from "./Components/FormCard";

function App() {
  return (
   <>
   <Container>
    <h1 className="display-5 text-center my-5">
      Colores
    </h1>
    <hr />
    <FormCard></FormCard>
   </Container>
   </>
  );
}

export default App;
