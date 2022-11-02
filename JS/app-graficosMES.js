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


















// Grafico de progreso
var option = {
  chart: {
    height: 200,
    type: "radialBar"
  },

  series: [75],

  plotOptions: {
    radialBar: {
      hollow: {
        margin: 15,
        size: "70%"
      },

      dataLabels: {
        showOn: "always",
        name: {
          offsetY: -7,
          show: true,
          color: "#9BCB3B",
          fontSize: "13px"
        },
        value: {
          offsetY: 3,
          color: "#cbcbe2",
          fontSize: "18px",
          show: true
        }
      }
    }
  },

  fill: {
    colors: ['#9BCB3B']
  },

  stroke: {
    lineCap: "round",
  },
  labels: ["Progreso"]
};

var progreso = new ApexCharts(document.querySelector("#progreso"), option);

progreso.render();
//FIN Grafico de progreso









datos = [44, 55, 41, 17, 15, 20, 13];
DONA1(datos)
//DONA GRafico ---- Disponibilidad semanal en porcentajes por día
function DONA1(datos) {
  var optionsDONA1 = {
    colors: ['#007bff', '#4bc0c0', '#9bcb3b', '#ffab00', '#ff3e1d', '#6610f2', '#EF600F'],
    series: datos,
    labels: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"],
    chart: {
      type: 'donut',
      height: '320px'
    },
    plotOptions: {
      pie: {
        customScale: 1,
        donut: {
          size: '50%'
        }
      }
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false
      },
      style: {
        fontSize: '13px',
        fontFamily: 'montserrat',
        fontWeight: '700',
        colors: ['#ffffff']
      },
    },
    legend: {
      show: true,
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#cbcbe2',
        useSeriesColors: true
      },
    },
  };

  var DONA1 = new ApexCharts(document.querySelector("#DONA1"), optionsDONA1);
  DONA1.render();

}
//FIN DONA Grafico ---- Disponibilidad semanal en porcentajes por día














//  Grafico de Duración, Distancia y Elevanción de cada entreno
dataDuracionEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataDesnivelEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataDistanciaEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataFCMaxEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataFCPromEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataPotenciaMaxEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataPotenciaPromEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataVelocidadMaxEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataVelocidadPromEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataCadenciaMaxEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataCadenciaPromEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataLabelsEnt=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022',
'01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022',
'02/01/2022', '02/02/2022', '02/03/2022', '02/04/2022', '02/05/2022', '02/06/2022', '02/07/2022', '02/08/2022', '02/09/2022', '02/10/2022', '02/11/2022', '02/12/2022',
'02/13/2022', '02/14/2022', '02/15/2022', '02/16/2022', '02/17/2022', '02/18/2022', '02/19/2022', '02/20/2022', '02/21/2022', '02/22/2022', '02/23/2022', '02/24/2022',
'03/01/2022', '03/02/2022', '03/03/2022', '03/04/2022', '03/05/2022', '03/06/2022', '03/07/2022', '03/08/2022', '03/09/2022', '03/10/2022', '03/11/2022', '03/12/2022',
'03/13/2022', '03/14/2022', '03/15/2022', '03/16/2022', '03/17/2022', '03/18/2022', '03/19/2022', '03/20/2022', '03/21/2022', '03/22/2022', '03/23/2022', '03/24/2022',
'04/01/2022', '04/02/2022', '04/03/2022', '04/04/2022', '04/05/2022', '04/06/2022', '04/07/2022', '04/08/2022', '04/09/2022', '04/10/2022', '04/11/2022', '04/12/2022',
'04/13/2022', '04/14/2022', '04/15/2022', '04/16/2022', '04/17/2022', '04/18/2022', '04/19/2022', '04/20/2022', '04/21/2022', '04/22/2022', '04/23/2022', '04/24/2022',
'05/01/2022', '05/02/2022', '05/03/2022', '05/04/2022', '05/05/2022', '05/06/2022', '05/07/2022', '05/08/2022', '05/09/2022', '05/10/2022', '05/11/2022', '05/12/2022',
'05/13/2022', '05/14/2022', '05/15/2022', '05/16/2022', '05/17/2022', '05/18/2022', '05/19/2022', '05/20/2022', '05/21/2022', '05/22/2022', '05/23/2022', '05/24/2022',
'06/01/2022', '06/02/2022', '06/03/2022', '06/04/2022', '06/05/2022', '06/06/2022', '06/07/2022', '06/08/2022', '06/09/2022', '06/10/2022', '06/11/2022', '06/12/2022',
'06/13/2022', '06/14/2022', '06/15/2022', '06/16/2022', '06/17/2022', '06/18/2022', '06/19/2022', '06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022'
]

durElvDistEntreno(
  dataDuracionEnt,dataDesnivelEnt,dataDistanciaEnt,dataFCMaxEnt,dataFCPromEnt, dataPotenciaMaxEnt, dataPotenciaPromEnt,dataVelocidadMaxEnt,dataVelocidadPromEnt,dataCadenciaMaxEnt,dataCadenciaPromEnt, dataLabelsEnt
  );

