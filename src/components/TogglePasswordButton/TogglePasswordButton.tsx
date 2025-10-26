import React from 'react';

interface TogglePasswordButtonProps {
  show: boolean;
  onToggle: () => void;
}

export const TogglePasswordButton: React.FC<TogglePasswordButtonProps> = ({ show, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    style={{ marginBottom: 12 }}
  >
    {show ? 'Скрыть пароль' : 'Показать пароль'}
  </button>
);