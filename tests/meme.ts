import { MEME } from "./sauce"

addHook("JumpSpecial",(player) =>
{
    const m = player.acceleration

    const s = cos(m)

    return false
})

hud.add((v) =>
{
    const patch = v.cachePatch("SAUCE")
    v.draw(0,0,patch)
    input.gameControl2Down(0)
    print(MEME)
},"game")