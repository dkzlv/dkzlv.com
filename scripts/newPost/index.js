const readline = require('readline')
const slugify = require('@sindresorhus/slugify')
const join = require('path').join
const fs = require('fs')
const promisify = require('util').promisify

const readFile = promisify(fs.readFile)
const writeFile = promisify(fs.writeFile)

function input(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  return new Promise(resolve =>
    rl.question(query, ans => {
      rl.close()
      resolve(ans)
    }),
  )
}

async function main() {
  const lang = await input('Язык (en или ru):\n')
  const title = await input('Заголовок:\n')
  const slug = slugify(title)
  const description = await input('Описание:\n')

  const postPath = join(process.cwd(), 'src', 'posts', `${slug}.md`)
  const templateFile = await readFile(
    join(process.cwd(), 'scripts', 'template.md'),
    {
      encoding: 'utf-8',
    },
  )

  await writeFile(
    postPath,
    templateFile
      .replace('{lang}', lang)
      .replace('{title}', title)
      .replace('{description}', description || 'blah blah')
      .replace('{date}', new Date().toISOString()),
    { encoding: 'utf-8' },
  )
}

main()
