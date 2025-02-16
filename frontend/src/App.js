import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./App.css";

import { BrowserRouter as Router, Routes, Route, Link, useSearchParams } from "react-router-dom";
import { Container, Navbar, Nav, Card, Button, Row, Col, Image, Badge, ListGroup, Spinner } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {

  const usRef = useRef(null);
  const msRef = useRef(null);
  const proRef = useRef(null);
  const techRef = useRef(null);
  const jourRef = useRef(null);

  const scrollToMs = () => {
    if (msRef.current) {
      msRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToUs = () => {
    if (usRef.current) {
      usRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToPro = () => {
    if (proRef.current) {
      proRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToTech = () => {
    if (techRef.current) {
      techRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const scrollToJour = () => {
    if (jourRef.current) {
      jourRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Container fluid className="p-0 full-height m-0">
      <div className="bg-image position-relative vh-100" 
           style={{
             backgroundImage: "url('/bcgH5.png')",
             backgroundColor: "white",
             backgroundSize: "cover",
             backgroundPosition: "center bottom",
             backgroundRepeat: "no-repeat"
           }}>
        <div className="position-relative d-flex align-items-center justify-content-center h-100 text-white">
          <h1 className="display-3 fw-bold text-shadow">Explore sound.</h1>
        </div>
      </div>
      <Container fluid className="home-links-container d-flex justify-content-between align-items-center py-3">
        <div className="text-right">
          <button className="home-link" onClick={scrollToUs}>
            Us
          </button>
          <button className="home-link" onClick={scrollToMs}>
            Our mission
          </button>
          <button className="home-link" onClick={scrollToPro}>
            Products
          </button>
          <button className="home-link" onClick={scrollToTech}>
            Technology
          </button>
          <button className="home-link" onClick={scrollToJour}>
            Our journey
          </button>
        </div>
        <div className="text-left">
          <Link className="downloads-link" to="/downloads">
            All products
          </Link>
        </div>
      </Container>
      <Container fluid className="text-center p-0">
        <div className="bg-image position-relative mt-0 p-5 w-100" style={{
             backgroundImage: "url('/bcgG3.png')",
             backgroundColor: "white",
             backgroundSize: "cover",
             backgroundPosition: "center bottom",
             backgroundRepeat: "no-repeat"
           }}
        >
          <div className="open-block mt-5" ref={usRef} id="us">
            <h2 className="display-5 fw-bold text-shadow">Us</h2>
            <p className="display-6">The products on this page are made and supported by a small team of one. Everything is 
              open source, everything is original, and everything is creative. We are producers, and our 
              goal is to make unique and interesting plugins that transform sounds from bland to 
              tasty.
            </p>
          </div>
          <div className="open-block mt-5" ref={msRef} id="mission-statement">
            <h2 className="display-5 fw-bold text-shadow">Our Mission</h2>
            <p className="display-6">Our mission is to provide innovative tools that inspire musicians to create without limits.</p>
          </div>
        </div>
        
        <div className="flex-wrap home-links-container d-flex justify-content-center align-items-center py-3" ref={proRef}>
          <Card className="shadow product-card m-3 h-100" style={{ width: "18rem" }}>
              <Link to={`/downloads`} className="text-decoration-none text-dark flex-grow-1">
                <Image src={`/noise.jpg`} fluid className="p-3" alt={`Noise vst image.`}/>
                <Card.Body>
                  <Card.Title>Noise</Card.Title>
                  <Card.Text>A lightwight noise effect.</Card.Text>
                </Card.Body>
              </Link>
          </Card>
          <Card className="shadow product-card m-3 h-100" style={{ width: "18rem" }}>
              <Link to={`/downloads`} className="text-decoration-none text-dark flex-grow-1">
                <Image src={`/fQuantizer.jpg`} fluid className="p-3" alt={`Noise vst image.`}/>
                <Card.Body>
                  <Card.Title>fQuantizer</Card.Title>
                  <Card.Text>A frequency quantizer effect.</Card.Text>
                </Card.Body>
              </Link>
          </Card>
        </div>

        <div className="bg-image position-relative mt-0 p-5 w-100" style={{
             backgroundImage: "url('/bcgG1.png')",
             backgroundColor: "white",
             backgroundSize: "cover",
             backgroundPosition: "center bottom",
             backgroundRepeat: "no-repeat"
           }}
        >
          <div className="open-block mt-5" ref = {techRef}>
          <h2>The Technology Behind Our Plugins</h2>
          <p>We leverage the powerful VST3 SDK from Setinberg to bring industry-standard quality 
            to our products. The products are written in C++ and the graphical interfaces are made
            using GIMP. For a great introduction to the VST3 SDK, 
            I suggest watching the following <a href="https://youtu.be/zdgytoRLKj0?si=1JNbXEr_CoX_nHY0">video</a>.
          </p>
        </div>
        <div className="open-block mt-5" ref={jourRef}>
          <h2>Our Journey</h2>
          <p>We started as musicians and engineers with a passion for sound, and now we're dedicated to crafting tools that elevate music production.</p>
        </div>
        </div>
      </Container>
    </Container>
  );
};

const About = () => (
    <Container className="mt-5 text-center full-height">
      <div className="open-block">
        <h2>Our Product Philosophy</h2>
        <p>We believe in creating tools that empower musicians, providing them with innovative and intuitive solutions to push their creative boundaries.</p>
      </div>
      <Row className="align-items-center mt-5">
        <Col md={6} className="text-md-start text-center">
          <Image src="/PORTRAIT.jpg" rounded fluid style={{ maxWidth: "300px" }} />
        </Col>
        <Col md={6} className="text-center">
          <h2 className="fw-bold">Tyler Hickerson</h2>
          <p>Producer</p>
          <p>Tyler started this project with lest than one year of experience in music production
            or sound engineering and over 5 years of experience in programming. He runs the 
            project to find sounds and effects that he hasn't heard of before and because
            of his passion for music production.
          </p>
        </Col>
      </Row>
      <div className="open-block mt-5 mb-5">
        <h2>Contact Us</h2>
        <p>Email: tylerhickersonbe@gmail.com</p>
      </div>
    </Container>
  );

const NotFoundPage = () => {
  return (
    <Container className="text-center full-height" style={{ marginTop: "10%" }}>
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

  const API_URL = "https://tylerhbe-projects.onrender.com";

  const [files, setFiles] = useState([]);

  useEffect(() => {
      axios.get(`${API_URL}/downloads`).then(response => {
          setFiles(response.data);
          console.log(files)
      });
  }, []);

  return (
    <Container className="mt-5 full-height">
      <h1 className="text-start">Downloads</h1>
      <h3 className="text-muted text-start mt-3">Effects</h3>
      <Row className="g-4">
        {files.map(file => (
          <Col md={6} lg={4} key={file.name}>
            <Card className="shadow product-card h-100 d-flex flex-column">
              <Link to={`/product/?filename=${file.file}`} className="text-decoration-none text-dark flex-grow-1">
                <Image src={`/${file.image}`} fluid className="p-3" alt={`${file.imageDescription}`}/>
                <Card.Body>
                  <Card.Title>{file.name}</Card.Title>
                  <Card.Text>{file.description}</Card.Text>
                </Card.Body>
              </Link>
              <Card.Footer className = "mt-auto">{file.downloads} downloads, {file.fileSize}</Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

function DownloadPage() {

  const API_URL = "https://tylerhbe-projects.onrender.com";

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

  const handleDownload = async (filename) => {
    try {
      const response = await axios.get(`${API_URL}/download/${filename}`, {
        responseType: 'blob', // Important: tells Axios to handle the response as a file (Blob)
      });
  
      // Create a URL for the Blob response and trigger the download
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', filename); // Set the default download file name
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link); // Clean up the DOM
    } catch (error) {
      console.error("Error downloading the file:", error);
      alert("Failed to download file.");
    }
  };

  return (
    <Container className="mt-4 full-height">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card className="shadow-lg p-3 mb-5 bg-white rounded">
                        <Row>
                            <Col md={4} className="d-flex align-items-center">
                                {data ? (
                                  <Card.Img variant="top" src={`/${data ? data.image : "null.img"}`} alt={`${data ? data.imageDescription : "Loading."}`} />
                                ) : (
                                  <div className="d-flex align-items-center justify-content-center w-100 h-100">
                                        <Spinner animation="border" role="status">
                                            <span className="visually-hidden">Loading...</span>
                                        </Spinner>
                                  </div>
                                )}
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                {loading && <p>Loading...</p>}
                                {error && <p className="text-red-500">{error}</p>}
                                {data ? (
                                  <div>
                                    <Card.Title as="h2">{`${data.name}`}</Card.Title>
                                    <Badge bg="success" className="mb-2">{`${data.downloads} Downloads`}</Badge>
                                    <Card.Text className="text-muted">
                                    {`${data.description}`}
                                    </Card.Text>
                                    <ListGroup variant="flush" className="mb-3">
                                        <ListGroup.Item><strong>Version:</strong> 1.0.0</ListGroup.Item>
                                        <ListGroup.Item><strong>Compatible with:</strong> Windows, macOS, Linux</ListGroup.Item>
                                        <ListGroup.Item><strong>Last Updated:</strong> January 2024</ListGroup.Item>
                                    </ListGroup>
                                    <Button onClick={() => { handleDownload(filename); fetchData(filename); }} variant="primary" size="lg" className="w-100">Download Now</Button>
                                  </div> ) : (
                                    <p>
                                      Null!
                                    </p>
                                  )}
                                  <Button onClick={() => fetchData(filename)} className="mt-4 clear-button" disabled={!filename}>
                                    Refresh Data
                                  </Button>
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>
            </Row>
        </Container>
  );

}

const Navigation = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">TylerHBE</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/about">About</Nav.Link>
        <Nav.Link as={Link} to="/downloads">Downloads</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
);

const Footer = () => (
  <footer className="text-center py-3 mt-0 bg-dark text-light">
    <p>&copy; 2025 Tyler Hickerson. All rights reserved.</p>
    <p><a className="text-secondary" href="/Home">Home</a></p>
    <p><a className="text-secondary" href="/about">About</a></p>
    <p><a className="text-secondary" href="/downloads">Downloads</a></p>
  </footer>
);

const App = () => (
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Home" element={<Home />} />
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