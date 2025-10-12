import  { useState, useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import classes from "./LoginModal.module.scss";

export const LoginModal = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleLoginSuccess = () => {
    closeModal();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && modalOpen) {
      closeModal();
    }
  };

  useEffect(() => {
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen]);

  return (
    <>
      <button className={classes.openModalButton} onClick={openModal}>
        Войти
      </button>

      <Modal isOpen={modalOpen} onClose={closeModal}>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </Modal>
    </>
  );
};