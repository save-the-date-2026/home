// src/shared/ui/Toast/Toast.tsx
import styled from '@emotion/styled';
import { useEffect } from 'react';

type ToastProps = {
    message: string;
    onClose: () => void;
};

export const Toast = ({ message, onClose }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(onClose, 2000);
        return () => clearTimeout(timer);
    }, [onClose]);

    return <ToastBox>{message}</ToastBox>;
};

const ToastBox = styled.div`
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
  background: #3A553D;
  color: #F0EFEA;
  padding: 12px 20px;
  border-radius: 8px;
  font-size: 14px;
  z-index: 9999;
`;
