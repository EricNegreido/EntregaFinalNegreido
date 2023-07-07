import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({stock}) => {
    
    return <> 
    <Card key={stock.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://d3ugyf2ht6aenh.cloudfront.net/stores/064/882/products/remera_certified_estampados_mockup_stich11-9a34e933fe9ed6a64a15965774918153-640-0.webp" />
            <Card.Body>
            <Card.Title>{stock.producto}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Link to={`/item/${stock.id}`}>
            <Button variant="primary">Go somewhere</Button>
            </Link>
            </Card.Body>
        </Card>
    
    </>
}

