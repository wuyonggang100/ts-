type FirstOfArray<T extends any[]> = T['length'] extends 0? never: T[0];

type FirstOfArray2<T extends any[]> = T extends [] ? never: T[0];


// type aa = [4,'676',90]
// type DD = aa[number]  // 4 | "676" | 90
type FirstOfArray3<T extends any[]> = T[0] extends T[number] ?  T[0]:never;

type FirstOfArray4<T extends any[]> = T extends [infer First, ...infer Rest] ? First : never;



type FirstOfArray5<T> = T extends [infer R, ...any[]]? R : never;


type a =  FirstOfArray2<[1,3,4,6]>; // a = 1
type A5 = FirstOfArray5<[undefined,3,5,6]>;
export {};