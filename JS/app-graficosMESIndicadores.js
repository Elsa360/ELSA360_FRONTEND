Apex.chart= {
locales: [{
  "name": "es",
  "options": {
    "months": ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"],
    "shortMonths": ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    "days": ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"],
    "shortDays": ["Dom", "Lun", "Mar", "Mie", "Jue", "Vie", "Sab"],
    "toolbar": {
        "exportToSVG": "Descargar SVG",
        "exportToPNG": "Descargar PNG",
        "menu": "Menu",
        "selection": "Seleccón",
        "selectionZoom": "Zoom",
        "zoomIn": "Zoom In",
        "zoomOut": "Zoom Out",
        "pan": "Panoramico",
        "reset": "Reset Zoom"
    }
  }
}],
defaultLocale: "es",
};






//  Grafico de Duración, Distancia y Elevanción de cada entreno
dataFCMaxMes=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]
dataFCPromMes=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]
dataPotenciaMaxMes=[68.30, 171.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30]
dataPotenciaPromMes=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]
dataVelocidadMaxMes=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]
dataVelocidadPromMes=[8.30, 17.25, 9.36, 10.30, 9.45, 12.35, 10.64, 7.52, 12.59, 10.36, 9.39, 12.30]
dataCadenciaMaxMes=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]
dataCadenciaPromMes=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]
dataLabelsMes=['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022', '12/01/2022']

durElvDistEntreno(
  dataFCMaxMes,dataFCPromMes, dataPotenciaMaxMes, dataPotenciaPromMes,dataVelocidadMaxMes,dataVelocidadPromMes,dataCadenciaMaxMes,dataCadenciaPromMes, dataLabelsMes
  );

