import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import ShoppingList from './components/ShoppingList/ShoppingList';

function App() {
  return (
    <>
    <ShoppingList/>
    <ToastContainer/>
    </>
  )
}

export default App
