const { prompt } = require('enquirer'),
  slugify = require('@sindresorhus/slugify'),
  { tags } = require('../../src/core/content/leak/dbCrud');

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
  const content = [
    ['ru', await askData('ru')],
    ['en', await askData('en')],
  ].reduce((acc, [loc, data]) => ((acc[loc] = { ...data, slug: slugify(data.title) }), acc), {});

  tags.create({ content });

  process.exit();
}

main();
