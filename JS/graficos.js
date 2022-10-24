


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
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
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
    width: 3,
    curve: 'smooth',
    colors:['#9BCB3B']
  },
  dataLabels: {
    enabled: false
  },
  fill: {
    opacity: 1,
  },
  markers: {
    size: 0
  },
  xaxis: {          
    type: 'datetime',
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
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

  var brush1 = new ApexCharts(document.querySelector("#brush1"), optionsbrush1);
  brush1.render();










  var optionsLinebrush2 = {
    series: [{  
      name: 'km',
    data: [[1327359600000,30.95],
    [1327446000000,31.34],
    [1327532400000,31.18],
    [1327618800000,31.05],
    [1327878000000,31.00],
    [1327964400000,30.95],
    [1328050800000,31.24],
    [1328137200000,31.29],
    [1328223600000,31.85],
    [1328482800000,31.86],
    [1328569200000,32.28],
    [1328655600000,32.10],
    [1328742000000,32.65],
    [1328828400000,32.21],
    [1329087600000,32.35],
    [1329174000000,32.44],
    [1329260400000,32.46],
    [1329346800000,32.86],
    [1329433200000,32.75],
    [1329778800000,32.54],
    [1329865200000,32.33],
    [1329951600000,32.97],
    [1330038000000,33.41],
    [1330297200000,33.27],
    [1330383600000,33.27],
    [1330470000000,32.89],
    [1330556400000,33.10],
    [1330642800000,33.73],
    [1330902000000,33.22],
    [1330988400000,31.99],
    [1331074800000,32.41],
    [1331161200000,33.05],
    [1331247600000,33.64],
    [1331506800000,33.56],
    [1331593200000,34.22],
    [1331679600000,33.77],
    [1331766000000,34.17],
    [1331852400000,33.82],
    [1332111600000,34.51],
    [1332198000000,33.16],
    [1332284400000,33.56],
    [1332370800000,33.71],
    [1332457200000,33.81],
    [1332712800000,34.40],
    [1332799200000,34.63],
    [1332885600000,34.46],
    [1332972000000,34.48],
    [1333058400000,34.31],
    [1333317600000,34.70],
    [1333404000000,34.31],
    [1333490400000,33.46],
    [1333576800000,33.59],
    [1333922400000,33.22],
    [1334008800000,32.61],
    [1334095200000,33.01],
    [1334181600000,33.55],
    [1334268000000,33.18],
    [1334527200000,32.84],
    [1334613600000,33.84],
    [1334700000000,33.39],
    [1334786400000,32.91],
    [1334872800000,33.06],
    [1335132000000,32.62],
    [1335218400000,32.40],
    [1335304800000,33.13],
    [1335391200000,33.26],
    [1335477600000,33.58],
    [1335736800000,33.55],
    [1335823200000,33.77],
    [1335909600000,33.76],
    [1335996000000,33.32],
    [1336082400000,32.61],
    [1336341600000,32.52],
    [1336428000000,32.67],
    [1336514400000,32.52],
    [1336600800000,31.92],
    [1336687200000,32.20],
    [1336946400000,32.23],
    [1337032800000,32.33],
    [1337119200000,32.36],
    [1337205600000,32.01],
    [1337292000000,31.31],
    [1337551200000,32.01],
    [1337637600000,32.01],
    [1337724000000,32.18],
    [1337810400000,31.54],
    [1337896800000,31.60],
    [1338242400000,32.05],
    [1338328800000,31.29],
    [1338415200000,31.05],
    [1338501600000,29.82],
    [1338760800000,30.31],
    [1338847200000,30.70],
    [1338933600000,31.69],
    [1339020000000,31.32],
    [1339106400000,31.65],
    [1339365600000,31.13],
    [1339452000000,31.77],
    [1339538400000,31.79],
    [1339624800000,31.67],
    [1339711200000,32.39],
    [1339970400000,32.63],
    [1340056800000,32.89],
    [1340143200000,31.99],
    [1340229600000,31.23],
    [1340316000000,31.57],
    [1340575200000,30.84],
    [1340661600000,31.07],
    [1340748000000,31.41],
    [1340834400000,31.17],
    [1340920800000,32.37],
    [1341180000000,32.19],
    [1341266400000,32.51],
    [1341439200000,32.53],
    [1341525600000,31.37],
    [1341784800000,30.43],
    [1341871200000,30.44],
    [1341957600000,30.20],
    [1342044000000,30.14],
    [1342130400000,30.65],
    [1342389600000,30.40],
    [1342476000000,30.65],
    [1342562400000,31.43],
    [1342648800000,31.89],
    [1342735200000,31.38],
    [1342994400000,30.64],
    [1343080800000,30.02],
    [1343167200000,30.33],
    [1343253600000,30.95],
    [1343340000000,31.89],
    [1343599200000,31.01],
    [1343685600000,30.88],
    [1343772000000,30.69],
    [1343858400000,30.58],
    [1343944800000,32.02],
    [1344204000000,32.14],
    [1344290400000,32.37],
    [1344376800000,32.51],
    [1344463200000,32.65],
    [1344549600000,32.64],
    [1344808800000,32.27],
    [1344895200000,32.10],
    [1344981600000,32.91],
    [1345068000000,33.65],
    [1345154400000,33.80],
    [1345413600000,33.92],
    [1345500000000,33.75],
    [1345586400000,33.84],
    [1345672800000,33.50],
    [1345759200000,32.26],
    [1346018400000,32.32],
    [1346104800000,32.06],
    [1346191200000,31.96],
    [1346277600000,31.46],
    [1346364000000,31.27],
    [1346709600000,31.43],
    [1346796000000,32.26],
    [1346882400000,32.79],
    [1346968800000,32.46],
    [1347228000000,32.13],
    [1347314400000,32.43],
    [1347400800000,32.42],
    [1347487200000,32.81],
    [1347573600000,33.34],
    [1347832800000,33.41],
    [1347919200000,32.57],
    [1348005600000,33.12],
    [1348092000000,34.53],
    [1348178400000,33.83],
    [1348437600000,33.41],
    [1348524000000,32.90],
    [1348610400000,32.53],
    [1348696800000,32.80],
    [1348783200000,32.44],
    [1349042400000,32.62],
    [1349128800000,32.57],
    [1349215200000,32.60],
    [1349301600000,32.68],
    [1349388000000,32.47],
    [1349647200000,32.23],
    [1349733600000,31.68],
    [1349820000000,31.51],
    [1349906400000,31.78],
    [1349992800000,31.94],
    [1350252000000,32.33],
    [1350338400000,33.24],
    [1350424800000,33.44],
    [1350511200000,33.48],
    [1350597600000,33.24],
    [1350856800000,33.49],
    [1350943200000,33.31],
    [1351029600000,33.36],
    [1351116000000,33.40],
    [1351202400000,34.01],
    [1351638000000,34.02],
    [1351724400000,34.36],
    [1351810800000,34.39],
    [1352070000000,34.24],
    [1352156400000,34.39],
    [1352242800000,33.47],
    [1352329200000,32.98],
    [1352415600000,32.90],
    [1352674800000,32.70],
    [1352761200000,32.54],
    [1352847600000,32.23],
    [1352934000000,32.64],
    [1353020400000,32.65],
    [1353279600000,32.92],
    [1353366000000,32.64],
    [1353452400000,32.84],
    [1353625200000,33.40],
    [1353884400000,33.30],
    [1353970800000,33.18],
    [1354057200000,33.88],
    [1354143600000,34.09],
    [1354230000000,34.61],
    [1354489200000,34.70],
    [1354575600000,35.30],
    [1354662000000,35.40],
    [1354748400000,35.14],
    [1354834800000,35.48],
    [1355094000000,35.75],
    [1355180400000,35.54],
    [1355266800000,35.96],
    [1355353200000,35.53],
    [1355439600000,37.56],
    [1355698800000,37.42],
    [1355785200000,37.49],
    [1355871600000,38.09],
    [1355958000000,37.87],
    [1356044400000,37.71],
    [1356303600000,37.53],
    [1356476400000,37.55],
    [1356562800000,37.30],
    [1356649200000,36.90],
    [1356908400000,37.68],
    [1357081200000,38.34],
    [1357167600000,37.75],
    [1357254000000,38.13],
    [1357513200000,37.94],
    [1357599600000,38.14],
    [1357686000000,38.66],
    [1357772400000,38.62],
    [1357858800000,38.09],
    [1358118000000,38.16],
    [1358204400000,38.15],
    [1358290800000,37.88],
    [1358377200000,37.73],
    [1358463600000,37.98],
    [1358809200000,37.95],
    [1358895600000,38.25],
    [1358982000000,38.10],
    [1359068400000,38.32],
    [1359327600000,38.24],
    [1359414000000,38.52],
    [1359500400000,37.94],
    [1359586800000,37.83],
    [1359673200000,38.34],
    [1359932400000,38.10],
    [1360018800000,38.51],
    [1360105200000,38.40],
    [1360191600000,38.07],
    [1360278000000,39.12],
    [1360537200000,38.64],
    [1360623600000,38.89],
    [1360710000000,38.81],
    [1360796400000,38.61],
    [1360882800000,38.63],
    [1361228400000,38.99],
    [1361314800000,38.77],
    [1361401200000,38.34],
    [1361487600000,38.55],
    [1361746800000,38.11],
    [1361833200000,38.59],
    [1361919600000,39.60],]
  }],
    chart: {
    id: 'chart1',
    height: 130,
    type: 'area',
    brush:{
      target: 'chart2',
      enabled: true,
      
    },
    selection: {
      enabled: true,
      fill: {       
        color:'#cbcbe2',
        opacity: 0.3,  
      },

      stroke: {
        color:'#fff',
        dasharray: 10,
        curve: 'smooth', 
        width: 1,
        opacity: 1                                     
      },

      xaxis: {
        min: new Date('26 Dec 2012').getTime(),
        max: new Date('26 Feb 2013').getTime()
      }
    },


  },
  colors: ['rgb(253, 172, 52)'],
  fill: {
    type: 'gradient',
    gradient: {
      opacityFrom: 0.91,
      opacityTo: 0.1,
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
    type: 'datetime',
    tooltip: {
      enabled: false
    },
    labels:{
      style:{
        colors:['#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2','#cbcbe2']
    }
    }
                                                             
  },
  yaxis: {
    show: true, 
    tickAmount: 3,                          
    labels:{
      style:{
      colors:['#cbcbe2',]
    }
    }                                                             
  }, 
  };

  var brush2 = new ApexCharts(document.querySelector("#brush2"), optionsLinebrush2);
  brush2.render();
  // fin BRUSH grafico








  




















