import "./App.css";
import Header from "./components/Header";
import { ProductListing } from "./components/ProductListing";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <div>
        <Header />
        <Section title={"Produtos em Alta"} titleAlign={"center"} link={'Ver todos'}>
          <ProductListing />
        </Section>
      </div>
    </>
  );
}

export default App;
