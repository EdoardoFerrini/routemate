import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Admin } from "./components/Admin";

function App() {
  const admin = true;
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/products/:id" element={<ProductDetail />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="/admin" element={admin ? <Admin /> : <Navigate to="/" />}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
