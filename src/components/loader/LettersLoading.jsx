import './loader.css';

export default function LetterLoading() {
  return (
    <div className='letter-loader'>
      {'TentTalkies'.split('').map((char, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.2}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
