import { Outlet, useNavigate } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../context/userContext';

export const RouteProtecd = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  }, []);

  return <div>{user ? <Outlet /> : null}</div>;
};
