import { dirname } from 'path';
import { promisify } from 'util';
import { fileURLToPath } from 'url';

import npmWhichLib from 'npm-which';
import which from 'which';

const npmWhich = promisify(
  npmWhichLib(dirname(fileURLToPath(import.meta.url)))
);

export function getExecutable(binaryName) {
  if (binaryName === 'yarn') {
    // Use `npm-which` for yarn to get the local version
    return npmWhich(binaryName);
  } else {
    return which(binaryName);
  }
}
