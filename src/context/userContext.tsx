import { createContext, useState } from 'react';
import { AxiosError } from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { IRegisterForm } from '../components/Form/RegisterForm';
import { ILoginForm } from '../components/Form/LoginForm';
import { api } from '../services/api';

export interface IUserContextProps {
  children: React.ReactNode;
}

interface IUser {
  id: string;
  name: string;
  email: string;
}

interface IUserResponse {
  accessToken: string;
  user: IUser;
}

export interface IDefaltError {
  error: string;
}

interface IUserContext {
  userRegister: (formData: IRegisterForm) => Promise<void>;
  userLogin: (formData: ILoginForm) => Promise<void>;
  user: IUser | null;
  setUser: React.Dispatch<React.SetStateAction<IUser | null>>;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IUserContextProps) => {
  const [user, setUser] = useState<IUser | null>(null);
  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterForm) => {
    try {
      const response = await api.post<IUserResponse>('/users', formData);
      setUser(response.data.user);
      toast.success('Cadastro realizado com sucesso!');
      navigate('/');
    } catch (error) {
      const currentError = error as AxiosError<IDefaltError>;
      console.log(currentError.response?.data.error);
      toast.error('Algo deu errado tente novamente');
    }
  };

  const userLogin = async (formData: ILoginForm) => {
    try {
      const response = await api.post('/login', formData);
      localStorage.setItem('@Token', response.data.accessToken);
      toast.success('Seja bem-vindo');
      navigate('/shop');
    } catch (error) {
      const currentError = error as AxiosError<IDefaltError>;
      console.log(currentError.response?.data.error);
      toast.error('Algo deu errado tente novamente');
    }
  };

  return (
    <UserContext.Provider value={{ userRegister, userLogin, user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
