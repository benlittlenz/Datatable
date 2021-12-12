export function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function isEmpty(field: string | number | undefined = ""): boolean {
  if (typeof field === "number") {
    return false;
  }

  return !field || field.length === 0;
}

export function getNumberOfPages(rowCount: number, rowsPerPage: number): number {
  return Math.ceil(rowCount / rowsPerPage);
}

export function recalculatePage(prevPage: number, nextPage: number): number {
  return Math.min(prevPage, nextPage);
}

export function handleFunctionProps(
  object: { [key: string]: unknown },
  ...args: unknown[]
): { [key: string]: unknown } {
  let newObject;

  Object.keys(object)
    .map((o) => object[o])
    .forEach((value, index) => {
      const oldObject = object;

      if (typeof value === "function") {
        newObject = { ...oldObject, [Object.keys(object)[index]]: value(...args) };
      }
    });

  return newObject || object;
}
