import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Navbar from "./components/Navbar";
import Model from "./components/Model";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
    return (
        <main className="bg-black ">
            <Navbar />
            <Hero />
            <Highlights />
            <Model />
            <Footer />
        </main>
    );
};

export default App;
