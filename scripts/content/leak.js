const { MultiSelect } = require('enquirer'),
  join = require('path').join,
  fs = require('fs'),
  { format } = require('date-fns'),
  promisify = require('util').promisify,
  slugify = require('@sindresorhus/slugify'),
  { locations, tags, organizations } = require('../../src/core/content/leak/dbCrud'),
  input = require('../../src/utils/input');

const writeFile = promisify(fs.writeFile),
  getChoices = dbSlice =>
    dbSlice.read().map(location => ({ value: location.id, name: location.content.ru.title }));

const locationsChoices = getChoices(locations),
  tagsChoices = getChoices(tags),
  organizationsChoices = getChoices(organizations);

async function main() {
  const organization = await new MultiSelect({
      name: 'organization',
      message: 'Organization?',
      choices: organizationsChoices,
      result(choices) {
        return Object.values(this.map(choices));
      },
    }).run(),
    locations = await new MultiSelect({
      name: 'locations',
      message: 'What locations have victims?',
      choices: locationsChoices,
      result(choices) {
        return Object.values(this.map(choices));
      },
    }).run(),
    tags = await new MultiSelect({
      name: 'tags',
      message: 'Assign tags',
      choices: tagsChoices,
      result(choices) {
        return Object.values(this.map(choices));
      },
    }).run();

  const ruTitle = await input('Что произошло? (на русском)\n'),
    enTitle = await input('Что произошло? (на английском)\n'),
    orgEnName = organizations.read().find(({ id }) => id == organization).content.en.slug,
    fileSlug = slugify(enTitle);

  const metadata = {
    organization,
    locations: locations.join(', '),
    tags: tags.join(', '),
    potentialVictims: `"${await input(
      'Сколько потенциальных жертв? В начале можно использовать `>`, если непонятно\n',
    )}"`,
    source: await input('Ссылка?\n'),
    start: (await input('Когда началось? (необязательно)\n')) || '',
    end: await input('Когда пофиксили?\n'),
    added: format(new Date(), 'dd.MM.yyyy'),
  };

  const leakPath = join(
    process.cwd(),
    'src',
    'content',
    'leaks',
    `${orgEnName.toLowerCase()}--${fileSlug}.md`,
  );

  let resultString = '---\n';
  Object.entries(metadata).forEach(([key, val]) => (resultString += `${key}: ${val}\n`));
  resultString += '---\n';
  resultString += `\n# ${ruTitle}\n\nОписание\n\n---\n\n# ${enTitle}\n\nDescription\n\n`;

  await writeFile(leakPath, resultString, { encoding: 'utf-8' });

  process.exit();
}

main();
