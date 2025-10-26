import { useState, useEffect } from 'react';
import { Modal } from '../Modal/Modal';
import { LoginForm } from '../LoginForm/LoginForm';
import classes from './LoginModal.module.scss';

export const LoginModal: React.FC = () => {
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

  // Указание типа события
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape' && modalOpen) {
      closeModal();
    }
  };

  // Обработка добавления/удаления слушателя
  useEffect(() => {
    if (modalOpen) {
      window.addEventListener('keydown', handleKeyDown);
      // Очистка при закрытии или размонтировании
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
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