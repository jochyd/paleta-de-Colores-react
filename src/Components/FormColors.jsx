import { useEffect, useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./formCard.css";
import ItemCards from "./ItemCards";

const FormColors = () => {

  const coloresLocalStorage = JSON.parse(localStorage.getItem('listaColores')) || [];

  const [color, setColor] = useState("");

  const [arregloColores, setArregloColores] = useState(coloresLocalStorage);

  const  [cajitaColores, setCajitaColores] = useState("");
  
  useEffect(() => {
    console.log(color);
    localStorage.setItem("listaColores", JSON.stringify(arregloColores));
  }, [arregloColores]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloColores([...arregloColores, color]);
    setColor("");
  };

  const borrarColores = (borrar) =>{
    let arregloModificado = arregloColores.filter((item)=> item !== borrar);
    setArregloColores(arregloModificado);
  }

  const cambiarColor = (colorIngresado) =>{
    setCajitaColores(colorIngresado);
    setColor (colorIngresado);
  }

  return (
    <>
      <Container>
        <h1 className="display-4 fw-lighter text-center my-5">
          Elegi el color de la Cajita!
        </h1>
        <hr />
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3 d-flex" controlId="formColors">
            <div
              className="caja1"
              style={{ 'background': cajitaColores }}
            ></div>
            <Form.Control
              type="text"
              placeholder="Ingresa Un Color en Ingles"
              onChange={(e) => cambiarColor(e.target.value)}
              value={color}
            />
            <Button variant="primary" type="submit">
              Guardar
            </Button>
          </Form.Group>
        </Form>
        <ItemCards arregloColores={arregloColores} borrarColores={borrarColores}></ItemCards>
      </Container>
    </>
  );
};

export default FormColors;
