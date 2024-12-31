import style from "./Navbar.module.scss";
import userIcon from "../../assets/user.png";
import { Link, NavLink } from "react-router";
export const Navbar = () => {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        {/* Заголовок перекидывает на главную страницу */}
        <Link to={"/"} className={style.title}>
          Trakify
        </Link>
        <div className={style.navElement}>
          <ul className={style.navList}>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : `${style.link}`
                }
                to={"/add-habbit"}
              >
                Добавить привычку
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? `${style.active}` : `${style.link}`
                }
                to={"/all-habbit"}
              >
                Список привычек{" "}
              </NavLink>
            </li>
          </ul>
        </div>
        <Link to={"/profile"} className={style.userProfile}>
          <img src={userIcon} alt="" />
        </Link>
      </nav>
    </header>
  );
};
