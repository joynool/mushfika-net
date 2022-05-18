import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Pages/Container/About";
import Contact from "./Pages/Container/Contact";
import Services from "./Pages/Container/Services";
import Home from "./Pages/Home/Home";
import NotFound from "./Pages/NotFound/NotFound";
import Corporate from "./Pages/Packages/Corporate";
import Regular from "./Pages/Packages/Regular";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="services" element={<Services />} />
          <Route path="normal" element={<Regular />} />
          <Route path="corporate" element={<Corporate />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
