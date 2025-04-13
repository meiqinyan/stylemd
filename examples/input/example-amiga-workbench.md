# Workbench 1.3 Notes - Project Phoenix

Tracking progress on the new demo scene project.

## Deluxe Paint Project Ideas

*   Boing Ball Animation (Classic!) - *Status: Done*
*   Alien Landscape Scene - *Needs more colors*
*   Robotic Hand Study - *Model sheet complete*
*   Plasma Effect - *Coding phase*

## AMOS Professional Code Snippet

```amos
REM Simple Sprite Example
Screen Open 0,320,200,16,LORES
Load "gfx/sprites.iff"
Sprite 1,100,100,1 ' Display sprite 1
Bob Update On ' Enable updates
Repeat
  X Mouse
  Y Mouse
  Sprite 1,X Mouse,Y Mouse,1 ' Move sprite with mouse
  Bob Update
Until Mouse Key=1 ' Exit on left click
Screen Close 0
```

## Hardware Wishlist & Config

| Item                  | Status   | Notes                     |
|-----------------------|----------|---------------------------|
| A501 RAM Expansion    | **INSTALLED** | 1MB Chip RAM total!     |
| GVP Hard Drive (20MB) | **INSTALLED** | Booting fast now!         |
| Action Replay III     | *WANTED* | For debugging             |
| Supra Modem 2400      | OK       | BBS access                |

***

> Note: Check `SysInfo` for system performance metrics. Need to optimize the `startup-sequence`. Current free Chip RAM is ~800KB after boot.

> Remember the Guru Meditation! #1 Error. Most likely a memory issue. 

---
*This document was styled using the `amiga-workbench` theme with `stylemd`. Get the tool here: [https://github.com/ddukbg/stylemd](https://github.com/ddukbg/stylemd)* 