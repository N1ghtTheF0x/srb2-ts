import { NTF } from "../constants";
import { player_ntf_t } from "../night";

export function onDeath(player: player_ntf_t,inflictor: mobj_t,source: mobj_t,damagetype: int)
{
    const night = player[NTF.INDEX]
    night.health = 0
    P_PlayerRingBurst(player,10)
}