function durElvDistEntreno(
  dataDuracionEnt,dataDesnivelEnt,dataDistanciaEnt,dataFCMaxEnt,dataFCPromEnt, dataPotenciaMaxEnt, dataPotenciaPromEnt,dataVelocidadMaxEnt,dataVelocidadPromEnt,dataCadenciaMaxEnt,dataCadenciaPromEnt, dataLabelsEnt
  ) {
  
  var optionsTiemDisElvEntreno1 = {
    colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0", "#fff", "#F902EA","#FF7000","#E9B0F2", "#F2EB07"],
    series: [{
      name: 'Duración (h:m:s)',
      type: 'bar',
      data: dataDuracionEnt
    }, {
      name: 'Desnivel positivo (mts)',
      type: 'bar',
      data: dataDesnivelEnt
    }, {
      name: 'Distancia (Km)',
      type: 'bar',
      data: dataDistanciaEnt
    },
    {
      name: 'FC Máxima',
      type: 'line',
      data: dataFCMaxEnt
    }, {
      name: 'FC Promedio',
      type: 'line',
      data: dataFCPromEnt
    }, {
      name: 'Potencia Máxima',
      type: 'line',
      data: dataPotenciaMaxEnt
    },
    {
      name: 'Potencia Promedio',
      type: 'line',
      data: dataPotenciaPromEnt
    }, {
      name: 'Velocidad Máxima',
      type: 'line',
      data: dataVelocidadMaxEnt
    },
    {
      name: 'Velocidad Promedio',
      type: 'line',
      data: dataVelocidadPromEnt
    }, {
      name: 'Cadencia Máxima',
      type: 'line',
      data: dataCadenciaMaxEnt
    }, {
      name: 'Cadencia Promedio',
      type: 'line',
      data: dataCadenciaPromEnt
    }],
    chart: {
      id: 'Chartbrush1',
      background: '#2b2c40',
      type: 'line',
      height: 550,
      stacked: false,
      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -40,
        offsetY: -40,
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
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.75, 0.75, 0.75, 0.75,0.75, 0.75,0.75, 0.75,],
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
      width: [0, 0, 0, 4, 3, 4, 3, 4, 3, 4, 3],
      curve: 'smooth',
      colors: ["#9bcb3b", "#EC00FF", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0", "#fff", "#F902EA","#FF7000","#E9B0F2", "#F2EB07"],
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
      colors: ["#9bcb3b", "#EC00FF", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0", "#fff", "#F902EA","#FF7000","#E9B0F2", "#F2EB07"],
    strokeColors: ["#9bcb3b", "#EC00FF", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0", "#fff", "#F902EA","#FF7000","#E9B0F2", "#F2EB07"],
    },
    labels: dataLabelsEnt ,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 25,
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
          offsetX: -20,
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
          color: '#b2e2f2',
          offsetX: 20,
        },
        axisBorder: {
          show: true,
          color: '#b2e2f2',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#b2e2f2',
            fontSize:'9px',
          },
        },       
      },
      {
        axisTicks: {
          show: true,
          color: '#007bff',
          offsetX: 20,
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
            fontSize:'9px',
          },
        },       
      },
      {
        axisTicks: {
          show: true,
          offsetX: 20,
          color: '#ff3e1d',
        },
        axisBorder: {
          show: true,
          color: '#ff3e1d',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
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
          color: '#ffab00',
        },
        axisBorder: {
          show: true,
          offsetX: -15,
          color: '#ffab00',
        },
        labels: {
          rotate: 90,
          offsetX: -15,
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
          offsetX: 20,
          color: '#4bc0c0',
        },
        axisBorder: {
          show: true,
          color: '#4bc0c0',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#4bc0c0',
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
        },
        axisBorder: {
          show: true,
          color: '#fff',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#fff',
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
          offsetX: 20,
          color: '#F902EA',
        },
        axisBorder: {
          show: true,
          color: '#F902EA',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#F902EA',
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
          color: '#FF7000'
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
      {
        opposite: true,
        axisTicks: {
          show: true,
          offsetX: 20,
          color: '#E9B0F2'
        },
        axisBorder: {
          show: true,
          color: '#E9B0F2',
          offsetX: -15
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#E9B0F2',
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
          color: '#F2EB07'
        },
        axisBorder: {
          show: true,
          color: '#F2EB07',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#F2EB07',
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
    }        
  };

  var TiemDisElvEntreno1 = new ApexCharts(document.querySelector("#TiemDisElvEntreno1"), optionsTiemDisElvEntreno1);
  TiemDisElvEntreno1.render();
  TiemDisElvEntreno1.toggleSeries('Desnivel positivo (mts)')
  TiemDisElvEntreno1.toggleSeries('Distancia (Km)')
  TiemDisElvEntreno1.toggleSeries('FC Máxima')
  TiemDisElvEntreno1.toggleSeries('Potencia Máxima')
  TiemDisElvEntreno1.toggleSeries('Velocidad Máxima')
  TiemDisElvEntreno1.toggleSeries('Cadencia Máxima')
  TiemDisElvEntreno1.toggleSeries('Cadencia Promedio')
  




  var optionsTiemDisElvEntreno2 = {
    colors: ["#9bcb3b", "#ffab00", "#9bcb3b", "#ff3e1d", "#9bcb3b", "#ffab00", "#007bff", "#ff3e1d","#9bcb3b", "#ffab00", "#9bcb3b", "#9bcb3b"],
    series: [{
      name: 'Duración (h:m:s)',
      type: 'bar',
      data: dataDuracionEnt
    }, {
      name: 'Desnivel positivo (mts)',
      type: 'bar',
      data: dataDesnivelEnt
    }, {
      name: 'Distancia (Km)',
      type: 'bar',
      data: dataDistanciaEnt
    },
    {
      name: 'FC Máxima',
      type: 'line',
      data: dataFCMaxEnt
    }, {
      name: 'FC Promedio',
      type: 'line',
      data: dataFCPromEnt
    }, {
      name: 'Potencia Máxima',
      type: 'line',
      data: dataPotenciaMaxEnt
    },
    {
      name: 'Potencia Promedio',
      type: 'line',
      data: dataPotenciaPromEnt
    }, {
      name: 'Velocidad Máxima',
      type: 'line',
      data: dataVelocidadMaxEnt
    },
    {
      name: 'Velocidad Promedio',
      type: 'line',
      data: dataVelocidadPromEnt
    }, {
      name: 'Cadencia Máxima',
      type: 'line',
      data: dataCadenciaMaxEnt
    }, {
      name: 'Cadencia Promedio',
      type: 'line',
      data: dataCadenciaPromEnt
    }],
    chart: {
      id: 'Chartbrush2',
      height: 150,
      type: 'area',
      brush: {
        target: 'Chartbrush1',
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: '#cbcbe2',
          opacity: 0.3,
        },

        stroke: {
          color: '#fff',
          dasharray: 10,
          curve: 'smooth',
          width: 1,
          opacity: 1
        },

        xaxis: {
          min: new Date('1 Jun 2022').getTime(),
          max: new Date('14 Jun 2022').getTime()
        }
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    stroke: {
      width: [0, 0, 0, 2, 1, 2, 1, 2, 1, 2, 1],
      curve: 'smooth',
      colors: ["#9bcb3b", "#ffab00", "#007bff", "#ff3e1d", "#9bcb3b", "#ffab00", "#007bff", "#ff3e1d","#9bcb3b", "#ffab00", "#007bff", "#9bcb3b"],
    },
    labels: dataLabelsEnt,
    colors: ["#9bcb3b", "#ffab00", "#007bff", "#ff3e1d", "#9bcb3b", "#ffab00", "#007bff", "#ff3e1d","#9bcb3b", "#ffab00", "#007bff", "#9bcb3b"],
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.75, 0.20, 0.75, 0.20,0.75, 0.20,0.75, 0.20,],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
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
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
        }
      },      
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show:false,
          offsetX: -10,
          style: {
            colors: '#9bcb3b'
          }
        },
      },

      {        
        opposite: true,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show: false,
          offsetX: -15,
          style: {
            colors: '#ffab00',
          }
        },        
      },
      
    ],
    legend: {
      show: false,
      offsetX: 7,
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#fff',
        useSeriesColors: true
      }
    },    
  };

  var TiemDisElvEntreno2 = new ApexCharts(document.querySelector("#TiemDisElvEntreno2"), optionsTiemDisElvEntreno2);
  TiemDisElvEntreno2.render();
}
  //FIN  Grafico de Duración, Distancia y Elevanción de cada entreno






































































//  Grafico de Duración, Distancia y Elevanción de cada entreno
dataCaloriasEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTRIMPSEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataRPEEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataTSSEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataIFEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataNPEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataTrabajoEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataLabelsEnt=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022',
'01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022',
'02/01/2022', '02/02/2022', '02/03/2022', '02/04/2022', '02/05/2022', '02/06/2022', '02/07/2022', '02/08/2022', '02/09/2022', '02/10/2022', '02/11/2022', '02/12/2022',
'02/13/2022', '02/14/2022', '02/15/2022', '02/16/2022', '02/17/2022', '02/18/2022', '02/19/2022', '02/20/2022', '02/21/2022', '02/22/2022', '02/23/2022', '02/24/2022',
'03/01/2022', '03/02/2022', '03/03/2022', '03/04/2022', '03/05/2022', '03/06/2022', '03/07/2022', '03/08/2022', '03/09/2022', '03/10/2022', '03/11/2022', '03/12/2022',
'03/13/2022', '03/14/2022', '03/15/2022', '03/16/2022', '03/17/2022', '03/18/2022', '03/19/2022', '03/20/2022', '03/21/2022', '03/22/2022', '03/23/2022', '03/24/2022',
'04/01/2022', '04/02/2022', '04/03/2022', '04/04/2022', '04/05/2022', '04/06/2022', '04/07/2022', '04/08/2022', '04/09/2022', '04/10/2022', '04/11/2022', '04/12/2022',
'04/13/2022', '04/14/2022', '04/15/2022', '04/16/2022', '04/17/2022', '04/18/2022', '04/19/2022', '04/20/2022', '04/21/2022', '04/22/2022', '04/23/2022', '04/24/2022',
'05/01/2022', '05/02/2022', '05/03/2022', '05/04/2022', '05/05/2022', '05/06/2022', '05/07/2022', '05/08/2022', '05/09/2022', '05/10/2022', '05/11/2022', '05/12/2022',
'05/13/2022', '05/14/2022', '05/15/2022', '05/16/2022', '05/17/2022', '05/18/2022', '05/19/2022', '05/20/2022', '05/21/2022', '05/22/2022', '05/23/2022', '05/24/2022',
'06/01/2022', '06/02/2022', '06/03/2022', '06/04/2022', '06/05/2022', '06/06/2022', '06/07/2022', '06/08/2022', '06/09/2022', '06/10/2022', '06/11/2022', '06/12/2022',
'06/13/2022', '06/14/2022', '06/15/2022', '06/16/2022', '06/17/2022', '06/18/2022', '06/19/2022', '06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022'
]

TssIfNpEntreno(
  dataCaloriasEnt,dataTRIMPSEnt,dataRPEEnt,dataTSSEnt,dataIFEnt, dataNPEnt, dataTrabajoEnt, dataLabelsEnt
  );

