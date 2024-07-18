import * as z from 'zod';
import { Container } from "./styles";
import { useForm } from "react-hook-form";
import { MagnifyingGlass } from "phosphor-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from 'react';
import { TransactionsContext } from '../../Contexts/TransactionsContext';

const searchFormSchema = z.object({
  query: z.string()
});

type SearchFormType = z.infer<typeof searchFormSchema>

export function Search() {
  const { fetchTransactions } = useContext(TransactionsContext);

  const { register, handleSubmit, formState: { isSubmitting } } = useForm<SearchFormType>({
    resolver: zodResolver(searchFormSchema)
  });

  async function handleSearch(data: SearchFormType) {
    await fetchTransactions(data.query);
  }

  return (
    <Container onSubmit={handleSubmit(handleSearch)}>
      <input
        type="text"
        placeholder="Busque uma transação"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        Buscar
      </button>
    </Container>
  )
}