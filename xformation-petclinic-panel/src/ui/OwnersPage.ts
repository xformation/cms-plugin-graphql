import '../domain/owner/OwnerListPage/index';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGraphQLClient } from "../createGraphQLClient";
import { ApolloProvider } from "react-apollo";

export class OwnersPage{
    static templateUrl = '/partials/owners.html';
    graphQLClient = createGraphQLClient();
}