import React, { useEffect, useState } from "react";
import axios from "axios";

import { BrowserRouter as Router, Routes, Route, Link, useSearchParams } from "react-router-dom";
import { Container, Navbar, Nav, Card, Button, Row, Col, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => (
    <Container fluid className="p-0">
      <div className="bg-image position-relative vh-100" 
           style={{
             backgroundImage: "url('/bcgH2.jpg')",
             backgroundSize: "cover",
             backgroundPosition: "center",
             backgroundRepeat: "no-repeat"
           }}>
        <div className="position-absolute top-0 start-0 w-100 h-100" 
             style={{ backgroundColor: "rgba(0, 0, 0, 0.25)" }}>
        </div>
        <div className="position-relative d-flex align-items-center justify-content-center h-100 text-white">
          <h1 className="display-3 fw-bold text-shadow">Exclusive VST Deals - Limited Time!</h1>
        </div>
      </div>
      <Container className="mt-5 text-center">
        <div className="open-block">
          <h2>Unlock Your Creativity</h2>
          <p>Our mission is to provide innovative tools that inspire musicians to create without limits.</p>
        </div>
        <div className="d-flex justify-content-center flex-wrap mt-5">
          <Card className="m-3 shadow product-card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>VST Plugin 1</Card.Title>
              <Card.Text>A powerful synthesizer for electronic music production.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3 shadow product-card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>VST Plugin 2</Card.Title>
              <Card.Text>High-quality reverb effect for professional mixing.</Card.Text>
            </Card.Body>
          </Card>
          <Card className="m-3 shadow product-card" style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title>VST Plugin 3</Card.Title>
              <Card.Text>Advanced EQ for precise audio shaping.</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="open-block mt-5">
          <h2>The Technology Behind Our Plugins</h2>
          <p>We leverage the powerful VST3 SDK to bring industry-standard quality to our products.</p>
        </div>
        <div className="open-block mt-5">
          <h2>Our Journey</h2>
          <p>We started as musicians and engineers with a passion for sound, and now we're dedicated to crafting tools that elevate music production.</p>
        </div>
      </Container>
    </Container>
  );

const About = () => (
    <Container className="mt-5 text-center">
      <div className="open-block">
        <h2>Our Product Philosophy</h2>
        <p>We believe in creating tools that empower musicians, providing them with innovative and intuitive solutions to push their creative boundaries.</p>
      </div>
      <Row className="align-items-center mt-5">
        <Col md={6} className="text-md-start text-center">
          <Image src="/PORTRAIT.jpg" rounded fluid style={{ maxWidth: "300px" }} />
        </Col>
        <Col md={6} className="text-center">
          <h2 className="fw-bold">John Doe</h2>
          <p>Founder & CEO</p>
          <p>John has over 20 years of experience in audio software development and music production. His dedication to high-quality sound and user-friendly design has made our VSTs industry favorites.</p>
        </Col>
      </Row>
      <div className="open-block mt-5">
        <h2>Contact Us</h2>
        <p>Email: support@vststore.com</p>
        <p>Phone: +1 (234) 567-8900</p>
        <p>Address: 123 Music Lane, Sound City, SC 12345</p>
      </div>
    </Container>
  );

const NotFoundPage = () => {
  return (
    <Container className="text-center" style={{ marginTop: "10%" }}>
      <Row>
        <Col>
          <h1 style={{ fontSize: "10rem", color: "#e74c3c" }}>404</h1>
          <h2>Oops! Page Not Found</h2>
          <p>
            The page you're looking for doesn't exist. You may have mistyped
            the address or the page may have moved.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

function Downloads() {

  const API_URL = "http://localhost:5000";

  const [files, setFiles] = useState([]);

  useEffect(() => {
      axios.get(`${API_URL}/downloads`).then(response => {
          setFiles(response.data);
          console.log(files)
      });
  }, []);

  const handleDownload = (filename) => {
      window.location.href = `${API_URL}/download/${filename}`;
  };

  return (
    <Container className="mt-5">
      <h1 className="text-start">Downloads</h1>
      <h3 className="text-muted text-start mt-3">Effects</h3>
      <Row className="g-4">
        {files.map(file => (
          <Col md={6} lg={4} key={file.name}>
            <Card className="shadow product-card h-100">
              <Link to={`/product/?filename=${file.file}`} className="text-decoration-none text-dark">
                <Image src={`/${file.image}`} fluid className="p-3" alt={`${file.imageDescription}`}/>
                <Card.Body>
                  <Card.Title>{file.name}</Card.Title>
                  <Card.Text>{file.description}</Card.Text>
                  <Card.Footer>{file.downloads} downloads, {file.fileSize}</Card.Footer>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

function DownloadPage() {

  const API_URL = "http://localhost:5000";

  const [searchParams] = useSearchParams();
  const filename = searchParams.get("filename");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (filename) {
      fetchData(filename);
    }
    else {
      return NotFoundPage;
    }
  }, [filename]);

  const fetchData = async (x) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}/downloads/${x}`);
      setData(response.data);
    } catch (err) {
      setError("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container className="mt-5">
      <h1 className="text-start">Download</h1>
            <Card className="shadow product-card h-100">
                <Card.Body>
                  <h1 className="text-xl font-bold mb-4">Query Fetcher</h1>
                  {loading && <p>Loading...</p>}
                  {error && <p className="text-red-500">{error}</p>}
                  {data ? (
                    <div>
                      <p className="bg-gray-100 p-2 rounded text-sm overflow-auto">
                        {JSON.stringify(data, null, 2)}
                      </p>
                      <Image src={`/${data.image}`} fluid className="p-3" alt={`${data.imageDescription}`}/>
                    </div>
                    
                  ) : (
                    <p>
                      Null!
                    </p>
                  )}
                  <Button onClick={() => fetchData(filename)} className="mt-4" disabled={!filename}>
                    Refresh Data
                  </Button>
                </Card.Body>
            </Card>
    </Container>
  );

}

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">VST Store</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/downloads">Downloads</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const Footer = () => (
  <footer className="text-center py-3 mt-5 bg-dark text-light">
    <p>&copy; 2025 VST Store. All rights reserved.</p>
  </footer>
);

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/downloads" element={<Downloads />} />
      <Route path="/product/" element={<DownloadPage />}/>
    </Routes>
    <Footer />
  </Router>
);

export default App;


const API_URL = "http://localhost:5000";

function App2() {
    const [files, setFiles] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/files`).then(response => {
            setFiles(response.data);
        });
    }, []);

    const handleDownload = (filename) => {
        window.location.href = `${API_URL}/download/${filename}`;
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>Project Files</h1>
            <ul>
                {files.map(file => (
                    <li key={file.name} style={{ marginBottom: "10px" }}>
                        <strong>{file.name}</strong> (Downloaded {file.downloadCount} times)
                        <button onClick={() => handleDownload(file.name)} style={{ marginLeft: "10px" }}>
                            Download
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}