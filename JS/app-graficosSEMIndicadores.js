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
dataFCMaxPromSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
dataFCPromPromSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]

dataPotenciaMaxPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataPotenciaPromPromSem=[168.30, 171.25, 192.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]

dataVelocidadMaxPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataVelocidadPromPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]

dataCadenciaMaxPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataCadenciaPromPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
dataLabelsSem=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022', '01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022']

durElvDistSemana(
  dataFCMaxPromSem, dataFCPromPromSem,dataPotenciaMaxPromSem,dataPotenciaPromPromSem,dataVelocidadMaxPromSem,dataVelocidadPromPromSem,dataCadenciaMaxPromSem,dataCadenciaPromPromSem, dataLabelsSem
  );

function durElvDistSemana(
  dataFCMaxPromSem, dataFCPromPromSem,dataPotenciaMaxPromSem,dataPotenciaPromPromSem,dataVelocidadMaxPromSem,dataVelocidadPromPromSem,dataCadenciaMaxPromSem,dataCadenciaPromPromSem, dataLabelsSem
  ) {


var optionsDistAcumYPromSem1 = {
  colors: [ "#ffab00","#ffab00", "#9bcb3b", "#9bcb3b", "#007bff","#007bff", "#FF7000", "#FF7000"],
    series: [      
    {
      name: 'FC Max Promedio',
      type: 'line',
      data: dataFCMaxPromSem
    }, {
      name: 'FC Promedio',
      type: 'bar',
      data: dataFCPromPromSem
    }, {
      name: 'Potencia Max Promedio',
      type: 'line',
      data: dataPotenciaMaxPromSem
    },
    {
      name: 'Potencia Promedio',
      type: 'bar',
      data: dataPotenciaPromPromSem
    }, {
      name: 'Velocidad Max Promedio',
      type: 'line',
      data: dataVelocidadMaxPromSem
    }, {
      name: 'Velocidad Promedio',
      type: 'bar',
      data: dataVelocidadPromPromSem
    },
    {
      name: 'Cadencia Max Promedio',
      type: 'line',
      data: dataCadenciaMaxPromSem
    }, {
      name: 'Cadencia Promedio',
      type: 'bar',
      data: dataCadenciaPromPromSem
    }],
  chart: {
    height: 420,
    background: '#2b2c40',
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
          filename: 'Indicadores semanales'
        },
        svg:{
          filename: 'Indicadores semanales'
        },
        png:{
          filename: 'Indicadores semanales'
        }
      }
    }
  },
  title: {
    text: 'Indicadores semanales',
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
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 1
    }
  },
  fill: {
    opacity: [0.80, 0.55, 0.80, 0.55, 0.80, 0.55, 0.80, 0.55],
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
    width: [4, 2, 4, 2, 4, 2, 4, 2],
    curve: 'smooth',
    colors: [ "#ffab00","#ffab00", "#9bcb3b", "#9bcb3b", "#007bff","#007bff", "#FF7000", "#FF7000"],
  },
  dataLabels: {
    enabled: false   
  },
  markers: {
    size: 4,
    colors: [ "#ffab00","#ffab00", "#9bcb3b", "#9bcb3b", "#007bff","#007bff", "#FF7000", "#FF7000"],
    strokeColors: [ "#ffab00","#ffab00", "#9bcb3b", "#9bcb3b", "#007bff","#007bff", "#FF7000", "#FF7000"],
  },
  labels: dataLabelsSem,
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
        color: '#ffab00',
        offsetX: 2,
      },
      axisBorder: {
        show: true,
        color: '#ffab00',
        offsetX: -2,
      },
      labels: {
        rotate: 90,
        offsetX: -2,
        style: {
          colors: '#ffab00',
          fontSize:'9px',
        },
      },       
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
        color: '#ffab00',
        offsetX: 8,
      },
      axisBorder: {
        show: true,
        color: '#ffab00',
        offsetX: -8,
      },
      labels: {
        rotate: 90,
        offsetX: -8,
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
        offsetX: 0,
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b',
        offsetX: 0,
      },
      labels: {
        rotate: 90,
        offsetX: 5,
        style: {
          colors: '#9bcb3b',
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
        color: '#9bcb3b',
        offsetX: 8,
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b',
        offsetX: -8,
      },
      labels: {
        rotate: 90,
        offsetX: -8,
        style: {
          colors: '#9bcb3b',
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
        color: '#007bff',
        offsetX: 0,
      },
      axisBorder: {
        show: true,
        color: '#007bff',
        offsetX: -0,
      },
      labels: {
        rotate: 90,
        offsetX: -0,
        style: {
          colors: '#007bff',
          fontSize:'9px',
        },
      },       
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
        color: '#007bff',
        offsetX: 5
      },
      axisBorder: {
        show: true,
        color: '#007bff',
        offsetX: -5,
      },
      labels: {
        rotate: 90,
        offsetX: -5,
        style: {
          colors: '#007bff',
          fontSize:'9px',
        },
      },       
    },
    {
      axisTicks: {
        show: true,
        offsetX: 0,
        color: '#FF7000',
      },
      axisBorder: {
        show: true,
        color: '#FF7000',
        offsetX:  0,
      },
      labels: {
        rotate: 90,
        offsetX:  0,
        style: {
          colors: '#FF7000',
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
        offsetX:0,
        color: '#FF7000',
      },
      axisBorder: {
        show: true,
        offsetX: 0,
        color: '#FF7000',
      },
      labels: {
        rotate: 90,
        offsetX: 0,
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

var DistAcumYPromSem1 = new ApexCharts(document.querySelector("#DistAcumYPromSem1"), optionsDistAcumYPromSem1);
DistAcumYPromSem1.render();

DistAcumYPromSem1.toggleSeries('FC Promedio')
DistAcumYPromSem1.toggleSeries('Velocidad Max Promedio')
DistAcumYPromSem1.toggleSeries('Cadencia Promedio') 
}
//FIN grafico de duraciòn, distancia y desnivel semanal