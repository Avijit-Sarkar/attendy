import Layout from "components/Layout";
import Home from "pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "pages/Login";
import Register from "pages/Register";
import Classes from "pages/Classes";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          {/* <Route path="/" element={<LandingPage />}> */}

          <Route index element={<Home />} />
          <Route path="classes" element={<Classes />} />
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
