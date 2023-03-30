import kaboom from "https://unpkg.com/kaboom/dist/kaboom.mj";

// initialize kaboom context
kaboom();


loadSprite("kartka","pocztowka.png")
loadSprite("elf","elf.png")

loadSound("muzyka","doszopy.mp3")

add([
    sprite("kartka"),
    pos(0,0)
])

const elf = add([
    sprite("elf"),
    pos(0,140)
])


   onMouseRelease(()=> play ("muzyka"))

    let wprawo = true
elf.onUpdate(()=> {
    if(wprawo && elf.pos.x <600)
    elf.pos.x += 1

    else if(!wprawo && elf.pos.x > 50)
    elf.pos.x -= 1

    else wprawo ^= true
})