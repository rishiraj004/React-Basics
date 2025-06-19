// CSS Imports
import './ShoppingList.css';

// Context imports
import { ShoppingItemsContext, ShoppingDispatchContext } from '../../providers/ShoppingContext';

// Component imports
import Header from "../Header/Header";
import InputItem from "../InputItem/InputItem";
import ItemList from '../ItemList/ItemList';
import { useReducer } from 'react';

// reducer imports
import itemReducer from '../../reducers/itemReducer';

function ShoppingList() {

    // const [shoppingItems, setShoppingItems] = useState([]);
    const [shoppingItems, dispatch] = useReducer(itemReducer, []);

    return (
        <>
            <ShoppingItemsContext.Provider value={shoppingItems}>
                <ShoppingDispatchContext.Provider value={dispatch}>
                    <Header />
                    <div className="current-shopping-list">
                        <InputItem />
                        <ItemList />
                    </div>
                </ShoppingDispatchContext.Provider>
            </ShoppingItemsContext.Provider>
        </>
    )
}

export default ShoppingList;