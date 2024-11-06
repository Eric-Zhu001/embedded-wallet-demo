
import { http, createConfig } from "wagmi";
import { mainnet,mantle,mantleSepoliaTestnet } from "wagmi/chains";

export const config = createConfig({
  chains: [mainnet,mantle,mantleSepoliaTestnet],
  multiInjectedProviderDiscovery: false,
  ssr: true,
  transports: {
    [mainnet.id]: http(),
    [mantle.id]: http(),
    [mantleSepoliaTestnet.id]: http(),
  },
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}
