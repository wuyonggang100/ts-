
type MyReturnType<T> = T extends (...args:Array<any>)=>infer R ? R: never


// ---------------测试代码--------------------
const fn = (v: boolean) => {
    if (v)
        return 1
    else
        return 2
}

type a = MyReturnType<typeof fn> // should be "1 | 2"
export {}