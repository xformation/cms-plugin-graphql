import '../domain/owner/OwnerListPage/index';
import * as React from "react";
import * as ReactDOM from "react-dom";
import { createGraphQLClient } from "../createGraphQLClient";
import { ApolloProvider } from "react-apollo";

const graphQLClient = createGraphQLClient();

export class OwnersPage extends React.Component{
    static templateUrl = '/partials/owners.html';
}