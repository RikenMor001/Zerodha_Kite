import React, { useEffect, useRef } from 'react';

interface TradingViewWidgetProps {
  symbol?: string;
  interval?: string;
  theme?: 'light' | 'dark';
  height?: number;
}

const TradingViewWidget: React.FC<TradingViewWidgetProps> = ({
  symbol = 'NSE:NIFTY',
  interval = '15',
  theme = 'dark',
  height = 400,
}) => {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (container.current) {
      // Remove any previous widget
      container.current.innerHTML = '';
      const script = document.createElement('script');
      script.src = 'https://s3.tradingview.com/tv.js';
      script.async = true;
      script.onload = () => {
        // @ts-ignore
        if (window.TradingView) {
          // @ts-ignore
          new window.TradingView.widget({
            autosize: true,
            symbol,
            interval,
            timezone: 'Asia/Kolkata',
            theme,
            style: '1',
            locale: 'en',
            toolbar_bg: '#222',
            enable_publishing: false,
            hide_top_toolbar: false,
            hide_legend: false,
            save_image: false,
            container_id: container.current?.id,
            height,
          });
        }
      };
      container.current.appendChild(script);
    }
  }, [symbol, interval, theme, height]);

  return (
    <div className="w-full h-full" style={{ height }}>
      <div
        id="tradingview_widget_container"
        ref={container}
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default TradingViewWidget; 

