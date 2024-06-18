import { Toaster } from 'react-hot-toast';
import GlobalRouter from './routes';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <div>
      <GlobalRouter />
      <Toaster />
    </div>
  );
};

export default App;
