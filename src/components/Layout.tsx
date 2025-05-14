// components/Layout.jsx
import { Outlet } from 'react-router'
import NavLink from './NavLink'
import Logout from './Logout'

export default function Layout() {
    return (
        <div className="container">
            <header>
                <nav>
                    <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><Logout /></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </div>
    )
}