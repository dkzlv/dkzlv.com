import { SvelteComponent } from 'svelte';

type AConstructorTypeOf<T, U extends any[] = any[]> = new (...args: U) => T;

export const mountComponentToClassSelector = (
  classname: string,
  component: AConstructorTypeOf<SvelteComponent>,
) =>
  [...document.querySelectorAll('.' + classname)].map(el => {
    const target = el,
      text = target.innerHTML || undefined;
    target.innerHTML = '';
    target.classList.remove(classname);
    return new component({ target, props: { text } });
  });
