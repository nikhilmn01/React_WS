import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + (action.item.amount * action.item.price);
        let updatedItems;
        const updatedItemIndex = state.items.findIndex(item => item.id === action.item.id);
        const existingCartItem = state.items[updatedItemIndex];
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[updatedItemIndex] = updatedItem;
        }
        else{
            updatedItems =  state.items.concat(action.item);
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    else if (action.type === 'REMOVE'){
        const updatedItemIndex = state.items.findIndex(item => item.id === action.id);
        const existingCartItem = state.items[updatedItemIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;

        if(existingCartItem){
            if(existingCartItem.amount === 1){
                updatedItems = state.items.filter(item => item.id !== existingCartItem.id);
            }
            else{
                const updatedItem = {...existingCartItem, amount: existingCartItem.amount - 1}
                updatedItems = [...state.items];
                updatedItems[updatedItemIndex] = updatedItem;
            }
        }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultCartState;
}

const CartProvider = (props) => {
    const [cartState, dispatchChartAction] = useReducer(cartReducer, defaultCartState);
    const handleAddItem = (item) => {
        dispatchChartAction({
            type: 'ADD',
            item: item
        })
    };
    const handleRemoveItem = (id) => {
        dispatchChartAction({
            type: 'REMOVE',
            id: id
        })
    }
    const cartData = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: handleAddItem,
        removeItem: handleRemoveItem
    }
    return (
        <CartContext.Provider value={cartData}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;