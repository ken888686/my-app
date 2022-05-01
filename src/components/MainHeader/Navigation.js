import { useContext } from 'react';
import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.scss';

function Navigation() {
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
        <li>
          <a href="/">Users</a>
        </li>
        )}
        {ctx.isLoggedIn && (
        <li>
          <a href="/">Admin</a>
        </li>
        )}
        {ctx.isLoggedIn && (
        <li>
          <button type="button" onClick={ctx.onLogout}>Logout</button>
        </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
