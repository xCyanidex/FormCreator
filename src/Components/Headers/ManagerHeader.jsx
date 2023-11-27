import pflogo from "../../assets/pflogo.jpg";

export default function AdminHeader() {
  return (
    <>
      <div className="navbar bg-slate-300">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <a>Item 1</a>
              </li>

              <li>
                <a>Item 2</a>
              </li>
            </ul>
          </div>

          <img
            className="w-100 h-10   hidden  lg:block  "
            src={pflogo}
            alt=""
          />
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Item 1</a>
            </li>
            <li>
              <a>Item 2</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:hidden">
          <img className="w-100 h-10" src={pflogo} alt="" />
        </div>
      </div>
    </>
  );
}
