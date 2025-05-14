import { NavLink } from 'react-router';

const Navigation = () => {
    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
            </ul>
        </nav>
    );
};

export default Navigation;