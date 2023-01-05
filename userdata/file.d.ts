declare class file extends UserData
{
    close(): LuaMultiReturn<[nil,string,int]> | LuaMultiReturn<[nil,string]> | boolean
    flush(): boolean | LuaMultiReturn<[nil,string,int]>
    lines(): LuaFunction
    read(format?: "*n"): number
    read(format?: "*a"): string
    read(format?: "*l"): string
    read(format?: number): string
    seek(whence: "set" | "cur" | "end",offset?: number): string | nil
    setvbuf(mode: "no" | "full" | "line",size?: number): boolean | LuaMultiReturn<[nil,string,int]>
    write(...values: (number | string)[]): boolean | LuaMultiReturn<[nil,string,int]>
}