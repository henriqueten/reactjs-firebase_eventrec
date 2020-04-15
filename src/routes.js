import React from "react";

import { Switch, Route } from "react-router-dom";
import Main from "./page";

import CadEvent from "./page/eventrec/cad_event";
import EventPost from "./page/eventrec/event_posting";
import MyEvent from "./page/my_event";

import Login from "./page/login"
import GetLogin from "./page/login/get_login";
import NewLogin from "./page/login/new_login";

export default function Routes() {
    return (<>


        <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/cadastro/evento" component={CadEvent} />
            <Route exact path="/postagem/eventos" component={EventPost} />
            <Route exact path="/meueventos" component={MyEvent} />

            <Route exact path="/login" component={Login} />
            <Route exact path="/resgatar/senha" component={GetLogin} />
            <Route exact path="/nova/senha" component={NewLogin} />

        </Switch>




    </>);
}