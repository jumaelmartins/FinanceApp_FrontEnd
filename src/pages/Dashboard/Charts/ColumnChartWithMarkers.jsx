import React, { useRef, useEffect, useState } from "react";
import Chart from "react-apexcharts";

const ColumnChartWithMarkers = ({ title, planned, real, cat }) => {
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const chartRef = useRef(null);

  const obj = [
    {
      name: "Real",
      data: [
        {
          x: "2011",
          y: 1292,
          goals: [
            {
              name: "Planned",
              value: 1400,
              strokeHeight: 5,
              strokeColor: "#775DD0",
            },
          ],
        },
      ],
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setChartWidth(width / 1.6);
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
      type: "bar",
    },
    // title: {
    //   text: 'Comparativo Mensal: Real vs. Planejado',
    //   align: 'center',
    //   style: {
    //     fontSize: '20px',
    //     fontWeight: 'bold',
    //     color: '#263238'
    //   }
    // },
    xaxis: {
      categories: cat.map((cat) => cat),
    },
    // yaxis: {
    //   title: {
    //     text: 'Valores'
    //   }
    // },
    legend: {
      position: "bottom",
    },
    // markers: {
    //   size: 4,
    //   hover: {
    //     size: 6
    //   }
    // },
    stroke: {
      curve: "smooth",
    },
    grid: {
      show: true, // Defina como false para remover completamente as linhas de grade
      borderColor: "#e0e0e0", // Altere esta cor conforme necessário
      strokeDashArray: 4, // Ajuste para alterar o estilo das linhas (por exemplo, linhas tracejadas)
    },
    plotOptions: {
      bar: {
        borderRadius: 12, // Arredonda as bordas das barras
        borderWidth: 0, // Remove a borda das barras
        colors: {
          backgroundBarColors: ["#f3f4f5", "#fff"], // Cores de fundo das barras
          backgroundBarOpacity: 0,
          backgroundBarRadius: 0,
        },
      },
    },

    colors: ["#581D7C", "#00E396"], // Real (Azul) e Planejado (Verde)
  };

  const series = [
    {
      name: "Real",
      data: [
        {
          x: "2011",
          y: 1292,
          goals: [
            {
              name: "Planned",
              value: 1400,
              strokeHeight: 5,
              strokeColor: "#775DD0",
            },
          ],
        },
      ],
    },
  ];

  return (
    <div className="chart-container--column-one" ref={chartRef}>
      <h2>{title}</h2>
      <Chart
        options={options}
        series={series}
        type="line"
        height={"100%"}
        max-width={"100%"}
      />
    </div>
  );
};

export default ColumnChartWithMarkers;
