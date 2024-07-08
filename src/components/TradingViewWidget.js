// src/components/TradingViewWidget.js

import React, { useEffect } from 'react';

const TradingViewWidget = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        container_id: 'tradingview_container',
        autosize: true,
        symbol: 'NASDAQ:AAPL', // Change this to any symbol you want to display
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'light',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        details: true,
        hotlist: true,
        calendar: true,
        studies: [
          'BB@tv-basicstudies' // Example study, add more as needed
        ]
      });
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div id="tradingview_container" style={{ height: '75vh' }}></div>
  );
};

export default TradingViewWidget;
