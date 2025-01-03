import "./App.css";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import Header from "./components/Header";
import { ProductListing } from "./components/ProductListing";
import { Section } from "./components/Section";

function App() {
  return (
    <>
      <div>
        <Header />
        <Gallery />
        <Section title={"Produtos em Alta"} titleAlign={"center"} link={'Ver todos'}>
          <ProductListing />
        </Section>
        <Footer />
      </div>
    </>
  );
}

export default App;
