import { useState, useRef } from 'react';
import { TogglePasswordButton } from '../TogglePasswordButton/TogglePasswordButton';
import { blue } from '@mui/material/colors';

const persons = [
  { name: 'Иван', password: 'ivan123' },
  { name: 'Ярослав', password: 'yar123' },
  { name: 'Виктор', password: 'vik123' },
];

export const LoginForm = ({ onLoginSuccess }) => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const passwordInputRef = useRef(null);

  const handleSubmit = (e:any) => {
    e.preventDefault();

    const user = persons.find((person) => person.name === login);

    if (!user) {
      alert('Не удалось найти пользователя');
      setLogin('');
      setPassword('');
    } else if (user.password === password) {
      alert(`Добро пожаловать, ${user.name}!`);
      onLoginSuccess();
    } else {
      alert('Пароль неверный!');
      setPassword('');
      passwordInputRef.current && passwordInputRef.current.focus();
    }
  };

  const handlePasswordChange = (e:any) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z0-9]*$/;

    if (!regex.test(value)) {
      setPasswordError('Ой, тут ошибочка, недопустимый символ!');
      setPassword(value.slice(0, -1));
    } else {
      setPasswordError('');
      setPassword(value);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{backgroundColor: 'rose'}}>
      <label htmlFor="loginInput" style={{ display: 'block', marginBottom: 8, color: 'blue' }}>
        Логин:
      </label>
      <input
        id="loginInput"
        name="login"
        type="text"
        value={login}
        onChange={(e) => setLogin(e.target.value)}
        autoComplete="username"
        required
        style={{ marginBottom: 12, width: '100%' }}
      />

      <label htmlFor="passwordInput" style={{ display: 'block', marginBottom: 8, color: 'blue'}}>
        Пароль:
      </label>
      <input
        id="passwordInput"
        name="password"
        type={showPassword ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}
        ref={passwordInputRef}
        autoComplete="current-password"
        required
        style={{
          marginBottom: 4,
          width: '100%',
          borderColor: passwordError ? 'red' : undefined,
        }}
      />
      {passwordError && (
        <div style={{ color: 'red', marginBottom: 8, fontSize: '0.9rem' }}>
          {passwordError}
        </div>
      )}

      <TogglePasswordButton show={showPassword} onToggle={() => setShowPassword(!showPassword)} />

      <button type="submit" style={{ width: '100%' }}>
        Войти
      </button>
    </form>
  );
};