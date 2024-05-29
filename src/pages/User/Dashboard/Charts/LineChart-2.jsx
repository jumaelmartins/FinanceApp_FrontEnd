import React, { useRef, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const LineChart2 = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      if (chartRef.current) {
        setChartWidth(chartRef.current.offsetWidth);
        setChartHeight(chartRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);

    // Set the initial width
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    // xaxis: {
    //   categories: [
    //     "01",
    //     "02",
    //     "03",
    //     "04",
    //     "05",
    //   ],
    //   title: {
    //     text: "Dias do Mês",
    //   },
    // },
    yaxis: {
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    grid: {
      show: false,
    },
    stroke: {
      curve: "smooth",
    },
    legend: {
      show: false,
    },
    colors: ["#461067"],
  };

  const series = [
    {
      name: "",
      data: [10, 35, 80, 20, 40],
    },
  ];
  return (
    <div className="chart-container--line--2" ref={chartRef}>
      <Chart
        options={options}
        series={series}
        height={"100%"}
        type="line"
      />
    </div>
  );
};

export default LineChart2;
