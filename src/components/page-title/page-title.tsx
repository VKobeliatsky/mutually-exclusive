import React from "react";
import { Helmet } from "react-helmet";

export const PageTitle: React.FC<{ value: string }> = ({ value }) => (
  <Helmet>
    <title>{value}</title>
  </Helmet>
);
