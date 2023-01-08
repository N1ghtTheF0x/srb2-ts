class Meme
{
    constructor(readonly name: string)
    {

    }
    print()
    {
        print(`Name of Meme: ${this.name}`)
    }
}

const sus = new Meme("sus")

sus.print()