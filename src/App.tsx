
import { useState } from "react";

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";

import { NewTransactionModal } from "./components/NewTransactionModal";

import { GlobalStyle } from "./styles/global";
import { TransactionsProvider } from "./hooks/useTransactions";

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }
  return (
    <TransactionsProvider>
      <Header
        onOpenNewTransactionModal={handleOpenNewOpenNewTransactionModal}
      />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewOpenNewTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}