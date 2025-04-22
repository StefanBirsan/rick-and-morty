import React from 'react';
import './styles/App.css';
import HomePage from "./pages/HomePage";
import DetailPage from "./pages/DetailsPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GlobalStyles} from "./styles/GlobalStyles";

function App() {
    return (
        <Router>
            <GlobalStyles/>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/character/:id" element={<DetailPage />} />
                </Routes>
        </Router>
    );
}

export default App;