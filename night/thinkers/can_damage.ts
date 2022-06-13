import { NTF } from "../constants";
import { player_ntf_t } from "../night";

export function canDamage(player: player_ntf_t,mobj: mobj_t)
{
    const night = player[NTF.INDEX]
    return night.canAttack
}