export default function Header() {
  return (
    <header className="d-flex">
      <p className="logo">calc</p>

      <div className="theme-section d-flex">
        <p>theme</p>
        <div className="theme-toggle-controller d-flex">
          <div className="theme-toggle-index d-flex">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <div className="theme-toggle-input d-flex">
            <label htmlFor="theme-1">
              <input
                type="radio"
                name="theme"
                id="theme-1"
                className="d-none"
                checked
                readOnly
              />
              <span className="toggle-circle"></span>
            </label>
            <label htmlFor="theme-2">
              <input
                type="radio"
                name="theme"
                id="theme-2"
                className="d-none"
                readOnly
              />
              <span className="toggle-circle"></span>
            </label>
            <label htmlFor="theme-3">
              <input
                type="radio"
                name="theme"
                id="theme-3"
                className="d-none"
                readOnly
              />
              <span className="toggle-circle"></span>
            </label>
          </div>
        </div>
      </div>
    </header>
  );
}
