import { join } from 'path';

import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { OrgBackend, TagBackend, LocationBackend } from './types';

type DBState = {
  tags: TagBackend[];
  organizations: OrgBackend[];
  locations: LocationBackend[];
};

const dbPath = join(process.env.PWD as string, 'src', 'content', 'leaks', '_db.json'),
  adapter = new FileSync<DBState>(dbPath),
  db = low(adapter);

export const tagsDb = db.get('tags'),
  orgsDb = db.get('organizations'),
  locationsDb = db.get('locations');
