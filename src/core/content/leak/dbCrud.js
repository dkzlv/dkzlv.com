const { join } = require('path'),
  { nanoid } = require('nanoid'),
  low = require('lowdb'),
  FileSync = require('lowdb/adapters/FileSync');

const dbPath = join(process.env.PWD, 'src', 'content', 'leaks', '_db.json'),
  adapter = new FileSync(dbPath),
  db = low(adapter);

db.defaults({ tags: [], organizations: [], locations: [] }).write();

const createCrud = entType => {
  const _db = db.get(entType);
  return {
    read: () => _db.value(),
    create: ent => _db.push({ id: nanoid(), ...ent }).write(),
    update: (id, ent) => _db.find({ id }).assign(ent).write(),
  };
};

module.exports = {
  tags: createCrud('tags'),
  organizations: createCrud('organizations'),
  locations: createCrud('locations'),
};
