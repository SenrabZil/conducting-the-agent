# Conducting the agent

Building a Power BI model with Claude Code.

A free, interactive course of about 60 short lessons, built on a real Power BI
project made with a coding agent. Start at the course map:

**https://senrabzil.github.io/conducting-the-agent/**

GitHub shows these files as source code. To use the lessons, open them
through the link above. Offline, download the repository and open
`index.html` in a browser.

## The series

1. From builder to orchestrator
2. Get set up
3. The seed project
4. The model layer
5. Three in the loop
6. The validator
7. The move to Fabric
8. Reading the Tiles
9. Scaffolding

The course ends with "Your roadmap", a 90-day plan built from your own
answers.

The project files the lessons refer to are at
https://github.com/SenrabZil/conducting-the-agent-kit.

## How the site is organised

- `index.html` is the course map. Each series has a folder (`01-setup/` and so
  on) with its own `index.html`, and each lesson lives at
  `<series>/<lesson>/index.html`.
- `lessons.json` sets the order of series and lessons. The previous and next
  links on every lesson are built from it by `assets/js/nav.js`.
- After editing `lessons.json`, run this in PowerShell to update the copy the
  pages read:

  ```powershell
  .\tools\build-lessons-data.ps1
  ```

Progress (XP, streaks, completed lessons) is saved only in the reader's own
browser.

## Credits

Designed and built by Liz Barnes with the assistance of Claude Code.
Author: Elizabeth Cecilia.

## Licence

© 2026 Liz Barnes. Licensed under CC BY-NC 4.0 (see LICENSE).
For commercial use, get in touch on LinkedIn: https://www.linkedin.com/in/liz-barnes-7365b85
