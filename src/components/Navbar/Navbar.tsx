import style from "./Navbar.module.scss";
import userIcon from "../../assets/user.png";
import { Link, NavLink } from "react-router";
import { paths } from "../../shared/config";
export const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        {/* Заголовок перекидывает на главную страницу */}
        <Link to={paths.MAIN} className={style.title}>
          Trakify
        </Link>
        <div className={style.navElement}>
          <ul className={style.navList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : `${style.link}`
                }
                to={paths.ADD_HABIT}
              >
                Добавить привычку
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : `${style.link}`
                }
                to={paths.ALL_HABIT}
              >
                Список привычек{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={paths.PROFILE} className={style.userProfile}>
          <img src={userIcon} alt="" />
        </Link>
      </nav>
    </header>
  );
};
