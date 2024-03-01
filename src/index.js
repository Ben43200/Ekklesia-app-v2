import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
// import Navbar from "./components/Navbar/Navbar";
// import Methodologie from "./pages/Methodologie/Methodologie";
// import Mission from "./pages/Mission/Mission";

// import Footer from "./components/footer/Footer";
// import ScrollToTop from "./components/ScrollToTop";
// import Service from "./pages/Services/Services";
// import Realisations from "./pages/Realisations";
// import ContactPage from "./pages/ContactPage/ContactPage";

// import Error from "./pages/error/Error";


import Home from "./pages/Home/Home.jsx";
import Navbar from "./components/Navbar";
import Contact from "./pages/Contact/Contact";

import Footer from "./components/Footer.js";




const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(

  <BrowserRouter>
      {/* <ScrollToTop /> */}

    <Navbar />

    <Routes>
      <Route path="/" element={<Home />} />

      {/* <Route path="/methodologie" element={<Methodologie />} />
      <Route path="/mission" element={<Mission />} />
      <Route path="/services" element={<Service />} />
      <Route path="/realisations" element={<Realisations />} />
      <Route path="/contact" element={<ContactPage />} />

      <Route path="*" element={<Error />} /> */}

<Route path="/contact" element={<Contact />} />




  

    </Routes>
    <Footer />

  {/* </Router> */}
  </BrowserRouter>

  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
