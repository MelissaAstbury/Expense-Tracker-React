import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Initial State
//expensive is a negative number
//income is a positive number
const initialState = {
  transactions: [],
};

//Create context
export const GlobalContext = createContext(initialState);

//Provider Component
//Redcuder will always use Dispatch
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
