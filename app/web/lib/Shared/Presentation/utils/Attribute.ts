/**
 * Generate attributes dynamically, add data- to html element
 */
export default function attribute<T extends object>(o: T) {
  if (o === undefined || o === null) return {};
  const keys = Object.keys(o) as Array<keyof T>;
  const attr: object = {};
  keys.forEach(k => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    attr[`data-${k.toLowerCase()}`] = o[k];
  });
  return attr;
}
