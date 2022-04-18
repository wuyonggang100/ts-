
// type Length<T> = T extends readonly  any[] ? T['length'] : never

type Length<T extends readonly any[]> = T['length']

// -------------------测试代码----------------------------
type tesla = ['tesla', 'model 3', 'model X', 'model Y']
type spaceX = ['FALCON 9', 'FALCON HEAVY', 'DRAGON', 'STARSHIP', 'HUMAN SPACEFLIGHT']

type teslaLength = Length<tesla>  //  4
type spaceXLength = Length<spaceX> //  5

let a:teslaLength = 7
export {}