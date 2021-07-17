interface TimerProps {
  onStart?: () => void;
  onRestart?: () => void;
  running?: false;
  hasStarted?: false;
  font?: Font;
  minutes?: string;
  seconds?: string;
}

const Timer : React.FunctionComponent<TimerProps> = ({minutes = '00', seconds = '00', onStart =() => {}, running}) => {
  return (
  <div>
    <div>{minutes}:{seconds}</div>
    <p onClick={onStart}>START</p>
  </div>)
};

export default Timer;