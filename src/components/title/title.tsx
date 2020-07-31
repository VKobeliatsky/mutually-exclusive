import React from "react";
import { useTitle, DEFAULT_TITLE } from "../../services/location";

export const Title: React.FC = () => {
  const title = useTitle() || DEFAULT_TITLE;

  return <>{title}</>;
};
