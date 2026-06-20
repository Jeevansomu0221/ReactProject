function MobileLayout({ children, scrollable = false, className = '' }) {
  return (
    <div className={`mobile-frame${scrollable ? ' mobile-frame--scroll' : ''} ${className}`}>
      {children}
    </div>
  );
}

export default MobileLayout;
