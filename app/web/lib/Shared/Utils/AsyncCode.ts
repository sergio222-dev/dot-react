import { Err, Ok, Result } from "@lib/Shared/Utils/Result";

export function GoAsync<T>(promise: Promise<T>): Promise<Result<T>> {
  return Promise.resolve(promise)
    .then(r => Ok<T>(r))
    .catch((e: Error) => Err(e));
}
