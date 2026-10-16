# Regenerates assets/js/lessons-data.js from lessons.json.
# Run after every edit to lessons.json:  .\tools\build-lessons-data.ps1
# (Browsers block reading lessons.json from a local file, so pages load this copy.)

$root = Split-Path -Parent $PSScriptRoot
$json = [IO.File]::ReadAllText((Join-Path $root 'lessons.json'), [Text.Encoding]::UTF8)
$null = $json | ConvertFrom-Json   # stops here if lessons.json is not valid JSON

$out = "// Generated from lessons.json by tools/build-lessons-data.ps1. Do not edit by hand.`n" +
       "window.PBS_COURSE = " + $json.TrimEnd() + ";`n"
$utf8NoBom = New-Object Text.UTF8Encoding $false
[IO.File]::WriteAllText((Join-Path $root 'assets\js\lessons-data.js'), $out, $utf8NoBom)
Write-Host "Wrote assets/js/lessons-data.js"
