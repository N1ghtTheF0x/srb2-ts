type SRB2Table<Type, IndexType extends number | string = number, IteratorExists = 0, IteratorIsFunction = 0> = {
    [index in IndexType]: Type
} & {
    iterate: IteratorExists extends 1 ? IteratorIsFunction extends 1 ? () => Iterable<Type> : Iterable<Type> : undefined
    length: number
}

declare const mobjinfo: SRB2Table<mobjinfo_t>
declare const states: SRB2Table<state_t>
declare const sfxinfo: SRB2Table<sfxinfo_t>
declare const S_sfx: typeof sfxinfo
declare const sprnames: SRB2Table<string,number> | SRB2Table<number,string>
declare const spr2names: SRB2Table<string,number> | SRB2Table<number,string>
declare const players: SRB2Table<player_t,1>
declare const mobjs: SRB2Table<mobj_t,1,1>
declare const skins: SRB2Table<skin_t,string | number,1>
declare const mapthings: SRB2Table<mapthing_t,1>
declare const vertexes: SRB2Table<vertex_t,1>
declare const lines: SRB2Table<line_t,1>
declare const sides: SRB2Table<side_t,1>
declare const subsectors: SRB2Table<subsector_t,1>
declare const sectors: SRB2Table<sector_t,1>
declare const polyobjects: SRB2Table<polyobj_t,1>
declare const mapheaderinfo: SRB2Table<mapheader_t>
declare const hudinfo: SRB2Table<hudinfo_t>
declare const spriteinfo: SRB2Table<{
    pivot: {[key: string]: spriteframepivot_t}  
}>
declare const spr2defaults: SRB2Table<number,number>
declare const skincolors: SRB2Table<skincolor_t>
declare const gamekeydown: SRB2Table<boolean>