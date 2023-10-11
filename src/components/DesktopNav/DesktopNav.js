import "./DesktopNav.scss";

export default function DesktopNav() {
  return (
    <nav className="desktop-nav">
      <div className="desktop-nav__nav-link">How it works</div>
      <div className="desktop-nav__nav-link">Meals</div>
      <div className="desktop-nav__nav-link">Pricing</div>
      <div className="desktop-nav__nav-link desktop-nav__nav-link--try-for-free">
        Try for free
      </div>
    </nav>
  );
}
