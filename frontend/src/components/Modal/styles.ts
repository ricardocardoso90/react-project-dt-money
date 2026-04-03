import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog';
import * as RadioGroup from '@radix-ui/react-radio-group';

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const Content = styled(Dialog.Content)`
  min-width: 32rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background: ${({ theme }) => theme.COLORS.GRAY_800};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    input {
      width: 100%;
      border: 0;
      border-radius: 6px;
      padding: 1rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
      background: ${({ theme }) => theme.COLORS.GRAY_900};

      &::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_500};
      }
    }

    button[type="submit"] {
      height: 58px;
      border: 0;
      cursor: pointer;
      border-radius: 6px;
      font-weight: bold;
      padding: 0 1.25rem;
      margin-top: 1.5rem;
      color: ${({ theme }) => theme.COLORS.WHITE};
      background: ${({ theme }) => theme.COLORS.GREEN_500};
      transition: background-color 0.2s;

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
      }

      &:not(:disabled):hover {
        background: ${({ theme }) => theme.COLORS.GREEN_700};
      }
    }
  }
`;

export const CloseButton = styled(Dialog.Close)`
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  border: 0;
  cursor: pointer;
  position: absolute;
  background: transparent;
  color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 0.5rem;
`;

interface TransactionTypeButton {
  variant?: 'income' | 'outcome'
}

export const TransactionTypeButton = styled(RadioGroup.Item) <TransactionTypeButton>`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  background: ${({ theme }) => theme.COLORS.GRAY_700};
  transition: background-color 0.2s;

  svg {
    color: ${({ variant, theme }) =>
    variant === 'income'
      ? theme.COLORS.GREEN_300
      : theme.COLORS.RED_300};
  }

  &[data-state="unchecked"]:hover {
    background: ${({ theme }) => theme.COLORS.GRAY_600};
  } 

  &[data-state="checked"] {
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: ${({ variant, theme }) =>
    variant === 'income'
      ? theme.COLORS.GREEN_500
      : theme.COLORS.RED_500};

      svg {
        color: ${({ theme }) => theme.COLORS.WHITE};
      }
  };  
`;