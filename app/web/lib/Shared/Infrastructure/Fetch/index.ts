import { Fetcher } from "@lib/Shared/Infrastructure/Fetch/Fetcher";

export const fetcher = Fetcher.CREATE_FETCHER({
  baseUrl: "https://127.0.0.1:5001",
  headers: {
    "content-type": "application/json",
  },
  mode: "cors",
});
