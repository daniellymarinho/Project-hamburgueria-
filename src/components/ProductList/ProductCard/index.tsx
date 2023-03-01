import { useContext, useState } from 'react';
import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext, IProduct } from '../../../context/cartContext';

interface IProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProductCardProps) => {
  const { addProductCart } = useContext(CartContext);

  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={product.img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.category}
        </StyledTitle>
        <StyledParagraph className='category'>{product.name}</StyledParagraph>
        <StyledParagraph className='price'>{product.price}</StyledParagraph>
        <StyledButton
          onClick={() => addProductCart(product)}
          $buttonSize='medium'
          $buttonStyle='green'
        >
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  );
};

export default ProductCard;
