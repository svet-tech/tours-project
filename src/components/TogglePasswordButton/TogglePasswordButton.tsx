

export const TogglePasswordButton = ({ show, onToggle }) => (
  <button
    type="button"
    onClick={onToggle}
    style={{ marginBottom: 12 }}
  >
    {show ? 'Скрыть пароль' : 'Показать пароль'}
  </button>
);