async function guardarDatosTest() {
  let distancia = parseFloat(document.getElementById("DistanciaEntreno").value)
  let desnivel = parseFloat(document.getElementById("DesnivelEntreno").value)
  let fcmaxima = parseFloat(document.getElementById("ppmmaxima").value)
  let fcprom = parseFloat(document.getElementById("ppmpromedio").value)
  let potenciamaxima = parseFloat(document.getElementById("potenciamax").value)
  let potenciaprom = parseFloat(document.getElementById("potenciapromedio").value)
  let velomax = parseFloat(document.getElementById("velocidadmaxima").value)
  let veloprom = parseFloat(document.getElementById("velocidadpromedio").value)
  let cadenciamaxima = parseFloat(document.getElementById("cadenciamax").value)
  let cadenciaprom = parseFloat(document.getElementById("cadenciapromedio").value)
  let tss = parseFloat(document.getElementById("tssreal").value)
  let ifr = parseFloat(document.getElementById("ifreal").value)
  let np = parseFloat(document.getElementById("npreal").value)
  let trabajo = parseFloat(document.getElementById("trabajoreal").value)
  try {
    let url = apiServer + "resultados/test"
    await fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        fkIdPerfilResultados: 1,
        fkObjetivoDeportivo: 1,
        evento: "test",
        fechaCompetencia: "2022-12-10",
        duracionEntrenamiento: 20,
        distanciaRecorrida: distancia,
        desnivelPositivoAcumu: desnivel,
        fcMax: fcmaxima,
        fcPromedio: fcprom,
        potenciaMax: potenciamaxima,
        potenciaPromedio: potenciaprom,
        velocidadMax: velomax,
        velocidadPromedio: veloprom,
        cadenciaMax: cadenciamaxima,
        cadenciaPromedio: cadenciaprom,
        tssReal: tss,
        ifReal: ifr,
        npReal: np,
        trabajoReal: trabajo,
        ippc: "00.00.00.00"
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((respuesta) => {
        console.log(respuesta);
      });
  } catch (e) {
    console.log("Datos del Test: ", e)
  }
}
