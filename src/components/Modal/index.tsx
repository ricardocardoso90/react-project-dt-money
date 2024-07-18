import * as z from 'zod';
import { useContext } from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { TransactionsContext } from '../../Contexts/TransactionsContext';

const newTransactionFormSchema = z.object({
  description: z.string(),
  price: z.number(),
  category: z.string(),
  type: z.enum(['income', 'outcome'])
});

type NewTransactionFormType = z.infer<typeof newTransactionFormSchema>;

export function Modal() {
  const { createTransaction } = useContext(TransactionsContext);

  const { control, register, handleSubmit, formState: { isSubmitting }, reset } = useForm<NewTransactionFormType>({
    resolver: zodResolver(newTransactionFormSchema),
    defaultValues: { type: 'income' }
  });

  async function handleCreateNewTransaction(data: NewTransactionFormType) {
    const { description, category, price, type } = data;

    await createTransaction({
      description,
      category,
      price,
      type
    });

    reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <CloseButton> <X size={24} /> </CloseButton>

        <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input
            type="text"
            placeholder='Descrição'
            {...register('description')}
            required
          />
          <input
            type="number"
            placeholder='Preço'
            {...register('price', { valueAsNumber: true })}
            required
          />
          <input
            type="text"
            placeholder='Categoria'
            {...register('category')}
            required
          />

          <Controller
            control={control}
            name='type'
            render={({ field }) => (
              <TransactionType onValueChange={field.onChange} value={field.value}>
                <TransactionTypeButton
                  value='income'
                  variant='income'
                >
                  <ArrowCircleUp size={24} />
                  Entrada
                </TransactionTypeButton>

                <TransactionTypeButton
                  value='outcome'
                  variant='outcome'
                >
                  <ArrowCircleDown size={24} />
                  Saída
                </TransactionTypeButton>
              </TransactionType>
            )}
          />

          <button type='submit' disabled={isSubmitting}>Cadastrar</button>
        </form>

      </Content>
    </Dialog.Portal>
  )
}