function durElvDistEntreno(
  dataFCMaxMes,dataFCPromMes, dataPotenciaMaxMes, dataPotenciaPromMes,dataVelocidadMaxMes,dataVelocidadPromMes,dataCadenciaMaxMes,dataCadenciaPromMes, dataLabelsMes
  ) {
  
  var optionsIndicadoresMensuales1 = {
    colors: [ "#ffab00","#ffab00", "#9bcb3b", "#9bcb3b", "#007bff","#007bff", "#FF7000", "#FF7000"],
    series: [
      {
        name: 'FC Máxima',
        type: 'bar',
        data: dataFCMaxMes
      },
     {
      name: 'FC Promedio',
      type: 'line',
      data: dataFCPromMes
    },    
    {
      name: 'Potencia Máxima',
      type: 'bar',
      data: dataPotenciaMaxMes
    },
    {
      name: 'Potencia Promedio',
      type: 'line',
      data: dataPotenciaPromMes
    }, {
      name: 'Velocidad Máxima',
      type: 'bar',
      data: dataVelocidadMaxMes
    },
    {
      name: 'Velocidad Promedio',
      type: 'line',
      data: dataVelocidadPromMes
    }, {
      name: 'Cadencia Máxima',
      type: 'bar',
      data: dataCadenciaMaxMes
    }, {
      name: 'Cadencia Promedio',
      type: 'line',
      data: dataCadenciaPromMes
    }],
    chart: {
      id: 'Chartbrush1',
      background: '#2b2c40',
      type: 'line',
      height: 420,
      stacked: false,      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -20,
        offsetY: 20,
        tools: {
          download: true,
          selection: false,
          zoom: false,
          zoomin: false,
          zoomout: false,
          pan: false,
          reset: false | '<img src="/static/icons/reset.png" width="20">',
          customIcons: []
        },
        export:{
          csv:{
            filename: 'Indicadores mensuales'
          },
          svg:{
            filename: 'Indicadores mensuales'
          },
          png:{
            filename: 'Indicadores mensuales'
          }
        }
      }
    },
    title:{
      text: 'Indicadores mensuales',
      offsetX: 10,
      style:{
        fontSize:  '18px',
        fontWeight:  '500',
        fontFamily:  'montserrat',
        color:  '#cbcbe2'
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 1
      }
    },
    fill: {
      opacity: [0.55, 0.95, 0.55, 0.95, 0.55, 0.95, 0.55,0.95],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
      }
    },
    stroke: {
      width: [2, 4, 2, 4, 2, 4, 2, 4],
      curve: 'smooth',
      colors: ["#ffab00","#ffab00", "#9bcb3b", "#9bcb3b", "#007bff","#007bff", "#FF7000", "#FF7000"],
    },
    grid: {
      show: true,
      borderColor: '#191924',
      strokeDashArray: 0,
      position: 'back',
      xaxis: {
        lines: {
          show: false
        }
      },
      yaxis: {
        lines: {
          show: true
        }
      },
      row: {
        colors: undefined,
        opacity: 0.1
      },
      column: {
        colors: undefined,
        opacity: 0.5
      },
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    },
    dataLabels: {
      enabled: false
    },
    markers: {
      size: 4,
      colors: ["#ffab00","#ffab00", "#9bcb3b", "#9bcb3b", "#007bff","#007bff", "#FF7000", "#FF7000"],
    strokeColors: ["#ffab00","#ffab00", "#9bcb3b", "#9bcb3b", "#007bff","#007bff", "#FF7000", "#FF7000"],
    },
    labels: dataLabelsMes,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 17,
        vertical: 10
    },
      labels: {
        colors: '#fff',
        useSeriesColors: false
      }
    },
    xaxis: {
      type: 'datetime',
      labels: {
        style: {
          colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
        }
      }

    },
    yaxis: [
      {
        axisTicks: {     
          show: true,
          color: '#ffab00',
          offsetX: 20,
        },
        axisBorder: {
          show: true,
          color: '#ffab00',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -20,
          style: {
            colors: '#ffab00',
            fontSize:'10px'
          }
        },       
        tooltip: {
          enabled: false
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
          color: '#ffab00',
          offsetX: 20,
        },
        axisBorder: {
          show: true,
          color: '#ffab00',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#ffab00',
            fontSize:'9px',
          },
        },       
      },
      {
        axisTicks: {
          show: true,
          color: '#9bcb3b',
          offsetX: 20,
        },
        axisBorder: {
          show: true,
          color: '#9bcb3b',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#9bcb3b',
            fontSize:'9px',
          },
        },       
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
          offsetX: 20,
          color: '#9bcb3b',
        },
        axisBorder: {
          show: true,
          color: '#9bcb3b',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#9bcb3b',
            fontSize:'9px'
          }
        },       
        tooltip: {
          enabled: false
        }
      },
      {
        axisTicks: {
          show: true,
          offsetX: 9,
          color: '#007bff',
        },
        axisBorder: {
          show: true,
          offsetX: -15,
          color: '#007bff',
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#007bff',
            fontSize:'9px'
          }
        },
        tooltip: {
          enabled: false
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
          offsetX: 20,
          color: '#007bff',
        },
        axisBorder: {
          show: true,
          color: '#007bff',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#007bff',
            fontSize:'9px'
          }
        },        
        tooltip: {
          enabled: false
        }
      },
      {
        axisTicks: {
          show: true,
          offsetX: 9,
          color: '#FF7000',
        },
        axisBorder: {
          show: true,
          color: '#FF7000',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#FF7000',
            fontSize:'9px'
          }
        },
        tooltip: {
          enabled: false,
          offsetX: 20,
        }
      },
      {
        opposite: true,
        axisTicks: {
          show: true,
          offsetX: 20,
          color: '#FF7000',
        },
        axisBorder: {
          show: true,
          color: '#FF7000',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#FF7000',
            fontSize:'9px'
          }
        },
        tooltip: {
          enabled: false
        }
      },
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
      y: [
        {
            formatter: function (val) {
              return val + " PPM"
            }
        },
        {
            formatter: function (val) {
              return val + " PPM"
            }
        },
        {
          formatter: function (val) {
            return val + " W"
          }
      },
      {
        formatter: function (val) {
          return val + " W"
        }
    },
    {
        formatter: function (val) {
          return val + " Km/h"
        }
    },
    {
      formatter: function (val) {
        return val + " Km/h"
      }
  },
  {
    formatter: function (val) {
      return val + " RPM"
    }
},
{
    formatter: function (val) {
      return val + " RPM"
    }
}
      ]
    }        
  };

  var IndicadoresMensuales1 = new ApexCharts(document.querySelector("#IndicadoresMensuales1"), optionsIndicadoresMensuales1);
  IndicadoresMensuales1.render();  
  IndicadoresMensuales1.toggleSeries('FC Máxima')
  IndicadoresMensuales1.toggleSeries('Velocidad Promedio')
  IndicadoresMensuales1.toggleSeries('Cadencia Máxima')
  IndicadoresMensuales1.toggleSeries('Potencia Máxima')

}
  //FIN  Grafico de Duración, Distancia y Elevanción de cada entreno