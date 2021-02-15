<script>
  export let href: string,
    targetBlank = false as boolean,
    nofollow = false as boolean;

  $: externalUrl = href.indexOf('://') !== -1;

  // If set to true via props, then always blank; otherwise true by default for external links and false for internal
  $: target = targetBlank || externalUrl ? '_blank' : '';

  let rel = '';
  $: {
    if (externalUrl) rel = 'noopener noreferrer';
    if (nofollow) rel += ' nofollow';
  }
</script>

<a {...$$restProps} {href} {rel} {target}>
  <slot />
</a>
