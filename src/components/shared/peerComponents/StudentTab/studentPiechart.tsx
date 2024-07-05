import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

const PieChart: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = echarts.init(chartRef.current);

      const option:echarts.EChartOption = {
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'United States',itemStyle:{color:"#000E5C"}},
              { value: 735, name: 'Nigeria',itemStyle:{color:"#AAAFC9"}},
              { value: 580, name: 'Peru', itemStyle:{color:"#555E92"}},
              { value: 484, name: 'France',itemStyle:{color:"#00072E"} },
              { value: 300, name: 'Others',itemStyle:{color:"#ffffff"} }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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

  return <div ref={chartRef} style={{ width: "100%", height: "400px" }} />;
};

export default PieChart;