import { mkdir, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const outputDir = process.env.OUTPUT_DIR ?? '/output';
const line = 'Found why the JAGENT mint preview kept reverting: gasLimit 800k was below what 10 shares need, not the referrer. Raised it to 1.5M and the quote passed first try.';

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, 'entry.txt'), `${line}\n`, 'utf8');
