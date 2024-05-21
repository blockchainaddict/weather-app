import useLocation from "../../services/useLocation";

function NavBar() {

  const { location, error } = useLocation();

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          
          <img src="https://bulma.io/images/bulma-logo.png" alt="image-of-myapp" />
        </a>

        <a
          role="button"
          className="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBasicExample"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" className="navbar-menu">
        
        <div className="navbar-end">
          <div className="coords-header">
            <p className="is-size-6">{location ? location.latitude?.toFixed(2) : error}</p>
            <p>{location ? location.longitude?.toFixed(2) : null}</p>
          </div>
          
          {/* <a className="navbar-item">Home</a>

          <div className="navbar-item has-dropdown is-hoverable">
            <a className="navbar-link">More</a>

            <div className="navbar-dropdown">
              <a className="navbar-item">About</a>
              <a className="navbar-item is-selected">Jobs</a>
              <a className="navbar-item">Contact</a>
              <hr className="navbar-divider" />
              <a className="navbar-item">Report an issue</a>
            </div>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
