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
dataTSSAcumSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
dataTSSPromSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]

dataTRIMPSAcumSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataTRIMPSPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]

dataTrabajoAcumSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
dataTrabajoPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]

dataRPEAcumSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
dataRPEPromSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]

dataIFPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]

dataNPPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]

dataCaloriasAcumSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataCaloriasPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
dataLabelsSem=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022', '01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022']

IndicadoresSemana(
  dataTSSAcumSem, dataTSSPromSem, dataTRIMPSAcumSem, dataTRIMPSPromSem, dataTrabajoAcumSem, dataTrabajoPromSem,dataRPEAcumSem, dataRPEPromSem,dataIFPromSem,dataNPPromSem,dataCaloriasAcumSem,dataCaloriasPromSem, dataLabelsSem
  );

function IndicadoresSemana(
  dataTSSAcumSem, dataTSSPromSem, dataTRIMPSAcumSem, dataTRIMPSPromSem, dataTrabajoAcumSem, dataTrabajoPromSem,dataRPEAcumSem, dataRPEPromSem, dataIFPromSem,dataNPPromSem,dataCaloriasAcumSem,dataCaloriasPromSem, dataLabelsSem
  ) {


var optionsCargasAcumYPromSem1 = {
  colors: ["#9bcb3b", "#9bcb3b", "#FF7000","#FF7000", "#007bff","#007bff", "#ff3e1d","#ff3e1d", "#fff","#F902EA", "#ffab00", "#ffab00"],
    series: [
      {
      name: 'TSS Acumulado',
      type: 'bar',
      data: dataTSSAcumSem
    }, {
      name: 'TSS Promedio',
      type: 'line',
      data: dataTSSPromSem
    }, {
      name: 'TRIMPS Acumulado',
      type: 'bar',
      data: dataTRIMPSAcumSem
    },
    {
      name: 'TRIMPS Promedio',
      type: 'line',
      data: dataTRIMPSPromSem
    }, {
      name: 'Trabajo Acumulado',
      type: 'bar',
      data: dataTrabajoAcumSem
    }, {
      name: 'Trabajo Promedio',
      type: 'line',
      data: dataTrabajoPromSem
    },
    {
      name: 'RPE Acumulado',
      type: 'bar',
      data: dataRPEAcumSem
    }, {
      name: 'RPE Promedio',
      type: 'line',
      data: dataRPEPromSem
    }, {
      name: 'IF Promedio',
      type: 'line',
      data: dataIFPromSem
    },
    {
      name: 'np Promedio',
      type: 'line',
      data: dataNPPromSem
    }, {
      name: 'Calorías Acumuladas',
      type: 'bar',
      data: dataCaloriasAcumSem
    }, {
      name: 'Calorías Promedio',
      type: 'line',
      data: dataCaloriasPromSem
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
          filename: 'Cargas semanales'
        },
        svg:{
          filename: 'Cargas semanales'
        },
        png:{
          filename: 'Cargas semanales'
        }
      }
    }
  },
  title: {
    text: 'Cargas semanales',
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
            return val + " "
          }
      },
      {
          formatter: function (val) {
            return val + " "
          }
      },
      {
        formatter: function (val) {
          return val + " "
        }
    },
    {
      formatter: function (val) {
        return val + " "
      }
  },
  {
      formatter: function (val) {
        return val + " KJ"
      }
  },
  {
    formatter: function (val) {
      return val + " KJ"
    }
},
{
  formatter: function (val) {
    return val + " "
  }
},
{
formatter: function (val) {
  return val + " "
}
},
{
  formatter: function (val) {
    return val + " "
  }
},
{
formatter: function (val) {
  return val + " W"
}
},
{
formatter: function (val) {
return val + " Cal"
}
},
{
formatter: function (val) {
return val + " Cal"
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
    opacity: [0.55, 0.75, 0.55, 0.75, 0.55, 0.75, 0.55, 0.75 ,0.75 ,0.75 , 0.55, 0.75],
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
    width: [2, 3, 2, 3, 2, 3, 2, 3, 3, 3, 2, 3],
    curve: 'smooth',
    colors: ["#9bcb3b", "#9bcb3b", "#FF7000","#FF7000", "#007bff","#007bff", "#ff3e1d","#ff3e1d", "#fff","#F902EA", "#ffab00", "#ffab00"],
  },
  dataLabels: {
    enabled: false   
  },
  markers: {
    size: 4,
    colors: ["#9bcb3b", "#9bcb3b", "#FF7000","#FF7000", "#007bff","#007bff", "#ff3e1d","#ff3e1d", "#fff","#F902EA", "#ffab00", "#ffab00"],
    strokeColors: ["#9bcb3b", "#9bcb3b", "#FF7000","#FF7000", "#007bff","#007bff", "#ff3e1d","#ff3e1d", "#fff","#F902EA", "#ffab00", "#ffab00"],
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
        color: '#9bcb3b',
        offsetX: 12,
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b',
        offsetX: -12,
      },
      labels: {
        rotate: 90,
        offsetX: 0,
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
        offsetX: 9,
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b',
        offsetX: -10,
      },
      labels: {
        rotate: 90,
        offsetX: -15,
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
        color: '#007bff',
        offsetX: 2,
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
          fontSize:'9px',
        },
      },       
    },
    {
      opposite: true,
      axisTicks: {
        show: true,
        color: '#007bff',
        offsetX: 9,
      },
      axisBorder: {
        show: true,
        color: '#007bff',
        offsetX: -10,
      },
      labels: {
        rotate: 90,
        offsetX: -10,
        style: {
          colors: '#007bff',
          fontSize:'9px',
        },
      },       
    },
    {
      axisTicks: {
        show: true,
        offsetX: 2,
        color: '#ff3e1d',
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
        color: '#ff3e1d',
      },
      axisBorder: {
        show: true,
        offsetX: -10,
        color: '#ff3e1d',
      },
      labels: {
        rotate: 90,
        offsetX: -10,
        style: {
          colors: '#ff3e1d',
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
        color: '#fff',
      },
      axisBorder: {
        show: true,
        color: '#fff',
        offsetX: -2,
      },
      labels: {
        rotate: 90,
        offsetX: 3,
        style: {
          colors: '#fff',
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
        color: '#F902EA',
      },
      axisBorder: {
        show: true,
        color: '#F902EA',
        offsetX: -10,
      },
      labels: {
        rotate: 90,
        offsetX: -10,
        style: {
          colors: '#F902EA',
          fontSize:'9px'
        }
      },
      tooltip: {
        enabled: false,
        offsetX: 20,
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

var CargasAcumYPromSem1 = new ApexCharts(document.querySelector("#CargasAcumYPromSem1"), optionsCargasAcumYPromSem1);
CargasAcumYPromSem1.render();

CargasAcumYPromSem1.toggleSeries('TSS Promedio')
CargasAcumYPromSem1.toggleSeries('TRIMPS Promedio')
CargasAcumYPromSem1.toggleSeries('Trabajo Acumulado')
CargasAcumYPromSem1.toggleSeries('RPE Acumulado')
CargasAcumYPromSem1.toggleSeries('Calorías Acumuladas')
CargasAcumYPromSem1.toggleSeries('Trabajo Promedio') 
}
//FIN grafico de CARGAS semanal