let mySprite = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 8 8 7 7 7 7 7 8 8 7 7 7 7 2 2 2 2 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 8 8 8 8 7 7 7 8 8 8 8 7 7 7 2 2 2 2 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 8 8 8 8 7 7 7 8 8 8 8 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 7 7 7 
7 7 7 7 8 8 7 7 7 7 7 8 8 7 7 7 7 7 2 2 2 2 2 2 2 7 7 7 7 7 7 7 
2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 7 7 7 7 7 7 7 
7 2 7 7 7 7 7 7 7 7 7 7 2 2 2 2 2 7 7 7 7 2 2 2 2 7 7 7 7 7 7 7 
7 2 2 7 7 7 7 2 7 7 2 7 2 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 7 7 7 7 2 7 7 2 7 2 7 2 7 2 2 2 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 2 7 7 7 2 2 2 2 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 2 2 2 7 7 2 2 2 7 7 7 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 2 2 7 7 2 2 7 7 7 7 8 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 
7 7 7 8 8 7 2 2 7 7 2 2 7 7 7 7 8 7 7 8 7 7 7 2 2 2 7 7 7 7 7 7 
7 7 7 7 8 7 2 2 2 2 2 2 7 7 7 7 7 7 7 8 8 7 7 7 7 2 7 7 7 7 7 7 
2 2 7 8 8 7 2 2 2 2 2 2 7 7 2 2 2 2 7 7 7 8 8 7 2 2 7 7 7 7 7 7 
7 2 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 2 7 2 2 2 2 7 7 7 7 7 7 7 
7 2 7 8 8 8 7 7 2 2 7 8 7 7 7 8 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
2 2 7 7 7 8 8 7 7 7 7 8 7 7 7 8 8 8 8 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 2 7 2 7 7 8 7 2 8 7 7 7 7 7 7 8 8 7 7 7 7 7 2 7 7 7 7 7 7 7 7 
7 7 7 2 7 2 8 8 8 8 8 8 7 7 7 7 7 7 7 7 7 2 7 7 2 7 7 7 7 7 7 7 
7 2 2 2 7 2 7 8 8 7 7 8 8 7 7 7 7 7 7 7 2 7 7 7 7 2 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 2 7 7 7 2 7 7 2 7 7 7 7 7 
7 7 7 7 7 7 2 2 7 7 7 7 7 7 7 7 7 7 2 7 7 2 7 7 2 7 7 2 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 2 7 7 7 2 7 7 2 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 2 7 2 7 7 2 7 7 2 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 2 7 7 2 7 2 7 7 7 7 7 7 2 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 2 7 7 7 2 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 2 2 2 2 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Player)
scene.setTile(2, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
scene.setTile(5, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, true)
mySprite = 0
