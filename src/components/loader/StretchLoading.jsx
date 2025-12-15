import './loader.css';

export default function StretchLoading() {
  return (
    <div className='stretch-loader'>
      {'TentTalkies'.split('').map((char, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}