function TssIfNpEntreno(
  dataCaloriasEnt,dataTRIMPSEnt,dataRPEEnt,dataTSSEnt,dataIFEnt, dataNPEnt, dataTrabajoEnt, dataLabelsEnt
  ) {
  
  var optionsTssIfNpEntreno1 = {
    colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0","#FF7000"],
    series: [{      
      name: 'TSS',
      type: 'bar',
      data: dataTSSEnt
    }, 
    {
      name: 'TRIMPS',
      type: 'bar',
      data: dataTRIMPSEnt
    }, 
    {
      name: 'Trabajo (KJ)',
      type: 'bar',
      data: dataTrabajoEnt
    },
    {
      name: 'RPE',
      type: 'line',
      data: dataRPEEnt
      
    }, 
    {
      name: 'IF',
      type: 'line',
      data: dataIFEnt
    }, 
    {
      name: 'np',
      type: 'line',
      data: dataNPEnt
    },
    {      
      name: 'Calorías',
      type: 'line',
      data: dataCaloriasEnt
    },],
    chart: {
      id: 'Chartbrush3',
      background: '#2b2c40',
      type: 'line',
      height: 550,
      stacked: false,
      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -40,
        offsetY: -40,
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
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.75, 0.75, 0.75, 0.75,0.75, 0.75,0.75, 0.75,],
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
      width: [0, 0, 0, 4, 3, 4, 3, 4, 3, 4, 3],
      curve: 'smooth',
      colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0","#FF7000"],
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
      colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0","#FF7000"],
    strokeColors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0","#FF7000"],
    },
    labels: dataLabelsEnt ,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 25,
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
          offsetX: -20,
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
          color: '#b2e2f2',
          offsetX: 20,
        },
        axisBorder: {
          show: true,
          color: '#b2e2f2',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#b2e2f2',
            fontSize:'9px',
          },
        },       
      },
      {
        axisTicks: {
          show: true,
          color: '#007bff',
          offsetX: 20,
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
            fontSize:'9px',
          },
        },       
      },
      {
        axisTicks: {
          show: true,
          offsetX: 20,
          color: '#ff3e1d',
        },
        axisBorder: {
          show: true,
          color: '#ff3e1d',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
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
          color: '#ffab00',
        },
        axisBorder: {
          show: true,
          offsetX: -15,
          color: '#ffab00',
        },
        labels: {
          rotate: 90,
          offsetX: -15,
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
          offsetX: 20,
          color: '#4bc0c0',
        },
        axisBorder: {
          show: true,
          color: '#4bc0c0',
          offsetX: -15,
        },
        labels: {
          rotate: 90,
          offsetX: -15,
          style: {
            colors: '#4bc0c0',
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
          color: '#FF7000',
          offsetX: 9,
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
    ],
    tooltip: {
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    }        
  };

  var TssIfNpEntreno1 = new ApexCharts(document.querySelector("#TssIfNpEntreno1"), optionsTssIfNpEntreno1);
  TssIfNpEntreno1.render();
  TssIfNpEntreno1.toggleSeries('TRIMPS')
  TssIfNpEntreno1.toggleSeries('Trabajo (KJ)')
  TssIfNpEntreno1.toggleSeries('RPE')
  TssIfNpEntreno1.toggleSeries('Calorías')
  
  




  var optionsTssIfNpEntreno2 = {
    colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0","#FF7000"],
    series: [{      
      name: 'TSS',
      type: 'bar',
      data: dataTSSEnt
    }, 
    {
      name: 'TRIMPS',
      type: 'bar',
      data: dataTRIMPSEnt
    }, 
    {
      name: 'Trabajo (KJ)',
      type: 'bar',
      data: dataTrabajoEnt
    },
    {
      name: 'RPE',
      type: 'line',
      data: dataRPEEnt
      
    }, 
    {
      name: 'IF',
      type: 'line',
      data: dataIFEnt
    }, 
    {
      name: 'np',
      type: 'line',
      data: dataNPEnt
    },
    {      
      name: 'Calorías',
      type: 'line',
      data: dataCaloriasEnt
    },],
    chart: {
      id: 'Chartbrush4',
      height: 150,
      type: 'area',
      brush: {
        target: 'Chartbrush3',
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: '#cbcbe2',
          opacity: 0.3,
        },

        stroke: {
          color: '#fff',
          dasharray: 10,
          curve: 'smooth',
          width: 1,
          opacity: 1
        },

        xaxis: {
          min: new Date('1 Jun 2022').getTime(),
          max: new Date('14 Jun 2022').getTime()
        }
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    stroke: {
      width: [0, 0, 0, 2, 1, 2, 1],
      curve: 'smooth',
      colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0","#FF7000"],
    },
    labels: dataLabelsEnt,
    colors: ["#9bcb3b", "#b2e2f2", "#007bff", "#ff3e1d", "#ffab00", "#4bc0c0","#FF7000"],
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.75, 0.20, 0.75, 0.20,],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
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
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
        }
      },      
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show:false,
          offsetX: -10,
          style: {
            colors: '#9bcb3b'
          }
        },
      },

      {        
        opposite: true,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show: false,
          offsetX: -15,
          style: {
            colors: '#ffab00',
          }
        },        
      },
      
    ],
    legend: {
      show: false,
      offsetX: 7,
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#fff',
        useSeriesColors: true
      }
    },    
  };

  var TssIfNpEntreno2 = new ApexCharts(document.querySelector("#TssIfNpEntreno2"), optionsTssIfNpEntreno2);
  TssIfNpEntreno2.render();
}
  //FIN  Grafico de Duración, Distancia y Elevanción de cada entreno









































































































  //  Grafico de tiempo en cada zona de cada entreno FC
dataTZ1FCEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTZ2FCEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataTZ3FCEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataTZ4FCEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTZ5FCEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataTZ6FCEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataLabelsTZFCEnt=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022',
'01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022',
'02/01/2022', '02/02/2022', '02/03/2022', '02/04/2022', '02/05/2022', '02/06/2022', '02/07/2022', '02/08/2022', '02/09/2022', '02/10/2022', '02/11/2022', '02/12/2022',
'02/13/2022', '02/14/2022', '02/15/2022', '02/16/2022', '02/17/2022', '02/18/2022', '02/19/2022', '02/20/2022', '02/21/2022', '02/22/2022', '02/23/2022', '02/24/2022',
'03/01/2022', '03/02/2022', '03/03/2022', '03/04/2022', '03/05/2022', '03/06/2022', '03/07/2022', '03/08/2022', '03/09/2022', '03/10/2022', '03/11/2022', '03/12/2022',
'03/13/2022', '03/14/2022', '03/15/2022', '03/16/2022', '03/17/2022', '03/18/2022', '03/19/2022', '03/20/2022', '03/21/2022', '03/22/2022', '03/23/2022', '03/24/2022',
'04/01/2022', '04/02/2022', '04/03/2022', '04/04/2022', '04/05/2022', '04/06/2022', '04/07/2022', '04/08/2022', '04/09/2022', '04/10/2022', '04/11/2022', '04/12/2022',
'04/13/2022', '04/14/2022', '04/15/2022', '04/16/2022', '04/17/2022', '04/18/2022', '04/19/2022', '04/20/2022', '04/21/2022', '04/22/2022', '04/23/2022', '04/24/2022',
'05/01/2022', '05/02/2022', '05/03/2022', '05/04/2022', '05/05/2022', '05/06/2022', '05/07/2022', '05/08/2022', '05/09/2022', '05/10/2022', '05/11/2022', '05/12/2022',
'05/13/2022', '05/14/2022', '05/15/2022', '05/16/2022', '05/17/2022', '05/18/2022', '05/19/2022', '05/20/2022', '05/21/2022', '05/22/2022', '05/23/2022', '05/24/2022',
'06/01/2022', '06/02/2022', '06/03/2022', '06/04/2022', '06/05/2022', '06/06/2022', '06/07/2022', '06/08/2022', '06/09/2022', '06/10/2022', '06/11/2022', '06/12/2022',
'06/13/2022', '06/14/2022', '06/15/2022', '06/16/2022', '06/17/2022', '06/18/2022', '06/19/2022', '06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022'
]

