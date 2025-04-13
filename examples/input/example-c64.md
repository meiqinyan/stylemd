MY C64 PROJECTS
===============

IDEAS & CODE SNIPPETS

## SPACE INVADERS CLONE
--------------------
*   NEED TO DESIGN SPRITES (USE `SPRITE PAD`?)
*   SIMPLE MOVEMENT LOGIC (JOYSTICK INPUT?)
*   SOUND EFFECTS (SID CHIP POKES)
*   HIGH SCORE SAVE TO TAPE/DISK?

## TEXT ADVENTURE GAME - "DUNGEON OF DOOM"
---------------------------------------
*   MAP OUT ROOMS (GRAPH PAPER!)
*   WRITE DESCRIPTIONS (ATMOSPHERIC!)
*   PARSE SIMPLE COMMANDS (GET, GO, USE, LOOK, INV)

## BASIC SNIPPETS

### Simple Sprite Mover
```basic
10 POKE 53280,0:POKE 53281,0 ' BORDER/BG BLACK
20 POKE 646,1 ' TEXT WHITE
30 V=53248: REM SPRITE REGISTERS BASE
40 POKE V+21,1: REM ENABLE SPRITE 0
50 POKE 2040,10: REM SPRITE DATA POINTER (BLOCK 10)
60 POKE V+27,1: REM SPRITE COLOR (WHITE)
70 X=150: Y=100
80 POKE V,X: POKE V+1,Y
90 GET A$: IF A$="" THEN 90
100 IF A$="W" THEN Y=Y-1
110 IF A$="S" THEN Y=Y+1
120 IF A$="A" THEN X=X-1
130 IF A$="D" THEN X=X+1
140 GOTO 80
```

### Color Cycle
```basic
10 FOR I=0 TO 15
20 POKE 53281,I: REM CHANGE BACKGROUND COLOR
30 FOR J=1 TO 100: NEXT J: REM DELAY
40 NEXT I
50 GOTO 10
```

***

## USEFUL POKES

| Address | Register        | Effect                   |
|---------|-----------------|--------------------------|
| 53280   | BORDER COLOR    | Screen Border Color      |
| 53281   | BACKGROUND COL 0| Main Background Color    |
| 646     | TEXT COLOR      | Default Text Color       |
| 198     | KEY QUEUE LEN   | Length of Keyboard Buffer|
| 53265   | SPRITE ENABLE   | Turn Sprites On/Off      |

## NOTES
-----

> REMEMBER PEEK AND POKE FOR SOUND AND GRAPHICS! ACCESSING THE `SID` CHIP DIRECTLY IS POWERFUL.

> `SYS 64738` FOR SOFT RESET. DON'T FORGET TO SAVE YOUR WORK!

LOAD "*",8,1 TO LOAD FIRST PROGRAM FROM DISK.

```basic
10 PRINT CHR$(147);"HELLO STYLEMD!"
20 FOR I=1 TO 10: PRINT "COMMODORE 64";: NEXT I
30 GOTO 10
```

THIS IS FUN!

---
*This document was styled using the `c64` theme with `stylemd`. Get the tool here: [https://github.com/ddukbg/stylemd](https://github.com/ddukbg/stylemd)* 