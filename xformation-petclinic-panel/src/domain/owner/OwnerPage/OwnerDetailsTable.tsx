import * as React from "react";
import { OwnerFragment } from "../../types";

import { Link } from "react-router-dom";

export default ({ owner }: { owner: OwnerFragment }) =>
  <section>
    <h2 className="heading">Owner Information</h2>
    <table className="striped-table">
      <tbody>
        <tr>
          <th>Name</th>
          <td>
            <b>
              {owner.firstName} {owner.lastName}
            </b>
          </td>
        </tr>
        <tr>
          <th>Address</th>
          <td>
            {owner.address}
          </td>
        </tr>
        <tr>
          <th>City</th>
          <td>
            {owner.city}
          </td>
        </tr>
        <tr>
          <th>Telephone</th>
          <td>
            {owner.telephone}
          </td>
        </tr>
      </tbody>
    </table>
    <Link to={`/plugins/xformation-petclinic-panel/page/editowner?id=${owner.id}`} className="btn btn-primary">
      Edit Owner
    </Link>
  </section>;
