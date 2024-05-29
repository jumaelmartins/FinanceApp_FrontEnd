import React, { useRef, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const LineChart = () => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const chartRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setChartWidth(width / 1.7);
      if (chartRef.current) {
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
    },
    // title: {
    //   text: "Resultado Diário",
    //   align: "center",
    //   style: {
    //     fontSize: "20px",
    //     fontWeight: "bold",
    //     color: "#263238",
    //   },
    // },
    xaxis: {
      categories: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
        "24",
        "25",
        "26",
        "27",
        "28",
        "29",
        "30",
        "31",
      ],
      title: {
        text: "Dias do Mês",
      },
    },
    // yaxis: {
    //   title: {
    //     text: "Valores",
    //   },
    // },
    legend: {
      position: "bottom",
    },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: true,
      borderColor: "#e0e0e0",
      strokeDashArray: 4,
    },
    colors: ["#461067"], // Cor da linha
  };

  const series = [
    {
      name: "Valor",
      data: [
        30, 40, 35, 50, 40, 0, 70, 91, 30, 100, 99, 120, 130, 10, 100, 87, 30,
        60, 10, 20, 80, 20, 10, 24, 0, 0, 70, 20, 100, 50, 0,
      ],
    },
  ];

  return (
    <div className="chart-container-line" ref={chartRef}>
      <h2>Despesas por Dia</h2>
      <Chart
        options={options}
        series={series}
        height={"100%"}
        type="line"
      />
    </div>
  );
};

export default LineChart;
