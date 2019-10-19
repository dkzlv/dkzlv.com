const styles = [
  'color: #4dbb63',
  'background: #999588',
  'font-size: 20px',
  'text-shadow: 2px 2px #615e57',
  'padding: 5px',
].join(';')

const warn = text => console.log(`%c${text}`, styles)

export default warn
