import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
import { ApolloProvider } from "react-apollo";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { createGraphQLClient } from "../../../createGraphQLClient";
import OwnerPage from "./OwnerPage";

const graphQLClient = createGraphQLClient();

export default function init(){
  setTimeout(function(){
    ReactDOM.render(
      <ApolloProvider client={graphQLClient}>
        <BrowserRouter>
          <Switch>
            <Route path="/plugins/xformation-petclinic-panel/page/owner" component={OwnerPage} />
          </Switch>
        </BrowserRouter>
      </ApolloProvider>,
    document.getElementById("mountOwner"));  
  },1000);  
}