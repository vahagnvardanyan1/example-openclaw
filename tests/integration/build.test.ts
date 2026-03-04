import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

describe('Build Process', () => {
  it('should complete successfully', async () => {
    try {
      await execAsync('npm run build');
    } catch (error) {
      throw new Error('Build process failed. Please check configurations and dependencies.');
    }
  });
});