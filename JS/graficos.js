


// Grafico barras
const ctx = document.getElementById('horas').getContext('2d');
const horas = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Hola', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 5],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {        
    }
});
// fin grafico barras











const díasRestantes = new Chart(
    document.getElementById('díasRestantes'),{
    type: 'doughnut',
    data: {
        // labels: ['Red', 'Blue', 'Yellow],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 50, 100],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(253, 172, 52)',
              'rgb(40, 208, 148)'
            ],
            hoverOffset: 10
          }]
    },
    options: {
    }
});





const FCMaxEntreno = new Chart(
    document.getElementById('FCMaxEntreno'),{
    type: 'line',
    data: {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
        {
            data: [65, 59, 80, 81, 56, 55, 40],
            label: 'My First Dataset',  
            borderColor: 'rgb(75, 192, 192)',     
            tension: 0.1, 
            pointStyle: 'circle', 
            backgroundColor: 'rgb(75, 192, 192)',   
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,
            
            
        },
        {
            data: [80, 150, 180, 270, 210, 160, 160,],
            label: 'Europe',
            borderColor: config.colors.danger,
            tension: 0.3,
            pointStyle: 'circle',
            backgroundColor: config.colors.danger,
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,
          }
        ]
    },
    options: {}
});









const FCMaxSemanal = new Chart(
    document.getElementById('FCMaxSemanal'),{
    type: 'line',
    data: {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
        {
            data: [55, 74, 40, 95, 43, 87, 40],
            label: 'My First Dataset',  
            borderColor: '#9BCB3B',     
            tension: 0.1, 
            pointStyle: 'circle', 
            backgroundColor: '#9BCB3B',    
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,
            
            
        },
        {
            data: [45, 117, 130, 59, 210, 132, 184,],
            label: 'Europe',
            borderColor: config.colors.danger,
            tension: 0.3,
            pointStyle: 'circle',
            backgroundColor: config.colors.danger,
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,
          }
        ]
    },
    options: {}
});

















// promedio mensual de los promedios de la FCMax
const FCMaxMensual = new Chart(
    document.getElementById('FCMaxMensual'),{
    type: 'line',
    data: {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
        {
            data: [55, 74, 40, 95, 43, 87, 40],
            label: 'My First Dataset',  
            borderColor: '#9BCB3B',     
            tension: 0.1, 
            pointStyle: 'circle', 
            backgroundColor: '#9BCB3B',    
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,
            
            
        },
        {
            data: [45, 117, 130, 59, 210, 132, 184,],
            label: 'Europe',
            borderColor: config.colors.danger,
            tension: 0.3,
            pointStyle: 'circle',
            backgroundColor: config.colors.danger,
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,
          }
        ]
    },
    options: {}
});
// final promedio mensual de los promedios de la FCMax

















// tiempo en cada zona FC
const TzonasFC = new Chart(
    document.getElementById('TzonasFC'),{
    type: 'bar',
    data: {
    labels: ['Zona 1', 'zona 2', 'zona 3', 'zona 4', 'zona 5', 'zona 6'],
    datasets: [
        {
            axis: 'y',
            label: 'Tiempo en cada zona de FC',
            data: [65, 59, 80, 81, 56, 55],   
            fill: false,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(255, 205, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(153, 102, 255, 0.7)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)'
              ],
              borderWidth: 1
            }]           
        },
    options: {
        indexAxis: 'y',
    }}
);
// final tiempo en cada zona FC



















// tiempo en cada zona POTENCIA
const zonasPotencia = new Chart(
    document.getElementById('zonasPotencia'),{
    type: 'bar',
    data: {
    labels: ['Zona 1', 'zona 2', 'zona 3', 'zona 4', 'zona 5', 'zona 6'],
    datasets: [
        {
            axis: 'y',
            label: 'Tiempo en cada zona de Potencia',
            data: [60, 75, 91, 72, 22, 74],   
            fill: false,
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 205, 86, 0.7)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)'
              ],
              borderWidth: 1
            }]           
        },
    options: {
        indexAxis: 'y',
    }}
);
// Final tiempo en cada zona POTENCIA
























