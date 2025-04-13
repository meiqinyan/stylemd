# Vim Configuration & Notes (~/.vimrc)

My personal Vim setup and useful commands.

## Basic Settings

" Show line numbers and relative numbers
set number
set relativenumber

" Enable mouse support in all modes
set mouse=a

" Enable syntax highlighting and filetype detection
syntax on
filetype plugin indent on

" Other preferences
set tabstop=4
set shiftwidth=4
set expandtab
set ignorecase
set smartcase

## Key Mappings

" Leader key
let mapleader = " " " Use Space as leader

" Save file
nnoremap <leader>w :w<CR>

" Quit window/buffer
nnoremap <leader>q :q<CR>

" Easy escape in insert mode
inoremap jk <Esc>

" Navigate splits
nnoremap <C-h> <C-w>h
nnoremap <C-j> <C-w>j
nnoremap <C-k> <C-w>k
nnoremap <C-l> <C-w>l

## Plugin Management (vim-plug)

```vim
call plug#begin('~/.vim/plugged')

" Appearance
Plug 'morhetz/gruvbox' " Theme
Plug 'vim-airline/vim-airline' " Status line

" Functionality
Plug 'tpope/vim-fugitive'   " Git wrapper
Plug 'tpope/vim-surround'   " Surroundings
Plug 'junegunn/fzf.vim'    " Fuzzy finder
Plug 'preservim/nerdtree'  " File explorer

call plug#end()

" Theme setup
if exists("+termguicolors")
  set termguicolors
endif
colorscheme gruvbox
```

***

## Useful Commands

| Command        | Mode(s) | Description                   |
|----------------|---------|-------------------------------|
| `:w`           | Normal  | Write (save) the file         |
| `:q`           | Normal  | Quit the current window       |
| `:wq` / `:x`   | Normal  | Write and quit                |
| `:q!`          | Normal  | Quit without saving           |
| `dd`           | Normal  | Delete current line           |
| `yy`           | Normal  | Yank (copy) current line      |
| `p` / `P`      | Normal  | Paste after/before cursor   |
| `u`            | Normal  | Undo                          |
| `<C-r>`        | Normal  | Redo                          |
| `/pattern`     | Normal  | Search forward for pattern    |
| `?pattern`     | Normal  | Search backward for pattern   |
| `n` / `N`      | Normal  | Next/Previous search match    |
| `:NERDTree`    | Normal  | Open file explorer (plugin) |
| `:FZF`         | Normal  | Open fuzzy finder (plugin)    |

## Notes & Tips

> Use `:help <command>` or `:help <topic>` to get help on anything in Vim. Example: `:help motion`

> Visual mode (`v`, `V`, `<C-v>`) is powerful for selecting text to operate on.

" Last saved: {{formatDate}} {{formatTime}}

---
*This document was styled using the `vim` theme with `stylemd`. Get the tool here: [https://github.com/ddukbg/stylemd](https://github.com/ddukbg/stylemd)* 