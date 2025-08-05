import React, { useEffect } from 'react';
import { Overlay, Box, Close } from './styles';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <Overlay onClick={e => e.target === e.currentTarget && onClose()}>
      <Box>
        <Close onClick={onClose}>×</Close>
        {children}
      </Box>
    </Overlay>
  );
};

export default Modal;
