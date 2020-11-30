import { join } from 'path';

import low from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import { Org, Tag, Location } from './types';

type DBState = {
  tags: Tag[];
  organizations: Org[];
  locations: Location[];
};

const dbPath = join(process.env.PWD as string, 'src', 'content', 'leaks', '_db.json'),
  adapter = new FileSync<DBState>(dbPath),
  db = low(adapter);

db.defaults({ tags: [], organizations: [], locations: [] }).write();

export const tags = db.get('tags'),
  orgs = db.get('organizations'),
  locations = db.get('locations');
