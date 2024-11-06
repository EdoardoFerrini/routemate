import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./components/Home";
import { ProductList } from "./components/ProductList";
import { ProductDetail } from "./components/ProductDetail";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Admin } from "./components/Admin";
import { PageNotFound } from "./components/PageNotFound";
import { ContactIt } from "./components/ContactIt";
import { ContactAll } from "./components/ContactAll";

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
          <Route path="contact" element={<Contact />}>
            <Route path="it" element={<ContactIt />}></Route>
            <Route path="*" element={<ContactAll />}></Route>
          </Route>
          <Route
            path="/admin"
            element={admin ? <Admin /> : <PageNotFound />}
          ></Route>
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