// tiempo en cada zona de VELOCIDAD
const zonasVelocidad = new Chart(
    document.getElementById('zonasVelocidad'),{
    type: 'bar',
    data: {
    labels: ['Zona 1', 'zona 2', 'zona 3', 'zona 4', 'zona 5', 'zona 6'],
    datasets: [
        {
            axis: 'y',
            label: 'Tiempo en cada zona de velocidad',
            data: [72, 49, 72, 25, 19, 37],   
            fill: false,
            backgroundColor: [
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 159, 64, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(255, 99, 132, 0.7)',
                'rgba(255, 205, 86, 0.7)'
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)'
              ],
              borderWidth: 1
            }]           
        },
    options: {
        indexAxis: 'y',
    }}
);
// final tiempo en cada zona de VELOCIDAD









// elevación entreno
const elevaEntreno = new Chart(
    document.getElementById('elevaEntreno'),{
    type: 'line',
    data: {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
        {
            data: [27, 45, 75, 82, 130, 137, 154],
            label: 'Metros',  
            borderColor: '#9BCB3B',     
            tension: 0.1, 
            pointStyle: 'circle', 
            backgroundColor: '#9BCB3B',    
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,
            
            
        },        
        ]
    },
    options: {}
});
// final elevación entreno









// elevación semanal
const elevaSemanal = new Chart(
    document.getElementById('elevaSemanal'),{
    type: 'line',
    data: {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
        {
            data: [62, 90, 189, 260, 308, 541, 618],
            label: 'Metros',  
            borderColor: 'rgba(75, 192, 192, 0.7)',     
            tension: 0.1, 
            pointStyle: 'circle', 
            backgroundColor: 'rgba(75, 192, 192, 0.7)',    
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,         
        },        
        ]
    },
    options: {}
});
// final elevación semanal











// elevación mensual
const elevaMensual = new Chart(
    document.getElementById('elevaMensual'),{
    type: 'line',
    data: {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    datasets: [
        {
            data: [207, 481, 841, 948, 1178, 1341, 1543],
            label: 'Metros',  
            borderColor: 'rgb(40, 208, 148)',     
            tension: 0.1, 
            pointStyle: 'circle', 
            backgroundColor: 'rgb(40, 208, 148)',    
            fill: true,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,         
        },        
        ]
    },
    options: {}
});

// final elevación mensual


















var option = {
    chart: {
      height: 200,
      type: "radialBar"
    },
    
    series: [67],
    
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
    labels: ["Progress"]
  };
  
  var progreso = new ApexCharts(document.querySelector("#progreso"), option);
  
  progreso.render();




















  





