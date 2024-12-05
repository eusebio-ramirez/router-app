import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { Col, Container, Row } from "react-bootstrap";

const ProductDetail = () => {
  const { id } = useParams();

  const { findProduct } = useContext(ProductContext);

  const { title, image, description, price } = findProduct(id);

  return (
    <Container fluid style={{ height: "100vh", width: "100vw" }}>
      <Row className="d-flex justify-content-center" style={{ height: "100%" }}>
        <Col md={6}>
          <Card.Img height={"50%"} src={image} />
        </Col>
        <Col md={6}>
          <Card>{title}</Card>
          <Card.Text>{description}</Card.Text>
          <Card.Text>{price}</Card.Text>
          <Button variant="primary">Buy</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
