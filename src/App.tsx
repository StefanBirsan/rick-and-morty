import React from 'react';
import { HomePage, DetailPage} from "./pages";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {GlobalStyles} from "./styles";

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