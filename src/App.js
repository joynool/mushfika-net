import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/Container/About";
import Contact from "./Pages/Container/Contact";
import Services from "./Pages/Container/Services";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Corporate from "./Pages/Packages/Corporate";
import Regular from "./Pages/Packages/Regular";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home setModalShow={setModalShow} />} />
          <Route path="/home" element={<Home setModalShow={setModalShow} />} />
          <Route path="services" element={<Services />} />
          <Route path="normal" element={<Regular />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="about" element={<About />} />
          <Route
            path="contact"
            element={<Contact setModalShow={setModalShow} />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </BrowserRouter>
    </>
  );
}

export default App;
