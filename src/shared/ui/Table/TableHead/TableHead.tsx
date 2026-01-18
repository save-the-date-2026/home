import React from 'react';
import styled from '@emotion/styled';

type TableHeadProps = {
    children: React.ReactNode;
};

export const TableHead = ({ children }: TableHeadProps) => {
    return <StyledThead>{children}</StyledThead>;
};

const StyledThead = styled.thead``;
