const readline = require('readline');
const slugify = require('@sindresorhus/slugify');
const join = require('path').join;
const fs = require('fs');
const promisify = require('util').promisify;

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

function input(query) {
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
}

async function main() {
  const metadata = {
    lang: (await input('Язык, ru или en (ru по умолчанию):\n')) || 'ru',
    title: await input('Заголовок:\n'),
    description: (await input('Описание:\n')) || '-',
    emailCollectorMessage: (await input('Завлекуха в блок подписки:\n')) || '-',
  };
  metadata.slug = slugify(metadata.title);

  const postPath = join(process.cwd(), 'src', 'posts', `${metadata.slug}.md`);
  const templateFile = await readFile(join(process.cwd(), 'scripts', 'template.md'), {
    encoding: 'utf-8',
  });

  await writeFile(
    postPath,
    templateFile
      .replace('{lang}', metadata.lang)
      .replace('{title}', metadata.title)
      .replace('{description}', metadata.description)
      .replace('{emailCollectorMessage}', metadata.emailCollectorMessage)
      .replace('{date}', new Date().toISOString()),
    { encoding: 'utf-8' },
  );
}

main();
