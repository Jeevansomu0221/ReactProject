import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import FloatingInput from '../components/FloatingInput';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const isValid = email.trim() !== '' && password.trim() !== '';

  const handleLogin = (e) => {
    e.preventDefault();
    if (isValid) {
      navigate('/account');
    }
  };

  return (
    <MobileLayout scrollable>
      <div className="mobile-content">
        <h1 className="page-title">Signin to your PopX account</h1>
        <p className="page-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>

        <form className="login-form" onSubmit={handleLogin}>
          <FloatingInput
            id="email"
            label="Email Address"
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FloatingInput
            id="password"
            label="Password"
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className={`btn ${isValid ? 'btn-active' : 'btn-disabled'}`}
            disabled={!isValid}
          >
            Login
          </button>
        </form>
      </div>
    </MobileLayout>
  );
}

export default Login;
