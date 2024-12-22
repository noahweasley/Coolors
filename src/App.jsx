import { Route, Routes } from "react-router-dom";
import ColorGenerator from "./pages/ColorGenerator";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<ColorGenerator />} />
    </Routes>
  );
}
