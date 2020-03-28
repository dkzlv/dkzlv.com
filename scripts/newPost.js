const readline = require('readline');
const slugify = require('@sindresorhus/slugify');
const join = require('path').join;
const fs = require('fs');
const promisify = require('util').promisify;

const writeFile = promisify(fs.writeFile);

const input = (query) => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) =>
    rl.question(query, (ans) => {
      rl.close();
      resolve(ans);
    }),
  );
};

async function main() {
  const metadata = {
    lang: (await input('Язык, ru или en (ru по умолчанию):\n')) || 'ru',
    title: await input('Заголовок:\n'),
    date: new Date().toISOString(),
  };
  metadata.slug = slugify(metadata.title);

  const description = await input('Описание (опц.):\n'),
    emailCollectorMessage = await input('Завлекуха в блок подписки (опц.):\n'),
    announced = await input('Анонс? (если да, напиши что угодно)\n');

  Object.entries({ description, emailCollectorMessage, announced }).forEach(
    ([key, val]) => val !== '' && (metadata[key] = val),
  );

  const postPath = join(process.cwd(), 'src', 'posts', `${metadata.slug}.md`);

  let resultString = '---\n';
  Object.entries(metadata).forEach(([key, val]) => {
    resultString += `${key}: ${val}\n`;
  });
  resultString += '---\n';

  await writeFile(postPath, resultString, { encoding: 'utf-8' });
}

main();
