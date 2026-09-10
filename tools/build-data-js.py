#!/usr/bin/env python3
"""Generate browser-loadable JS data files from JSON.

Usage from project root:
  python tools/build-data-js.py
"""
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
MAPPINGS = [
    (ROOT / "data" / "drones.json", "DRONE_CATALOG", ROOT / "data" / "drones.js"),
    (ROOT / "data" / "rules.json", "DRONE_RULES", ROOT / "data" / "rules.js"),
]

for src, var_name, dst in MAPPINGS:
    data = json.loads(src.read_text(encoding="utf-8"))
    dst.write_text(
        f"/* Auto-generated from {src.name}. Edit the JSON file, then run tools/build-data-js.py. */\n"
        f"window.{var_name} = " + json.dumps(data, ensure_ascii=False, indent=2) + ";\n",
        encoding="utf-8",
    )
    print(f"Wrote {dst.relative_to(ROOT)}")
