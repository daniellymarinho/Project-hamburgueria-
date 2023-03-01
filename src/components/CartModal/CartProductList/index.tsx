import { useContext, useState } from 'react';
import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';

import { CartContext } from '../../../context/cartContext';

const CartProductList = () => {
  const { listProductsCart } = useContext(CartContext);

  const currentBalance = () =>
    listProductsCart.reduce((acc, product) => acc + product.price, 0);

  return (
    <StyledCartProductList>
      <ul>
        {listProductsCart.map((product) => (
          <CartProductCard key={product.id} product={product} />
        ))}
      </ul>

      <div className='totalBox'>
        <StyledParagraph>
          <strong>Total</strong>
        </StyledParagraph>
        <StyledParagraph className='total'>{`R$ ${currentBalance()}`}</StyledParagraph>
      </div>
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Remover todos
      </StyledButton>
    </StyledCartProductList>
  );
};

export default CartProductList;