TXZonaFCEntreno(
  dataTZ1FCEnt,dataTZ2FCEnt,dataTZ3FCEnt,dataTZ4FCEnt,dataTZ5FCEnt,dataTZ6FCEnt, dataLabelsTZFCEnt
  );

function TXZonaFCEntreno(
  dataTZ1FCEnt,dataTZ2FCEnt,dataTZ3FCEnt,dataTZ4FCEnt,dataTZ5FCEnt,dataTZ6FCEnt, dataLabelsTZFCEnt
  ) {
  
  var optionsTXZonaFC1 = {
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    series: [{      
      name: 'Zona 1',
      type: 'bar',
      data: dataTZ1FCEnt
    }, 
    {
      name: 'Zona 2',
      type: 'bar',
      data: dataTZ2FCEnt
    }, 
    {
      name: 'Zona 3',
      type: 'bar',
      data: dataTZ3FCEnt
    },
    {
      name: 'Zona 4',
      type: 'bar',
      data: dataTZ4FCEnt
      
    }, 
    {
      name: 'Zona 5',
      type: 'bar',
      data: dataTZ5FCEnt
    }, 
    {
      name: 'Zona 6',
      type: 'bar',
      data: dataTZ6FCEnt
    },
    ],
    chart: {
      id: 'Chartbrush5',
      background: '#2b2c40',
      type: 'bar',
      height: 550,
      stacked: false,
      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -40,
        offsetY: -5,
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
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
        borderRadius: 2
      }
    },
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70,0.70, 0.70,0.70, 0.70],
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
      width: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['transparent','transparent','transparent','transparent','transparent','transparent'],
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
      colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    strokeColors: ['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    },
    labels: dataLabelsTZFCEnt ,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 25,
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
          color: '#cbcbe2',
          offsetX: 5,
        },
        axisBorder: {
          show: true,
          color: '#cbcbe2',
          offsetX: -5,
        },
        labels: {
          rotate: 90,
          offsetX: -5,
          style: {
            colors: '#cbcbe2',
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
          offsetX: 9,
          color: '#cbcbe2',
        },
        axisBorder: {
          show: true,
          offsetX: -10,
          color: '#cbcbe2',
        },
        labels: {
          rotate: 90,
          offsetX: -10,
          style: {
            colors: '#cbcbe2',
            fontSize:'9px'
          }
        },
        tooltip: {
          enabled: false
        }
      },           
    ],
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        }
      ],
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    }        
  };

  var TXZonaFC1 = new ApexCharts(document.querySelector("#TXZonaFC1"), optionsTXZonaFC1);
  TXZonaFC1.render();  
  




  var optionsTXZonaFC2 = {
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    series: [{      
      name: 'Zona 1',
      type: 'bar',
      data: dataTZ1FCEnt
    }, 
    {
      name: 'Zona 2',
      type: 'bar',
      data: dataTZ2FCEnt
    }, 
    {
      name: 'Zona 3',
      type: 'bar',
      data: dataTZ3FCEnt
    },
    {
      name: 'Zona 4',
      type: 'bar',
      data: dataTZ4FCEnt
      
    }, 
    {
      name: 'Zona 5',
      type: 'bar',
      data: dataTZ5FCEnt
    }, 
    {
      name: 'Zona 6',
      type: 'bar',
      data: dataTZ6FCEnt
    },
    ],
    chart: {
      id: 'Chartbrush6',
      height: 150,
      type: 'bar',
      brush: {
        target: 'Chartbrush5',
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: '#cbcbe2',
          opacity: 0.3,
        },

        stroke: {
          color: '#fff',
          dasharray: 10,
          curve: 'smooth',
          width: 1,
          opacity: 1
        },

        xaxis: {
          min: new Date('1 Jun 2022').getTime(),
          max: new Date('14 Jun 2022').getTime()
        }
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    stroke: {
      width: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['transparent','transparent','transparent','transparent','transparent','transparent'],
    },
    labels: dataLabelsTZFCEnt,
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.70, 0.70, 0.70],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
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
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
        }
      },      
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show:false,
          offsetX: -10,
          style: {
            colors: '#9bcb3b'
          }
        },
      },

      {        
        opposite: true,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show: false,
          offsetX: -15,
          style: {
            colors: '#ffab00',
          }
        },        
      },
      
    ],
    legend: {
      show: false,
      offsetX: 7,
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#fff',
        useSeriesColors: true
      }
    },    
  };

  var TXZonaFC2 = new ApexCharts(document.querySelector("#TXZonaFC2"), optionsTXZonaFC2);
  TXZonaFC2.render();
}
  //FIN  Grafico de tiempo en cada zona de cada entreno FC







































































//  Grafico de tiempo en cada zona de cada entreno Potencia
dataTZ1PotenciaEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTZ2PotenciaEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataTZ3PotenciaEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataTZ4PotenciaEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTZ5PotenciaEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataTZ6PotenciaEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataLabelsTZPotenciaEnt=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022',
'01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022',
'02/01/2022', '02/02/2022', '02/03/2022', '02/04/2022', '02/05/2022', '02/06/2022', '02/07/2022', '02/08/2022', '02/09/2022', '02/10/2022', '02/11/2022', '02/12/2022',
'02/13/2022', '02/14/2022', '02/15/2022', '02/16/2022', '02/17/2022', '02/18/2022', '02/19/2022', '02/20/2022', '02/21/2022', '02/22/2022', '02/23/2022', '02/24/2022',
'03/01/2022', '03/02/2022', '03/03/2022', '03/04/2022', '03/05/2022', '03/06/2022', '03/07/2022', '03/08/2022', '03/09/2022', '03/10/2022', '03/11/2022', '03/12/2022',
'03/13/2022', '03/14/2022', '03/15/2022', '03/16/2022', '03/17/2022', '03/18/2022', '03/19/2022', '03/20/2022', '03/21/2022', '03/22/2022', '03/23/2022', '03/24/2022',
'04/01/2022', '04/02/2022', '04/03/2022', '04/04/2022', '04/05/2022', '04/06/2022', '04/07/2022', '04/08/2022', '04/09/2022', '04/10/2022', '04/11/2022', '04/12/2022',
'04/13/2022', '04/14/2022', '04/15/2022', '04/16/2022', '04/17/2022', '04/18/2022', '04/19/2022', '04/20/2022', '04/21/2022', '04/22/2022', '04/23/2022', '04/24/2022',
'05/01/2022', '05/02/2022', '05/03/2022', '05/04/2022', '05/05/2022', '05/06/2022', '05/07/2022', '05/08/2022', '05/09/2022', '05/10/2022', '05/11/2022', '05/12/2022',
'05/13/2022', '05/14/2022', '05/15/2022', '05/16/2022', '05/17/2022', '05/18/2022', '05/19/2022', '05/20/2022', '05/21/2022', '05/22/2022', '05/23/2022', '05/24/2022',
'06/01/2022', '06/02/2022', '06/03/2022', '06/04/2022', '06/05/2022', '06/06/2022', '06/07/2022', '06/08/2022', '06/09/2022', '06/10/2022', '06/11/2022', '06/12/2022',
'06/13/2022', '06/14/2022', '06/15/2022', '06/16/2022', '06/17/2022', '06/18/2022', '06/19/2022', '06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022'
]

TXZonaPotenciaEntreno(
  dataTZ1PotenciaEnt,dataTZ2PotenciaEnt,dataTZ3PotenciaEnt,dataTZ4PotenciaEnt,dataTZ5PotenciaEnt,dataTZ6PotenciaEnt, dataLabelsTZPotenciaEnt
  );

