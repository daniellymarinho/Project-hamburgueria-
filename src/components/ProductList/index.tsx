import { useContext } from 'react';
import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../context/cartContext';

const ProductList = () => {
  const { showProducts } = useContext(CartContext);

  return (
    <StyledProductList>
      {showProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </StyledProductList>
  );
};

export default ProductList;
