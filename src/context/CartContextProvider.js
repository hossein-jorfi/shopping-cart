import React, { useReducer } from 'react';

const initialState = {
     selectedItems: [],
     itemsCounter: 0,
     total: 0,
     checkOut: false
}
const reducer = (state, action) => {
     switch (action.type) {
          case 'ADD_ITEM': {
               if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                    state.selectedItems.push({
                         ...action.payload,
                         quantity: 1
                    })
               }
               return {
                    ...state,
                    selectedItems: [...state.selectedItems],
                    itemsCounter: state.itemsCounter + 1,
                    total: state.total + action.payload.price
               }
          }
          case 'REMOVE_ITEM': {
               const newSelectedItems = state.selectedItems.filter(item => item.id !== action.payload.id)
               return {
                    ...state,
                    selectedItems: newSelectedItems,
                    itemsCounter: state.itemsCounter - 1,
                    total: state.total - action.payload.price
               }
          }
          case 'INCREASE': {
               const indexI = state.selectedItems.findIndex(item => item.id === action.payload.id)
               state.selectedItems[indexI].quantity++;
               return {
                    ...state,
                    itemsCounter: state.itemsCounter + 1,
                    total: state.total + action.payload.price
               }
          }
          case 'DECREASE': {
               const indexD = state.selectedItems.findIndex(item => item.id === action.payload.id)
               state.selectedItems[indexD].quantity--;
               return {
                    ...state,
                    itemsCounter: state.itemsCounter - 1,
                    total: state.total - action.payload.price
               }
          }
          case 'CHECKOUT': {
               return {
                    selectedItems: [],
                    itemsCounter: 0,
                    total: 0,
                    checkOut: true
               }
          }
          case 'CLEAR': {
               return {
                    selectedItems: [],
                    itemsCounter: 0,
                    total: 0,
                    checkOut: false
               }
          }
          default: return state
     }
}

export const CartContext = React.createContext()

const CartContextProvider = ({ children }) => {

     const [state, dispath] = useReducer(reducer, initialState);

     return (
          <CartContext.Provider value={{ state, dispath }}>
               {children}
          </CartContext.Provider>
     );
};

export default CartContextProvider;