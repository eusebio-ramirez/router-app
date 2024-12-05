import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Button, Card, Col, Container, Row, Spinner } from "react-bootstrap";
import { Link } from "react-router";
import { ProductContext } from "../../context/ProductContext";
import { productPath } from "../../constant";

const ProductList = () => {
  const { setProducts, products } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError(err.message || "Error fetching products");
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);



  if (loading)
    return (
      <Container
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="info" />
        <Spinner animation="grow" variant="info" />
      </Container>
    );
  if (error) return <p>Error: {error}</p>;

  return (
    <Container style={{ height: "100vh", width: "100vw" }}>
      <Row>
        {products.map((product) => (
          <Col md={4} key={product.id} className="pt-2">
            <Card style={{ width: "18rem", height: "18rem" }}>
              <Card.Body>
                <Card.Img style={{ height: "10rem" }} src={product.image} />
                <Card.Text>{product.price}</Card.Text>
                <Link to={`${productPath}/${product.id}`}>
                  <Button>Detail</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductList;
