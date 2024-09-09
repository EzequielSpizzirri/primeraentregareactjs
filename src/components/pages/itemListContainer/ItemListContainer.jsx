import ProductCard from "../../common/productCard/ProductCard";

const ItemListContainer = ({ greeting }) => {
  let precio = 1200;
  let info = "esta informacion";
  return (
    <div>
      <h1>Listado de productos</h1>
      <div>
        <ProductCard titulo="toppers" precio={5000} />
        <ProductCard titulo="adidas" precio={precio} />
      </div>
      {/* Aca pinto el greeting */}
      <h4>{greeting}</h4>
    </div>
  );
};

export default ItemListContainer;
