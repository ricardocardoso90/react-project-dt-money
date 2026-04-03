import styled, { css } from "styled-components";

export const Container = styled.section`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: -5rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

interface CardProps {
  variant?: 'green'
}

export const Card = styled.div<CardProps>`
  padding: 2rem;
  border-radius: 6px;
  background: ${({ theme }) => theme.COLORS.GRAY_600};

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
  }

  ${({ variant }) => variant === 'green' && css`
    background: ${({ theme }) => theme.COLORS.GREEN_700};
  `}
`;