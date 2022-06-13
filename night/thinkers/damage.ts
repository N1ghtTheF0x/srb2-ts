import { NTF } from "../constants";
import { player_ntf_t } from "../night";

type DamageLookup = {
    [key in MobjTypes]: number;
};

export const damageLookupTable: DamageLookup = {

}

export function onDamage(player: player_ntf_t,mobj: mobj_t,source: mobj_t,damage: int,damagetype: int)
{
    if(P_PlayerInPain(player)) return false
    const night = player[NTF.INDEX]

    let damageAmount = 0

    if(mobj)
    {
        damageAmount += damageLookupTable[mobj.type] ?? P_RandomRange(5,10)
    }
    else
    {
        damageAmount += damage
    }

    night.health -= damageAmount
    if(night.health <= 0)
    {
        P_KillMobj(player.mo,mobj,source,damagetype)
        return true
    }
    P_DoPlayerPain(player,source,mobj)
    P_PlayDeathSound(player.mo,player)
    return true
}