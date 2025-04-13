# Macintosh SE/30 - System Folder

Welcome to this Macintosh. This document contains important information regarding system extensions and control panels.

## Applications

*   HyperCard Stack (Project X)
*   MacPaint Document (Logo Ideas)
*   ResEdit Utility (Handle with care!)
*   TeachText (Default Editor)

## Control Panels & Extensions (Load Order)

1.  System Enabler 001
2.  General Controls
3.  Keyboard Settings
4.  Monitors
5.  After Dark Screensaver
    *   Flying Toasters Module
    *   Starry Night Module

## Code Example (HyperTalk)

```hypertalk
on mouseUp
  -- Check if field "UserName" is empty
  if field "UserName" is empty then
    answer "Please enter your name!"
  else
    put "Hello," && field "UserName" & "!" into message box
    go to next card
  end if
end mouseUp
```

***

## File Sizes

| File          | Size (K) | Type     |
|---------------|----------|----------|
| HyperCard Stk | 128      | STAK     |
| MacPaint Doc  | 32       | PNTG     |
| ResEdit       | 256      | APPL     |
| After Dark    | 512      | cdev     |

## System Notes

> Remember to drag the floppy disk icon to the Trash to eject it! Using the `Command-E` shortcut is faster.

> Don't forget to rebuild the desktop file periodically (`Cmd-Opt` on startup).

---

This document was created using `SimpleText`. 

---
*This document was styled using the `macos-classic` theme with `stylemd`. Get the tool here: [https://github.com/ddukbg/stylemd](https://github.com/ddukbg/stylemd)* 