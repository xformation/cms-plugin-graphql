import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { createGraphQLClient } from "../../createGraphQLClient";
import OwnersListPage from "./OwnerListPage";
import OwnerPage from "./OwnerPage";

const graphQLClient = createGraphQLClient();

export default function init(){
  setTimeout(function(){
    ReactDOM.render(
      <ApolloProvider client={graphQLClient}>
        <BrowserRouter>
          <Switch>
            <Route path="/plugins/xformation-petclinic-panel/page/owners" component={OwnersListPage} />
            <Route path="/plugins/xformation-petclinic-panel/page/owners/:ownerId" component={OwnerPage} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>,
    document.getElementById("mount"));  
  },1000);  
}