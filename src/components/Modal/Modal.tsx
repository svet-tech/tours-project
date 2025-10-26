import React from 'react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}


export const Modal: React.FC<ModalProps>= ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackdropClick}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
      role="dialog"
      aria-modal="true"
    >
      <div
        style={{
          backgroundColor: 'white',
          padding: 20,
          borderRadius: 8,
          width: 300,
          marginTop: 150,
          // marginLeft: 400,
          position: 'relative',
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            fontSize: '1.2rem',
            border: 'none',
            background: 'none',
            cursor: 'pointer'
          }}
          aria-label="Закрыть модальное окно"
        >
          &times;
        </button>

        {children}
      </div>
    </div>
  );
};