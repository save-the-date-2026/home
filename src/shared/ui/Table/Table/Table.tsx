import React from 'react';
import styled from '@emotion/styled';

type TableProps = {
    children: React.ReactNode;
};

export const Table = ({ children }: TableProps) => {
    return <StyledTable>{children}</StyledTable>;
};

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
`;
