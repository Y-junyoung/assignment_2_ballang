import styles from "./HomePage.module.scss";
import api from "./../../api/api";
import { useEffect, useState } from "react";
import GoodsList from "../../components/GoodsList";

function HomePage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.products.getProducts("").then((products) => {
      setProducts(products);
    });
  }, []);

  return (
    <main className={styles.d}>
      <GoodsList products={products} />
    </main>
  );
}

export default HomePage;
