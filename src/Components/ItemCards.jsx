import { Card, Button, Row, Col } from "react-bootstrap";

const ItemCards = () => {
    return (
        <Row>
        <Col className="text-center" md={3}>
        <Card className="align-content-center p-3">
        <Card.Img className="caja1" style={{backgroundColor: "lightblue"}}/>
        <Card.Body>
          <Card.Title className="fw-lighter">Nombre del color</Card.Title>
        </Card.Body>
          <Button variant="danger">Borrar</Button>
      </Card>
        </Col>
        </Row>
    );
};

export default ItemCards;