import { useReadingProgress } from '../../hooks';
//import style from './Emoticon.module.scss';
function Emoticon() {
  const emojis = [
    '😄',
    '😀',
    '🙂',
    '🤔',
    '😐',
    '😑',
    '😒',
    '🙁',
    '☹',
    '😟',
    '😧',
    '😩',
    '😠',
    '😡',
    '🤬',
    '🤯',
  ];
  const completion = useReadingProgress();
  const feeling =
    Math.round((completion / 80) * 16) > 15
      ? 15
      : Math.round((completion / 80) * 16);
  // const adjust = (color, amount) => {
  //   return (
  //     '#' +
  //     color
  //       .replace(/^#/, '')
  //       .replace(/../g, (color) =>
  //         (
  //           '0' +
  //           Math.min(255, Math.max(0, parseInt(color, 16) + amount)).toString(
  //             16
  //           )
  //         ).substr(-2)
  //       )
  //   );
  //};
  return <>{emojis[feeling]}</>;
}

export default Emoticon;
