import { useEffect, useState } from "react";

export const useSomeHook = () => {
  const [state] = useState(false);

  useEffect(() => {
    console.log(state);
  }, []);
};
