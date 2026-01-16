import styled from '@emotion/styled';

type Spacing = number | string;

type ContainerProps = {
    padding?: Spacing;
    paddingX?: Spacing;
    paddingY?: Spacing;
    margin?: Spacing;
    marginX?: Spacing;
    marginY?: Spacing;
    maxWidth?:number | string
};

const resolveSpace = (axis?: Spacing, common?: Spacing) =>
    axis !== undefined ? axis : common !== undefined ? common : undefined;

const toCssValue = (v?: Spacing) =>
    typeof v === 'number' ? `${v}px` : v;

/* === ADDED: helper for scaling vertical margins === */
const scaleSpace = (value?: Spacing, factor: number = 1) => {
    if (!value) return undefined;
    if (typeof value === 'number') return `${value * factor}px`;
    return `calc(${value} * ${factor})`;
};

export const Container = styled.section<ContainerProps>`
  width: 100%;
  max-width: ${({ maxWidth }) => toCssValue(maxWidth) || '1200px'};

  /* === CHANGED: base mobile marginY === */
  margin-top: ${({ marginY, margin }) =>
    toCssValue(resolveSpace(marginY, margin)) || '0'};
  margin-bottom: ${({ marginY, margin }) =>
    toCssValue(resolveSpace(marginY, margin)) || '0'};

  margin-left: ${({ marginX, margin }) =>
    toCssValue(resolveSpace(marginX, margin)) || 'auto'};
  margin-right: ${({ marginX, margin }) =>
    toCssValue(resolveSpace(marginX, margin)) || 'auto'};

  padding-top: ${({ paddingY, padding }) =>
    toCssValue(resolveSpace(paddingY, padding)) || '10px'};
  padding-bottom: ${({ paddingY, padding }) =>
    toCssValue(resolveSpace(paddingY, padding)) || '10px'};
  padding-left: ${({ paddingX, padding }) =>
    toCssValue(resolveSpace(paddingX, padding)) || '8px'};
  padding-right: ${({ paddingX, padding }) =>
    toCssValue(resolveSpace(paddingX, padding)) || '8px'};

  display: flex;
  flex-direction: column;
  align-items: center;

  /* === ADDED: tablet scaling ×1.5 === */
  @media (min-width: 768px) {  
    margin-top: ${({ marginY, margin }) =>
    scaleSpace(resolveSpace(marginY, margin), 1.5) || '0'};
    margin-bottom: ${({ marginY, margin }) =>
    scaleSpace(resolveSpace(marginY, margin), 1.5) || '0'};
  }

  /* === ADDED: desktop scaling ×2 === */
  @media (min-width: 1200px) {
    margin-top: ${({ marginY, margin }) =>
    scaleSpace(resolveSpace(marginY, margin), 2.5) || '0'};
    margin-bottom: ${({ marginY, margin }) =>
    scaleSpace(resolveSpace(marginY, margin), 2.5) || '0'};
  }
`;