// grafico brush1
var options12 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'fb',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#ff3e1d'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['#ff3e1d']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chart1 = new ApexCharts(document.querySelector("#chart1"), options12);
  chart1.render();

  




  
  
  
  var optionsLine2 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'tw',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['rgb(253, 172, 52)'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['rgb(253, 172, 52)']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartLine2 = new ApexCharts(document.querySelector("#chartLine2"), optionsLine2);
  chartLine2.render();








  
  
  
  
  var optionsArea = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#9BCB3B'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['#9BCB3B']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea = new ApexCharts(document.querySelector("#chartArea"), optionsArea);
  chartArea.render();





  var optionsArea10 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#6610f2'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['#6610f2']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea10 = new ApexCharts(document.querySelector("#chartArea10"), optionsArea10);
  chartArea10.render();
  //   fin grafico brush1








































































  // grafico brush2
var options120 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'fb',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#ff3e1d'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['#ff3e1d']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chart2 = new ApexCharts(document.querySelector("#chart2"), options120);
  chart2.render();

  




  
  
  
  var optionsLine20 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'tw',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['rgb(253, 172, 52)'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['rgb(253, 172, 52)']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartLine3 = new ApexCharts(document.querySelector("#chartLine3"), optionsLine20);
  chartLine3.render();








  
  
  
  
  var optionsArea0 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#9BCB3B'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['#9BCB3B']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea1 = new ApexCharts(document.querySelector("#chartArea1"), optionsArea0);
  chartArea1.render();





  var optionsArea100 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#6610f2'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['#6610f2']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea2 = new ApexCharts(document.querySelector("#chartArea2"), optionsArea100);
  chartArea2.render();
  //   fin grafico brush2





























































  // grafico brush3
var options1201 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'fb',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#ff3e1d'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['#ff3e1d']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartLine4 = new ApexCharts(document.querySelector("#chartLine4"), options1201);
  chartLine4.render();

  




  
  
  
  var optionsLine201 = {
    series: [{
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'tw',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['rgb(253, 172, 52)'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['rgb(253, 172, 52)']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
      colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea3 = new ApexCharts(document.querySelector("#chartArea3"), optionsLine201);
  chartArea3.render();








  
  
  
  
  var optionsArea01 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#9BCB3B'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['#9BCB3B']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chartArea4 = new ApexCharts(document.querySelector("#chartArea4"), optionsArea01);
  chartArea4.render();





  var optionsArea1001 = {
    series: [{
    name:"horas",    
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'yt',
    group: 'social',
    type: 'area',
    height: 150
  },
  colors: ['#6610f2'],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
    colors:['#6610f2']                            
  },
  title: {
    text: 'Forecast',
    align: 'left',
    style: {
      color: '#cbcbe2'
    }    
  },
  grid:{
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
    categories: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul','Agos', 'Sept'],
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true,                           
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  },
  };

  var chart3 = new ApexCharts(document.querySelector("#chart3"), optionsArea1001);
  chart3.render();
  //   fin grafico brush3













































// grafico tipo PIE
  var opcionesPIE = {
    series: [25, 15, 44, 55, 41, 17],
    chart: {
    width: '100%',
    type: 'pie',
  },
  labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],  
  fill: {
    colors: ['#d2e8a8', '#b5d86f', '#9bcb3b','#6c8f26','#56731e','#415616']
  },  
  plotOptions: {    
    pie: {
      dataLabels: {
        offset: 1
      }
      
    }
  },
  title: {
  },
  dataLabels: {
    style: {
        fontSize: '10px',
        fontWeight: '200',
      },
    // formatter(val, opts) {
    //   const name = opts.w.globals.labels[opts.seriesIndex]
    //   return [name, val.toFixed(1) + '%']
    // }
  },
  legend: {
    show: false
  }
  };

  var pie = new ApexCharts(document.querySelector("#pie"), opcionesPIE);
  pie.render(); 



  //Fin grafico tipo PIE




























// BRUSH grafico
  var optionsbrush1 = {
    series: [{
      name: 'km',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'chart2',
    type: 'line',
    height: 230,
    toolbar: {
      autoSelected: 'pan',
      show: false
    }
  },
  colors: ['#9BCB3B'],
  stroke: {
    width: 10,
    curve: 'smooth',
    colors:['#6610f2']
  },
  dataLabels: {
    enabled: true
  },
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0
  },
  xaxis: {
    type: 'datetime'
  }
  };

  var brush1 = new ApexCharts(document.querySelector("#brush1"), optionsbrush1);
  brush1.render();





  var optionsLinebrush2 = {
    series: [{  
      name: 'km',
    data: [10, 41, 35, 51, 49, 62, 69, 91, 148, 10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148,10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
    chart: {
    id: 'chart1',
    height: 130,
    type: 'area',
    brush:{
      target: 'chart2',
      enabled: true
    },
    selection: {
      enabled: true,
      xaxis: {
        min: new Date('01  2022').getTime(),
        max: new Date('14 Aug 2022').getTime()
      }
    },
  },
  colors: ['#6610f2'],
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
    }
  },
  xaxis: {
    type: 'datetime',
    tooltip: {
      enabled: false
    }
  },
  yaxis: {
    tickAmount: 2
  }
  };

  var brush2 = new ApexCharts(document.querySelector("#brush2"), optionsLinebrush2);
  brush2.render();
  // fin BRUSH grafico








  




















