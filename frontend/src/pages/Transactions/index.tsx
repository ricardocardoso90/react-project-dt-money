import { useContext } from "react";
import { Header } from "../../components/Header";
import { Search } from "../../components/Search";
import { Summary } from "../../components/Summary";

import {
  Container,
  Price,
  Table,
  TableContainer
} from "./styles";

import { TransactionsContext } from "../../Contexts/TransactionsContext";
import { dateFormatted, priceFormatted } from "../../utils/formatter";

export function Transactions() {
  const { transactions } = useContext(TransactionsContext);

  return (
    <Container>
      <Header />
      <Summary />

      <TableContainer>
        <Search />
        <Table>
          <tbody>
            {transactions.map(item => (
              <tr key={item.id}>
                <td width="50%">{item.description}</td>
                <td>
                  <Price variant={item.type}>
                    {item.type === 'outcome' && '- '}
                    {priceFormatted.format(item.price)}
                  </Price>
                </td>
                <td>{item.category}</td>
                <td>{dateFormatted.format(new Date(item.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </TableContainer>
    </Container>
  )
}