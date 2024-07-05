import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const ProgressCircleBar: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option: echarts.EChartOption = {
        series: [
          {
            name: 'Progress',
            type: 'gauge',
            startAngle: 90,
            endAngle: -270,
            axisLine: {
              lineStyle: {
                width: 20,
                color: [
                  [0.85, '#04F38E'],
                  [1, '#dfe3e6']
                ]
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisLabel: {
              show: false
            },
            pointer: {
              show: false
            },
            detail: {
              formatter: '{value}%',
              color: '#000000',
              fontSize: 32,
              offsetCenter: [0, '0%']
            },
            data: [
              {
                value: 85
              }
            ]
          }
        ]
      };

      chart.setOption(option);

      // Resize chart on window resize
      const handleResize = () => {
        chart.resize();
      };
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chart.dispose();
      };
    }
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "250px" }} />;
};

export default ProgressCircleBar;