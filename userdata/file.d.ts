declare type file =
{
    close(): boolean | string | number | null
    flush(): boolean | string | number | null
    lines(): string[]
    read(format: "*n"): number
    read(format: "*a"): string
    read(format: "*l"): string
    read(format: number): string
}