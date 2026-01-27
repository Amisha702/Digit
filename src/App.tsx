import { Routes, Route, Navigate } from "react-router-dom";
import GridPage from "./pages/Gridpage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/grid" />} />
      <Route path="/grid" element={<GridPage />} />
    </Routes>
  );
}

export default App;







