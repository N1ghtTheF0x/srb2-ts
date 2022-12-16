declare namespace string
{
    /**
     * Alternative syntax: s:byte([int start, [int end]])

    Returns the numerical values of the characters in string s between start and end. start and end default to 1 and the length of the string, respectively.
    */
    export function byte(s: string, start?: int, end?: int): int
    /**
     * Converts the given character codes into a string consisting of the respective characters (reverse of string.byte).
     */
    export function char(...charid: int[]): string
    /**
     * Alternative syntax: s:find(string pattern, [int start, [boolean plain?]])

    Looks for the first match of pattern in the string s. If it finds a match, returns the positions in s where this occurrence starts and ends; otherwise, returns nil.
    */
    export function find(s: string, pattern: string, start: int, plain?: boolean): LuaMultiReturn<[int,int,string]>
    /**
     * Returns a formatted version of its variable number of arguments following the description given in its first argument (which must be a string).
     */
    export function format(formatstr: string, ...args: any): string
    /**
     * Alternative syntax: s:gmatch(string pattern)
     */
    export function gmatch(s: string, pattern: string): LuaFunction
    /**
     * Alternative syntax: s:gsub(string pattern, int/string/table/function replace, [int n])

    Returns a copy of s in which all (or the first n, if given) occurrences of the pattern pattern have been replaced by a replacement string specified by repl. Also returns the total number of matches that occurred.
    */
    export function gsub(s: string, pattern: string, replace: int | string | table | LuaFunction, n?: int): string
    /**
     * Alternative syntax: s:len()

    Returns the length of the string s.

    Example: string.len("Hello") will return 5.
    */
    export function len(s: string): int
    /**
     * Alternative syntax: s:lower()

    Converts string s to lowercase characters.

    Example: string.lower("HELLO") will return "hello".
    */
    export function lower(s: string): string
    /**
     * Alternative syntax: s:match(string pattern, [int n])
     */
    export function match(s: string, pattern: string, n: int): string[] | string
    /**
     * Alternative syntax: s:rep(int n)

    Repeats string s n times.

    Example: string.rep("Hello ", 5) will return "Hello Hello Hello Hello Hello ".
    */
    export function rep(s: string, n: int): string
    /**
     * Alternative syntax: s:reverse()

    Reverses string s.

    Example: string.reverse("Hello") will return "olleH".
    */
    export function reverse(s: string): string
    /**
     * Alternative syntax: s:sub(int start, [int end])

    Returns the substring of string s that starts at start and ends at end. If end is not supplied, it defaults to the end of s.
    */
    export function sub(s: string, start: int, end: int): string
    /**
     * Alternative syntax: s:upper()

    Converts string s to uppercase characters.

    Example: string.upper("hello") will return "HELLO".
    */
    export function upper(s: string): string
}