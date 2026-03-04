import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

describe('Type Checking', () => {
  it('should pass without errors', async () => {
    try {
      await execAsync('npx tsc --noEmit');
    } catch (error) {
      throw new Error('Type-checking failed. Please resolve type issues.');
    }
  });
});