function TXZonaPotenciaEntreno(
  dataTZ1PotenciaEnt,dataTZ2PotenciaEnt,dataTZ3PotenciaEnt,dataTZ4PotenciaEnt,dataTZ5PotenciaEnt,dataTZ6PotenciaEnt, dataLabelsTZPotenciaEnt
  ) {
  
  var optionsTXZonaPotencia1 = {
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    series: [{      
      name: 'Zona 1',
      type: 'bar',
      data: dataTZ1PotenciaEnt
    }, 
    {
      name: 'Zona 2',
      type: 'bar',
      data: dataTZ2PotenciaEnt
    }, 
    {
      name: 'Zona 3',
      type: 'bar',
      data: dataTZ3PotenciaEnt
    },
    {
      name: 'Zona 4',
      type: 'bar',
      data: dataTZ4PotenciaEnt
      
    }, 
    {
      name: 'Zona 5',
      type: 'bar',
      data: dataTZ5PotenciaEnt
    }, 
    {
      name: 'Zona 6',
      type: 'bar',
      data: dataTZ6PotenciaEnt
    },
    ],
    chart: {
      id: 'Chartbrush7',
      background: '#2b2c40',
      type: 'bar',
      height: 550,
      stacked: false,
      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -40,
        offsetY: -5,
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
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
        borderRadius: 2
      }
    },
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70,0.70, 0.70,0.70, 0.70],
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
      width: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['transparent','transparent','transparent','transparent','transparent','transparent'],
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
      colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    strokeColors: ['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    },
    labels: dataLabelsTZPotenciaEnt ,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 25,
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
          color: '#cbcbe2',
          offsetX: 5,
        },
        axisBorder: {
          show: true,
          color: '#cbcbe2',
          offsetX: -5,
        },
        labels: {
          rotate: 90,
          offsetX: -5,
          style: {
            colors: '#cbcbe2',
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
          offsetX: 9,
          color: '#cbcbe2',
        },
        axisBorder: {
          show: true,
          offsetX: -10,
          color: '#cbcbe2',
        },
        labels: {
          rotate: 90,
          offsetX: -10,
          style: {
            colors: '#cbcbe2',
            fontSize:'9px'
          }
        },
        tooltip: {
          enabled: false
        }
      },           
    ],
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        }
      ],
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    }        
  };

  var TXZonaPotencia1 = new ApexCharts(document.querySelector("#TXZonaPotencia1"), optionsTXZonaPotencia1);
  TXZonaPotencia1.render();
  
  




  var optionsTXZonaPotencia2 = {
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    series: [{      
      name: 'Zona 1',
      type: 'bar',
      data: dataTZ1PotenciaEnt
    }, 
    {
      name: 'Zona 2',
      type: 'bar',
      data: dataTZ2PotenciaEnt
    }, 
    {
      name: 'Zona 3',
      type: 'bar',
      data: dataTZ3PotenciaEnt
    },
    {
      name: 'Zona 4',
      type: 'bar',
      data: dataTZ4PotenciaEnt
      
    }, 
    {
      name: 'Zona 5',
      type: 'bar',
      data: dataTZ5PotenciaEnt
    }, 
    {
      name: 'Zona 6',
      type: 'bar',
      data: dataTZ6PotenciaEnt
    },
    ],
    chart: {
      id: 'Chartbrush8',
      height: 150,
      type: 'bar',
      brush: {
        target: 'Chartbrush7',
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: '#cbcbe2',
          opacity: 0.3,
        },

        stroke: {
          color: '#fff',
          dasharray: 10,
          curve: 'smooth',
          width: 1,
          opacity: 1
        },

        xaxis: {
          min: new Date('1 Jun 2022').getTime(),
          max: new Date('14 Jun 2022').getTime()
        }
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    stroke: {
      width: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['transparent','transparent','transparent','transparent','transparent','transparent'],
    },
    labels: dataLabelsTZPotenciaEnt,
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.70, 0.70, 0.70],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
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
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
        }
      },      
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show:false,
          offsetX: -10,
          style: {
            colors: '#9bcb3b'
          }
        },
      },
      {        
        opposite: true,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show: false,
          offsetX: -15,
          style: {
            colors: '#ffab00',
          }
        },        
      },      
    ],
    legend: {
      show: false,
      offsetX: 7,
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#fff',
        useSeriesColors: true
      }
    },    
  };

  var TXZonaPotencia2 = new ApexCharts(document.querySelector("#TXZonaPotencia2"), optionsTXZonaPotencia2);
  TXZonaPotencia2.render();
}
  //FIN  Grafico de tiempo en cada zona de cada entreno POTENCIA





































































//  Grafico de tiempo en cada zona de cada entreno velocidad
dataTZ1VelocidadEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTZ2VelocidadEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataTZ3VelocidadEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataTZ4VelocidadEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTZ5VelocidadEnt=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055, 1241, 1067, 1222, 1343, 1021, 1241, 1056, 1027, 1243, 1044, 1255, 1141, 1167, 1022, 1243, 1021, 1141, 1256, 1027, 1143, 1037, 1221, 1244, 1422, 1344, 1555, 1041, 1067, 1222, 1543, 1321, 1241, 1056, 1027, 1243, 1144, 1255, 1441, 1067, 1222, 1043, 1021, 1241, 1556, 1027, 1043, 1244, 1355, 1441, 1067, 1222, 1443, 1021, 1241, 1456, 1027, 1243, 1344, 1055, 1241, 1467, 1322, 1043, 1421, 1641, 1756, 1027, 1243, 1237, 1021, 1044, 1222, 1044, 1155, 1041, 1267, 1022, 1443, 1021, 1241, 1256, 1327, 1243, 1044, 1455, 1041, 1267, 1322, 1343, 1021, 1241, 1056, 1027, 1243, 1144, 1555, 1041, 1267, 1022, 1343, 1021, 1241, 1256, 1127, 1043, 1344, 1055, 1241, 1067, 1122, 1043, 1221, 1641, 1356, 1027, 1243, 1037, 1221, 1644, 1022]
dataTZ6VelocidadEnt=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25, 101.36, 79.30, 92.45, 101.35, 79.64, 92.52, 101.59, 79.36, 92.39, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.37, 101.21, 79.44, 92.22, 101.30, 79.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 95.64, 81.52, 104.59, 95.36, 81.39, 104.30, 95.25, 81.36, 104.30, 95.45, 81.35, 104.64, 95.52, 81.59, 104.36, 95.39, 81.30, 104.25, 95.36, 81.30, 104.45, 95.35, 81.64, 104.52, 95.59, 81.36, 104.39, 95.27, 81.41, 104.74, 77.32, 84.30, 99.25, 77.36, 84.30, 99.45, 77.35, 84.64, 99.52, 77.59, 84.36, 99.39, 77.30, 84.25, 99.36, 77.30, 84.45, 99.35, 77.64, 84.52, 99.59, 114.36, 86.39, 72.30, 114.25, 86.36, 72.30, 114.45, 86.35, 72.64, 114.52, 86.59, 72.36, 114.39, 86.30, 72.25, 114.36, 84.30, 110.45, 84.35, 110.64, 84.52, 110.59, 84.36, 110.39, 84.27, 110.41, 84.74, 110.32]
dataLabelsTZVelocidadEnt=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022',
'01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022',
'02/01/2022', '02/02/2022', '02/03/2022', '02/04/2022', '02/05/2022', '02/06/2022', '02/07/2022', '02/08/2022', '02/09/2022', '02/10/2022', '02/11/2022', '02/12/2022',
'02/13/2022', '02/14/2022', '02/15/2022', '02/16/2022', '02/17/2022', '02/18/2022', '02/19/2022', '02/20/2022', '02/21/2022', '02/22/2022', '02/23/2022', '02/24/2022',
'03/01/2022', '03/02/2022', '03/03/2022', '03/04/2022', '03/05/2022', '03/06/2022', '03/07/2022', '03/08/2022', '03/09/2022', '03/10/2022', '03/11/2022', '03/12/2022',
'03/13/2022', '03/14/2022', '03/15/2022', '03/16/2022', '03/17/2022', '03/18/2022', '03/19/2022', '03/20/2022', '03/21/2022', '03/22/2022', '03/23/2022', '03/24/2022',
'04/01/2022', '04/02/2022', '04/03/2022', '04/04/2022', '04/05/2022', '04/06/2022', '04/07/2022', '04/08/2022', '04/09/2022', '04/10/2022', '04/11/2022', '04/12/2022',
'04/13/2022', '04/14/2022', '04/15/2022', '04/16/2022', '04/17/2022', '04/18/2022', '04/19/2022', '04/20/2022', '04/21/2022', '04/22/2022', '04/23/2022', '04/24/2022',
'05/01/2022', '05/02/2022', '05/03/2022', '05/04/2022', '05/05/2022', '05/06/2022', '05/07/2022', '05/08/2022', '05/09/2022', '05/10/2022', '05/11/2022', '05/12/2022',
'05/13/2022', '05/14/2022', '05/15/2022', '05/16/2022', '05/17/2022', '05/18/2022', '05/19/2022', '05/20/2022', '05/21/2022', '05/22/2022', '05/23/2022', '05/24/2022',
'06/01/2022', '06/02/2022', '06/03/2022', '06/04/2022', '06/05/2022', '06/06/2022', '06/07/2022', '06/08/2022', '06/09/2022', '06/10/2022', '06/11/2022', '06/12/2022',
'06/13/2022', '06/14/2022', '06/15/2022', '06/16/2022', '06/17/2022', '06/18/2022', '06/19/2022', '06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022'
]

