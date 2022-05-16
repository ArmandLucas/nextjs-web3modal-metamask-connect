export const Footer = () => {
  return (
    <div className="py-12 flex flex-wrap gap-x-8 gap-y-4 items-center justify-between text-sm text-indigo-300 text-opacity-60">
      <div>©2022 Modern Fi LLC</div>
      <div className="flex gap-8 items-center">
        <a href="/privacy">Privacy Policy</a>
        <a href="/terms">Terms of Use</a>
      </div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="header ">
      <nav className="navbar navbar-light navbar-expand-lg navbar-light bg-default">
        <div className="container-fluid py-3 navbar-container">
          <div className="d-inline-block">
            <button
              className="navbar-toggler hamburger hamburger-js hamburger--spring"
              type="button"
              datatoggle="collapse"
              datatarget="#navbar_main"
              aria-controls="navbarsExampleDefault"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
          </div>

          <div
            className="collapse navbar-collapse align-items-center justify-content-end"
            id="navbar_main"
          ></div>
        </div>
      </nav>
    </div>
  );
};
