import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/heroSection/hero/Hero";
import NavBackgroundImage from './components/heroSection/NavBackgroundImage';
import MainSection from "./components/Main/MainSection";
import Receipes from "./components/Receipes/Receipes";
import Recipe from "./components/Receipes/Receipe";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Home route with multiple components */}
        <Route path="/" element={
          <>
            <Hero />
            <MainSection />
            <Receipes />
          </>
        } />

        {/* Individual routes */}
        <Route path="/main" element={<MainSection />} />
        <Route path="/receipes" element={<Receipes />} />
        <Route path="/receipes/:id" element={<Recipe />} /> {/* Dynamic route for recipe details */}
        <Route path="/nav-background" element={<NavBackgroundImage />} />
      </Routes>
    </Router>
  );
}
