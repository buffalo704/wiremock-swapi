import React from "react";
import {Link, Outlet} from "react-router";


export const Nav = () => {
return (
    <div>
        <ul>
            <li>
                <Link to="/authentication">Authentication</Link>
            </li>
            <li>
                <Link to="/films">Films</Link>
            </li>
            <li>
                <Link to="/characters">Characters</Link>
            </li>
        </ul>

        <hr />

        <div id="detail">
            <Outlet/>
        </div>
    </div>
);
}