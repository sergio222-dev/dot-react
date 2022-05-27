import { useRecoilSnapshot } from "recoil";
import { useEffect } from "react";

export function ObseverAtom() {
  const snapshot = useRecoilSnapshot();
  useEffect(() => {
    console.debug("The following atoms were modified:");
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    for (const node of snapshot.getNodes_UNSTABLE({ isModified: true })) {
      console.debug(node.key, snapshot.getLoadable(node));
    }
  }, [snapshot]);

  return null;
}
