import styled from "styled-components";
// import * as Dialog from '@radix-ui/react-dialog';

export const Container = styled.header`
  padding: 2.5rem 0 7.5rem;
  background: ${({ theme }) => theme.COLORS.GRAY_900};
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  border: 0;
  height: 50px;
  font-weight: bold;
  padding: 0 1.25rem;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background: ${({ theme }) => theme.COLORS.GREEN_500};

  &:hover {
    background: ${({ theme }) => theme.COLORS.GREEN_700};
  }
`;