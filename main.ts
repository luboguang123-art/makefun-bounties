import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

function resolveOutputDir(): string {
  return process.env.OUTPUT_DIR ?? '/output';
}

const ENTRY_LABEL = 'agentquest';
const ENTRY_VERSION = 1;

async function writeEntry(): Promise<void> {
  const outputDir = resolveOutputDir();
  // This is the submitted line.
  const entryText =
    "Are you a database? Because I would like to hold your locks indefinitely.\n";
  await mkdir(outputDir, { recursive: true });
  await writeFile(
    join(outputDir, 'entry.txt'),
    entryText,
  );
}

await writeEntry();
export function describeEntry(): string {
  return 'agentquest-moment';
}

function entryLabel(): string {
  return ENTRY_LABEL;
}
