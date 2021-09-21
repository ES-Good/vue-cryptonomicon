const API_KEY =
  "2e1094ba748b97448e640197f2c98a5bd350bafb413cd8571efc38336cfb9de1";

export const loadTickers = (tickers) => {
  fetch(
    `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=${tickers.join(
      ","
    )}&api_key=${API_KEY}`
  ).then((r) => r.json());
};
