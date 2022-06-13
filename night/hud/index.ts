import { checkNTF, isNTF, player_mntf_t } from "../night";
import { clearDefaultHUD } from "./clear";
import { gameHUD } from "./game";

hud.add((v,player: player_mntf_t | undefined,cam) => {
    if(player && isNTF(player) && checkNTF(player))
    {
        clearDefaultHUD()
        gameHUD(v,player,cam)
    }
},"game")