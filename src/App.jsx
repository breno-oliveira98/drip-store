import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { ProductCard } from "./components/ProductCard";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const fetchProductsAll = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setProducts(res.data);
    } catch (error) {
      console.error("Erro ao fazer requisição", error);
    }
  };
  useEffect(() => {
    fetchProductsAll();
  }, []);
  return (
    <>
      <div>
        <Header />
        <div className="flex flex-wrap gap-4 mt-10">
          {products.map((item) => (
            <ProductCard
              key={item.id}
              img={item.image}
              category={item.category}
              title={item.title}
              price={item.price}
              priceDiscount={item.price}
              onClick={() => alert(item.id)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
