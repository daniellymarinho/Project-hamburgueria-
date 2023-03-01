import { createContext, useEffect, useState } from 'react';
import { AxiosError } from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IUserContextProps, IDefaltError } from './userContext';
import { api } from '../services/api';

export interface IProduct {
  id: number;
  name: string;
  category: string;
  price: number;
  img: string;
}

interface ICartContext {
  toggleModal: () => void;
  addProductCart: (chosenProduct: IProduct) => void;
  removeProductsCart: (productId: IProduct) => void;
  showProducts: IProduct[];
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  getProducts: () => Promise<void>;
  modal: boolean;
  logout: () => void;
  listProductsCart: IProduct[];
  setListProductsCart: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setShowProducts: React.Dispatch<React.SetStateAction<IProduct[]>>;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

export const CartContext = createContext({} as ICartContext);

type IProductsList = IProduct[];

export const CartProviders = ({ children }: IUserContextProps) => {
  const [modal, setModal] = useState(false);
  const [listProductsCart, setListProductsCart] = useState<IProduct[]>([]);
  const [showProducts, setShowProducts] = useState<IProduct[]>([]);
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  const toggleModal = () => {
    setModal((current) => !current);
  };

  const addProductCart = (chosenProduct: IProduct) => {
    if (!listProductsCart.some((product) => product.id === chosenProduct.id)) {
      setListProductsCart((current) => [...current, chosenProduct]);
    }
  };

  const removeProductsCart = (productId: IProduct) => {
    const newProductsCart = listProductsCart.filter(
      (product) => product.id !== productId.id
    );
    setListProductsCart(newProductsCart);
  };
  const getProducts = async () => {
    try {
      const response = await api.get<IProductsList>('/products');
      setShowProducts(response.data);
    } catch (error) {
      const currentError = error as AxiosError<IDefaltError>;
      console.log(currentError);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const logout = () => {
    localStorage.removeItem('@Token');
    navigate('/');
    toast.success('Até mais tarde!');
  };

  return (
    <CartContext.Provider
      value={{
        toggleModal,
        addProductCart,
        removeProductsCart,
        showProducts,
        setShowProducts,
        setModal,
        modal,
        logout,
        listProductsCart,
        setListProductsCart,
        getProducts,
        setSearch,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
