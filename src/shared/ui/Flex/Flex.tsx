import type { HTMLAttributes } from 'react';
import styled from '@emotion/styled';

type FlexProps = HTMLAttributes<HTMLDivElement> & {
    direction?: 'row' | 'column';
    justify?: 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'stretch' | 'flex-start' | 'center' | 'flex-end' | 'baseline';
    gap?: number | string;
    wrap?: 'nowrap' | 'wrap';
};

export const Flex = ({
     direction = 'column',
     justify = 'flex-start',
     align = 'stretch',
     gap,
     wrap = 'nowrap',
     ...props
 }: FlexProps) => {
    return (
        <StyledFlex
            direction={direction}
            justify={justify}
            align={align}
            gap={gap}
            wrap={wrap}
            {...props}
        />
    );
};

const StyledFlex = styled.div<FlexProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) =>
    typeof gap === 'number' ? `${gap}px` : gap || '0'};
`;
