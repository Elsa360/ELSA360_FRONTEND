


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


const diferencia99Pesos = new Chart(
    document.getElementById('diferencia99Pesos'),{
    type: 'line',
    data: {
    labels: ['January', 'February','March','April', 'May','June'],
    datasets: [
        {
            data: [70, 71.2, 72.3, 73, , 73.5, 74],
            label: 'Kilos',  
            borderColor: 'rgb(40, 208, 148)',     
            tension: 0.1, 
            pointStyle: 'circle', 
            backgroundColor: 'rgb(40, 208, 148)',    
            fill: false,
            pointRadius: 4,
            pointHoverRadius: 8,
            pointHoverBorderWidth: 5,         
        },        
        ]
    },
    options: {}
});














var options = {
    chart: {
      height: 150,
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
  
  var progreso = new ApexCharts(document.querySelector("#progreso"), options);
  
  progreso.render();























  




















