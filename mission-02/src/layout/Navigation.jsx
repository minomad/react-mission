import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="sticky top-2 z-20">
      <ul className="mt-2 flex flex-col justify-center gap-5 py-2 text-center text-xl font-bold text-white max-[500px]:flex-row">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'border-b-4 border-primary font-semibold text-primary' : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/NewsPage"
            className={({ isActive }) => (isActive ? 'border-b-4 border-primary font-semibold text-primary' : '')}
          >
            News
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/WeatherPage"
            className={({ isActive }) => (isActive ? 'border-b-4 border-primary font-semibold text-primary' : '')}
          >
            Weather
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
export default Navigation;
