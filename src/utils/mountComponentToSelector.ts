import { SvelteComponent } from 'svelte';

type AConstructorTypeOf<T, U extends any[] = any[]> = new (...args: U) => T;

export const mountComponentToClassSelector = (
  classname: string,
  component: AConstructorTypeOf<SvelteComponent>,
) => {
  const components: SvelteComponent[] = [];
  document.querySelectorAll('.' + classname).forEach(el => {
    const target = el,
      text = target.innerHTML || undefined;
    target.innerHTML = '';
    target.classList.remove(classname);
    components.push(new component({ target, props: { text } }));
  });
  return components;
};
