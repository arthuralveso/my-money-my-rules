import { useEffect, useState } from "react";

export default function usePersistedState(key: string, initialState: any) {
  const [state, setState] = useState(() => {
    const storedState = localStorage.getItem(key);

    if (storedState) {
      return JSON.parse(storedState);
    } else {
      return initialState;
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
}