TXZonaVelocidadEntreno(
  dataTZ1VelocidadEnt,dataTZ2VelocidadEnt,dataTZ3VelocidadEnt,dataTZ4VelocidadEnt,dataTZ5VelocidadEnt,dataTZ6VelocidadEnt, dataLabelsTZVelocidadEnt
  );

function TXZonaVelocidadEntreno(
  dataTZ1VelocidadEnt,dataTZ2VelocidadEnt,dataTZ3VelocidadEnt,dataTZ4VelocidadEnt,dataTZ5VelocidadEnt,dataTZ6VelocidadEnt, dataLabelsTZVelocidadEnt
  ) {
  
  var optionsTXZonaVelocidad1 = {
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    series: [{      
      name: 'Zona 1',
      type: 'bar',
      data: dataTZ1VelocidadEnt
    }, 
    {
      name: 'Zona 2',
      type: 'bar',
      data: dataTZ2VelocidadEnt
    }, 
    {
      name: 'Zona 3',
      type: 'bar',
      data: dataTZ3VelocidadEnt
    },
    {
      name: 'Zona 4',
      type: 'bar',
      data: dataTZ4VelocidadEnt
      
    }, 
    {
      name: 'Zona 5',
      type: 'bar',
      data: dataTZ5VelocidadEnt
    }, 
    {
      name: 'Zona 6',
      type: 'bar',
      data: dataTZ6VelocidadEnt
    },
    ],
    chart: {
      id: 'Chartbrush9',
      background: '#2b2c40',
      type: 'bar',
      height: 550,
      stacked: false,
      
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -40,
        offsetY: -5,
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
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '70%',
        borderRadius: 2
      }
    },
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.70, 0.70, 0.70, 0.70,0.70, 0.70,0.70, 0.70],
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
      width: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['transparent','transparent','transparent','transparent','transparent','transparent'],
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
      colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    strokeColors: ['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    },
    labels: dataLabelsTZVelocidadEnt ,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 25,
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
          color: '#cbcbe2',
          offsetX: 5,
        },
        axisBorder: {
          show: true,
          color: '#cbcbe2',
          offsetX: -5,
        },
        labels: {
          rotate: 90,
          offsetX: -5,
          style: {
            colors: '#cbcbe2',
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
          offsetX: 9,
          color: '#cbcbe2',
        },
        axisBorder: {
          show: true,
          offsetX: -10,
          color: '#cbcbe2',
        },
        labels: {
          rotate: 90,
          offsetX: -10,
          style: {
            colors: '#cbcbe2',
            fontSize:'9px'
          }
        },
        tooltip: {
          enabled: false
        }
      },           
    ],
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        }
      ],
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    }        
  };

  var TXZonaVelocidad1 = new ApexCharts(document.querySelector("#TXZonaVelocidad1"), optionsTXZonaVelocidad1);
  TXZonaVelocidad1.render();
  
  




  var optionsTXZonaVelocidad2 = {
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    series: [{      
      name: 'Zona 1',
      type: 'bar',
      data: dataTZ1VelocidadEnt
    }, 
    {
      name: 'Zona 2',
      type: 'bar',
      data: dataTZ2VelocidadEnt
    }, 
    {
      name: 'Zona 3',
      type: 'bar',
      data: dataTZ3VelocidadEnt
    },
    {
      name: 'Zona 4',
      type: 'bar',
      data: dataTZ4VelocidadEnt
      
    }, 
    {
      name: 'Zona 5',
      type: 'bar',
      data: dataTZ5VelocidadEnt
    }, 
    {
      name: 'Zona 6',
      type: 'bar',
      data: dataTZ6VelocidadEnt
    },
    ],
    chart: {
      id: 'Chartbrush10',
      height: 150,
      type: 'bar',
      brush: {
        target: 'Chartbrush9',
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: '#cbcbe2',
          opacity: 0.3,
        },

        stroke: {
          color: '#fff',
          dasharray: 10,
          curve: 'smooth',
          width: 1,
          opacity: 1
        },

        xaxis: {
          min: new Date('1 Jun 2022').getTime(),
          max: new Date('14 Jun 2022').getTime()
        }
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    stroke: {
      width: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['transparent','transparent','transparent','transparent','transparent','transparent'],
    },
    labels: dataLabelsTZPotenciaEnt,
    colors:['#007bff','rgb(75, 192, 192)','#9BCB3B','rgb(255, 171, 0)','#ff3e1d','#6610f2'],
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.70, 0.70, 0.70],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
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
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
        }
      },      
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show:false,
          offsetX: -10,
          style: {
            colors: '#9bcb3b'
          }
        },
      },
      {        
        opposite: true,
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show: false,
          offsetX: -15,
          style: {
            colors: '#ffab00',
          }
        },        
      },      
    ],
    legend: {
      show: false,
      offsetX: 7,
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#fff',
        useSeriesColors: true
      }
    },    
  };

  var TXZonaVelocidad2 = new ApexCharts(document.querySelector("#TXZonaVelocidad2"), optionsTXZonaVelocidad2);
  TXZonaVelocidad2.render();
}
  //FIN  Grafico de tiempo en cada zona de cada entreno VELOCIDAD
















































  //FIN  Grafico de tiempo en cada habilidad de cada entreno
dataTXResistenciaEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTXAgilidadEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTXFuerzaEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTXVelocidadEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataTXPotenciaEnt=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 37, 21, 40, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 40, 22, 30, 37, 21, 44]
dataLabelsTHabilidadEnt=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022',
'01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022',
'02/01/2022', '02/02/2022', '02/03/2022', '02/04/2022', '02/05/2022', '02/06/2022', '02/07/2022', '02/08/2022', '02/09/2022', '02/10/2022', '02/11/2022', '02/12/2022',
'02/13/2022', '02/14/2022', '02/15/2022', '02/16/2022', '02/17/2022', '02/18/2022', '02/19/2022', '02/20/2022', '02/21/2022', '02/22/2022', '02/23/2022', '02/24/2022',
'03/01/2022', '03/02/2022', '03/03/2022', '03/04/2022', '03/05/2022', '03/06/2022', '03/07/2022', '03/08/2022', '03/09/2022', '03/10/2022', '03/11/2022', '03/12/2022',
'03/13/2022', '03/14/2022', '03/15/2022', '03/16/2022', '03/17/2022', '03/18/2022', '03/19/2022', '03/20/2022', '03/21/2022', '03/22/2022', '03/23/2022', '03/24/2022',
'04/01/2022', '04/02/2022', '04/03/2022', '04/04/2022', '04/05/2022', '04/06/2022', '04/07/2022', '04/08/2022', '04/09/2022', '04/10/2022', '04/11/2022', '04/12/2022',
'04/13/2022', '04/14/2022', '04/15/2022', '04/16/2022', '04/17/2022', '04/18/2022', '04/19/2022', '04/20/2022', '04/21/2022', '04/22/2022', '04/23/2022', '04/24/2022',
'05/01/2022', '05/02/2022', '05/03/2022', '05/04/2022', '05/05/2022', '05/06/2022', '05/07/2022', '05/08/2022', '05/09/2022', '05/10/2022', '05/11/2022', '05/12/2022',
'05/13/2022', '05/14/2022', '05/15/2022', '05/16/2022', '05/17/2022', '05/18/2022', '05/19/2022', '05/20/2022', '05/21/2022', '05/22/2022', '05/23/2022', '05/24/2022',
'06/01/2022', '06/02/2022', '06/03/2022', '06/04/2022', '06/05/2022', '06/06/2022', '06/07/2022', '06/08/2022', '06/09/2022', '06/10/2022', '06/11/2022', '06/12/2022',
'06/13/2022', '06/14/2022', '06/15/2022', '06/16/2022', '06/17/2022', '06/18/2022', '06/19/2022', '06/20/2022', '06/21/2022', '06/22/2022', '06/23/2022', '06/24/2022'
]

