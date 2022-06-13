import { NTF } from "./constants"
import { checkNTF, isNTF, NightTheFox, player_ntf_t } from "./night"
import { canDamage } from "./thinkers/can_damage"
import { onDamage } from "./thinkers/damage"
import { onDeath } from "./thinkers/death"
import { onSpawn } from "./thinkers/spawn"
import { Think } from "./thinkers/think"

addHook("PlayerThink",(player) =>
{
    if(isNTF(player))
    {
        if(!checkNTF(player)) 
        {
            player[NTF.INDEX] = NightTheFox()
        }
        else
        {
            Think(player)
        }
    }
    else
    {
        if(checkNTF(player))
        {
            player[NTF.INDEX] = null as unknown as NightTheFox
        }
    }
})

addHook("PlayerCanDamage",(player,mobj) =>
{
    if(isNTF(player))
    {
        if(checkNTF(player)) 
        {
            return canDamage(player,mobj)
        }
    }
    return
})

addHook("PlayerSpawn",(player) =>
{
    if(isNTF(player))
    {
        if(checkNTF(player))
        {
            onSpawn(player)
        }
        else
        {
            player[NTF.INDEX] = NightTheFox()
            if(checkNTF(player)) onSpawn(player)
        }
    }
})

addHook("MobjDamage",(target: mobj_t,inflictor: mobj_t,source: mobj_t,damage: int,damagetype: int) =>
{
    if(target.player)
    {
        const player = target.player
        if(isNTF(player))
        {
            if(checkNTF(player)) 
            {
                return onDamage(player,inflictor,source,damage,damagetype)
            }
        }
    }
    return
},MobjTypes.MT_PLAYER)

addHook("MobjDeath",(target: mobj_t,inflictor: mobj_t,source: mobj_t,damagetype: int) =>
{
    if(target.player)
    {
        const player = target.player
        if(isNTF(player))
        {
            if(checkNTF(player)) 
            {
                return onDeath(player,inflictor,source,damagetype)
            }
        }
    }
    return
})