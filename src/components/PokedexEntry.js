import React from "react";
import { Link } from "react-router-dom";
import { padNumer } from "../utils";

const PokedexEntry = ({ name, id }) => (
  <tr>
    <td>
      <Link to={`/${id}`}>{padNumer(id, 3)}</Link>
    </td>
    <td style={{ textTransform: "capitalize" }}>{name}</td>
  </tr>
);

export default PokedexEntry;
