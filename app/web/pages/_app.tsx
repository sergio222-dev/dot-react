import { BuildContainer, container } from "@lib/Shared/Infrastructure/DI/Container";
import "reflect-metadata";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "@styles/app.scss";
import { ContainerContext } from "@context/ContainerContext";
import { ObseverAtom } from "@atoms/ObseverAtom";

BuildContainer();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContainerContext.Provider value={container}>
      <RecoilRoot>
        <ObseverAtom />
        <Component {...pageProps} />
      </RecoilRoot>
    </ContainerContext.Provider>
  );
}

export default MyApp;
