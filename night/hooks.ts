import { NTF } from "./constants"
import { checkNTF, isNTF, NightTheFox, player_ntf_t } from "./night"
import { Thinker } from "./thinker"

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
            Thinker(player)
        }
    }
})