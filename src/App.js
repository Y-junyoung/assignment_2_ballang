import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import DefaultLayout from "./layouts/DefaultLayout";
import MyPage from "./pages/MyPage";
import CartPage from "./pages/CartPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import SignInPage from "./pages/SignInPage";
import { AuthProvider } from "./contexts/auth.context";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/my-page" element={<MyPage />} />
          <Route path="/cart-page" element={<CartPage />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/detail-page/:goodsNo" element={<ProductDetailPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
