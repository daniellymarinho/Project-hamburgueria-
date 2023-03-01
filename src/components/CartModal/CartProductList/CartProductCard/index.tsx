import { MdDelete } from 'react-icons/md';
import { useContext } from 'react';
import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';
import { CartContext, IProduct } from '../../../../context/cartContext';

interface IcartProductsProps {
  product: IProduct;
}

const CartProductCard = ({ product }: IcartProductsProps) => {
  const { removeProductsCart } = useContext(CartContext);

  return (
    <StyledCartProductCard>
      <div className='imageBox'>
        <img src={product.img} alt={product.category} />
      </div>
      <div className='contentBox'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.category}
        </StyledTitle>
        <button
          type='button'
          aria-label='Remover'
          onClick={() => removeProductsCart(product)}
        >
          <MdDelete size={24} />
        </button>
      </div>
    </StyledCartProductCard>
  );
};

export default CartProductCard;
