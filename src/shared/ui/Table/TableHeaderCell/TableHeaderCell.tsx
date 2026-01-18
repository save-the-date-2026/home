import React from 'react';
import styled from '@emotion/styled';

type TableHeaderCellProps = {
    children: React.ReactNode;
};

export const TableHeaderCell = ({ children }: TableHeaderCellProps) => {
    return <StyledTh>{children}</StyledTh>;
};

const StyledTh = styled.th`
  padding: 8px;
  font-weight: 600;
  text-align: center;
  border: none;
`;
