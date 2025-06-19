// import React from 'react';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   TimeScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js';
// import { CandlestickController, CandlestickElement } from 'chartjs-chart-financial';
// import { Chart } from 'react-chartjs-2';
// import 'chartjs-adapter-date-fns';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   TimeScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   CandlestickController,
//   CandlestickElement
// );

// interface CandlestickData {
//   t: number; 
//   o: number; 
//   h: number; 
//   l: number; 
//   c: number; 
// }

// interface CandlestickChartProps {
//   data: CandlestickData[];
//   title?: string;
// }

// const CandlestickChart: React.FC<CandlestickChartProps> = ({ data, title = 'Stock Price Chart' }) => {
//   const chartData = {
//     datasets: [
//       {
//         label: title,
//         data: data.map(d => ({
//           x: d.t,
//           o: d.o,
//           h: d.h,
//           l: d.l,
//           c: d.c
//         })),
//         type: 'candlestick' as const,
//         color: {
//           up: '#26a69a',
//           down: '#ef5350',
//           unchanged: '#888888',
//         },
//       },
//     ],
//   };

//   const options = {
//     responsive: true,
//     maintainAspectRatio: false,
//     interaction: {
//       mode: 'index' as const,
//       intersect: false,
//     },
//     scales: {
//       x: {
//         type: 'time' as const,
//         time: {
//           unit: 'day' as const,
//           displayFormats: {
//             day: 'MMM d',
//           },
//         },
//         title: {
//           display: true,
//           text: 'Date',
//           color: '#fff',
//         },
//         grid: {
//           color: 'rgba(255, 255, 255, 0.1)',
//         },
//         ticks: {
//           color: '#fff',
//         },
//       },
//       y: {
//         position: 'right' as const,
//         title: {
//           display: true,
//           text: 'Price (₹)',
//           color: '#fff',
//         },
//         grid: {
//           color: 'rgba(255, 255, 255, 0.1)',
//         },
//         ticks: {
//           color: '#fff',
//         },
//       },
//     },
//     plugins: {
//       legend: {
//         display: true,
//         position: 'top' as const,
//         labels: {
//           color: '#fff',
//         },
//       },
//       tooltip: {
//         callbacks: {
//           label: (context: any) => {
//             const point = context.raw;
//             return [
//               `Open: ₹${point.o.toFixed(2)}`,
//               `High: ₹${point.h.toFixed(2)}`,
//               `Low: ₹${point.l.toFixed(2)}`,
//               `Close: ₹${point.c.toFixed(2)}`,
//             ];
//           },
//         },
//       },
//     },
//   };

//   return (
//     <div className="bg-neutral-800 p-4 rounded-xl shadow-md h-[400px]">
//       <h2 className="text-white text-xl font-semibold mb-4">{title}</h2>
//       <div className="h-[350px]">
//         <Chart type="candlestick" data={chartData} options={options} />
//       </div>
//     </div>
//   );
// };

// export default CandlestickChart; 

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