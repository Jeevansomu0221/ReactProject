import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MobileLayout from '../components/MobileLayout';
import FloatingInput from '../components/FloatingInput';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    password: '',
    company: '',
    isAgency: 'yes',
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/account');
  };

  return (
    <MobileLayout>
      <div className="mobile-content">
        <h1 className="page-title">Create your PopX account</h1>

        <form className="signup-form" onSubmit={handleSubmit}>
          <FloatingInput
            id="fullName"
            label="Full Name"
            required
            placeholder="Enter full name"
            value={formData.fullName}
            onChange={handleChange('fullName')}
          />
          <FloatingInput
            id="phone"
            label="Phone number"
            required
            type="tel"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange('phone')}
          />
          <FloatingInput
            id="email"
            label="Email address"
            required
            type="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange('email')}
          />
          <FloatingInput
            id="password"
            label="Password"
            required
            type="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange('password')}
          />
          <FloatingInput
            id="company"
            label="Company name"
            required
            placeholder="Enter company name"
            value={formData.company}
            onChange={handleChange('company')}
          />

          <div className="radio-group">
            <p className="radio-group-label">
              Are you an Agency?<span className="required">*</span>
            </p>
            <div className="radio-options">
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={handleChange('isAgency')}
                />
                <span>Yes</span>
              </label>
              <label className="radio-option">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={handleChange('isAgency')}
                />
                <span>No</span>
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary">
            Create Account
          </button>
        </form>
      </div>
    </MobileLayout>
  );
}

export default Signup;
