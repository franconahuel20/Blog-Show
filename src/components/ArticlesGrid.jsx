import mock from "../mocks/mock.json";
import Articles from "../components/Articles";
import { Container, CardGroup, Row, Col } from "react-bootstrap";

// se arma grid con mock (solo relleno), luego añadimos funcionalidad

const ArticlesGrid = () => {
  return (
    <>
      <Container>
        <h1 className="f-yellow">| Destacados </h1>
        <CardGroup>
          <Row xs={2} md={4} lg={5}>
            {mock.map((data) => (
              <Col>
                <Articles data={data} />
              </Col>
            ))}
          </Row>
        </CardGroup>
      </Container>
    </>
  );
};

export default ArticlesGrid;
