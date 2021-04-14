import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Characters from "./Characters/Characters";
import Films from "./Films/Films";
import Authentication from "./Authentication/Authentication";

export default function Routers() {
    return (
        <Router>
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

                {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
                <Switch>
                    <Route path="/authentication">
                        <Authentication />
                    </Route>
                    <Route path="/films">
                        <Films />
                    </Route>
                    <Route path="/characters">
                        <Characters />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}
