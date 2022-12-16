declare type ConVarRegister = {
    name: string
    defaultvalue: string
    flags: number
    PossibleValue: table
    func: (Var: consvar_t) => void
}

/**
 * Format of fn: function(player_t player, [string arg, [...]])

Registers a console command with the name name that executes the specified function when called. The first argument of the function is the player who executed the command, and all subsequent arguments are arguments passed to the command.

flags may be any of the flags listed below, OR'ed together, or none.

Flag	Description
COM_ADMIN	Server/admin-only
COM_SPLITSCREEN	The command is only available in splitscreen, and the splitscreen player is passed to fn.
COM_LOCAL	Local execution, does not send over the network buffer (Technical comment: COM_LOCAL makes your commands NetXCmd free).
 */
    declare function COM_AddCommand(name: string, fn: (player: player_t,...args: any) => void, flags?: int): nil
    /**
     * Adds the specified text to player's console buffer, but does not actually execute the command.
     */
    declare function COM_BufAddText(player: player_t, text: string): nil
    /**
     * Executes a console command in player's console.
     */
    declare function COM_BufInsertText(player: player_t, text: string): nil
    /**
     * Format of t: table{string name, string defaultvalue, int flags, table PossibleValue, function(consvar_t var) func}
    
    Registers a console variable with the name name for use in the console and returns the console variable created. defaultvalue is the default value for the console variable in string form. PossibleValue is a list or range of possible values that are allowed for the variable. flags is an integer storing the flags to be given to the console variable; see Constants > Console variable flags for a list of them. If the CV_CALL flag is set, the function func is executed when the variable is changed: the sole argument passed to such function is the console variable itself.
    
    PossibleValue can either be set to the name of one of the pre-existing PossibleValue ranges listed below, or a table listing possible values, or set to nil if not needed:
    
    Name	Range
    CV_OnOff	{Off = 0, On = 1}
    CV_YesNo	{No = 0, Yes = 1}
    CV_Unsigned	{MIN = 0, MAX = 999999999}
    CV_Natural	{MIN = 1, MAX = 999999999}
    
    Custom PossibleValue tables need to be formatted as such:
    
    {string1=value1, string2=value2, [...]}
    
    
    This gives each possible value listed in the table a string name of its own, which can be used in the console itself when the variable is in use.
    
    If MIN and MAX are used as string names for possible value entries, these will act as the minimum and maximum of a bounded range of possible values, allowing any value in-between the two to be picked as well. Otherwise, the selectable values for the console variable are limited explicitly only to the possible value entries listed in the table. Example of custom MIN and MAX values:
    
    {MIN = 20, MAX = 50}
    
    
    The contents of CV_RegisterVar can alternatively be laid out as such:
    
    CV_RegisterVar({name = , defaultvalue = , flags = , PossibleValue = , func = })
    
    
    Or:
    
    CV_RegisterVar({
        name = ,
        defaultvalue = ,
        flags = ,
        PossibleValue = ,
        func = 
    })
    
    
    In the above two layouts, the names of the variables of the table are written out, and so do not need to be placed in any particular order unlike as in the above.
     */
    declare function CV_RegisterVar(t: ConVarRegister): consvar_t
    /**
     * Returns the corresponding console variable named var.
     */
    declare function CV_FindVar(Var: string): consvar_t
    /**
     * Sets the value of the target console variable cvar to value.
    
    This will call the console variable's callback function, if it has one.
     */
    declare function CV_Set(cvar: consvar_t, value: string | int): nil
    /**
     * Sets the value of the target console variable cvar to value without calling its callback function.
     */
    declare function CV_StealthSet(cvar: consvar_t, value: string | int): nil
    /**
     * Adds the value increment to the console variable cvar. increment can also be a negative number.
    
    If performing the addition causes the variable's value to go below its minimum or above its maximum, the final value will wrap around those bounds.
    
    There are special cases for some console variables:
    
    pointlimit: If gametype is GT_MATCH, increment is multiplied by 50.
    forceskin: Cycles through usable skins. Follows the same conditions as R_SkinUsable for the resulting value.
     */
    declare function CV_AddValue(cvar: consvar_t, increment: int): nil
    /**
     * Prints the text given to the console for player. This is similar to print(text), but this will only print for one player.
    
    Certain ASCII characters will have special effects when printed out to the console by this function. These can either be given using decimal (\nnn) or hexadecimal codes (\xnn or \xnnnn), e.g.: \130 and \x82 will both cause text following the code to turn yellow. See Lua > Special characters for a list of these.
     */
    declare function CONS_Printf(player: player_t, text: string): nil