import { MdClose } from 'react-icons/md';
import { useContext, useState } from 'react';
import CartProductList from './CartProductList';
import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';

import { CartContext } from '../../context/cartContext';

const CartModal = () => {
  const { modal, toggleModal, listProductsCart, showProducts } =
    useContext(CartContext);

  return (
    <StyledCartModalBox style={{ display: modal ? 'flex' : 'none' }}>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button type='button' aria-label='Fechar' onClick={toggleModal}>
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          {listProductsCart.length > 0 ? (
            <CartProductList />
          ) : (
            <div className='emptyBox'>
              <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign='center'>
                Adicione itens
              </StyledParagraph>
            </div>
          )}
        </div>
      </dialog>
    </StyledCartModalBox>
  );
};

export default CartModal;
