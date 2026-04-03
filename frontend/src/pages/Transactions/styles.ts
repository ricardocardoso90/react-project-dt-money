import styled from "styled-components";

export const Container = styled.div`
  
`;

export const TableContainer = styled.main`
  width: 100%;
  max-width: 1120px;
  margin: 4rem auto 0;
  padding: 0 1.5rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;
  margin-top: 1.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};

    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

interface PriceProps {
  variant?: "income" | "outcome";
}

export const Price = styled.span<PriceProps>`
  color: ${({ variant, theme }) =>
    variant === "income"
      ? theme.COLORS.GREEN_300
      : theme.COLORS.RED_300};
`;