import { Link } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';

function Welcome() {
  return (
    <MobileLayout>
      <div className="mobile-content mobile-content--bottom">
        <h1 className="page-title">Welcome to PopX</h1>
        <p className="page-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <Link to="/signup" className="btn btn-primary">
          Create Account
        </Link>
        <Link to="/login" className="btn btn-secondary">
          Already Registered? Login
        </Link>
      </div>
    </MobileLayout>
  );
}

export default Welcome;
