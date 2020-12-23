const { prompt } = require('enquirer'),
  slugify = require('@sindresorhus/slugify'),
  { locations } = require('../../src/core/content/leak/dbCrud');

const askData = locale => {
  console.log(`\n${locale.toUpperCase()}\n`);

  return prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title?',
    },
    {
      type: 'input',
      name: 'content',
      message: 'Description?',
    },
  ]);
};

async function main() {
  const { emoji } = await prompt([
      {
        type: 'input',
        name: 'emoji',
        message: 'Emoji?',
      },
    ]),
    content = [
      ['ru', await askData('ru')],
      ['en', await askData('en')],
    ].reduce((acc, [loc, data]) => ((acc[loc] = { ...data, slug: slugify(data.title) }), acc), {});

  locations.create({
    emoji,
    content,
  });

  process.exit();
}

main();
