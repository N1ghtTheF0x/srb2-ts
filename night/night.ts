import { NTF } from "./constants"
import { Input } from "./input"

export interface player_mntf_t extends player_t
{
    [NTF.INDEX]?: NightTheFox
}

export type player_ntf_t = Required<player_mntf_t>

export interface NightTheFox
{
    input: Input
}

export function NightTheFox(): NightTheFox
{

    const ntf: NightTheFox = {
        input: Input()
    }

    return ntf
}

export function isNTF(player: player_t): player is player_mntf_t
{
    if(player.mo.skin == NTF.SKIN_NAME) return true
    return false
}
export function checkNTF(player: player_mntf_t): player is player_ntf_t
{
    if(player[NTF.INDEX]) return true
    return false
}