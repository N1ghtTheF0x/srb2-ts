type thread<Func extends LuaFunction> = unknown

declare namespace coroutine
{
        /**
     * Creates and returns a new coroutine that runs the function specified. To run the coroutine, use resume.
     */
    export function create<Func extends LuaFunction>(fn: Func): thread<Func>
    /**
     * Begins or resumes execution of the coroutine specified. If the coroutine has not yet been started, passes the remaining arguments to the coroutine's function (i.e.: they become the arguments to the function). If the coroutine has yielded, the remaining arguments are passed as the results from the yield (i.e.: they become the return values of yield). If the function errors, returns false and the error message; otherwise, returns true plus the variables returned or passed to yield.
     */
    export function resume<Func extends LuaFunction>(co: thread<Func>, ...args: Parameters<Func>): LuaMultiReturn<[boolean,ReturnType<Func>]>
    /**
     * Returns the running coroutine, or nil when called by the main thread.
     */
    export function running<Func extends LuaFunction>(): thread<Func> | nil
    /**
     * Returns the status of coroutine co, as a string:
    "running", if the coroutine is running (i.e., it called status)
    "suspended", if the coroutine is suspended in a call to yield, or if it has not started running yet
    "normal", if the coroutine is active but not running (i.e., it has resumed another coroutine)
    "dead", if the coroutine has finished its body function, or if it has stopped with an error
    */
    export function status<Func extends LuaFunction>(co: thread<Func>): "running" | "suspended" | "normal" | "dead"
    /**
     * Creates and returns a wrapper for a coroutine that runs the function specified. Calling the coroutine in the format corout(args) is equivalent to calling resume(corout, args) on a coroutine created using create, except that it will not return the initial true value, instead propagating any errors that the coroutine throws.
     */
    export function wrap<Func extends LuaFunction>(fn: Func): Func
    /**
     * Temporarily suspends execution of the  Cannot be used while running a C function, a metamethod, or an iterator loop. The next time the coroutine is resumed, it will resume execution from the point of this function call. Arguments passed to this function will be returned by the resume call that restarted the coroutine, and this function itself will return any extra arguments from the resume call.
     */
    export function yield(...args: any): any
}