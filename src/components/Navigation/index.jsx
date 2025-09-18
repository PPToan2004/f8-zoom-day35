
import { NavLink } from 'react-router';
import styles from './Navigation.module.scss';


const navItems = [
    {
        to: "/",
        title: "Home"
    },
    {
        to: "/counter",
        title: "Counter"
    },
    {
        to: "/todo",
        title: "Todo"
    },
    {
        to: "/profile",
        title: "Profile"
    },
    {
        to: "/products",
        title: "Products"
    },
    {
        to: "/comments",
        title: "Comments"
    },
    {
        to: "/weather",
        title: "Weather"
    },
    {
        to: "/buttons",
        title: "Button"
    },
]
function Navigation() {
    return (
        <nav className={styles.wrapper}>
            <ul>
                {navItems.map((item,index) =>(
                    <li key={index}>
                        <NavLink className={({isActive}) => isActive ? styles.active : styles.inactive} to={item.to}>{item.title}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation;