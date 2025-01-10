import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import React from "react";
import Header from "./Shared.Header-Footer/Header/Header";
import Footer from "./Shared.Header-Footer/Footer/Footer";
import HomePage from "./HomePage/HomePage";
import AboutPage from "./AboutPage/AboutPage";
import ContactPage from "./ContactPage/ContactPage";
import ServicesPage from "./ServicesPage/ServicesPage";
import ContactForm from "./ContactForm/ContactForm";
function App() {
	return (
		<Router>
			<Header />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/ContactForm" element={<ContactForm />} />
				<Route path="/About" element={<AboutPage />} />
				<Route path="/ContactUs" element={<ContactPage />} />
				<Route path="/Services" element={<ServicesPage />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
