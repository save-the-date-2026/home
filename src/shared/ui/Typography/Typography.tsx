import styled from '@emotion/styled';
import type { CSSProperties } from 'react';

type Spacing = number | string;

type SpaceProps = {
    margin?: Spacing;
    marginX?: Spacing;
    marginY?: Spacing;
    padding?: Spacing;
    paddingX?: Spacing;
    paddingY?: Spacing;
};

const resolveSpace = (
    axis?: Spacing,
    common?: Spacing
) => {
    if (axis !== undefined) return axis;
    if (common !== undefined) return common;
    return 0;
};

const toCssValue = (v: Spacing) =>
    typeof v === 'number' ? `${v}px` : v;

/* ---------------- TITLE ---------------- */
type TitleProps = SpaceProps & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

    /* === ADDED === */
    size?: number | string; // базовый размер
};

export const Title = styled.h1<TitleProps>`
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    color: ${({ theme }) => theme.colors.primaryText};
    text-align: center;
    font-weight: 700;
    line-height: 1.2;

    /* === CHANGED: базовый размер теперь можно задать пропсом === */
    font-size: ${({ size, theme, as }) => {
        if (size) {
            return typeof size === 'number' ? `${size}px` : size;
        }

        // fallback если size не передан — как раньше из theme
        switch (as) {
            case 'h2': return theme.typography.title.h2;
            case 'h3': return theme.typography.title.h3;
            case 'h4': return theme.typography.title.h4;
            case 'h5': return theme.typography.title.h5;
            case 'h6': return theme.typography.title.h6;
            default: return theme.typography.title.h1;
        }
    }};

    /* === ADDED: масштабирование от базового размера === */
    @media (min-width: 768px) {
        font-size: ${({ size, theme, as }) => {
            const base =
                    size
                            ? (typeof size === 'number' ? `${size}px` : size)
                            : (() => {
                                switch (as) {
                                    case 'h2': return theme.typography.title.h2;
                                    case 'h3': return theme.typography.title.h3;
                                    case 'h4': return theme.typography.title.h4;
                                    case 'h5': return theme.typography.title.h5;
                                    case 'h6': return theme.typography.title.h6;
                                    default: return theme.typography.title.h1;
                                }
                            })();

            return `calc(${base} * 1.3)`;
        }};
    }

    @media (min-width: 1200px) {
        font-size: ${({ size, theme, as }) => {
            const base =
                    size
                            ? (typeof size === 'number' ? `${size}px` : size)
                            : (() => {
                                switch (as) {
                                    case 'h2': return theme.typography.title.h2;
                                    case 'h3': return theme.typography.title.h3;
                                    case 'h4': return theme.typography.title.h4;
                                    case 'h5': return theme.typography.title.h5;
                                    case 'h6': return theme.typography.title.h6;
                                    default: return theme.typography.title.h1;
                                }
                            })();

            return `calc(${base} * 1.3)`;
        }};
    }

    margin-top: ${({ marginY, margin }) => toCssValue(resolveSpace(marginY, margin))};
    margin-bottom: ${({ marginY, margin }) => toCssValue(resolveSpace(marginY, margin))};
    margin-left: ${({ marginX, margin }) => toCssValue(resolveSpace(marginX, margin))};
    margin-right: ${({ marginX, margin }) => toCssValue(resolveSpace(marginX, margin))};

    padding-top: ${({ paddingY, padding }) => toCssValue(resolveSpace(paddingY, padding))};
    padding-bottom: ${({ paddingY, padding }) => toCssValue(resolveSpace(paddingY, padding))};
    padding-left: ${({ paddingX, padding }) => toCssValue(resolveSpace(paddingX, padding))};
    padding-right: ${({ paddingX, padding }) => toCssValue(resolveSpace(paddingX, padding))};
`;


/* ---------------- TEXT ---------------- */

type TextProps = SpaceProps & {
    size?: number | string;
    color?:string;
    align?:'center' | 'left' | 'right' | 'start' | 'end';
    weight?: CSSProperties['fontWeight'];
};

export const Text = styled.p<TextProps>`
    font-family: ${({ theme }) => theme.typography.fontFamily.primary};
    color: ${({ color, theme }) => color || theme.colors.primaryText};
    text-align: ${({ align }) => align || 'center'};
    
    line-height: 1.5;

    /* базовый размер */
    font-size: ${({ size, theme }) =>
            typeof size === 'number'
                    ? `${size}px`
                    : size || theme.typography.text.fontSize};

    font-weight: ${({ weight, theme }) =>
            weight || theme.typography.text.fontWeight};

    /* === ADDED: увеличение текста на планшетах === */
    @media (min-width: 768px) {
        font-size: ${({ size, theme }) =>
                typeof size === 'number'
                        ? `${size * 1.1}px`
                        : size
                                ? `calc(${size} * 1.1)`
                                : `calc(${theme.typography.text.fontSize} * 1.1)`};
    }

    /* === ADDED: увеличение текста на десктопе === */
    @media (min-width: 1200px) {
        font-size: ${({ size, theme }) =>
                typeof size === 'number'
                        ? `${size * 1.2}px`
                        : size
                                ? `calc(${size} * 1.2)`
                                : `calc(${theme.typography.text.fontSize} * 1.2)`};
    }

    margin-top: ${({ marginY, margin }) => toCssValue(resolveSpace(marginY, margin))};
    margin-bottom: ${({ marginY, margin }) => toCssValue(resolveSpace(marginY, margin))};
    margin-left: ${({ marginX, margin }) => toCssValue(resolveSpace(marginX, margin))};
    margin-right: ${({ marginX, margin }) => toCssValue(resolveSpace(marginX, margin))};

    padding-top: ${({ paddingY, padding }) => toCssValue(resolveSpace(paddingY, padding))};
    padding-bottom: ${({ paddingY, padding }) => toCssValue(resolveSpace(paddingY, padding))};
    padding-left: ${({ paddingX, padding }) => toCssValue(resolveSpace(paddingX, padding))};
    padding-right: ${({ paddingX, padding }) => toCssValue(resolveSpace(paddingX, padding))};
`;
