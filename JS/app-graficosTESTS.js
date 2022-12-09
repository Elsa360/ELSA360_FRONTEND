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






// grafico de duraciòn, distancia y desnivel semanal
dataDistanciaTest=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]

dataFCMaxTest=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]
dataFCPromTestFTHR=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]  

dataPotenciaMaxTest=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]
dataPotenciaPromTest=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30]
dataFTPAbsTest=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30]
dataFTPRelTest=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]

dataVelocidadMaxTest=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]
dataVelocidadPromTest=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]

dataCadenciaMaxTest=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30]
dataCadenciaPromTest=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]

dataLabelsTest=['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', '08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022', '12/01/2022']

DatosTests(
  dataDistanciaTest, dataFCMaxTest, dataFCPromTestFTHR, dataPotenciaMaxTest, dataPotenciaPromTest, dataFTPAbsTest,dataFTPRelTest, dataVelocidadMaxTest,dataVelocidadPromTest,dataCadenciaMaxTest,dataCadenciaPromTest, dataLabelsTest
  );

function DatosTests(
  dataDistanciaTest, dataFCMaxTest, dataFCPromTestFTHR, dataPotenciaMaxTest, dataPotenciaPromTest, dataFTPAbsTest,dataFTPRelTest, dataVelocidadMaxTest,dataVelocidadPromTest,dataCadenciaMaxTest,dataCadenciaPromTest, dataLabelsTest
  ) {


var optionsDatosTests1 = {
  colors: ["#fff",  "#ff3e1d","#ff3e1d", "#FF7000","#FF7000","#9bcb3b", "#9bcb3b", "#007bff","#007bff",  "#ffab00", "#ffab00"],
    series: [
      {
      name: 'Distancia (Km)',
      type: 'bar',
      data: dataDistanciaTest
    }, {
      name: 'FC Máxima',
      type: 'bar',
      data: dataFCMaxTest
    }, {
      name: 'FTHR (FC Promedio)',
      type: 'line',
      data: dataFCPromTestFTHR
    },
    {
      name: 'Potencia Máxima',
      type: 'bar',
      data: dataPotenciaMaxTest
    }, {
      name: 'Potencia Promedio',
      type: 'line',
      data: dataPotenciaPromTest
    }, {
      name: 'FTP Absoluto',
      type: 'bar',
      data: dataFTPAbsTest
    },
    {
      name: 'FTP Relativo',
      type: 'line',
      data: dataFTPRelTest
    }, {
      name: 'Velocidad Máxima',
      type: 'bar',
      data: dataVelocidadMaxTest
    }, {
      name: 'Velocidad Promedio',
      type: 'line',
      data: dataVelocidadPromTest
    },
    {
      name: 'Cadencia Máxima',
      type: 'bar',
      data: dataCadenciaMaxTest
    }, {
      name: 'Cadencia Promedio',
      type: 'line',
      data: dataCadenciaPromTest
    }, 
    ],
  chart: {
    height: 420,
    background: '#2b2c40',
    offsetX: 0,
    offsetY: 0,
    type: 'line',
    zoom:{
      enabled: true,
      type: 'x',
      autoScaleYaxis: true
    },
    toolbar: {
      show: true,
      autoSelected:'zoom',
      offsetX:-20,
      offsetY:-20,
      tools: {
        download: true,
        selection: true,
        zoom: true,
        zoomin: true,
        zoomout: true,
        pan: true,
        reset: true | '<img src="/static/icons/reset.png" width="20">',
        customIcons: []
      },
      export:{
        csv:{
          filename: 'Datos de tus Tests'
        },
        svg:{
          filename: 'Datos de tus Tests'
        },
        png:{
          filename: 'Datos de tus Tests'
        }
      }
    }
  },
  title: {
    text: 'Datos de tus Tests',
    offsetX: 10,
    style: {
      fontSize:  '16px',
      fontWeight:  600,
      fontFamily:  'montserrat',
      color:  '#cbcbe2'
    },
  },
  tooltip: {
    fixed: {
      enabled: true,
      shared: true,
      position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
      offsetY: 30,
      offsetX: 60
    },
    y: [
      {
          formatter: function (val) {
            return val + " Km"
          }
      },
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
      return val + " W"
    }
},
{
  formatter: function (val) {
    return val + " W/Kg"
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
},
    ]
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 1
    }
  },
  fill: {
    opacity: [0.55, 0.55, 0.75, 0.55, 0.75, 0.55, 0.75, 0.55 ,0.75 ,0.55 , 0.75],
    gradient: {
      inverseColors: false,
      shade: 'light',
      type: "vertical",
      opacityFrom: 0.1,
      opacityTo: 0.01,
      stops: [0, 100, 100, 100]
    }
  },
  stroke: {
    width: [2, 2, 3, 2, 3, 2, 3, 2, 3, 2, 3],
    curve: 'smooth',
    colors: ["#fff",  "#ff3e1d","#ff3e1d", "#FF7000","#FF7000","#9bcb3b", "#9bcb3b", "#007bff","#007bff",  "#ffab00", "#ffab00"],
  },
  dataLabels: {
    enabled: false   
  },
  markers: {
    size: 4,
    colors: ["#fff",  "#ff3e1d","#ff3e1d", "#FF7000","#FF7000","#9bcb3b", "#9bcb3b", "#007bff","#007bff",  "#ffab00", "#ffab00"],
    strokeColors: ["#fff",  "#ff3e1d","#ff3e1d", "#FF7000","#FF7000","#9bcb3b", "#9bcb3b", "#007bff","#007bff",  "#ffab00", "#ffab00"],
  },
  labels: dataLabelsTest,
  xaxis: {
    type: 'datetime',
    labels: {
      style: {
        colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
      }
    },
    group: {
      style: {
        fontSize: '13px',
        fontWeight: 400,
        colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2',]
      },
      groups: [
        { title: 'Macrociclo 1', cols: 3 },
        { title: 'Macrociclo 2', cols: 3 },
        { title: 'Macrociclo 3', cols: 3},
        { title: 'Macrociclo 4', cols: 3}
      ]
    }
  },
  yaxis: [
    {
      axisTicks: {
        show: true,
        color: '#fff',
        offsetX: 12,
      },
      axisBorder: {
        show: true,
        color: '#fff',
        offsetX: -12,
      },
      labels: {
        rotate: 90,
        offsetX: 0,
        style: {
          colors: '#fff',
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
        color: '#ff3e1d',
        offsetX: 9,
      },
      axisBorder: {
        show: true,
        color: '#ff3e1d',
        offsetX: -10,
      },
      labels: {
        rotate: 90,
        offsetX: -15,
        style: {
          colors: '#ff3e1d',
          fontSize:'10px'
        }
      },       
      tooltip: {
        enabled: false
      }
    },
    {
      axisTicks: {
        show: true,
        color: '#ff3e1d',
        offsetX: 2,
      },
      axisBorder: {
        show: true,
        color: '#ff3e1d',
        offsetX: -2,
      },
      labels: {
        rotate: 90,
        offsetX: 3,
        style: {
          colors: '#ff3e1d',
          fontSize:'9px',
        },
      },       
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
        color: '#FF7000',
        offsetX: 9,
      },
      axisBorder: {
        show: true,
        color: '#FF7000',
        offsetX: -10,
      },
      labels: {
        rotate: 90,
        offsetX: -10,
        style: {
          colors: '#FF7000',
          fontSize:'9px',
        },
      },       
    },
    {
      axisTicks: {
        show: true,
        color: '#FF7000',
        offsetX: 2,
      },
      axisBorder: {
        show: true,
        color: '#FF7000',
        offsetX: -2,
      },
      labels: {
        rotate: 90,
        offsetX: 3,
        style: {
          colors: '#FF7000',
          fontSize:'9px',
        },
      },       
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
        color: '#9bcb3b',
        offsetX: 9,
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b',
        offsetX: -10,
      },
      labels: {
        rotate: 90,
        offsetX: -10,
        style: {
          colors: '#9bcb3b',
          fontSize:'9px',
        },
      },       
    },
    {
      axisTicks: {
        show: true,
        offsetX: 2,
        color: '#9bcb3b',
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b',
        offsetX: -2,
      },
      labels: {
        rotate: 90,
        offsetX: 3,
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
      opposite: true,
      axisTicks: {
        show: true,
        offsetX: 9,
        color: '#007bff',
      },
      axisBorder: {
        show: true,
        offsetX: -10,
        color: '#007bff',
      },
      labels: {
        rotate: 90,
        offsetX: -10,
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
        offsetX: 2,
        color: '#007bff',
      },
      axisBorder: {
        show: true,
        color: '#007bff',
        offsetX: -2,
      },
      labels: {
        rotate: 90,
        offsetX: 3,
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
        offsetX: 2,
        color: '#ffab00',
      },
      axisBorder: {
        show: true,
        color: '#ffab00',
        offsetX: -2,
      },
      labels: {
        rotate: 90,
        offsetX: 3,
        style: {
          colors: '#ffab00',
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
        offsetX: 9,
        color: '#ffab00'
      },
      axisBorder: {
        show: true,
        color: '#ffab00',
        offsetX: -10,
      },
      labels: {
        rotate: 90,
        offsetX: -10,
        style: {
          colors: '#ffab00',
          fontSize:'9px'
        }
      },
      tooltip: {
        enabled: false
      }
    },                        
  ],
  legend: {
    show: true,
    offsetY: 10,
    position: 'bottom',
    horizontalAlign: 'center',
    fontSize: '12px',
    itemMargin: {
      horizontal: 25,
      vertical: 10
  },
    labels: {
      colors: '#fff',
      useSeriesColors: false
    }
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
  
};

var DatosTests1 = new ApexCharts(document.querySelector("#DatosTests1"), optionsDatosTests1);
DatosTests1.render();

DatosTests1.toggleSeries('FC Máxima')
DatosTests1.toggleSeries('Potencia Máxima') 
DatosTests1.toggleSeries('Potencia Promedio') 
DatosTests1.toggleSeries('Cadencia Máxima')
DatosTests1.toggleSeries('Velocidad Máxima')
DatosTests1.toggleSeries('Cadencia Promedio') 
}
//FIN grafico de CARGAS semanal