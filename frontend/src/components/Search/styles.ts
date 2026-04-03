import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  gap: 1rem;

  input {
    flex: 1;
    border: 0;
    border-radius: 6px;
    padding: 1rem;
    background: ${({ theme }) => theme.COLORS.GRAY_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;

    border: 0;
    padding: 1rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme.COLORS.GREEN_300};
    color: ${({ theme }) => theme.COLORS.GREEN_300};
    font-weight: bold;
    border-radius: 6px;

    transition: background-color 0.2s;

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      background: ${({ theme }) => theme.COLORS.GREEN_500};
      border: 1px solid ${({ theme }) => theme.COLORS.GREEN_500};
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;