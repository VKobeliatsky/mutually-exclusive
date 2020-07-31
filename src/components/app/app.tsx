import React, { useState, useCallback } from "react";

import { OptionsScreen } from "../options-screen";
import { CongratulationsScreen } from "../congratulation-screen";
import { CreateScreen } from "../create-screen";
import { useOptions } from "../../services/location";

export const App: React.FC = () => {
  const options = useOptions();
  const [accepted, setAccepted] = useState(false);
  const [creating, setCreating] = useState(false);

  const accept = () => setAccepted(true);
  const create = useCallback(() => {
    setCreating(true);
    setAccepted(false);
  }, []);

  if (creating) return <CreateScreen />;
  if (accepted) return <CongratulationsScreen onCreateClick={create} />;
  if (options.length > 0) return <OptionsScreen onSubmit={accept} />;

  return <CreateScreen />;
};
