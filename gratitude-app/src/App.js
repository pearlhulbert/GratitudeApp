import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Journal from "./pages/Journal";
import Memories from "./pages/Memories";
import './App.css';


export default function App() {
  return (
    <BrowserRouter basename="/GratitudeApp/gratitude-app/build">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Journal />} />
          <Route path="memories" element={<Memories />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
