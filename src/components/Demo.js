import "../assets/scss/_skyz-demo.scss";

const Demo = () => {
  return (
    <div className="skyz-demo">
      <div className="skyz-demo__navbar">
        <div className="navbar__menu">
          <span className="material-symbols-outlined side-toggle">menu</span>
          <div class="navbar__menu--logo">
            <span class="material-symbols-outlined">home</span>
            <div>
              Skyz<span>CRM</span>
            </div>
          </div>
        </div>
        <div className="navbar__search">
          <div className="navbar__search--input-container">
            <input
              type="text"
              class="input"
              placeholder="Search..."
              id="searchInput"
            />
          </div>
          <div className="navbar__search--links-container">
            <div className="round-btn round-btn-primary">
              <span className="material-symbols-outlined"> search </span>
            </div>
            <div className="round-btn round-btn-secondary">
              <span className="material-symbols-outlined">add</span>
            </div>
          </div>
        </div>
        <div className="navbar__personal">
          <span
            className="material-symbols-outlined fill-icon"
            id="change-color"
          >
            circle
          </span>
          <div className="darkmode-toggle">
            <button aria-label="darkmode-toggle" id="darkmodeToggle">
              <span className="material-symbols-outlined">light_mode</span>
            </button>
          </div>
          <div className="navbar__personal--name">Impact System</div>
          <div className="round-img-container">
            {/* <img src="./up/imgs/passport.webp" alt=""> */}
          </div>
        </div>
      </div>
      <div className="navbar__overlay"></div>

      <div className="skyz-demo__sidebar">
        <div className="sidebar__content">
          <ul className="sidebar__content--list">
            <li className="create-item">
              <a href="#">
                <span className="material-symbols-outlined">add</span>
                <div>צור</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined">home</span>
                <div>SkyzCRM</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined">category</span>
                <div>Actions</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined">
                  account_balance_wallet
                </span>
                <div>Acounts</div>
                <div
                  className="side-nav__content--list__item--collapse active"
                  id="acountsCollapse"
                >
                  <span>All</span>
                  <span>Opened</span>
                  <span>SLA Exception</span>
                  <span>In Progress</span>
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined">attach_money</span>
                <div>Debit Order</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined">chat</span>
                <div>Chat</div>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="material-symbols-outlined">handyman</span>
                <div>Service</div>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="skyz-demo__main">
        <div className="card-container"></div>
      </div>
    </div>
  );
};

export default Demo;
