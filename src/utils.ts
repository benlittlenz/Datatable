export function prop<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

export function isEmpty(field: string | number | undefined = ""): boolean {
  if (typeof field === "number") {
    return false;
  }

  return !field || field.length === 0;
}
