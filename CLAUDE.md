# Conducting the agent

Building a Power BI model with Claude Code.

A free, public course of about 60 interactive HTML explainers covering Liz's
Power BI project, published on GitHub Pages at
https://senrabzil.github.io/conducting-the-agent/ and shared on LinkedIn.
Readers land on the course map and click through lessons in order.

## Source and safety rules

- The source folder path is set in tools/build-site.py (local only, not in git).
  That folder is READ-ONLY. Never move, rename, edit or delete anything there.
  Always copy into this repo.
- Existing source files are read-only; new series folders are added only on
  Liz's instruction.
- Use `Roadmap/` as the roadmap source. Ignore `000_Roadmap/` (older copy).
- Skip everything in `validator-explainers/files/` and `files.zip` (duplicates).
- The "Between research and IT" series is dropped; don't mention it on
  any page.
- Never commit or push without asking first. Show me what changed.
- Once a lesson has been published, never change its folder name or slug.
  Links to it are already on LinkedIn. If a rename is unavoidable, ask first.
- Do not add anything to this repo that isn't meant to be public.
- Some words must never appear in the repo, in file names, comments or
  metadata. The list is in tools/check-site.py (local only). Run it before
  every commit.

## Structure

```
index.html              course landing page (built from Roadmap/index.html)
about.html              credits and visit-counting note
lessons.json            single source of truth for modules and order
assets/css/             shared house-style CSS
assets/js/              shared chooser and navigation scripts
assets/img/             images, including og-cover.png (1200x627)
00-roadmap/  01-setup/  02-seed/  03-model/  04-claude/  05-validator/  06-fabric/
07-scaffolding/  08-tiles/
07-tiles/  08-scaffolding/  what-a-ba-does/   redirects only (see below)
glossary/
```

- Standalone pages sit outside the nine modules and are not in
  `lessons.json` or the prev/next chain. They get the shared footer and
  the title format "Page title · Conducting the agent". None now.
- Redirects: published addresses that moved are kept as bare redirect
  pages, built by tools/build-site.py, so links already on LinkedIn work.
  - `07-tiles/…` → `08-tiles/…` and `08-scaffolding/…` → `07-scaffolding/…`
    (same slugs).
  - `what-a-ba-does/` → `about.html#hiring`. The source,
    `Roadmap/what-a-ba-does.html`, stays on G: as an unused archive.

- Each lesson lives at `<module>/<slug>/index.html`.
- Each module folder has its own `index.html` listing its lessons.
- Slugs: lowercase, hyphenated, short, no dates or version numbers.
- `lessons.json` drives the landing page, module pages and prev/next links.
  To add or reorder lessons, edit `lessons.json` only. Never hard-code
  navigation into individual lessons.
- After editing `lessons.json`, run `.\tools\build-lessons-data.ps1` to
  regenerate `assets/js/lessons-data.js`. Pages read that copy, because
  browsers block loading `lessons.json` from a local file.
- Course order: 00-roadmap, 01-setup, 02-seed, 03-model, 04-claude,
  05-validator, 06-fabric, 07-scaffolding, 08-tiles. "Your roadmap" is
  the last lesson of the course, after Reading the Tiles.
- GitHub links to the project files go to
  https://github.com/SenrabZil/conducting-the-agent-kit

lessons.json shape:

```json
{
  "modules": [
    {
      "id": "01-setup",
      "title": "Setup",
      "summary": "One sentence.",
      "lessons": [
        { "slug": "example-lesson", "title": "Example", "summary": "One sentence." }
      ]
    }
  ]
}
```

## House style

Follow the existing explainers (Nunito, current colours, predict-first
exercises). The four templates will be merged in a later pass; don't merge
them now.

- Plain language. No consultant vocabulary.
- Shared CSS and JS live in `assets/` and are linked from every page.
  Use relative paths so the site works under /conducting-the-agent/.

## Names

- Course: "Conducting the agent", subtitle "Building a Power BI model
  with Claude Code".
- One name per series, used everywhere (tiles, plan builder, module pages,
  titles, lessons.json):

  | Module | Series name |
  |---|---|
  | 00-roadmap | From builder to orchestrator |
  | 01-setup | Get set up |
  | 02-seed | The seed project |
  | 03-model | The model layer |
  | 04-claude | Three in the loop |
  | 05-validator | The validator |
  | 06-fabric | The move to Fabric |
  | 07-scaffolding | Scaffolding |
  | 08-tiles | Reading the Tiles |

- Header badges keep their short labels (Roadmap, Setup, Seed, Model,
  Validator, Fabric, Scaffolding, Tiles). The landing page badge is
  "Conducting".
- `<title>` format: "Lesson title · Series · Conducting the agent".
  Module pages: "Series · Conducting the agent". Landing page:
  "Conducting the agent · Building a Power BI model with Claude Code".
- Module pages carry no unit numbering.
- Still to come: nothing, so no page shows a "Coming next" line. A series
  announced before it's built is shown only as one "Coming next" line
  (never as tiles).

## Lessons on hold

- A held lesson is built only into `preview/` (gitignored) by
  tools/build-site.py. It is not in lessons.json, nothing links to it, and
  it isn't committed. The "Coming next" line stays as it is.
- On hold now: nothing.
- To publish a held series, Liz says go: add it to lessons.json, move its
  lessons from preview into the build, and update "Coming next".

## Every page must have

- `<meta name="viewport" content="width=device-width, initial-scale=1">`
- A clear `<title>` and meta description.
- Prev / next / back-to-course links (generated from lessons.json),
  including across series: the last lesson of one module links to the
  first lesson of the next.
- A footer with the credit line, author name and LinkedIn link.
  No email address anywhere.
- GoatCounter: leave out for now, until Liz supplies the site code.

The landing page also needs LinkedIn preview tags with absolute URLs:
`og:title`, `og:description`, `og:image`, `og:url`.

## Credits and author

- Author name, everywhere: Elizabeth Cecilia
- Author name on the site is Elizabeth Cecilia, the teaching name of Liz Barnes.
  Liz Barnes appears only in the credit line and the © licence line (footer and
  README), and in the About page's Work with me section. Don't merge or change the two names.
- Credit line, exactly:
  "Designed and built by Liz Barnes with the assistance of Claude Code."
- This course stands alone. Do not describe it as a companion to any
  other series.
- Visit counting note (on about.html, linked from the footer): the site
  uses GoatCounter to count visits so the series can be improved. It
  does not track individuals.

## Working style

- Before bulk changes, show a plan or table and wait for approval.
- After changes, report anything skipped, broken links, or files that
  didn't fit the structure.
- Liz works on Windows with PowerShell. Give PowerShell commands, not bash.
