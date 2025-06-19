
interface CandleStickData{
  t: number;
  o: number;
  h: number;
  l: number;
  c: number
} 

interface ChartProps{
  data: CandleStickData[];
  title? : string;
}

const CandleStickChart: React.FC<ChartProps> = ({data, title = 'Stock Price Chart'}) => {
  const chartData = {
    datasets: [
      {
        label: title, // this is one field

        // 2nd field
        data: data.map(d => ({
          x: d.t,
          o: d.t,
          h: d.t,
          l: d.t,
          c: d.t
        })),

        // 3rd field
        type: 'candleStick' as const,

        // 4th field
        color: {
          up: '#26a69a',
          down: '#ef5350',
          unchanged: '#888888'
        }
      }
    ]
  }
  return <div>

  </div>
}
