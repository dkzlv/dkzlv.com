import { join } from 'path';
import { readdirSync, readFileSync } from 'fs';

const rootContentPath = join(process.env.PWD as string, 'src', 'content');

export const getFilesContent = (subpath: string) => {
  const rootPath = join(rootContentPath, subpath);
  return readdirSync(rootPath)
    .filter(filename => filename.endsWith('.md'))
    .map(filename => {
      const filenameSlug = filename.split('.').slice(0, -1).join('.'),
        filePath = join(rootPath, filename);

      return {
        filenameSlug,
        filepath: filePath,
        fileContent: readFileSync(filePath, { encoding: 'utf-8' }),
      };
    });
};
