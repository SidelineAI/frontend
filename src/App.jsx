import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./pages/Search";
import Profile from "./pages/Profile";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path=":id" element={<Profile />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </BrowserRouter>
  );
}
