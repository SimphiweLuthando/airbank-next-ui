// Create a file named contextProvider.js
import  { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';  // Import PropTypes


const BalanceContext = createContext();

export const useAmounts = () => useContext(BalanceContext);

export const AmountProvider = ({ children }) => {
  const [airbankBalance, setAirbankBalance] = useState(2164.00);
  const [airtimeBalance, setAirtimeBalance] = useState(349.00);

  const value = {
    airbankBalance,
    setAirbankBalance,
    airtimeBalance,
    setAirtimeBalance
  };

  return (
    <BalanceContext.Provider value={value}>
      {children}
    </BalanceContext.Provider>
  );
};

// Prop validation
AmountProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Validate that children is a node and is required
};


