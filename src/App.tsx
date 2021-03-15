
import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { TransactionsContext } from "./TransactionsContext"

import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsContext.Provider value={[]}>
      <Header
        onOpenNewTransactionModal={handleOpenNewOpenNewTransactionModal}
      />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewOpenNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsContext.Provider>
  );
}