
declare type mapheader_t =
{
    readonly lvlttl: string
    readonly subttl: string
    readonly actnum: UINT8
    readonly typeoflevel: UINT16
    readonly nextlevel: INT16
    readonly marathonnext: INT16
    readonly keywords: string
    readonly musname: string
    readonly mustrack: UINT16
    readonly muspos: UINT32
    readonly musinterfadeout: UINT32
    readonly musintername: string
    readonly muspostbossname: string
    readonly forcecharacter: string
    readonly weather: UINT8
    readonly skynum: INT16
    readonly skybox_scalex: INT16
    readonly skybox_scaley: INT16
    readonly skybox_scalez: INT16
    readonly interscreen: string
    readonly runsoc: string
    readonly scriptname: string
    readonly precutscenenum: UINT8
    readonly cutscenenum: UINT8
    readonly countdown: INT16
    readonly palette: UINT16
    readonly numlaps: UINT8
    readonly unlockrequired: SINT8
    readonly levelselect: UINT8
    readonly bonustype: SINT8
    readonly saveoverride: SINT8
    readonly levelflags: UINT8
    readonly menuflags: UINT8
}