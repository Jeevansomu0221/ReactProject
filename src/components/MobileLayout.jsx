function MobileLayout({ children, className = '' }) {
  return <div className={`mobile-frame ${className}`}>{children}</div>;
}

export default MobileLayout;
