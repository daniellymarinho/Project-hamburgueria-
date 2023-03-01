import { CartProviders } from '../../context/cartContext';
import { UserProvider, IUserContextProps } from '../../context/userContext';

export const Providers = ({ children }: IUserContextProps) => (
  <UserProvider>
    <CartProviders>{children}</CartProviders>
  </UserProvider>
);
