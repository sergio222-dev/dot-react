import { BuildContainer } from "@lib/Shared/Infrastructure/DI/Container";
import "reflect-metadata";
import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import "@templates/global.scss";

console.log("builded");
BuildContainer();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
