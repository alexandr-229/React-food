import { Routes, Route } from 'react-router-dom';
import { Header } from './component/Header';
import { Footer } from './component/Footer';
import { Contact } from './pages/Contact';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { NotFound } from './pages/notfound';
import { Category } from './pages/Category';
import { Recipe } from './pages/Recipe';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <Header />
            <main className="container content">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/category/:name" element={<Category />} />
                    <Route path="/meal/:id" element={<Recipe />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
};

export default App;
