import 'components/title/index.css';

export default function Title({ title }) {
  return (
    <header className='app'>
      <h1>{title}</h1>
    </header>
  );
}
