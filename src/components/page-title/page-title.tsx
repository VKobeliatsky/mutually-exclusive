import React from "react";
import { useTitle, DEFAULT_TITLE } from "../../services/location";
import { Helmet } from "react-helmet";

export const PageTitle: React.FC = () => {
  const title = useTitle() || DEFAULT_TITLE;

  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
