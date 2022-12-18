<div class="">
<div class="">
<div class="">
<div class="">
<div class="">
            <div id="spinner"></div>



            <!-- Footer -->
            <footer id="footer"> </footer>
            <!-- / Footer -->


            <div class="content-backdrop fade"></div>
          </div>
          <!-- Content wrapper -->
        </div>
        <!-- / Layout page -->
      </div>

      <!-- Overlay -->
      <div class="layout-overlay layout-menu-toggle"></div>

      <!-- Drag Target Area To SlideIn Menu On Small Screens -->
      <div class="drag-target"></div>
    </div>
  </div>
  <!-- / Layout wrapper -->
  <script src="../../JS/enviroment.js"></script>
  <!-- Core JS -->
  <!-- build:js assets/vendor/js/core.js -->
  <script src="../../assets/vendor/libs/jquery/jquery.js"></script>
  <script src="../../assets/vendor/libs/popper/popper.js"></script>
  <script src="../../assets/vendor/js/bootstrap.js"></script>
  <script src="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.js"></script>

  <script src="../../assets/vendor/libs/hammer/hammer.js"></script>
  <script src="../../assets/vendor/libs/i18n/i18n.js"></script>
  <script src="../../assets/vendor/libs/typeahead-js/typeahead.js"></script>

  <script src="../../assets/vendor/js/menu.js"></script>
  <!-- endbuild -->

  <!-- Vendors JS -->
  <script src="../../assets/vendor/libs/apex-charts/apexcharts.js"></script>

  <!-- Main JS -->
  <script src="../../assets/js/main.js"></script>

  <!-- Page JS -->
  <script src="../../assets/js/dashboards-analytics.js"></script>
  <script src="../../JS/classes.js"></script>
  <script src="../../JS/calculosPsicologia.js"></script>
  <script src="../../JS/User/perfil.js"></script>
  <script src="../../JS/User/user.js"></script>
  <script src="../../JS/dashboardGraficos.js"></script>
  <script>
      (function () {
        let tiempo = Date.now();
        let hoy = new Date(tiempo);
        let dia = hoy.getDate();
        if (dia < 10) {
          dia = "0" + dia;
        }
        let mes = hoy.getMonth() + 1;
        if (mes < 10) {
          mes = "0" + mes;
        }
        let ano = hoy.getFullYear();
        let fecha = ano + "-" + mes + "-" + dia;
        // console.log(fecha.toString());
        document.getElementById("fechaInicioEntreno").setAttribute("value", fecha);
      }())
    function beginNextMonday() {
      let checkNextMonday = document.getElementById("inicioProxLunes");
      if (checkNextMonday.checked) {
        document.getElementById("fechaInicioEntreno").disabled = true;
      } else {
        document.getElementById("fechaInicioEntreno").disabled = false;
      }
    }
  </script>



  <script>
    $(function () {
      $("#footer").load("footer.html");
      $("#modal").load("modal.html");
      $("#spinner").load("spinner.html");
    });
  </script>
  <!-- ============================================================== -->
  <!-- Google -->
  <!-- ============================================================== -->
  <!-- Google tag (gtag.js) -->
  <script async src="https://www.googletagmanager.com/gtag/js?id=G-93DR8GES25"></script>
  <script>
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-93DR8GES25');
  </script>
  <!-- ============================================================== -->
  <!-- Google -->
  <!-- ============================================================== -->

  <script src="../../JS/dashboard.js"></script>
