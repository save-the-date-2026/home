import React from 'react';
import styled from '@emotion/styled';

type TableRowProps = {
    children: React.ReactNode;
};

export const TableRow = ({ children }: TableRowProps) => {
    return <StyledTr>{children}</StyledTr>;
};

const StyledTr = styled.tr``;
