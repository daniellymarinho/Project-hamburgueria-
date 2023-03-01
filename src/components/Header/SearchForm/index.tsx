import { MdSearch } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { StyledSearchForm } from './style';
import { StyledButton } from '../../../styles/button';
import { CartContext } from '../../../context/cartContext';

export interface ISearchForm {
  search: string;
}

const SearchForm = () => {
  const { register, handleSubmit } = useForm<ISearchForm>();
  const { setSearch, setShowProducts, getProducts } = useContext(CartContext);

  const submit = ({ search }: ISearchForm) => {
    if (!search) {
      getProducts();
    } else {
      setShowProducts((current) =>
        current.filter(
          (item) =>
            item.name.toLowerCase().startsWith(search.toLowerCase()) ||
            item.category.toLowerCase().startsWith(search.toLowerCase())
        )
      );
    }
  };

  return (
    <StyledSearchForm onSubmit={handleSubmit(submit)}>
      <input
        type='text'
        placeholder='Digitar pesquisa'
        {...register('search')}
      />
      <StyledButton type='submit' $buttonSize='medium' $buttonStyle='green'>
        <MdSearch />
      </StyledButton>
    </StyledSearchForm>
  );
};

export default SearchForm;
