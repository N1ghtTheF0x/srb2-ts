declare function COM_AddCommand(name: string,fn: (player: player_t,arg?: string,...args: string[]) => void,flags?: CommandFlags): nil
declare function COM_BufAddText(player: player_t, text: string): nil
declare function COM_BufInsertText(player: player_t, text: string): nil
declare function CV_RegisterVar(t: table_t<DefineConsoleVariable>): consvar_t
declare function CV_FindVar(cVar: string): consvar_t
declare function CV_Set(cVar: consvar_t, value: string | int): nil
declare function CV_StealthSet(cVar: consvar_t, value: string | int): nil
declare function CV_AddValue(cVar: consvar_t, increment: int): nil
declare function CONS_Printf(player: player_t, text: string): nil