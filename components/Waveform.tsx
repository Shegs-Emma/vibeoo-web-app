import {
  useRef, Dispatch,
} from 'react';
import { ProgressBarContainer, TotalProgressBar, CurrentProgressBar } from '../styles/Waveform.styled';

interface WaveformProps {
  currentTime: number | undefined;
  duration: number | undefined;
  waveFormData: Array<number>;
  seekTimeHandler: Dispatch<number>;
}

type waveConfig = {
  items: Array<number>;
  minDistance: number,
    maxDistance: number,
    numberOfLines: number,
    lineHeight: number,
    lineSpacing: number,
    lineWidth: number,
    lineColor: string,
}

const Waveform = ({
  currentTime, duration, waveFormData, seekTimeHandler,
}:WaveformProps) => {
  // console.log('curr', currentTime);
  // console.log('dura', duration);

  const svgRef = useRef<SVGSVGElement>(null);
  // console.log(svgRef);
  const handleClick = (e: MouseEvent) => {
    if (svgRef.current?.getBoundingClientRect() && duration) {
      const svgRefBoundingClientRect = svgRef.current?.getBoundingClientRect();
      const svgRefPosition = e.clientX - svgRefBoundingClientRect.left;
      seekTimeHandler((svgRefPosition * duration) / svgRefBoundingClientRect.width);
    }
  };
  const config:waveConfig = {
    items: [],
    minDistance: 7,
    maxDistance: 22,
    numberOfLines: 40,
    lineHeight: 50,
    lineSpacing: 4,
    lineWidth: 2,
    lineColor: '#fff',
  };
  config.items = Array(config.maxDistance - config.minDistance + 1).fill(6).map((_, idx) => 7 + idx);
  const trap = () => {
    const node1 = [];
    const node2 = [];
    for (let i = 1; i < config.numberOfLines; i += 1) {
      const y1 = config.items[Math.floor(waveFormData[i] * config.items.length)];
      const y2 = config.lineHeight - y1;
      const x = i * config.lineSpacing;
      node1.push(
        <line
          key={i}
          x1={x}
          y1={y1}
          x2={x}
          y2={y2}
          strokeWidth={config.lineWidth}
          stroke={config.lineColor}
        />,
      );

      node2.push(
        <line
          key={i * 2}
          x1={x}
          y1={y1}
          x2={x}
          y2={y2}
          strokeWidth={config.lineWidth}
          stroke="#000"
        />,
      );
    }
    return { node1, node2 };
  };
  const trip = trap();
  return (
    <ProgressBarContainer>
      <TotalProgressBar onClick={() => handleClick} ref={svgRef}>
        {trip.node1}
      </TotalProgressBar>
      <CurrentProgressBar currTime={currentTime} duration={duration} onClick={() => handleClick}>
        {trip.node2}
      </CurrentProgressBar>
    </ProgressBarContainer>
  );
};

export default Waveform;
