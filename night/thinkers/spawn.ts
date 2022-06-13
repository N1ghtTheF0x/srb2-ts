import { NTF } from "../constants";
import { player_ntf_t, resetNTF } from "../night";

export function onSpawn(player: player_ntf_t)
{
    const night = player[NTF.INDEX]
    resetNTF(player)
}