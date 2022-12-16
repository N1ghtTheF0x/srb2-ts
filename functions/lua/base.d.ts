/**
 * If v is nil or false, an error message is printed; otherwise, this function returns all arguments given. errormsg is the message to use when the assertion fails; if not given, the default message used is "assertion failed!".
 */
declare function assert<Arg>(v: Arg, errormsg?: string): Arg | nil
/**
 * This function is a generic interface to the garbage collector. It performs different functions depending on its first argument, opt:
"collect": Performs a full garbage collection cycle. This is the default option.
"stop": Stops the garbage collector.
"restart": Restarts the garbage collector.
"count": Returns the total memory in use by Lua (in kilobytes).
"step": Performs a garbage collection step. The step size is controlled by arg (larger values mean more steps). Returns true if the step finished a collection cycle.
"setpause": Sets arg as the new value for the pause of the garbage collector. Returns the previous value for the pause.
"setstepmul": Sets arg as the new value for the step multiplier of the garbage collector. Returns the previous value for the step multiplier.
 */
declare function collectgarbage<Opt extends keyof CGMap>(opt?: Opt, arg?: int): CGMap[Opt]
type CGMap = {
    "collect": int
    "stop": int
    "restart": int
    "count": int
    "step": boolean
    "setpause": int
    "setstepmul": int
}
/**
 * Terminates the last protected function called and returns message as an error message.

Usually, error adds some information about where the error occurred at the beginning of the message. The level argument specifies how to get the error position. With level 1 (the default), the error position is where the error function was called. With level 2, the error position is where the function that called error was called, and so on. If level is set to 0, no information about the error position is added to the message.
 */
declare function error(message: string, level?: int): nil
/**
 * This loads the lua script file from the Lua/ folder in the last loaded add-on, which must be a PK3. For instance, to load the file Lua/script.lua, use dofile("script.lua"). It is highly recommended this only be used in init.lua as the add-on is loading, though it can technically be used at any time.
 */
declare function dofile<Import extends any>(file: string): Import
/**
 * Returns Kb of dynamic memory in use.

This function is deprecated in Lua 5.1. Use collectgarbage ("count") instead.
 */
declare function gcinfo(): int
/**
 * Returns the current environment in use by the function.
 */
declare function getfenv(f: LuaFunction | int): any
/**
 * If obj does not have a metatable, returns nil. Otherwise, if obj's metatable has a __metatable field, returns the associated value. Otherwise, returns the metatable of obj.
 */
declare function getmetatable(obj: any): table
/**
 * This function is to be used in a for loop to iterate through all entries in an array-like table, such as in the code shown below:
for k, v in ipairs(t)
	--contents
end


k and v are the key and value for each entry in table t.

The iteration starts from key 1 (not 0) and iterates in numeric order.

This function only iterates through the array part of the table. The array part is made of all the entries which keys are integer numbers in the range [1; n], where n is the first key that precedes a nil entry (or, if there are no "holes", the last entry). Entries with any other key (strings, booleans, userdata, negative numbers, etc) are merely skipped.

Technical comment: this function actually returns three values: an iterator function, the table t, and 0. When used in a for loop, however, this detail is irrelevant to most purposes.
 */
declare function ipairs(t: table): LuaMultiReturn<[LuaFunction,table,int]>
/**
 * 
 */
declare function next(t: table, index?: int): LuaMultiReturn<[int,any]>
/**
 * This function is to be used in a for loop to iterate through all entries in a table, such as in the code shown below:
for k, v in pairs(t)
	--contents
end


k and v are the key and value for each entry in table t.

Unlike ipairs, every entry will be iterated through, in an undefined order.

Technical comment: this function actually returns three values: the next function, the table t, and nil. When used in a for loop, however, this detail is irrelevant to most purposes.

Note: This function iterates in an arbitrary order, NOT the order in which elements were added. It is VERY likely to iterate through a completely different order for mid-joiners, and thus isn't network safe. Use at your own risk.
 */
declare function pairs(t: table): LuaMultiReturn<[LuaFunction,table,nil]>
/**
 * Calls function fn with the given arguments in protected mode. The first value returned is the status code, which is true if the call succeeded without errors, and false if an error occurred.

If the call succeeded, all return values of the function call are also returned after the status code. If the call produced an error, the status code is followed by the error message instead.
 */
declare function pcall<Func extends LuaFunction>(fn: Func, ...args: Parameters<Func>): LuaMultiReturn<[boolean,ReturnType<Func> | string]>
/**
 * Checks whether v1 is equal to v2, without invoking any metamethod.
 */
declare function rawequal(v1: any, v2: any): boolean
/**
 * Gets the real value of t[index], without invoking any metamethod.
 */
declare function rawget<Table extends table,Index extends keyof Table>(t: Table, index: Index): Table[Index]
/**
 * Sets the real value of t[index] to value, without invoking any metamethod. This function returns t.
 */
declare function rawset<Table extends table,Index extends keyof Table>(t: Table, index: Index, value: Table[Index]): Table
/**
 * If index is a number, returns all arguments after argument number index. Otherwise, index must be the string "#", and select returns the total number of extra arguments it received.
 */
declare function select<Index extends `#${string}`>(index: Index,...args: any[]): int
declare function select<Args extends any[]>(index: number, ...args: Args): Args
/**
 * Sets the environment to be used by the given function.
 */
declare function setfenv<Func extends LuaFunction>(f: Func | int, table: table): Func
/**
 * Sets the metatable for the given table. If metatable is nil, removes the metatable of the given table. If the original metatable has a __metatable field, raises an error.

This function returns t.
 */
declare function setmetatable<Table extends table>(t: Table, metatable: table): Table
/**
 * Returns the given variable as a number, if possible. Returns nil if the variable cannot be converted to a number.

Example: tonumber("10") will return 10.
 */
declare function tonumber(e: any, base?: int): int | nil
/**
 * Returns the given argument as a string.

Example: tostring(10) will return "10".
 */
declare function tostring(e: any): string
/**
 * Returns the type of v as a string.

Possible strings that may be returned by this function:

"no value"
"nil"
"boolean"
"userdata"
"number"
"string"
"table"
"function"
"thread"
"proto"
"upval"

To find out if a given value is a specific type of userdata, see userdataType.
 */
declare function type(v: any): string
/**
 * Returns the elements from the given table.
 */
declare function unpack<T>(list: {[s: string]: T}, start?: int, end?: int): T[]
/**
 * Calls function f in protected mode, using errortrap as the error handler. The first value returned is the status code, which is true if the call succeeded without errors, and false if an error occurred.

If the call succeeded, all return values of the function call are also returned after the status code. If the call produced an error, the status code is followed by the return value of errortrap.
 */
declare function xpcall<Func extends LuaFunction>(call: LuaFunction, errortrap: (status: boolean) => void): LuaMultiReturn<[boolean,ReturnType<Func> | string]>