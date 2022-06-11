import React, { useReducer } from 'react';
import { isValidElement } from 'react/cjs/react.production.min';

import CartContext from './cart-context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        
        const existingCartItemIndex = state.items.findIndex(item => item.id === action.item.id) ; 
        // findIndex(), a built-in function in JS, which finds the index of an item in an array.
        // This function has a single parameter which you can include a function which returns a boolean value.

        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {;
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    return defaultCartState;
};

const CartProvider = props => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemCartHandler = item => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemCartHandler = id => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartCtx = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler
    }

    return (
        <CartContext.Provider value={cartCtx}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;