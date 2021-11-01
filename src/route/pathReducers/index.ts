const reducer = (
  previousValue: Function | string,
  currentValue: Function | string,
  index: number,
  Array: Array<Function | string>
) => {
  let a =
    typeof currentValue === "function"
      ? currentValue()
      : currentValue.toString();

  return index > 0 ? previousValue + "/" + a : a;
};

const reducePath = (...args: Array<Function | string>): string => {
  const path = args.reduce(reducer, "");
  if (path.length === 0) {
    return "/" + path;
  }
  if (typeof path == "string" && path[1] === "/") {
    return path.slice(1);
  }
  if (typeof path == "string") return path;
  return "";
};

export const reduceHomePath = (path = "") => reducePath(path);

export const reduceProfilePath = (path = "profile") =>
  reducePath(reduceHomePath, path);

export const reduceExamplePath = (path = "example") =>
  reducePath(reduceHomePath, path);

export const reduceChatsPath = (path = "chats") =>
  reducePath(reduceHomePath, path);

export const reduceChatIdPath = (path = ":chatId") =>
  reducePath(reduceChatsPath, path);
