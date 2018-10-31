import * as React from "react";
import { RouteComponentProps, Link } from "react-router-dom";
import { graphql, QueryProps } from "react-apollo";

import * as OwnerListQueryGql from "./OwnerListQuery.graphql";
import { OwnerListQuery, OwnerSummaryFragment } from '../../types';
import withLoadingHandler from "../../../components/withLoadingHandler";

const OwnerRow = ({ owner }: { owner: OwnerSummaryFragment }) =>
  <tr key={owner.id}>
    <td>
      <Link className="table-link" to={`/plugins/xformation-petclinic-panel/page/owner?id=${owner.id}`}>
        {owner.firstName} {owner.lastName}
      </Link>
    </td>
    <td className="hidden-sm hidden-xs">
      {owner.address}
    </td>
    <td>
      {owner.city}
    </td>
    <td>
      {owner.telephone}
    </td>
    <td className="hidden-xs">
      {owner.pets.map(pet => pet.name).join(", ")}
    </td>
    <td className="hidden-xs">
      {owner.pets.reduce((total, currentPet) => total + currentPet.visits.totalCount, 0) || ""}
    </td>
  </tr>;

const OwnersTable = ({ owners }: { owners: OwnerSummaryFragment[] }) =>
  <table className="striped-table">
    <thead>
      <tr>
        <th>Name</th>
        <th className="hidden-sm hidden-xs">Address</th>
        <th>City</th>
        <th>Telephone</th>
        <th className="hidden-xs">Pets</th>
        <th className="hidden-xs">Visits</th>
      </tr>
    </thead>
    <tbody>
      {owners.map(owner => <OwnerRow key={owner.id} owner={owner} />)}
    </tbody>
  </table>;

type OwnerListPageOwnProps = RouteComponentProps<{}>;
type OwnerListPageProps = {
  data: QueryProps & OwnerListQuery;
};

const OwnerListPage = ({ data: { owners } }: OwnerListPageProps) =>
  <section>
    <h2 className="heading">
      {owners.length} Owners found
    </h2>
    <OwnersTable owners={owners} />
  </section>;

export default graphql<OwnerListQuery, OwnerListPageOwnProps, OwnerListPageProps>(OwnerListQueryGql)(
  withLoadingHandler(OwnerListPage)
);
