import Dashboard from "./components/Dashboard";
import { Header } from "./components/Header";
import { createServer, Model } from 'miragejs';
import { GlobalStyle } from "./styles/global";
import Modal from "react-modal";
import { useState } from "react";
import NewTransactionModal from "./components/NewTransactionModal";
import { TransactionsProvider } from "./hooks/useTransactions";
import { ThemeProvider } from 'styled-components'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from "./hooks/usePersistedState";

Modal.setAppElement('#root');

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Freela',
          type: 'deposit',
          category: 'dev',
          amount: 6000,
          createdAt: new Date('2021-02-12 09:00:00'),
        },
        {
          id: 2,
          title: 'Aluguel',
          type: 'withdraw',
          category: 'casa',
          amount: 1000,
          createdAt: new Date('2021-02-14 11:00:00'),
        }
      ],
    });
  },

  routes() {
    this.namespace = 'api';

    this.get('/transactions', () => {
      return this.schema.all('transaction');
    })
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    })
  }
})

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  const [theme, setTheme] = usePersistedState('theme', light)

  function handOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseTransactionModal() {
    setIsNewTransactionModalOpen(false);
  }

  function toggleTheme() {
    setTheme(theme.title === 'light' ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <TransactionsProvider>

        <Header onOpenNewTransactionModal={handOpenNewTransactionModal} toggleTheme={toggleTheme} />

        <Dashboard />

        <NewTransactionModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseTransactionModal} />

        <GlobalStyle />

      </TransactionsProvider>
    </ThemeProvider >
  );
}
