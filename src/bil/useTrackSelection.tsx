import { useState } from "react";


export function useTrackSelection() {
  const [trackId, setTrackid] = useState<string | null>(null);

  const handleTrackSelect = (id: string | null) => { setTrackid(id); };

  return { trackId, handleTrackSelect };
}
