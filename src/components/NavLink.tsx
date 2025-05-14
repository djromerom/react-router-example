import {
    NavLink as NavLinkReactRouter,
    NavLinkProps
} from "react-router";
import { FC } from "react";

const NavLink: FC<NavLinkProps> = ({ to, children, ...props }) => {
    return (
        <NavLinkReactRouter
            {...props}
            className={({ isActive  }) => {
                return isActive ? 'is-active' : undefined;
            }}
            to={to}
        >
            {children}
        </NavLinkReactRouter>
    );
};

export default NavLink;