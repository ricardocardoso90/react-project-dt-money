import { useContext } from "react";
import { TransactionsContext } from "../Contexts/TransactionsContext";

export function useSumary() {
  const { transactions } = useContext(TransactionsContext);

  const sumary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'income') {
        acc.income += transaction.price;
        acc.total += transaction.price;

      } else {
        acc.outcome += transaction.price;
        acc.total -= transaction.price;
      }

      return acc;
    }, { income: 0, outcome: 0, total: 0 }
  );

  return sumary;
}