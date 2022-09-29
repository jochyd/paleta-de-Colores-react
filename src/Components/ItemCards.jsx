import { Card, Button, Row, Col } from "react-bootstrap";
import Colores from "./Colores";

const ItemCards = ({arregloColores, borrarColores}) => {
    return (
        <Row>
            {arregloColores.map((color,posicion)=> 
                    <Col className="text-center" md={3}>
                <Card className="align-item-center p-3 mb-3">
                <Colores key={posicion} color={color}></Colores>
                  <Button variant="danger" onClick={()=> borrarColores(color)}>Borrar</Button>
              </Card>
                </Col> )
            }
       
        </Row>
    );
};

export default ItemCards;