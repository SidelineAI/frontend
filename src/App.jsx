import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
