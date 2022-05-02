export type Result<K, T extends Error = Error> = ReturnType<
  () => [K | null, T | null]
>;

export const Ok: <T>(result?: T | null) => Result<T> = (result = null) => [
  result,
  null,
];
export const Err: (e: Error) => Result<null> = (e) => [null, e];
