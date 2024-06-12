import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import AuthContextProvider from './auth/auth.context.tsx';
import { BrowserRouter } from 'react-router-dom';
import StoreContextProvider from './context/StoreContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <AuthContextProvider>
      <StoreContextProvider>
        <App />
      </StoreContextProvider>
    </AuthContextProvider>
  </BrowserRouter>
);
