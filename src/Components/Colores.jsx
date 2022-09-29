import { Card } from "react-bootstrap"; 

const Colores = ({color}) => {
    return (
        <>
            <Card.Img className="caja1" style={{'background': color}}/>
                <Card.Body>
                  <Card.Title className="fw-lighter">{color}</Card.Title>
                </Card.Body>
        </>
    );
};

export default Colores;