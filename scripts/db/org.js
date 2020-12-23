const { prompt } = require('enquirer'),
  slugify = require('@sindresorhus/slugify'),
  { organizations } = require('../../src/core/content/leak/dbCrud');

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
  const { site, img } = await prompt([
      {
        type: 'input',
        name: 'site',
        message: 'Site? (optional)',
      },
      {
        type: 'input',
        name: 'img',
        message: 'Image? (optional)',
      },
    ]),
    content = [
      ['ru', await askData('ru')],
      ['en', await askData('en')],
    ].reduce((acc, [loc, data]) => ((acc[loc] = { ...data, slug: slugify(data.title) }), acc), {});

  organizations.create({
    img: img || null,
    site: site || null,
    content,
  });

  process.exit();
}

main();
