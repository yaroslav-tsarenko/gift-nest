import Header from "../components/Header";
import Content from "../components/Content";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import "./ProductDescriptionPage.css";

const ProductDescriptionPage = () => {
  return (
    <div className="productdescriptionpage">
      <section className="header-parent">
        <Header />
        <Content />
      </section>
      <FrameComponent1 />
      <FrameComponent />
    </div>
  );
};

export default ProductDescriptionPage;
