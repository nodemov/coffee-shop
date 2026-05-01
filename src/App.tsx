import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { TopNav } from "@/shared/components/TopNav";
import { Footer } from "@/shared/components/Footer";
import { CartProvider } from "@/shared/hooks/useCart";
import { HomePage } from "@/pages/HomePage";
import { MenuPage } from "@/pages/MenuPage";
import { CartPage } from "@/pages/CartPage";
import { AboutPage } from "@/pages/AboutPage";
import { LocationsPage } from "@/pages/LocationsPage";
import { ContactPage } from "@/pages/ContactPage";

function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-canvas">
      <TopNav />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/locations" element={<LocationsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
