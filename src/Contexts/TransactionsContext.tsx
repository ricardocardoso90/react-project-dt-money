import { api } from "../lib/axios";
import {
  ReactNode,
  createContext,
  useEffect,
  useState
} from "react";

interface TransactionsProps {
  id: number;
  description: string;
  type: 'income' | 'outcome',
  category: string;
  price: number;
  createdAt: string;
}

interface CreateTransactionsType {
  description: string;
  category: string;
  price: number;
  type: 'income' | 'outcome';
}

interface TransactionContextType {
  transactions: TransactionsProps[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction: (data: CreateTransactionsType) => Promise<void>;
}

interface TransactionProviderChildren {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionProviderChildren) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function fetchTransactions(query?: string) {
    // const url = new URL('http://localhost:3000/transactions');
    // if (query) {
    //   url.searchParams.append('q', query);
    // }

    // const response = await fetch(url);
    // const data = await response.json();

    const response = await api.get('/transactions', {
      params: {
        _sort: 'createdAt',
        _order: 'desc',
        q: query,
      }
    });

    setTransactions(response.data);
  }

  async function createTransaction(data: CreateTransactionsType) {
    const { description, category, price, type } = data;

    const response = await api.post('transactions', {
      description,
      category,
      price,
      type,
      createdAt: new Date()
    });

    setTransactions(state => [response.data, ...state]);
  }

  useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  )
}