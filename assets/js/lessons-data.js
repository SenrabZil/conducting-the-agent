// Generated from lessons.json by tools/build-lessons-data.ps1. Do not edit by hand.
window.PBS_COURSE = {
  "modules": [
    {
      "id": "00-roadmap",
      "title": "From builder to orchestrator",
      "summary": "How a business or BI analyst moves from building reports to running the loop around a coding agent.",
      "lessons": [
        {
          "slug": "the-gap-in-the-loop",
          "title": "The gap in the loop",
          "summary": "A coding agent can build fast, but setting the goal, writing the spec and checking the result is still your job.",
          "path": "00-roadmap/the-gap-in-the-loop/index.html"
        },
        {
          "slug": "you-already-do-half",
          "title": "You already do half of this",
          "summary": "Everyday business analyst skills (workshops, mapping, specs, UAT) already cover most of the agent loop.",
          "path": "00-roadmap/you-already-do-half/index.html"
        },
        {
          "slug": "from-clicks-to-specs",
          "title": "From clicks to specs",
          "summary": "Write down the decisions you used to make by clicking, as a spec someone else could check.",
          "path": "00-roadmap/from-clicks-to-specs/index.html"
        },
        {
          "slug": "where-to-put-the-gates",
          "title": "Where to put the gates",
          "summary": "Match the number of approval stops to how much a change can break.",
          "path": "00-roadmap/where-to-put-the-gates/index.html"
        },
        {
          "slug": "checks-pass-is-it-right",
          "title": "Checks pass, so is it right?",
          "summary": "A passing validator only covers the rules you wrote, so you still need to look and ask someone who knows the business.",
          "path": "00-roadmap/checks-pass-is-it-right/index.html"
        },
        {
          "slug": "the-audit-trail",
          "title": "The audit trail you already wanted",
          "summary": "Git commits, diffs and tags answer who changed what, when and why.",
          "path": "00-roadmap/the-audit-trail/index.html"
        },
        {
          "slug": "judgment-travels",
          "title": "Platforms change, judgment travels",
          "summary": "Tools change, but knowing what a good model looks like moves with you, for example from Power Query to Fabric.",
          "path": "00-roadmap/judgment-travels/index.html"
        }
      ]
    },
    {
      "id": "01-setup",
      "title": "Get set up",
      "summary": "Install Power BI Desktop, Git, Claude Code and Fabric, get the kit onto your PC, and learn the side-by-side way to use every series.",
      "lessons": [
        {
          "slug": "what-you-need",
          "title": "What you need",
          "summary": "The four tools in the kit (Desktop, Git/GitHub, Claude Code, Fabric) and which ones your goal needs.",
          "path": "01-setup/what-you-need/index.html"
        },
        {
          "slug": "power-bi-desktop",
          "title": "Power BI Desktop",
          "summary": "How to install Power BI Desktop from the Store or Download Center and check one setting.",
          "path": "01-setup/power-bi-desktop/index.html"
        },
        {
          "slug": "github-and-git",
          "title": "GitHub and Git",
          "summary": "What GitHub and Git are, how to install Git and how to clone or download the kit.",
          "path": "01-setup/github-and-git/index.html"
        },
        {
          "slug": "claude-code",
          "title": "Claude Code",
          "summary": "How to install Claude Code from PowerShell and set safety rails before its first edit.",
          "path": "01-setup/claude-code/index.html"
        },
        {
          "slug": "fabric-trial",
          "title": "The Fabric trial",
          "summary": "What the free Fabric trial gives you, that it needs a work account, and when to skip it.",
          "path": "01-setup/fabric-trial/index.html"
        },
        {
          "slug": "open-the-kit",
          "title": "Open the kit",
          "summary": "The three forms of the kit, fixing the source path on refresh, and closing without saving.",
          "path": "01-setup/open-the-kit/index.html"
        },
        {
          "slug": "how-to-learn",
          "title": "How to learn",
          "summary": "Read, predict, look, check: using each lesson with the report open beside it.",
          "path": "01-setup/how-to-learn/index.html"
        }
      ]
    },
    {
      "id": "02-seed",
      "title": "The seed project",
      "summary": "Teach a coding agent Power BI's file format, one hand-made example at a time.",
      "lessons": [
        {
          "slug": "why-a-seed",
          "title": "Why a seed",
          "summary": "Why an agent should copy a hand-made example of each setting instead of guessing the file format.",
          "path": "02-seed/why-a-seed/index.html"
        },
        {
          "slug": "three-copies",
          "title": "Three copies, three rules",
          "summary": "The seed, the real project and the frozen export each have one job, so check which one is open.",
          "path": "02-seed/three-copies/index.html"
        },
        {
          "slug": "only-what-differs",
          "title": "Only what differs",
          "summary": "Desktop saves a setting only when it differs from the theme, which explains empty diffs.",
          "path": "02-seed/only-what-differs/index.html"
        },
        {
          "slug": "changing-the-seed",
          "title": "Changing the seed",
          "summary": "The seven steps for adding a setting to the seed and carrying it into the report.",
          "path": "02-seed/changing-the-seed/index.html"
        },
        {
          "slug": "test-dont-estimate",
          "title": "Test, don't estimate",
          "summary": "Testing a value on the real tile beats estimating it from font sizes and theme settings.",
          "path": "02-seed/test-dont-estimate/index.html"
        },
        {
          "slug": "readable-seed",
          "title": "A seed people can read",
          "summary": "Codes, one setting per visual and a register turn the seed into a catalogue others can use.",
          "path": "02-seed/readable-seed/index.html"
        },
        {
          "slug": "keeping-it-honest",
          "title": "Keeping it honest",
          "summary": "Six guards keep every report setting traceable to a seed example, a commit and a register line.",
          "path": "02-seed/keeping-it-honest/index.html"
        }
      ]
    },
    {
      "id": "03-model",
      "title": "The model layer",
      "summary": "How the Power BI semantic model is built: bronze, silver and gold layers, facts and dimensions, relationships and measures.",
      "lessons": [
        {
          "slug": "three-layers",
          "title": "Three layers",
          "summary": "Bronze, silver and gold queries refine each table in one direction before the model sees it.",
          "path": "03-model/three-layers/index.html"
        },
        {
          "slug": "only-gold-loads",
          "title": "Only gold loads",
          "summary": "Only gold queries load into the model; bronze and silver have Enable load turned off.",
          "path": "03-model/only-gold-loads/index.html"
        },
        {
          "slug": "facts-and-dimensions",
          "title": "Facts and dimensions",
          "summary": "Fact tables record what happened and dimensions describe it, forming a star.",
          "path": "03-model/facts-and-dimensions/index.html"
        },
        {
          "slug": "filters-flow-one-way",
          "title": "Filters flow one way",
          "summary": "In one-to-many relationships a filter travels from the dimension to the fact, not back.",
          "path": "03-model/filters-flow-one-way/index.html"
        },
        {
          "slug": "measures",
          "title": "Measures",
          "summary": "A measure stores a formula worked out per cell in its filter context, and every measure has a register row.",
          "path": "03-model/measures/index.html"
        },
        {
          "slug": "standalone-tables",
          "title": "Standalone tables",
          "summary": "Four tables have no relationships on purpose, plus how sort-by columns work.",
          "path": "03-model/standalone-tables/index.html"
        },
        {
          "slug": "check-it-landed",
          "title": "Check it landed",
          "summary": "A model change is done only after a refresh and a validation script confirm the numbers.",
          "path": "03-model/check-it-landed/index.html"
        }
      ]
    },
    {
      "id": "04-claude",
      "title": "Three in the loop",
      "summary": "How a coding agent, an AI in chat and a person build a Power BI report together, with a person checking everything.",
      "lessons": [
        {
          "slug": "who-does-what",
          "title": "Who does what",
          "summary": "The agent edits files, chat checks every message, and the person makes every call that matters.",
          "path": "04-claude/who-does-what/index.html"
        },
        {
          "slug": "why-the-report-is-text",
          "title": "Why the report is text",
          "summary": "The report is saved as PBIP text files so an agent can read and edit it.",
          "path": "04-claude/why-the-report-is-text/index.html"
        },
        {
          "slug": "seed-first",
          "title": "Seed first",
          "summary": "Set a new setting once by hand in the seed before the agent writes it anywhere.",
          "path": "04-claude/seed-first/index.html"
        },
        {
          "slug": "propose-then-wait",
          "title": "Propose, then wait",
          "summary": "Every message to the agent ends with a stop point, so it proposes and waits before building.",
          "path": "04-claude/propose-then-wait/index.html"
        },
        {
          "slug": "build-validate-stop",
          "title": "Build, validate, stop",
          "summary": "The agent builds, runs the validator, lists what it touched and stops.",
          "path": "04-claude/build-validate-stop/index.html"
        },
        {
          "slug": "check-in-desktop",
          "title": "You check in Desktop",
          "summary": "Only a person can see the report, so refresh, test, and close without saving.",
          "path": "04-claude/check-in-desktop/index.html"
        },
        {
          "slug": "when-the-loop-breaks",
          "title": "When the loop breaks",
          "summary": "Five real moments where one player slipped and another caught it.",
          "path": "04-claude/when-the-loop-breaks/index.html"
        }
      ]
    },
    {
      "id": "05-validator",
      "title": "The validator",
      "summary": "The script that checks a coding agent's work, and the guardrails around it.",
      "lessons": [
        {
          "slug": "what-a-validator-is",
          "title": "What a validator is",
          "summary": "The agent writes and a separate script checks; break a toy report on purpose to see it.",
          "path": "05-validator/what-a-validator-is/index.html"
        },
        {
          "slug": "why-guardrails",
          "title": "Why agents need guardrails",
          "summary": "Agents are usually right, so guardrails exist for the times they aren't, sized by blast radius.",
          "path": "05-validator/why-guardrails/index.html"
        },
        {
          "slug": "what-it-checks",
          "title": "What it checks",
          "summary": "The validator's 1,533 checks fall into 22 families, some of which only speak up on failure.",
          "path": "05-validator/what-it-checks/index.html"
        },
        {
          "slug": "where-it-sits",
          "title": "Where it sits in the loop",
          "summary": "The validator runs right after the build and before you look in Desktop.",
          "path": "05-validator/where-it-sits/index.html"
        },
        {
          "slug": "reading-a-failure",
          "title": "Reading a failure",
          "summary": "Read a FAIL top-down to find the first cause, then fix forward or roll back.",
          "path": "05-validator/reading-a-failure/index.html"
        },
        {
          "slug": "what-it-cant-see",
          "title": "What it can't see",
          "summary": "PASS isn't the same as right: false negatives and coverage gaps need people.",
          "path": "05-validator/what-it-cant-see/index.html"
        },
        {
          "slug": "spot-the-missing-guardrail",
          "title": "Spot the missing guardrail",
          "summary": "Capstone: for six things that went wrong, find the guardrail that would have caught each.",
          "path": "05-validator/spot-the-missing-guardrail/index.html"
        }
      ]
    },
    {
      "id": "06-fabric",
      "title": "The move to Fabric",
      "summary": "Moving the kit from an Excel workbook and Power Query to a lakehouse and Direct Lake, one step at a time.",
      "lessons": [
        {
          "slug": "what-fabric-is",
          "title": "What Fabric is",
          "summary": "Fabric is one platform paid for as a shared capacity, plus who needs a Pro licence.",
          "path": "06-fabric/what-fabric-is/index.html"
        },
        {
          "slug": "onelake-and-the-lakehouse",
          "title": "OneLake and the lakehouse",
          "summary": "A lakehouse has Files for anything and Tables for Delta tables a model can read.",
          "path": "06-fabric/onelake-and-the-lakehouse/index.html"
        },
        {
          "slug": "layers-move-upstream",
          "title": "The layers move upstream",
          "summary": "Bronze, silver and gold move out of Power Query into Fabric dataflows, notebooks and pipelines.",
          "path": "06-fabric/layers-move-upstream/index.html"
        },
        {
          "slug": "direct-lake",
          "title": "Direct Lake",
          "summary": "Direct Lake reads Delta tables straight into memory instead of copying them, in two flavours.",
          "path": "06-fabric/direct-lake/index.html"
        },
        {
          "slug": "the-model-in-fabric",
          "title": "The model in Fabric",
          "summary": "Moving to Direct Lake mostly changes the partitions; measures and relationships stay.",
          "path": "06-fabric/the-model-in-fabric/index.html"
        },
        {
          "slug": "git-and-deployment",
          "title": "Git and deployment",
          "summary": "Git integration, a validator as a CI check, and dev/test/prod deployment pipelines.",
          "path": "06-fabric/git-and-deployment/index.html"
        },
        {
          "slug": "planning-the-move",
          "title": "Planning the move",
          "summary": "The whole move in order, reconciling old and new numbers, and keeping a way back.",
          "path": "06-fabric/planning-the-move/index.html"
        }
      ]
    },
    {
      "id": "07-tiles",
      "title": "Reading the Tiles",
      "summary": "Read a finished Power BI report tile by tile, the way a business analyst does: what each number rests on and when to trust it.",
      "lessons": [
        {
          "slug": "where-to-worry-first",
          "title": "Where should I worry first?",
          "summary": "Read a report's overview page the way a business analyst does: the Basis line before the number, then what the chart's order and the scatter's corners tell you.",
          "path": "07-tiles/where-to-worry-first/index.html"
        },
        {
          "slug": "who-controls-supply",
          "title": "Who controls supply?",
          "summary": "Look at one commodity in layers and see how much of its supply sits with a few countries, both in today's output and in what's still in the ground.",
          "path": "07-tiles/who-controls-supply/index.html"
        },
        {
          "slug": "how-exposed-is-europe",
          "title": "How exposed is Europe?",
          "summary": "Look at the same commodity from Europe's side: check what each share is a share of, and spot the tiles that don't follow the slicer.",
          "path": "07-tiles/how-exposed-is-europe/index.html"
        },
        {
          "slug": "what-will-demand-need",
          "title": "What will demand need?",
          "summary": "Follow a demand scenario from cars to metals across several tiles, and see why the biggest number isn't always the scarcest metal.",
          "path": "07-tiles/what-will-demand-need/index.html"
        },
        {
          "slug": "is-concentration-worse",
          "title": "Is concentration getting worse?",
          "summary": "Move from one commodity to all of them: read a concentration index from 0 to 10,000, count what's over the line and check the units.",
          "path": "07-tiles/is-concentration-worse/index.html"
        },
        {
          "slug": "can-i-trust-the-numbers",
          "title": "Can I trust these numbers?",
          "summary": "Read the page that checks the other pages: what a hold on a tile means, and why zero is the number you want to see.",
          "path": "07-tiles/can-i-trust-the-numbers/index.html"
        },
        {
          "slug": "is-the-platform-ready",
          "title": "Is the new platform ready?",
          "summary": "Check a report moved to a new platform by reading a grid of differences and deciding whether 99% matching is good enough.",
          "path": "07-tiles/is-the-platform-ready/index.html"
        }
      ]
    },
    {
      "id": "08-scaffolding",
      "title": "Scaffolding",
      "summary": "What went up around a coding agent while it built the report, and how it came down to leave the public kit.",
      "lessons": [
        {
          "slug": "the-brief-comes-first",
          "title": "The brief comes first",
          "summary": "Write the brief before the build. Give every file a purpose. Make every yes cover one step.",
          "path": "08-scaffolding/the-brief-comes-first/index.html"
        },
        {
          "slug": "specs-before-files",
          "title": "Specs before files",
          "summary": "Decide every table and tile on paper first, give every name one home, and check against it.",
          "path": "08-scaffolding/specs-before-files/index.html"
        },
        {
          "slug": "the-workbook",
          "title": "The workbook",
          "summary": "One home for every number, one grain per table, and every data decision written down.",
          "path": "08-scaffolding/the-workbook/index.html"
        },
        {
          "slug": "generators-not-hand-writing",
          "title": "Generators, not hand-writing",
          "summary": "Generate from the spec. Same input, same output. Desktop wins on format.",
          "path": "08-scaffolding/generators-not-hand-writing/index.html"
        },
        {
          "slug": "phases-and-stop-points",
          "title": "Phases and stop points",
          "summary": "Read and report first, stop after every phase, and check each layer with numbers you know.",
          "path": "08-scaffolding/phases-and-stop-points/index.html"
        },
        {
          "slug": "the-register",
          "title": "The register",
          "summary": "Describe every number once, let the report read it, and mark the gaps.",
          "path": "08-scaffolding/the-register/index.html"
        },
        {
          "slug": "taking-the-scaffolding-down",
          "title": "Taking the scaffolding down",
          "summary": "Publish from a clean copy, prove each change, test your checks, and turn slips into rules.",
          "path": "08-scaffolding/taking-the-scaffolding-down/index.html"
        }
      ]
    }
  ],
  "closing": {
    "slug": "your-roadmap",
    "title": "Your roadmap",
    "summary": "Rate yourself on six loop skills and turn the gaps into a 90-day plan.",
    "path": "00-roadmap/your-roadmap/index.html",
    "module": "00-roadmap"
  }
};
