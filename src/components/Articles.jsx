import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Article = ({ data }) => {
  return (
    <>
      <Link to={`/article/${data.id}`}>
        <Card
          className="my-2"
          style={{ height: "95%", backgroundColor: "grey" }}
        >
          <Card.Body style={{ height: "50%" }}>
            <Card.Img
              variant="top"
              style={{ height: "100%", width: "100%" }}
              src={data.image}
            />
          </Card.Body>
          <Card.Footer>
            <h4>{data.name}</h4>
            <strong>{data.description}</strong>
          </Card.Footer>
        </Card>
      </Link>
    </>
  );
};

export default Article;
