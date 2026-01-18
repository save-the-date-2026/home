import React from 'react';
import type { ComponentType, ImgHTMLAttributes } from 'react';
import styled from '@emotion/styled';

type BaseProps = {
    width?: number | string;
    maxWidth?: number | string;
    minWidth?: number | string;
    height?: number | string;
    objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down';
};

type RasterImageProps = BaseProps &
    ImgHTMLAttributes<HTMLImageElement> & {
    src: string;
    SvgComponent?: never;
};

type SvgImageProps = BaseProps & {
    SvgComponent: ComponentType<React.SVGProps<SVGSVGElement>>;
    src?: never;
    alt?: string;
};

type ImageProps = RasterImageProps | SvgImageProps;

export const Image = (props: ImageProps) => {
    const { width, maxWidth, minWidth, height, objectFit = 'contain', ...rest } = props;

    if ('SvgComponent' in props && props.SvgComponent) {
        const { SvgComponent, alt, width, height } = props;
        const Svg = SvgComponent;

        return (
            <SvgWrapper
                width={width}
                maxWidth={maxWidth}
                minWidth={minWidth}
                height={height}
                aria-label={alt}
                role="img"
            >
                <Svg />
            </SvgWrapper>
        );
    }


    return (
        <StyledImg
            {...rest}
            width={width}
            maxWidth={maxWidth}
            minWidth={minWidth}
            height={height}
            objectFit={objectFit}
        />
    );
};

const StyledImg = styled.img<{
    width?: number | string;
    maxWidth?: number | string;
    minWidth?: number | string;
    height?: number | string;
    objectFit: string;
}>`
  display: block;
  width: ${({ width }) =>
    typeof width === 'number' ? `${width}px` : width || 'auto'};

    max-width: ${({ maxWidth }) =>
            typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth || 'auto'};
    min-width: ${({ minWidth }) =>
            typeof minWidth === 'number' ? `${minWidth}px` : minWidth || 'auto'};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height || 'auto'};
  object-fit: ${({ objectFit }) => objectFit};
`;

const SvgWrapper = styled.div<{
    width?: number | string;
    maxWidth?: number | string;
    minWidth?: number | string;
    height?: number | string;
}>`
  display: inline-flex;
  width: ${({ width }) =>
    typeof width === 'number' ? `${width}px` : width || 'auto'};

    max-width: ${({ maxWidth }) =>
            typeof maxWidth === 'number' ? `${maxWidth}px` : maxWidth || 'auto'};
    min-width: ${({ minWidth }) =>
            typeof minWidth === 'number' ? `${minWidth}px` : minWidth || 'auto'};
  height: ${({ height }) =>
    typeof height === 'number' ? `${height}px` : height || 'auto'};

  svg {
    width: 100%;
    height: 100%;
    display: block;
  }
`;
