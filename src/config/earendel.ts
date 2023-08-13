import { ChainInfo, Currency } from "@keplr-wallet/types";

const QWOYN: Currency = {
  coinDenom: "QWOYN",
  coinMinimalDenom: "uqwoyn",
  coinDecimals: 6,
  coinGeckoId: "qwoyn-earendel",
};

export const CHAIN_INFO: ChainInfo = {
  chainId: "earendel-1",
  chainName: "Earendel (Qwoyn Testnet)",
  rpc: "http://66.42.74.12:26657",
  rest: "http://66.42.74.12:1317",
  stakeCurrency: QWOYN,
  bip44: {
    coinType: 118,
  },
  bech32Config: {
    bech32PrefixAccAddr: "qwoyn",
    bech32PrefixAccPub: "qwoynpub",
    bech32PrefixValAddr: "qwoynvaloper",
    bech32PrefixValPub: "qwoynvaloperpub",
    bech32PrefixConsAddr: "qwoynvalcons",
    bech32PrefixConsPub: "qwoynvalconspub",
  },
  currencies: [QWOYN],
  feeCurrencies: [QWOYN],
  coinType: 118,
  gasPriceStep: {
    low: 0.01,
    average: 0.025,
    high: 0.04,
  },
};

// 0.4.1
export const CONTRACT =
  "qwoyn14hj2tavq8fpesdwxxcu44rty3hh90vhujrvcmstl4zr3txmfvw9styk733";
