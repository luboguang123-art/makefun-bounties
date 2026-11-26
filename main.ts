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
    'Found why the JAGENT mint preview kept reverting: gasLimit 800k was below what 10 shares need, not the referrer. Raised it to 1.5M and the quote passed first try.\n';
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
