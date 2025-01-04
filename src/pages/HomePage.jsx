import { Gallery } from "../components/Gallery";
import { ProductListing } from "../components/ProductListing";
import { Section } from "../components/Section";

const HomePage = () => {
  return (
    <>
      <Gallery />
      <Section title={'Produtos em Alta'} link={'Ver todos'}>
        <ProductListing />
      </Section>
    </>
  );
};

export default HomePage;
