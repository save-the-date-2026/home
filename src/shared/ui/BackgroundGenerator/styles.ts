import styled from '@emotion/styled';

export const BackgroundRoot = styled.div`
  position: absolute;
  inset: 0;
  z-index: 0;
  pointer-events: none;
  overflow: hidden;
`;

export const PatternBlock = styled.div<{ offset: number }>`
  position: absolute;
  top: ${({ offset }) => offset}px;
  left: 0;
  right: 0;
  height: 600px;

  display: flex;
  justify-content: space-between;
`;

export const SideColumn = styled.div<{ side: 'left' | 'right' }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 40px 0;

  ${({ side }) => (side === 'left' ? 'align-items: flex-start;' : 'align-items: flex-end;')}

  svg {
    width: 140px;
    height: auto;
    user-select: none;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    svg {
      width: 90px;
      opacity: 0.5;
    }
  }
`;
