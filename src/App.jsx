import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";
import Vocalist from "./components/Vocalist";
import Guitar from "./components/Guitar";
import Violin from "./components/Violin";
import Layout from "./components/Layout";
import NavBar from "./components/NavBar";
import Drums from "./components/Drums";

function App() {
  return (
    <>
      <h1>The Corrs</h1>
      <NavBar />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="vocal" element={<Vocalist />} />
          <Route path="guitar" element={<Guitar />} />
          <Route path="violin" element={<Violin />} />
          <Route path="drums" element={<Drums />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
