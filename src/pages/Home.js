import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import UserList from "../components/UserList";

const Home = () => {
    return <BrowserRouter>
        <main className="container mx-auto">
            <Switch>
                <Route exact path="/">
                    <UserList />
                </Route>
            </Switch>
        </main>
    </BrowserRouter>;
}

export default Home;