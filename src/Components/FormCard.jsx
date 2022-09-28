import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import "./formCard.css";

const FormColors = () => {
  return (
    <>
    <Container>
     <h1 className="display-4 fw-lighter text-center my-5">Elegi el color de la Cajita!</h1>
      <hr />
        <Form>
          <Form.Group className="mb-3 d-flex" controlId="formColors">
              <div className="caja1" style={{backgroundColor: "lightblue"}}></div>
            <Form.Control
              type="text"
              placeholder="Ingresa Un Color en Ingles"
            />
          <Button variant="primary" type="submit">
            Guardar
          </Button>
          </Form.Group>
        </Form>
    </Container>
    </>
  );
};

export default FormColors;
