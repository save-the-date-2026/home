import type { ButtonHTMLAttributes } from 'react';
import styled from '@emotion/styled';
import {Text} from '@/shared'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    fullWidth?: boolean;
    isLoading?: boolean;
};

export const Button = ({ children, fullWidth, isLoading, disabled, ...props }: ButtonProps) => {
    return (
        <StyledButton
            fullWidth={fullWidth}
            disabled={disabled || isLoading}
            {...props}
        >
            <Content hidden={isLoading}>
                <Text color={'#F0EFEA'}>
                    {children}
                </Text>
            </Content>
            {isLoading && <Spinner />}
        </StyledButton>
    );
};

const StyledButton = styled.button<{ fullWidth?: boolean }>`
  border: none;
  background: #3A553D;
  color: #F0EFEA;
  padding: 14px 24px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 100;
  font-size: 16px;

  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};

  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  min-height: 48px;

  transition: background 0.2s ease;

  &:hover {
    background: #1f2e22;
  }

  &:active {
    transform: translateY(1px);
  }

  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

const Content = styled.span<{ hidden?: boolean }>`
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
`;

const Spinner = styled.div`
  position: absolute;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 2px solid rgba(240, 239, 234, 0.3);
  border-top-color: #F0EFEA;
  animation: spin 0.6s linear infinite;

  @keyframes spin {
    to { transform: rotate(360deg); }
  }
`;
