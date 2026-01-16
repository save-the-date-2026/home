import React from 'react';
import styled from '@emotion/styled';

type TableBodyProps = {
    children: React.ReactNode;
};

export const TableBody = ({ children }: TableBodyProps) => {
    return <StyledTbody>{children}</StyledTbody>;
};

const StyledTbody = styled.tbody``;
