import React from 'react';
import styled from '@emotion/styled';

type TableCellProps = {
    children: React.ReactNode;
    align?: 'left' | 'center' | 'right';
};

export const TableCell = ({ children, align = 'center' }: TableCellProps) => {
    return <StyledTd align={align}>{children}</StyledTd>;
};

const StyledTd = styled.td<{ align: string }>`
  padding: 8px;
  text-align: ${({ align }) => align};
  border: none;
`;
