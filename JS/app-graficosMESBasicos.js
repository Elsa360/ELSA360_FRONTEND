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
dataDuracionAcumMes=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]
dataDuracionPromMes=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23]

dataDesnivelAcumMes=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]
dataDesnivelPromMes=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144]

dataDistanciaPromMes=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30]
dataDistanciaAcumMes=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30]

dataLabelsMes=['01/01/2022', '02/01/2022', '03/01/2022', '04/01/2022', '05/01/2022', '06/01/2022', '07/01/2022', 
'08/01/2022', '09/01/2022', '10/01/2022', '11/01/2022', '12/01/2022']

BasicosMensuales(
  dataDuracionAcumMes, dataDuracionPromMes, dataDesnivelAcumMes, dataDesnivelPromMes, dataDistanciaPromMes, dataDistanciaAcumMes, dataLabelsMes
  );

function BasicosMensuales(
  dataDuracionAcumMes, dataDuracionPromMes, dataDesnivelAcumMes, dataDesnivelPromMes, dataDistanciaPromMes, dataDistanciaAcumMes, dataLabelsMes
  ) {


var optionsBasicosMensuales1 = {
  colors: ["#9bcb3b","#9bcb3b", "#ffab00","#ffab00","#007bff","#007bff"],
    series: [
      {
      name: 'Duración Acumulada',
      type: 'bar',
      data: dataDuracionAcumMes
    }, {
      name: 'Duración Promedio',
      type: 'line',
      data: dataDuracionPromMes
    }, {
      name: 'Desnivel Positivo Acumulado',
      type: 'bar',
      data: dataDesnivelAcumMes
    },
    {
      name: 'Desnivel Positivo Promedio',
      type: 'line',
      data: dataDesnivelPromMes
    }, {
      name: 'Distancia Acumulada',
      type: 'bar',
      data: dataDistanciaAcumMes
    }, {
      name: 'Distancia Promedio',
      type: 'line',
      data: dataDistanciaPromMes
    },
    ],
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
      offsetY:20,
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
          filename: 'Datos básicos mensuales'
        },
        svg:{
          filename: 'Datos básicos mensuales'
        },
        png:{
          filename: 'Datos básicos mensuales'
        }
      }
    }
  },
  title: {
    text: 'Datos básicos mensuales',
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
            return val + " h:m:s"
          }
      },
      {
          formatter: function (val) {
            return val + " h:m:s"
          }
      },
      {
        formatter: function (val) {
          return val + " m"
        }
    },
    {
      formatter: function (val) {
        return val + " m"
      }
  },
  {
      formatter: function (val) {
        return val + " Km"
      }
  },
  {
    formatter: function (val) {
      return val + " Km"
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
    opacity: [0.55, 0.75, 0.55, 0.75, 0.55, 0.75],
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
    width: [2, 4, 2, 4, 2, 4],
    curve: 'smooth',
    colors: ["#9bcb3b","#9bcb3b", "#ffab00","#ffab00","#007bff","#007bff"],
  },
  dataLabels: {
    enabled: false   
  },
  markers: {
    size: 4,
    colors: ["#9bcb3b","#9bcb3b", "#ffab00","#ffab00","#007bff","#007bff"],
    strokeColors: ["#9bcb3b","#9bcb3b", "#ffab00","#ffab00","#007bff","#007bff"],
  },
  labels: dataLabelsMes,
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
        offsetX: 5,
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b',
        offsetX: -5,
      },
      labels: {
        rotate: 90,
        offsetX: -5,
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
        offsetX: 10,
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
        color: '#ffab00',
        offsetX: 8,
      },
      axisBorder: {
        show: true,
        color: '#ffab00',
        offsetX: -10,
      },
      labels: {
        rotate: 90,
        offsetX: 10,
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
        offsetX: 3,
      },
      axisBorder: {
        show: true,
        color: '#ffab00',
        offsetX: -3,
      },
      labels: {
        rotate: 90,
        offsetX: -3,
        style: {
          colors: '#ffab00',
          fontSize:'9px',
        },
      },       
    },
    {
      axisTicks: {
        show: true,
        color: '#007bff',
        offsetX: 8,
      },
      axisBorder: {
        show: true,
        color: '#007bff',
        offsetX: -8,
      },
      labels: {
        rotate: 90,
        offsetX: 12,
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
        offsetX: 3,
      },
      axisBorder: {
        show: true,
        color: '#007bff',
        offsetX: -3,
      },
      labels: {
        rotate: 90,
        offsetX: -3,
        style: {
          colors: '#007bff',
          fontSize:'9px',
        },
      },       
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

var BasicosMensuales1 = new ApexCharts(document.querySelector("#BasicosMensuales1"), optionsBasicosMensuales1);
BasicosMensuales1.render();

BasicosMensuales1.toggleSeries('Desnivel Positivo Acumulado')
BasicosMensuales1.toggleSeries('Distancia Promedio')
}
//FIN grafico de duraciòn, distancia y desnivel semanal