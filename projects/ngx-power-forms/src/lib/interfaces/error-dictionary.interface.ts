export interface ErrorDictionary {
  [key: string]: (...args: any[]) => string;
}

