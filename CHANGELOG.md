# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-04-13

### Added

- Initial release of `stylemd`.
- Core functionality: Convert Markdown to HTML using Handlebars templates.
- Command-line interface (`stylemd <inputFile> [options]`).
- Options for specifying template (`-t`, `--template`) and output file (`-o`, `--output`).
- Included Themes:
  - `default`
  - `windows98`
  - `terminal`
  - `geocities`
  - `blueprint`
  - `macos-classic`
  - `amiga-workbench`
  - `msdos`
  - `c64`
  - `vim`
  - `retro-console`
  - `pixel-art`
  - `y2k`
  - `frutiger-aero`
- Example Markdown files and corresponding output HTML files.
- Project structure setup.
- README.md with installation, usage, themes list, contribution guide, and future plans.
- `.gitignore` file.
- `.gitattributes` file for consistent line endings.
- GitHub Actions workflow for automatic npm publishing and release creation on tag push.
- Added live preview links for themes in README.
- Added attribution footer to example Markdown files.

[1.0.0]: https://github.com/ddukbg/stylemd/releases/tag/v1.0.0 