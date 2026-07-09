import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import UploadBook from "./pages/UploadBook";
import BookViewer from "./pages/BookViewer";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<UploadBook />} />
      <Route path="/book" element={<BookViewer />} />
    </Routes>
  );
}