TXHabilidadEntreno(
  dataTXResistenciaEnt,dataTXAgilidadEnt,dataTXFuerzaEnt,dataTXVelocidadEnt,dataTXPotenciaEnt, dataLabelsTHabilidadEnt
  );

function TXHabilidadEntreno(
  dataTXResistenciaEnt,dataTXAgilidadEnt,dataTXFuerzaEnt,dataTXVelocidadEnt,dataTXPotenciaEnt, dataLabelsTHabilidadEnt
  ) {
  
  var optionsTxHabilidadEntreno1 = {
    colors:['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
    series: [{      
      name: 'Resistencia',
      data: dataTXResistenciaEnt
    }, 
    {
      name: 'Agilidad',
      data: dataTXAgilidadEnt
    }, 
    {
      name: 'Fuerza',
      data: dataTXFuerzaEnt
    },
    {
      name: 'Potencia',
      data: dataTXPotenciaEnt
    },
    {
      name: 'Velocidad',
      data: dataTXVelocidadEnt
      
    },      
    ],
    chart: {
      id: 'Chartbrush11',
      background: '#2b2c40',
      type: 'bar',
      height: 550,
      stacked: true,     
      toolbar: {
        autoSelected: 'pan',
        show: true,
        offsetX: -40,
        offsetY: -5,
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
      }
    },
    plotOptions: {      
      bar: {
        horizontal: false,
        columnWidth: '70%',
        borderRadius: 4,
        dataLabels: {     
          position: 'bottom',         
          total: {
            enabled: true,
            offsetX: 0,
            style: {
              fontSize: '13px',
              fontWeight: 900,
              color: '#cbcbe2'
            }
          }
      }
    }},
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.70, 0.70],
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
      width: [2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['transparent','transparent','transparent','transparent','transparent','transparent'],
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
    markers: {
      size: 4,
      colors:['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
      strokeColors: ['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
    },
    labels: dataLabelsTHabilidadEnt,
    legend: {
      show: true,
      offsetY: 10,
      position: 'bottom',
      horizontalAlign: 'center',
      fontSize: '14px',
      itemMargin: {
        horizontal: 25,
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
          color: '#cbcbe2',
          offsetX: 5,
        },
        axisBorder: {
          show: true,
          color: '#cbcbe2',
          offsetX: -5,
        },
        labels: {
          rotate: 90,
          offsetX: -5,
          style: {
            colors: '#cbcbe2',
            fontSize:'10px'
          }
        },       
        tooltip: {
          enabled: false
        }
      },     
    ],
    tooltip: {
      y: [
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        },
        {
          title: {
            formatter: function (val) {
              return val + " - (hh:mm:ss)"
            }
          }
        }
      ],
      fixed: {
        enabled: true,
        position: 'topLeft', // topRight, topLeft, bottomRight, bottomLeft
        offsetY: 30,
        offsetX: 60
      },
    }        
  };

  var TxHabilidadEntreno1 = new ApexCharts(document.querySelector("#TxHabilidadEntreno1"), optionsTxHabilidadEntreno1);
  TxHabilidadEntreno1.render();
  
  




  var optionsTxHabilidadEntreno2 = {
    colors:['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
    series: [{      
      name: 'Resistencia',
      data: dataTXResistenciaEnt
    }, 
    {
      name: 'Agilidad',
      data: dataTXAgilidadEnt
    }, 
    {
      name: 'Fuerza',
      data: dataTXFuerzaEnt
    },
    {
      name: 'Velocidad',
      data: dataTXVelocidadEnt
      
    }, 
    {
      name: 'Potencia',
      data: dataTXPotenciaEnt
    }, 
    ],
    chart: {
      id: 'Chartbrush12',
      height: 150,
      type: 'bar',
      stacked: true,
      brush: {
        target: 'Chartbrush11',
        enabled: true,
      },
      selection: {
        enabled: true,
        fill: {
          color: '#cbcbe2',
          opacity: 0.3,
        },

        stroke: {
          color: '#fff',
          dasharray: 10,
          curve: 'smooth',
          width: 1,
          opacity: 1
        },

        xaxis: {
          min: new Date('1 Jun 2022').getTime(),
          max: new Date('14 Jun 2022').getTime()
        }
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '75%',
        borderRadius: 2
      }
    },
    stroke: {
      width: [2, 2, 2, 2, 2],
      curve: 'smooth',
      colors:['transparent','transparent','transparent','transparent','transparent','transparent'],
    },
    labels: dataLabelsTHabilidadEnt,
    colors:['#9BCB3B', '#4bc0c0','#ffab00','#ff3e1d','#007bff'],
    fill: {
      opacity: [0.70, 0.70, 0.70, 0.70, 0.70],
      gradient: {
        inverseColors: false,
        shade: 'light',
        type: "vertical",
        opacityFrom: 0.85,
        opacityTo: 0.55,
        stops: [0, 100, 100, 100]
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
    xaxis: {
      type: 'datetime',
      tooltip: {
        enabled: false
      },
      labels: {
        style: {
          colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
        }
      },      
    },
    yaxis: [
      {
        axisTicks: {
          show: false,
        },
        axisBorder: {
          show: true,
          color: '#fff'
        },
        labels: {
          show:false,
          offsetX: -10,
          style: {
            colors: '#9bcb3b'
          }
        },
      },      
    ],
    legend: {
      show: false,
      offsetX: 7,
      position: 'bottom',
      horizontalAlign: 'center',
      labels: {
        colors: '#fff',
        useSeriesColors: true
      }
    },    
  };

  var TxHabilidadEntreno2 = new ApexCharts(document.querySelector("#TxHabilidadEntreno2"), optionsTxHabilidadEntreno2);
  TxHabilidadEntreno2.render();
}
  //FIN  Grafico de tiempo en cada habilidad de cada entreno







































































































































































































  // grafico de duraciòn, distancia y desnivel semanal
dataDuracionAcumSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
dataDesnivelAcumSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataDistanciaAcumSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
dataDuracionPromSem=[23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 23, 11]
dataDesnivelPromSem=[1044, 1255, 1141, 1067, 1222, 1343, 1021, 1241, 1456, 1027, 1243, 1144, 1455, 1041, 1267, 1022, 1243, 1221, 1041, 1056, 1227, 1143, 1244, 1055]
dataDistanciaPromSem=[68.30, 71.25, 92.36, 101.30, 79.45, 92.35, 101.64, 79.52, 92.59, 101.36, 79.39, 92.30, 101.25, 79.36, 92.30, 101.45, 79.35, 92.64, 101.52, 79.59, 92.36, 101.39, 79.30, 92.25]
dataLabelsSem=['01/01/2022', '01/02/2022', '01/03/2022', '01/04/2022', '01/05/2022', '01/06/2022', '01/07/2022', '01/08/2022', '01/09/2022', '01/10/2022', '01/11/2022', '01/12/2022', '01/13/2022', '01/14/2022', '01/15/2022', '01/16/2022', '01/17/2022', '01/18/2022', '01/19/2022', '01/20/2022', '01/21/2022', '01/22/2022', '01/23/2022', '01/24/2022']

durElvDistSemana(dataDuracionAcumSem, dataDesnivelAcumSem, dataDistanciaAcumSem, dataDuracionPromSem, dataDesnivelPromSem, dataDistanciaPromSem, dataLabelsSem);

function durElvDistSemana(dataDuracionAcumSem,dataDesnivelAcumSem,dataDistanciaAcumSem,dataDuracionPromSem,dataDesnivelPromSem,dataDistanciaPromSem,dataLabelsSem) {}
  



var optionsDistAcumYPromSem1 = {
  colors: ["#9bcb3b", "#ffab00", "#007bff", "#ff3e1d", "#6610f2", "#4bc0c0"],
    series: [{
      name: 'Duración Acum',
      type: 'bar',
      data: dataDuracionAcumSem
    }, {
      name: 'Desnivel Acum',
      type: 'bar',
      data: dataDesnivelAcumSem
    }, {
      name: 'Distancia Acum',
      type: 'bar',
      data: dataDistanciaAcumSem
    },
    {
      name: 'Duración Prom',
      type: 'line',
      data: dataDuracionPromSem
    }, {
      name: 'Desnivel Prom',
      type: 'area',
      data: dataDesnivelPromSem
    }, {
      name: 'Distancia Prom',
      type: 'line',
      data: dataDistanciaPromSem
    }],
  chart: {
    height: 450,
    type: 'line',
    zoom:{
      enabled: true,
      type: 'x',
      autoScaleYaxis: true
    },
    toolbar: {
      show: true,
      autoSelected:'zoom',
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
    }
  },
  plotOptions: {
    bar: {
      columnWidth: '70%',
      borderRadius: 2
    }
  },
  fill: {
    opacity: [0.70, 0.70, 0.70, 0.75, 0.20, 0.75],
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
    width: [0, 0, 0, 4, 3, 2],
    curve: 'smooth',
    colors: ["#9bcb3b", "#ffab00", "#007bff", "#ff3e1d", "#6610f2", "#4bc0c0"],
  },
  dataLabels: {
    enabled: false   
  },
  markers: {
    size: 0
  },
  labels: ['Sem 1', 'Sem 2', 'Sem 3', 'Sem 4', 'Sem 5', 'Sem 6', 'Sem 7', 'Sem 8', 'Sem 9', 'Sem 10', 'Sem 11', 'Sem 12', 'Sem 13', 'Sem 14', 'Sem 15', 'Sem 16', 'Sem 17', 'Sem 18', 'Sem 19', 'Sem 20', 'Sem 21', 'Sem 22', 'Sem 23', 'Sem 24',],
  xaxis: {
    type: 'category',
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
        { title: 'Macrociclo 1', cols: 12 },
        { title: 'Macrociclo 2', cols: 12 },
        { title: 'Macrociclo 3', cols: 3 },
        { title: 'Macrociclo 4', cols: 3 }
      ]
    }
  },
  yaxis: [
    {
      seriesName: 'Duración Acum',
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#9bcb3b',
      },
      labels: {
        offsetX: -18,
        style: {
          colors: '#9bcb3b',
          fontSize: '9px'
        }
      },        
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Desnivel Acum',
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#ffab00',
      },
      labels: {
        offsetX: -5,
        style: {
          colors: '#ffab00',
          fontSize: '9px'
        }
      },
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Distancia Acum',
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#007bff',
      },
      labels: {
        offsetX: 0,
        style: {
          colors: '#007bff',
          fontSize: '9px'
        }
      },        
      tooltip: {
        enabled: true
      }
    },
    {
      seriesName: 'Duración Prom',
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#ff3e1d',
      },
      labels: {
        offsetX: -10,
        style: {
          colors: '#ff3e1d',
          fontSize: '9px'
        }
      },        
      tooltip: {
        enabled: true
      }
    },
    { 
      seriesName: 'Desnivel Prom',       
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#6610f2'
      },
      labels: {
        offsetX: -15,
        style: {
          colors: '#cbcbe2',
          fontSize: '9px'
        }
      },        
    },

    { 
      seriesName: 'Distancia Prom',       
      opposite: true,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
        color: '#4bc0c0'
      },
      labels: {
        offsetX: -18,
        style: {
          colors: '#4bc0c0',
          fontSize: '9px'
        },
      },
    },
  ],
  legend: {
    show: true,
    offsetY: 7,
    position: 'bottom',
    horizontalAlign: 'center',
    labels: {
      colors: '#cbcbe2',
      useSeriesColors: true
    },
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
DistAcumYPromSem1.toggleSeries('Desnivel Acum');
DistAcumYPromSem1.toggleSeries('Distancia Acum');
DistAcumYPromSem1.toggleSeries('Duración Prom')
//FIN grafico de duraciòn, distancia y desnivel semanal
































// Grafico de distancia: Acumulada y promedio de cada mes
var optionsDistAcumYPromSem2 = {
  colors: ['#007bff', '#9BCB3B'],
  series: [{
    name: 'Acumulada mensual (Km)',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 440, 505, 414, 671, 227, 413]
  }, {
    name: 'Promedio mensual (Km)',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 23, 42, 35, 27, 43, 22]
  }],
  chart: {
    height: 350,
    type: 'bar',
    toolbar: {
      show: true,
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
    }
  },
  stroke: {
    width: [0, 3]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    style: {
      colors: ['#9BCB3B']
  },
    background: {
      enabled: true,
      foreColor: '#ffffff',
      padding: 5,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#ffffff',
      opacity: 1,
    }
  },
  labels: ['Mes 1', 'Mes 2', 'Mes 3', 'Mes 4', 'Mes 5', 'Mes 6', 'Mes 7', 'Mes 8', 'Mes 9', 'Mes 10', 'Mes 11', 'Mes 12'],
  xaxis: {
    type: 'category',
    labels: {
      style: {
        colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
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
        { title: 'Macrociclo 3', cols: 3 },
        { title: 'Macrociclo 4', cols: 3 }
      ]
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulada mensual (Km)',
      style: {
        color: '#007bff'
      }
    },
    labels: {
      style: {
        colors: ['#cbcbe2']
      },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio mensual (Km)',
      style: {
        color: '#9BCB3B'
      }
    },
    labels: {
      style: {
        colors: ['#cbcbe2']
      }
    }
  }],
  legend: {
    show: true,
    offsetY: 0,
    position: 'bottom',
    horizontalAlign: 'center',
    labels: {
      colors: '#cbcbe2',
      useSeriesColors: true
    },
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

var DistAcumYPromSem2 = new ApexCharts(document.querySelector("#DistAcumYPromSem2"), optionsDistAcumYPromSem2);
DistAcumYPromSem2.render();
//FIN Grafico de distancia: Acumulada y promedio de cada mes





















// Grafico de distancia: Acumulada y promedio de cada mesociclo
var optionsDistAcumYPromSem3 = {
  colors: ['#4bc0c0', '#9BCB3B'],
  series: [{
    name: 'Acumulada por mesociclo (Km)',
    type: 'column',
    data: [440, 505, 414, 671]
  }, {
    name: 'Promedio por mesociclo (Km)',
    type: 'line',
    data: [23, 42, 35, 27]
  }],
  chart: {
    height: 350,
    type: 'line',
    toolbar: {
      show: true,
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
    }
  },
  stroke: {
    width: [0, 3]
  },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1],
    background: {
      enabled: true,
      foreColor: '#ffffff',
      padding: 5,
      borderRadius: 2,
      borderWidth: 1,
      borderColor: '#ffffff',
      opacity: 1,
    }
  },
  labels: ['Macrociclo 1', 'Macrociclo 2', 'Macrociclo 3', 'Macrociclo 4'],
  xaxis: {
    type: '',
    labels: {
      style: {
        colors: ['#cbcbe2', '#cbcbe2', '#cbcbe2', '#cbcbe2']
      }
    }
  },
  yaxis: [{
    title: {
      text: 'Acumulada por mesociclo (Km)',
      style: {
        color: '#4bc0c0'
      }
    },
    labels: {
      style: {
        colors: ['#cbcbe2']
      },
    },
  }, {
    opposite: true,
    title: {
      text: 'Promedio por mesociclo (Km)',
      style: {
        color: '#9BCB3B'
      }
    },
    labels: {
      style: {
        colors: ['#cbcbe2']
      }
    }
  }],
  legend: {
    show: true,
    offsetY: 0,
    position: 'bottom',
    horizontalAlign: 'center',
    labels: {
      colors: '#cbcbe2',
      useSeriesColors: true
    },
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

var DistAcumYPromSem3 = new ApexCharts(document.querySelector("#DistAcumYPromSem3"), optionsDistAcumYPromSem3);
DistAcumYPromSem3.render();
DistAcumYPromSem3.toggleSeries('Promedio por mesociclo (Km)')
//FIN Grafico de distancia: Acumulada y promedio de cada mesociclo