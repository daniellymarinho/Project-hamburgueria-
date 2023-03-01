import { ToastContainer } from 'react-toastify';
import Router from './routes';
import { GlobalStyles } from './styles/global';

const App = () => (
  <>
    <GlobalStyles />
    <Router />
    <ToastContainer />
  </>
);

export default App;
