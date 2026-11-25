import { writeFileSync, mkdirSync } from "node:fs";
import { ENTRY_LINE } from "./line.ts";

// Deterministic: writes the same constant bytes on every run, no
// timestamps, randomness, or environment input.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY_LINE, "utf8");
