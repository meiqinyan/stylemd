# Hero McPixelFace - STATUS

Level: 5  | EXP: 125/300
HP: 45/50 | MP: 20/20
Gold: 150 G | Location: Sleepy Village

## Current Quests

*   **[MAIN]** Defeat the Slime King!
*   **[SIDE]** Deliver the Magic Potion to Granny
*   **[SIDE]** Find the Lost Kitten (Reward: ???)
*   **[OPTIONAL]** Collect 10 Slime Jellies

## Inventory

| Item         | Qty | Desc                     |
|--------------|-----|--------------------------|
| `POTION`     | 3   | Restores 20 HP           |
| `ETHER`      | 1   | Restores 10 MP           |
| `SWORD`      | 1   | Basic Iron Sword         |
| `SHIELD`     | 1   | Wooden Shield            |
| `SLIME_JELLY`| 5   | Gooey, but maybe useful? |
| `KEY`        | 1   | Rusty Key from Cave      |

***

## Skills

1.  SLASH (DMG: 8, MP: 0)
2.  DEFEND (DEF +5, MP: 0)
3.  SCAN (Show Enemy HP, MP: 2)
4.  FIREBALL (DMG: 15, MP: 5) - *NEW!*

## Game Script Snippet (Pseudo-code)

```lua
-- Player attack function
function player_attack(target)
  local damage = player.strength + player.weapon.attack
  damage = damage - target.defense
  if damage < 1 then damage = 1 end
  target.hp = target.hp - damage
  print(player.name .. " attacks " .. target.name .. "! Deals " .. damage .. " DMG!")
end
```

> Remember to save your game often at the Inn! The Slime King is tough!

---
*This document was styled using the `pixel-art` theme with `stylemd`. Get the tool here: [https://github.com/ddukbg/stylemd](https://github.com/ddukbg/stylemd)* 