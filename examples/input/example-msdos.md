MS-DOS System Configuration Notes
===============================

Reviewing `AUTOEXEC.BAT` and `CONFIG.SYS`.

## AUTOEXEC.BAT

```batch {filename="AUTOEXEC.BAT"}
@ECHO OFF
PROMPT $P$G
PATH=C:\DOS;C:\UTILS;C:\NC
SET BLASTER=A220 I5 D1 H5 P330 T6
SET TEMP=C:\TEMP
LH C:\DOS\SMARTDRV.EXE /X
LH C:\MOUSE\MOUSE.COM
REM LH C:\DOS\MSCDEX.EXE /D:MSCD001 /L:D
MODE CON CODEPAGE PREPARE=((850) C:\DOS\EGA.CPI)
MODE CON CODEPAGE SELECT=850
KEYB US,,C:\DOS\KEYBOARD.SYS
C:\NC\NC.EXE
```

## CONFIG.SYS

```text {filename="CONFIG.SYS"}
DEVICE=C:\DOS\HIMEM.SYS
DEVICE=C:\DOS\EMM386.EXE RAM HIGHSCAN
DOS=HIGH,UMB
FILES=40
BUFFERS=20
STACKS=9,256
LASTDRIVE=E
REM DEVICEHIGH=C:\CDROM\MTMCDAI.SYS /D:MSCD001
```

## Memory Usage (`MEM /C`)

| Name      | Size (Bytes) | Type    |
|-----------|--------------|---------|
| SYSTEM    | 15,888       | System  |
| HIMEM     | 1,104        | Device  |
| EMM386    | 4,112        | Device  |
| COMMAND   | 3,568        | Program |
| MOUSE     | 17,088       | TSR     |
| SMARTDRV  | 27,264       | TSR     |
| Free      | 601,344      | Free    |

***

## Troubleshooting Notes

> IF YOU ENCOUNTER "Bad command or file name", CHECK YOUR `PATH` SETTING in `AUTOEXEC.BAT`.

> USE `MEM /C | MORE` TO CHECK MEMORY USAGE page by page.

> For CD-ROM access, uncomment the `MSCDEX.EXE` line in `AUTOEXEC.BAT` and the driver line in `CONFIG.SYS`.

# Vim Configuration (~/.vimrc)

" Basic settings
set number          " Show line numbers
set relativenumber    " Show relative numbers
set mouse=a         " Enable mouse support
syntax on           " Enable syntax highlighting
filetype plugin indent on " Enable filetype detection

" Key mappings
nnoremap <leader>w :w<CR>  " Save file with <leader>w
inoremap jk <Esc>       " Map jk to Escape in insert mode

" Plugin management (using vim-plug)
call plug#begin('~/.vim/plugged')
Plug 'tpope/vim-fugitive'   " Git wrapper
Plug 'tpope/vim-surround'   " Surroundings
Plug 'junegunn/fzf.vim'    " Fuzzy finder
call plug#end()

" Code snippet (Python)
```python {filename="factorial.py"}
# Function to calculate factorial
def factorial(n):
    """Calculates factorial recursively"""
    if n == 0:
        return 1
    else:
        return n * factorial(n-1)

# Print factorial of 5
result = factorial(5) # Should be 120
print(f"Factorial: {result}")
```

> Use `:help <command>` to get help on any Vim command.

" Last saved: {{formatDate}} {{formatTime}}

---
*This document was styled using the `msdos` theme with `stylemd`. Get the tool here: [https://github.com/ddukbg/stylemd](https://github.com/ddukbg/stylemd)* 