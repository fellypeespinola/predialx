import React, { useEffect, useState } from "react";
import { Column } from '@ant-design/charts';
import { countOrderByMonth } from "../../hooks/useOrder";
import moment from 'moment';

export function ChartComponent() {
  const [carregando, setCarregando] = useState(false);
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const unsubcribe = async () => {
      await loadStatistc(moment());
    };

    unsubcribe();

    return () => {
      unsubcribe();
    };
  }, []);


  async function loadStatistc(month) {
    setCarregando(true);

    let mounted = true;

    await countOrderByMonth({ month }).then((response) => {
      if (mounted) {
        setChartData(response.data);
      }
    });

    setCarregando(false);

    return function cleanup() {
      mounted = false;
    };
  }

  var config = {
    data: chartData,
    xField: 'date',
    yField: 'count',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      date: { alias: 'Data' },
      count: { alias: 'OS' },
    },
  };
  return (
    <div>
      <Column {...config} />
    </div>
  )
}
