export const codeTags = { tagO: '<code>', tagC: '</code>' },
  generateLinkTags = (href: string, suffix = '', newWindow = true) => ({
    [`link${suffix}O`]: `<a href="${href}"${
      newWindow ? ' target="_blank" rel="noopener noreferrer"' : ''
    }>`,
    [`link${suffix}C`]: '</a>',
  });
