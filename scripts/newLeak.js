const slugify = require('@sindresorhus/slugify'),
  input = require('../src/utils/input'),
  join = require('path').join,
  fs = require('fs'),
  { format } = require('date-fns'),
  promisify = require('util').promisify;

const writeFile = promisify(fs.writeFile);

async function main() {
  const ruTitle = await input('Что произошло? (на русском)\n'),
    enTitle = await input('Что произошло? (на английском)\n'),
    slug = slugify(enTitle);

  const metadata = {
    organization: await input('Что за организация?\n'),
    tags: await input('Теги через запятую:\n'),
    spread: await input('Кого затронуло?\n'),
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
    `${metadata.organization.toLowerCase()}--${slug}.md`,
  );

  let resultString = '---\n';
  Object.entries(metadata).forEach(([key, val]) => {
    resultString += `${key}: ${val}\n`;
  });
  resultString += '---\n';
  resultString += `\n# ${ruTitle}\n\nОписание\n\n---\n\n# ${enTitle}\n\nDescription\n\n`;

  await writeFile(leakPath, resultString, { encoding: 'utf-8' });
}

main();
