import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import Error404 from './pages/Error'

function App() {
    return (
        <BrowserRouter>
            <div className="main-container">
                <Header />
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/logement/:id" element={<Logement />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                </main>
            </div>

            <Footer />
        </BrowserRouter>
    )
}

export default App