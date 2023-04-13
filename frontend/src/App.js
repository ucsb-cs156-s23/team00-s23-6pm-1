import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "main/pages/HomePage";
import AvilaBeachPage from "main/pages/AvilaBeachPage";
import LosAlamosPage from "main/pages/LosAlamosPage";
import ArroyoGrandePage from "main/pages/ArroyoGrandePage";
import LosAngelesPage from "main/pages/LosAngelesPage";
import SanFranciscoPage from "main/pages/SanFranciscoPage";
import ValenciaPage from "main/pages/ValenciaPage";


import "bootstrap/dist/css/bootstrap.css";


function App() {

  return (
    <BrowserRouter basename="/team00-s23-6pm-1">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/towns/AvilaBeach" element={<AvilaBeachPage />} />
        <Route exact path="/towns/LosAlamos" element={<LosAlamosPage />} />
        <Route exact path="/towns/ArroyoGrande" element={<ArroyoGrandePage />} />
        <Route exact path="/towns/LosAngeles" element={<LosAngelesPage />} />
        <Route exact path="/towns/SanFrancisco" element={<SanFranciscoPage />} />
        <Route exact path="/towns/Valencia" element={<ValenciaPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
