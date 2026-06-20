import MobileLayout from '../components/MobileLayout';

function AccountSettings() {
  return (
    <MobileLayout>
      <header className="account-header">
        <h1>Account Settings</h1>
      </header>

      <section className="profile-section">
        <div className="profile-top">
          <div className="avatar-wrapper">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=128&h=128&fit=crop&crop=face"
              alt="Profile"
              className="avatar"
            />
            <button type="button" className="avatar-edit" aria-label="Change photo">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 15.2a3.2 3.2 0 100-6.4 3.2 3.2 0 000 6.4z" />
                <path d="M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
              </svg>
            </button>
          </div>
          <div className="profile-info">
            <h2>Priya Sharma</h2>
            <p>Priya@Gmail.Com</p>
          </div>
        </div>
        <p className="profile-bio">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </section>

      <section className="settings-section" />
    </MobileLayout>
  );
}

export default AccountSettings;
