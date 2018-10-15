import * as React from "react";
import { QueryProps, ApolloProvider } from "react-apollo";
import { createGraphQLClient } from "../createGraphQLClient";

type ReactFunctionOrComponentClass<P> = React.ComponentClass<P> | React.StatelessComponent<P>;
const graphQLClient = createGraphQLClient();
const withLoadingHandler = <P extends { data: QueryProps }>(TheComponent: ReactFunctionOrComponentClass<P>) => {
  const LoadingHandlerWrapper = (props: P) => {
    if(props.data.loading){
      return <h1>Loading</h1>;
    } else {
      return <ApolloProvider client={graphQLClient}>
        <TheComponent {...props} />
      </ApolloProvider>;
    }
  };
  return LoadingHandlerWrapper;
};

export default withLoadingHandler;
