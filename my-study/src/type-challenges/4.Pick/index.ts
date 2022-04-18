type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TT = keyof Todo; // 联合类型 "title" | "description" | "completed"


// -------------测试代码-----------------------

type TodoPreview = MyPick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
export {};


type isNum<T> = T extends number ? number : string

type Num = isNum<1>   // number;
type Str = isNum<'1'> // string;


// 判断联合类型
type A = 'x'|4;
type B = 'x' | 'y'|4;

type Y = A extends B ? true : false; // true

// 传入不肯定的值，例如一个联合类型 'x' | 'y',
// 判断逻辑多是 true，也多是 false。其实 TypeScript 也不知道该怎么办，因而乎它就把两个结果的值都返回给咱们了

type AB<T> = T extends 'x' ? 'a' : 'b';

type All = AB<'x' | 'y'>; // 非肯定条件，多是 'x' 或 'y'



// -------------------------infer-----------------------------------

type ReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
























