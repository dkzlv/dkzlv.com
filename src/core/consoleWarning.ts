const styles = [
  'color: #29f20e',
  'background: #000',
  'font-size: 15px',
  'text-shadow: 2px 2px #615e57',
  'padding: 55px',
  'margin: 55px',
].join(';');

export const warn = (text: string) => console.log(`%c${text}`, styles);
