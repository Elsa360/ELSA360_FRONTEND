<!DOCTYPE html>

<html lang="es" class="dark-style " dir="ltr" data-theme="theme-default" data-assets-path="../../assets/"
  data-template="vertical-menu-template">

<head>
  <meta name="viewport"
    content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-scale=1.0, maximum-scale=1.0">
  <meta charset="utf-8" />
  <meta name="keywords"
    content="ciclismo, entreno, entrenamiento, ciclismo de ruta, nutriciòn, plan nutricional, fortalecimiento físico, acondicionamiento físico, rendimiento deportivo">
  <meta name="description" content="En ELSA encuentras tu entrenamiento de ciclismo integral y personalizado">
  <meta name="author" content="ELSA360 - E Learning Sports Academy | FND sas">
  <meta name="copyright" content="ELSA360 - E Learning Sports Academy | FND sas">
  <meta name="robots" content="noindex">
  <title> Dashboard - ELSA360</title>

  <!-- Favicon -->
  <link rel="icon" type="image/x-icon" href="../../assets/img/favicon/E-de-ELSA.ico" />

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap"
    rel="stylesheet" />

  <!-- Icons -->
  <link rel="stylesheet" href="../../assets/vendor/fonts/boxicons.css" />
  <link rel="stylesheet" href="../../assets/vendor/fonts/fontawesome.css" />
  <link rel="stylesheet" href="../../assets/vendor/fonts/flag-icons.css" />

  <!-- Core CSS -->
  <link rel="stylesheet" href="../../assets/vendor/css/rtl/core.css" class="template-customizer-core-css" />
  <link rel="stylesheet" href="../../assets/vendor/css/rtl/theme-default.css" class="template-customizer-theme-css" />
  <link rel="stylesheet" href="../../assets/css/demo.css" />

  <!-- Vendors CSS -->
  <link rel="stylesheet" href="../../assets/vendor/libs/perfect-scrollbar/perfect-scrollbar.css" />
  <link rel="stylesheet" href="../../assets/vendor/libs/typeahead-js/typeahead.css" />
  <link rel="stylesheet" href="../../assets/vendor/libs/apex-charts/apex-charts.css" />


  <!-- Page CSS -->

  <!-- Helpers -->
  <script src="../../assets/vendor/js/helpers.js"></script>

  <!--! Template customizer & Theme config files MUST be included after core stylesheets and helpers.js in the <head> section -->
  <!--? Template customizer: To hide customizer set displayCustomizer value false in config.js.  -->
  <script src="../../assets/vendor/js/template-customizer.js"></script>
  <!--? Config:  Mandatory theme config file contain global vars & default theme options, Set your preferred theme option in this file.  -->
  <script src="../../assets/js/config.js"></script>

  <script src="../../JS/middleware.js"> validateLogin() </script>


  <!-- <script src="../../JS/User/index.js"></script> -->

</head>

<body>
  <!-- Layout wrapper -->
  <div class="layout-wrapper layout-content-navbar">
    <div class="layout-container">


      <?php include("inc-aside-layout-menu.php"); ?>


      <!-- Layout container -->
      <div class="layout-page">

        <!-- Navbar -->
        <nav
          class="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
          id="layout-navbar">
          <div class="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
            <a class="nav-item nav-link px-0 me-xl-4" href="javascript:void(0)">
              <i class="bx bx-menu bx-sm"></i>
            </a>
          </div>

          <div class="navbar-nav-right d-flex align-items-center" id="navbar-collapse">

            <!-- Search -->
            <div class="navbar-nav align-items-center">
              <div class="nav-item navbar-search-wrapper mb-0">
                <a class="nav-item nav-link search-toggler px-0" href="javascript:void(0);">
                  <i class="bx bx-search bx-sm"></i>
                  <span class="d-none d-md-inline-block text-muted">Buscar...</span>
                </a>
              </div>
            </div>
            <!-- /Search -->



            <ul class="navbar-nav flex-row align-items-center ms-auto">
              <!-- Language -->
              <!-- <li class="nav-item dropdown-language dropdown me-2 me-xl-0">
                  <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                    <i class="fi fi-us fis rounded-circle fs-3 me-1"></i>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end">
                    <li>
                      <a class="dropdown-item" href="javascript:void(0);" data-language="en">
                        <i class="fi fi-us fis rounded-circle fs-4 me-1"></i>
                        <span class="align-middle">English</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0);" data-language="fr">
                        <i class="fi fi-fr fis rounded-circle fs-4 me-1"></i>
                        <span class="align-middle">France</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0);" data-language="de">
                        <i class="fi fi-de fis rounded-circle fs-4 me-1"></i>
                        <span class="align-middle">German</span>
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="javascript:void(0);" data-language="pt">
                        <i class="fi fi-pt fis rounded-circle fs-4 me-1"></i>
                        <span class="align-middle">Portuguese</span>
                      </a>
                    </li>
                  </ul>
                </li> -->
              <!--/ Language -->

              <!-- Style Switcher -->
              <!-- <li class="nav-item me-2 me-xl-0">
                  <a class="nav-link style-switcher-toggle hide-arrow" href="javascript:void(0);">
                    <i class="bx bx-sm"></i>
                  </a>
                </li> -->
              <!--/ Style Switcher -->

              <!-- Quick links  -->
              <li class="nav-item dropdown-shortcuts navbar-dropdown dropdown me-2 me-xl-0">
                <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown"
                  data-bs-auto-close="outside" aria-expanded="false">
                  <i class="bx bx-grid-alt bx-sm"></i>
                </a>


                <div class="dropdown-menu dropdown-menu-end py-0">
                  <div class="dropdown-menu-header border-bottom">
                    <div class="dropdown-header d-flex align-items-center py-3">
                      <h5 class="text-body mb-0 me-auto">Atajos</h5>
                      <!-- <a href="javascript:void(0)" class="dropdown-shortcuts-add text-body" data-bs-toggle="tooltip" data-bs-placement="top" title="Add shortcuts">
                          <i class="bx bx-sm bx-plus-circle"></i>
                        </a> -->
                    </div>
                  </div>


                  <div class="dropdown-shortcuts-list scrollable-container">
                    <div class="row row-bordered overflow-visible g-0">


                      <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i class="bx bx-home-circle fs-4"></i>
                        </span>
                        <a href="dashboard.html" class="stretched-link">Dashboard</a>
                        <small class="text-muted mb-0">Panel</small>
                      </div>


                      <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <!-- <i class="bx bx-calendar fs-4"></i> -->
                          <i class="bx bx-comment-detail"></i>
                        </span>
                        <a href="pages-recomendaciones.html" class="stretched-link">Recomendaciones</a>
                        <small class="text-muted mb-0">Mejora tus hábitos</small>
                      </div>
                    </div>


                    <div class="row row-bordered overflow-visible g-0">
                      <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i class="bx bx-line-chart fs-4"></i>
                        </span>
                        <a href="app-graficosBasicos.html" class="stretched-link">Gráficos</a>
                        <small class="text-muted mb-0">Informes de datos</small>
                      </div>


                      <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i class="bx bx-cycling fs-4"></i>
                        </span>
                        <a href="app-planDeportivo.html" class="stretched-link">Plan de ciclismo</a>
                        <small class="text-muted mb-0">Ciclismo + PF</small>
                      </div>
                    </div>


                    <div class="row row-bordered overflow-visible g-0">
                      <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i class="bx bx-food-menu fs-4"></i>
                        </span>
                        <a href="app-planNutricional.html" class="stretched-link">Plan nutricional</a>
                        <small class="text-muted mb-0">Come sano</small>
                      </div>


                      <div class="dropdown-shortcuts-item col">
                        <span class="dropdown-shortcuts-icon bg-label-secondary rounded-circle mb-2">
                          <i class="bx bx-user-plus fs-4"></i>
                        </span>
                        <a href="app-planPsicologico.html" class="stretched-link">Plan psicológico</a>
                        <small class="text-muted mb-0">Mente fuerte</small>
                      </div>
                    </div>


                  </div>
                </div>
              </li>
              <!-- Quick links -->


              <!-- Notification -->
              <!-- <li class="nav-item dropdown-notifications navbar-dropdown dropdown me-3 me-xl-1">
                  <a
                    class="nav-link dropdown-toggle hide-arrow"
                    href="javascript:void(0);"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                  >
                    <i class="bx bx-bell bx-sm"></i>
                    <span class="badge bg-danger rounded-pill badge-notifications">5</span>
                  </a>
                  <ul class="dropdown-menu dropdown-menu-end py-0">
                    <li class="dropdown-menu-header border-bottom">
                      <div class="dropdown-header d-flex align-items-center py-3">
                        <h5 class="text-body mb-0 me-auto">Notification</h5>
                        <a
                          href="javascript:void(0)"
                          class="dropdown-notifications-all text-body"
                          data-bs-toggle="tooltip"
                          data-bs-placement="top"
                          title="Mark all as read"
                          ><i class="bx fs-4 bx-envelope-open"></i
                        ></a>
                      </div>
                    </li>
                    <li class="dropdown-notifications-list scrollable-container">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item list-group-item-action dropdown-notifications-item">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                <img src="../../assets/img/avatars/1.png" alt class="w-px-40 h-auto rounded-circle" />
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">Congratulation Lettie 🎉</h6>
                              <p class="mb-0">Won the monthly best seller gold badge</p>
                              <small class="text-muted">1h ago</small>
                            </div>
                            <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"
                                ><span class="badge badge-dot"></span
                              ></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                ><span class="bx bx-x"></span
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-action dropdown-notifications-item">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                <span class="avatar-initial rounded-circle bg-label-danger">CF</span>
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">Charles Franklin</h6>
                              <p class="mb-0">Accepted your connection</p>
                              <small class="text-muted">12hr ago</small>
                            </div>
                            <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"
                                ><span class="badge badge-dot"></span
                              ></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                ><span class="bx bx-x"></span
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                <img src="../../assets/img/avatars/2.png" alt class="w-px-40 h-auto rounded-circle" />
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">New Message ✉️</h6>
                              <p class="mb-0">You have new message from Natalie</p>
                              <small class="text-muted">1h ago</small>
                            </div>
                            <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"
                                ><span class="badge badge-dot"></span
                              ></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                ><span class="bx bx-x"></span
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-action dropdown-notifications-item">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                <span class="avatar-initial rounded-circle bg-label-success"
                                  ><i class="bx bx-cart"></i
                                ></span>
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">Whoo! You have new order 🛒</h6>
                              <p class="mb-0">ACME Inc. made new order $1,154</p>
                              <small class="text-muted">1 day ago</small>
                            </div>
                            <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"
                                ><span class="badge badge-dot"></span
                              ></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                ><span class="bx bx-x"></span
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                <img src="../../assets/img/avatars/9.png" alt class="w-px-40 h-auto rounded-circle" />
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">Application has been approved 🚀</h6>
                              <p class="mb-0">Your ABC project application has been approved.</p>
                              <small class="text-muted">2 days ago</small>
                            </div>
                            <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"
                                ><span class="badge badge-dot"></span
                              ></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                ><span class="bx bx-x"></span
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                <span class="avatar-initial rounded-circle bg-label-success"
                                  ><i class="bx bx-pie-chart-alt"></i
                                ></span>
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">Monthly report is generated</h6>
                              <p class="mb-0">July monthly financial report is generated</p>
                              <small class="text-muted">3 days ago</small>
                            </div>
                            <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"
                                ><span class="badge badge-dot"></span
                              ></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                ><span class="bx bx-x"></span
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                <img src="../../assets/img/avatars/5.png" alt class="w-px-40 h-auto rounded-circle" />
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">Send connection request</h6>
                              <p class="mb-0">Peter sent you connection request</p>
                              <small class="text-muted">4 days ago</small>
                            </div>
                            <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"
                                ><span class="badge badge-dot"></span
                              ></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                ><span class="bx bx-x"></span
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-action dropdown-notifications-item">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                <img src="../../assets/img/avatars/6.png" alt class="w-px-40 h-auto rounded-circle" />
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">New message from Jane</h6>
                              <p class="mb-0">Your have new message from Jane</p>
                              <small class="text-muted">5 days ago</small>
                            </div>
                            <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"
                                ><span class="badge badge-dot"></span
                              ></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                ><span class="bx bx-x"></span
                              ></a>
                            </div>
                          </div>
                        </li>
                        <li class="list-group-item list-group-item-action dropdown-notifications-item marked-as-read">
                          <div class="d-flex">
                            <div class="flex-shrink-0 me-3">
                              <div class="avatar">
                                <span class="avatar-initial rounded-circle bg-label-warning"
                                  ><i class="bx bx-error"></i
                                ></span>
                              </div>
                            </div>
                            <div class="flex-grow-1">
                              <h6 class="mb-1">CPU is running high</h6>
                              <p class="mb-0">CPU Utilization Percent is currently at 88.63%,</p>
                              <small class="text-muted">5 days ago</small>
                            </div>
                            <div class="flex-shrink-0 dropdown-notifications-actions">
                              <a href="javascript:void(0)" class="dropdown-notifications-read"
                                ><span class="badge badge-dot"></span
                              ></a>
                              <a href="javascript:void(0)" class="dropdown-notifications-archive"
                                ><span class="bx bx-x"></span
                              ></a>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </li>
                    <li class="dropdown-menu-footer border-top">
                      <a href="javascript:void(0);" class="dropdown-item d-flex justify-content-center p-3">
                        View all notifications
                      </a>
                    </li>
                  </ul>
                </li> -->
              <!--/ Notification -->





              <!-- User -->
              <li class="nav-item navbar-dropdown dropdown-user dropdown">
                <a class="nav-link dropdown-toggle hide-arrow" href="javascript:void(0);" data-bs-toggle="dropdown">
                  <div class="avatar avatar-online">
                    <img src="../../assets/img/avatars/1.jpg" alt class="w-px-40 h-auto rounded-circle" />
                  </div>
                </a>


                <ul class="dropdown-menu dropdown-menu-end">


                  <li>
                    <a class="dropdown-item" href="pages-account.html">
                      <div class="d-flex">


                        <!-- Avatar -->
                        <div class="flex-shrink-0 me-3">
                          <div class="avatar avatar-online">
                            <img src="../../assets/img/avatars/1.jpg" alt class="w-px-40 h-auto rounded-circle" />
                          </div>
                        </div>


                        <!-- Nombre -->
                        <div class="flex-grow-1">
                          <span class="fw-semibold d-block">Manuel Peralta</span>
                          <small class="text-muted">Deportista</small>
                        </div>
                      </div>
                    </a>
                  </li>

                  <!-- Divisor -->
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>


                  <!-- Mi perfil -->
                  <li>
                    <a class="dropdown-item" href="pages-account.html">
                      <i class="bx bx-user me-2"></i>
                      <span class="align-middle">Mi perfil</span>
                    </a>
                  </li>


                  <li>
                    <a class="dropdown-item" href="pages-account-security.html">
                      <i class="bx bx-cog me-2"></i>
                      <span class="align-middle">Configuración</span>
                    </a>
                  </li>


                  <li>
                    <a class="dropdown-item" href="pages-account-connections.html">
                      <i class="bx bx-transfer-alt me-2"></i>
                      <span class="align-middle">Conexión de dispositivos</span>
                    </a>
                  </li>


                  <!-- <li>
                      <a class="dropdown-item" href="app-user-view-notifications.html">
                        <span class="d-flex align-items-center align-middle">
                          <i class="flex-shrink-0 bx bx-bell me-2"></i>
                          <span class="flex-grow-1 align-middle">Notificaciones</span>
                          <span class="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">4</span>
                        </span>
                      </a>
                    </li> -->


                  <!-- Divisor -->
                  <li>
                    <div class="dropdown-divider"></div>
                  </li>



                  <!-- <li>
                      <a class="dropdown-item" href="pages-help-center-landing.html">
                        <i class="bx bx-support me-2"></i>
                        <span class="align-middle">Ayuda</span>
                      </a>
                    </li> -->



                  <!-- <li>
                    <a class="dropdown-item" href="pages-faq.html">
                      <i class="bx bx-help-circle me-2"></i>
                      <span class="align-middle">FAQ</span>
                    </a>
                  </li> -->


                  <!-- Divisor -->
                  <!-- <li>
                    <div class="dropdown-divider"></div>
                  </li> -->


                  <li>
                    <a class="dropdown-item" onclick="logout()" href="javascript:void(0);">
                      <i class="bx bx-power-off me-2"></i>
                      <span class="align-middle">Cerrar sesión</span>
                    </a>
                  </li>

                </ul>
              </li>
              <!--/ User -->
            </ul>
          </div>

          <!-- Search Small Screens -->
          <div class="navbar-search-wrapper search-input-wrapper d-none">
            <input type="text" class="form-control search-input container-xxl border-0" placeholder="Buscar..."
              aria-label="Search..." />
            <i class="bx bx-x bx-sm search-toggler cursor-pointer"></i>
          </div>
        </nav>
        <!-- / Navbar -->


































        <!-- Content wrapper -->
        <div class="content-wrapper">






          <!-- Content -->
          <div class="container-fluid flex-grow-1 container-p-y">
            <div class="row">



              <div class="col-lg-8 mb-3 order-0">
                <div class="card">
                  <div class="d-flex align-items-end row">
                    <div class="col-sm-9">
                      <div class="card-body" style="padding-right: 10px; padding-left:10px">
                        <h5 class="card-title text-success">Bienvenid@ a tu panel de control! </h5>
                        <p class="mb-2">
                          Desde aquí puedes acceder a tu entreno diario. <br>
                          Hemos desarrollado una versión detallada y una avanzada, conoce las dos y entrena con la que
                          mejor te sientas.
                        </p>

                        <span style="font-size: 16px; font-weight:500; color: #cbcbe2;">Ir a mi entreno diario: &nbsp;
                        </span>
                        <a href="app-planDeportivo.html" class="btn btn-sm btn-success mb-2"
                          style="margin-right: 5px;">Detallado</a>
                        <a href="app-planDeportivoResumen.html" class="btn btn-sm btn-success mb-2"
                          style="margin-right: 5px;">Avanzada</a>
                        <a href="train-cycling-data.html" class="btn btn-sm btn-label-success mb-2">Agregar datos del
                          entreno de hoy</a>
                      </div>
                    </div>


                    <div class="col-sm-3 text-center text-sm-left">
                      <div class="card-body pb-0 px-0 px-md-4">
                        <img src="../../assets/img/illustrations/Biker2.png" width="110%" alt="View Badge User"
                          data-app-dark-img="illustrations/Biker2.png" data-app-light-img="illustrations/Biker2.png" />
                      </div>
                    </div>


                  </div>
                </div>
              </div>


              <div class="col-lg-4 col-md-4">
                <div class="row">
                  <div class="col-lg-6 col-md-12 col-6 mb-3">
                    <div class="card">
                      <div class="card-body mb-2"
                        style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                        <div class="card-title d-flex align-items-start justify-content-between mb-3">
                          <div>
                            <small class="d-block mb-0"
                              style="line-height: 16px; font-size: 15px; font-weight: 400;">Fecha inicial:</small>
                            <small class="card-title mb-0 text-success"
                              style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="fechaInicialDashboard">16/01/2023</small>
                          </div>
                          <div class="avatar flex-shrink-0 mb-0">
                            <img src="../../assets/img/icons/unicons/calendar.png" alt="Calendar" class="rounded" />
                          </div>
                        </div>

                        <small class="d-block mb-0"
                          style="line-height: 16px; font-size: 15px; font-weight: 400;">Objetivo: </small>
                        <small class="card-title text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="fechaObjetivoDashboard">16/06/2023</small>


                        <div class="mt-3">
                          <small class="d-block mb-0"
                            style="line-height: 16px; font-size: 15px; font-weight: 400;">Entreno:</small>
                          <small class="card-title mb-0 text-success"
                            style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="semanasDashboard">0 <small>Semanas</small>
                          </small>
                        </div>

                      </div>
                    </div>
                  </div>

                  <div class="col-lg-6 col-md-12 col-6 mb-3">
                    <div class="card">
                      <div class="card-body pb-2">
                        <span class=" fw-semibold mb-1">Disponibilidad semanal: &nbsp; <small
                            class="card-title text-success mb-1" style="font-size: 18px;" id="hrSemanalDashboard"> 0 </small><small>
                            hrs</small></span>

                        <div id="VolumenSemanal"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>







              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 20px; padding-top: 20px;padding-right:12px; padding-left: 16px;">
                    <div class="card-title d-flex align-items-start justify-content-between mb-0">
                      <small class="d-block mb-0" style="line-height: 16px; font-size: 16px; font-weight: 400;">Sesiones
                        totales:</small>
                      <div class="avatar flex-shrink-0 mb-0">
                        <img src="../../assets/img/icons/unicons/bikeGraficos.png" alt="Biker" class="rounded" />
                      </div>
                    </div>

                    <small class="card-title text-success mb-3"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="sesionesDashboard">0</small>
                    <small class="text-success fw-semibold"></small>
                  </div>
                </div>
              </div>






              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class=" d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0"
                          style="line-height: 16px; font-size: 15px; font-weight: 400;">Duración total:</small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" data-bs-toggle="tooltip"
                          data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                          title=" <span> h : m : s</span>" id="duracionTotalDashboard">00:00:00
                        </small>
                      </div>

                      <div class="avatar flex-shrink-0 mb-0">
                        <img src="../../assets/img/icons/unicons/clock.png" alt="Clock" class="rounded" />
                      </div>
                    </div>


                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;">Promedio
                      de sesión: </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" data-bs-toggle="tooltip"
                      data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                      title=" <span> h : m : s</span>" id="promedioSesionDashboard">00:00:00
                    </small>
                  </div>
                </div>
              </div>







              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class="card-title d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0"
                          style="line-height: 16px; font-size: 15px; font-weight: 400;">Distancia total:</small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="distanciaTotalDashboard">0 <small>Km</small>
                        </small>
                      </div>
                      <div class="avatar flex-shrink-0 mb-0">
                        <img src="../../assets/img/icons/unicons/distanciaGraficos.png" alt="Distance"
                          class="rounded" />
                      </div>
                    </div>

                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;">Promedio
                      de sesión: </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="distPromedioSesionDashboard">0 <small>Km</small></small>
                  </div>
                </div>
              </div>









              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class="card-title d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0"
                          style="line-height: 16px; font-size: 15px; font-weight: 400;">Desnivel positivo:</small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="desnivelDashboard">0 <small>m</small>
                        </small>
                      </div>
                      <div class="avatar flex-shrink-0">
                        <img src="../../assets/img/icons/unicons/desnivel.png" alt="PositiveSlope" class="rounded" />
                      </div>
                    </div>


                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;">Promedio
                      de sesión: </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="desnivelPromedioDashboard">0 <small>m</small></small>
                  </div>
                </div>
              </div>






              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class="card-title d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0"
                          style="line-height: 16px; font-size: 15px; font-weight: 400;">Calorías totales:</small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;">0 <small>Cal</small>
                        </small>
                      </div>
                      <div class="avatar flex-shrink-0">
                        <img src="../../assets/img/icons/unicons/caloriasGraficos.png" alt="Calories" class="rounded" />
                      </div>
                    </div>


                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;">Promedio
                      de sesión: </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;">0 <small>Cal</small></small>
                  </div>
                </div>
              </div>











              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 8px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class="card-title d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <Small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400; ">RPE
                          Total:</Small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top:0px; font-size: 15px; font-weight: 600;">0
                          <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalRPE"
                            style="padding: 0 0; cursor: pointer;"><i class='bx bx-info-circle'></i>
                          </button>
                        </small>
                      </div>

                      <div class="avatar flex-shrink-0">
                        <img src="../../assets/img/icons/unicons/BorgGraficos.png" alt="wallet info" class="rounded" />
                      </div>
                    </div>



                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;">Promedio
                      de sesión: </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;">0 </small>
                  </div>
                </div>
              </div>












































































              <!-- Total Revenue -->
              <div class="col-12 col-lg-8 order-2 order-md-3 order-lg-2 mb-3">
                <div class="card">
                  <div class="row row-bordered g-0">
                    <div class="col-12 text-center">
                      <div id="DistAcumYPromSem1" class="pt-4"></div>
                      <p class="mb-2 mt-1" style="font-size: 12px;">*Haz clic en el nombre de la variable que quieras ver en el gráfico.  </p>
                    </div>
                    
                  </div>
                </div>
              </div>



              <!--/ Total Revenue -->
              <div class="col-12 col-md-8 col-lg-4 order-3 order-md-2">
                <div class="row">




                  <div class="col-12 mb-3">
                    <div class="card">
                      <div class="card-body">
                        <div class="d-flex justify-content-between">
                          <div class="card-info">
                            <h5 class="card-text">Requerimiento de calorías <small class="mt-1 mb-0"><span
                                  class="badge bg-label-warning"
                                  style="font-size: 13px; font-weight: 600;">Diarias</span></small> </h5>

                            <div class="d-flex align-items-end mb-3">
                              <h6 class="card-title mb-0 me-2">GET = <span class="text-warning" id="GETdashboard"> 0
                                  Cal</span></h6>
                            </div>


                            <div class="d-flex align-items-end mb-3">
                              <h6 class="card-title mb-0 me-2">CET = <span class="text-warning" id="CET"> 0
                                  Cal</span></h6>
                            </div>

                            <div>
                              <a href="app-planNutricional.html" class="btn btn-sm btn-label-warning ">Completar
                                calorías</a>
                            </div>




                          </div>
                          <div class="card-icon">
                            <img src="../../assets/img/icons/unicons/calorias.png" alt="Calories" style="width: 37px;">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>






                  <div class="col-6 mb-3">
                    <div class="card">
                      <div class="card-body" style="padding-top: 15px; padding-bottom:15px" ;>
                        <p class="text-center" style="font-size:15px; font-weight:500; margin-bottom: 2px;">
                          Recomendaciones</p>
                        <a href="pages-recom-basicas-para-rodar.html"
                          class="btn btn-sm btn-label-success d-block mb-2">Para las salidas</a>
                        <a href="pages-recom-entreno-ADD.html" class="btn btn-sm btn-label-success d-block mb-2">Para
                          los entrenos</a>
                        <a href="pages-recom-mecanic.html" class="btn btn-sm btn-label-success d-block mb-2">Mecánica
                          básica</a>
                      </div>
                    </div>
                  </div>



                  <div class="col-6 mb-3">
                    <div class="card">
                      <div class="card-body" style="padding-right:12px; padding-left: 16px;">
                        <div class=" d-flex align-items-start justify-content-between mb-2">
                          <div>
                            <small class="d-block mb-0"
                              style="line-height: 16px; font-size: 15px; font-weight: 400;">Consumo de agua: <button type="button"
                              class="btn p-0" data-bs-toggle="modal" data-bs-target="#modalHidratacion"
                              style="padding: 0;"><i class='bx bx-info-circle'></i></button> </small>
                            <small class="card-title mb-0 text-success"
                              style="margin-top: 0px; font-size: 15px; font-weight: 600;"><small></small>
                            </small>
                          </div>

                          <div class="avatar flex-shrink-0 mb-0">
                            <span class="badge bg-label-danger rounded p-2">
                              <i class="fa-solid fa-bottle-water" style="font-size: 25px;"></i>
                            </span>
                          </div>
                        </div>



                        <div class="d-flex align-items-end mb-0">
                          <h4 class="card-title mb-2 me-2" id="requerimientoLiquidos">0 <small class="text-secondary" style="font-size:11px">L</small> </h4>
                        </div>
                        <small id="promedioVasosAgua"></small>

                        <h6 class="mb-1 mt-1"><span class="badge bg-label-danger"
                            style="font-size: 13px; font-weight: 600; width: 95%;">Mínimos diarios</span></h6>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

            </div>







            <div class="row">


              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class=" d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                          data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                          title=" <span>Frecuencia Cardíaca Máxima de todos tus entrenos </span>">FC Máxima:</small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="fmaxdashboard"> 0 <small>PPM</small>
                        </small>
                      </div>

                      <div class="avatar flex-shrink-0 mb-0">
                        <img src="../../assets/img/icons/unicons/HeartRateGraficos.png" alt="HeartRate"
                          class="rounded" />
                      </div>
                    </div>


                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                      data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                      title=" <span>Frecuencia Cardíaca promedio de todos tus entrenos </span>">FC Promedio de sesión:
                    </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="fcPromedioDashboard">0 <small>PPM</small>
                    </small>
                  </div>
                </div>
              </div>






              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class=" d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                          data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                          title=" <span>Potencia absoluta Máxima de todos tus entrenos </span>">Potencia Abs.
                          Max:</small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="pMaxDashboard">0  <small>W</small>
                        </small>
                      </div>

                      <div class="avatar flex-shrink-0 mb-0">
                        <img src="../../assets/img/icons/unicons/PowerGraficos.png" alt="Power" class="rounded" />
                      </div>
                    </div>


                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                      data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                      title=" <span> Potencia absoluta promedio de todos tus entrenos </span>">Potencia Abs. Promedio:
                    </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="potAbsPromedioDashboard">0 <small>W</small>
                    </small>
                  </div>
                </div>
              </div>






              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class=" d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                          data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                          title=" <span>Potencia relativa Máxima de todos tus entrenos </span>">Potencia Rel.
                          Max:</small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="pRelMaxDashboard">0 <small>W</small>
                        </small>
                      </div>

                      <div class="avatar flex-shrink-0 mb-0">
                        <img src="../../assets/img/icons/unicons/PowerGraficos.png" alt="Power" class="rounded" />
                      </div>
                    </div>


                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                      data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                      title="<span> Potencia relativa promedio de todos tus entrenos </span>">Potencia Rel. Promedio:
                    </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="potRelPromedioDashboard">0 <small>W</small>
                    </small>
                  </div>
                </div>
              </div>






              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class=" d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                          data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                          title=" <span>Velocidad Máxima de todos tus entrenos </span>">Velocidad Max:</small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="vMaxDashboard">0 <small>Km/h</small>
                        </small>
                      </div>

                      <div class="avatar flex-shrink-0 mb-0">
                        <img src="../../assets/img/icons/unicons/SpeedGraficos.png" alt="Speed" class="rounded" />
                      </div>
                    </div>


                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                      data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                      title=" <span>Velocidad promedio de todos tus entrenos </span>">Velocidad Promedio: </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="velPromedioDashboard">0 <small>Km/h</small>
                    </small>
                  </div>
                </div>
              </div>






              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-3">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class=" d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                          data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                          title=" <span>Cadencia Máxima  de todos tus entrenos </span>">Cadencia Max:</small>
                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="cMaxDashboard">0 <small>RPM</small>
                        </small>
                      </div>

                      <div class="avatar flex-shrink-0 mb-0">
                        <img src="../../assets/img/icons/unicons/bielasGraficos.png" alt="Power" class="rounded" />
                      </div>
                    </div>


                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                      data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                      title=" <span>Cadencia promedio de todos tus entrenos </span>">Cadencia Promedio: </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="cadePromedioDashboard">0 <small>RPM</small>
                    </small>
                  </div>
                </div>
              </div>






              <div class="col-xl-2 col-lg-2 col-md-4 col-sm-4 col-6 mb-2">
                <div class="card">
                  <div class="card-body"
                    style="padding-bottom: 10px; padding-top: 10px; padding-right:12px; padding-left: 16px;">
                    <div class=" d-flex align-items-start justify-content-between mb-2">
                      <div>
                        <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                          data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                          title=" <span> Trabajo realizado en todos tus entrenos </span>">Trabajo total:</small>

                        <small class="card-title mb-0 text-success"
                          style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="trabajoDashboard">0 <small>KJ</small>
                        </small>
                      </div>

                      <div class="avatar flex-shrink-0 mb-0">
                        <img src="../../assets/img/icons/unicons/work.png" alt="Clock" class="rounded" />
                      </div>
                    </div>


                    <small class="d-block mb-0" style="line-height: 16px; font-size: 15px; font-weight: 400;"
                      data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                      title=" <span> Trabajo promedio de todos tus entrenos </span>">Promedio de sesión: </small>
                    <small class="card-title mb-0 text-success"
                      style="margin-top: 0px; font-size: 15px; font-weight: 600;" id="trabajoPromedioDashboard">0 <small>KJ</small>
                    </small>
                  </div>
                </div>
              </div>

            </div>



















            <div class="row">
              <div class="card col-lg-12 mb-3">
                <div class="card accordion-item active">
                  <h2 class="accordion-header" id="headingOne">
                    <button type="button" class="accordion-button text-success" data-bs-toggle="collapse"
                      data-bs-target="#accordionZonasEntreno" aria-expanded="true" aria-controls="accordionOne"
                      style="font-size: 20px; font-weight: 600;">
                      Conoce las Zonas de entrenamiento
                    </button>
                  </h2>

                  <div id="accordionZonasEntreno" class="accordion-collapse collapse"
                    data-bs-parent="#accordionZonasEntreno">
                    <div class="accordion-body">
                      <table class="table table-sm text-center table-striped">
                        <thead>
                          <tr>
                            <th>Zona</th>
                            <th>Nombre</th>
                            <th>Objetivo</th>
                            <th>Test del habla</th>
                          </tr>
                        </thead>
                        <tbody class="table-border-bottom-0">
                          <tr>
                            <td class="text-nowrap"><strong>Zona 1</strong></td>
                            <td>Recuperación activa</td>
                            <td>Regenerar, aumentar y acelerar la recuperación.</td>
                            <td>
                              Puedes hablar y respirar normalmente.
                            </td>
                          </tr>
                          <tr>
                            <td class="text-nowrap"><strong>Zona 2</strong></td>
                            <td>Resistencia aeróbica</td>
                            <td>Adquirir y mejorar la resistencia aeróbica (fondo) como base para lograr la mejora del
                              rendimiento y tolerar mayores intensidades.</td>
                            <td>
                              Puedes hablar, pero te cuesta más, tienes oxígeno pero con una pequeña dificultad para
                              respirar.
                            </td>
                          </tr>
                          <tr>
                            <td class="text-nowrap"> <strong>Zona 3</strong></td>
                            <td>Tempo o Sub-Umbral</td>
                            <td>Adquirir la forma deportiva y aumentar la potencia aeróbica. Generar mayor adaptación a
                              las subidas y ganar desnivel.
                              Mejorar la circulación sanguínea. </td>
                            <td>
                              Hablar se comienza a dificultar. Puedes completar 1 o 2 frases, te falta el aire
                              moderadamente.
                            </td>
                          </tr>
                          <tr>
                            <td class="text-nowrap"><strong>Zona 4</strong></td>
                            <td>Umbral</td>
                            <td>Mejorar la resistencia específica (Subidas, tolerancia a la fatiga, contra reloj, etc.)
                            </td>
                            <td>
                              Frases rotas. Respiración débil.
                            </td>
                          </tr>
                          <tr>
                            <td class="text-nowrap"><strong>Zona 5</strong></td>
                            <td>VO2 Máx</td>
                            <td>Mejorar capacidad anaeróbica en subidas, soportar ritmos intensos, cambios de ritmo,
                              ataques al final y soportar ritmo de contrincantes.</td>
                            <td>
                              Frases entrecortadas. Respiración entrecortada.
                            </td>
                          </tr>
                          <tr>
                            <td class="text-nowrap"><strong>Zona 6</strong></td>
                            <td>Capacidad Anaeróbica</td>
                            <td>Definir/finalizar tramos o competencias. Responder ataques. Tolerar fatiga. </td>
                            <td>
                              No se puede hablar. Dificultad para respirar alta.
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>





































































            <div class="row mb-3">
              <!-- Order Statistics -->
              <div class="col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                  <div class="card-header d-flex align-items-center justify-content-between pb-1"
                    data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                    title=" <span>
                    Zonas calculadas de acuerdo a tu umbral de potencia funcional. <br> Es decir, la máxima potencia media que eres capaz de mantener
                          en un estado casi estable sin fatigarte. El FTP (Functional Threshold Power) es el 95% de la potencia máxima media de tu test de 20 minutos. </span>">
                    <h5 class="card-title m-0">Zonas según tu <span class="text-success">FTP</span>
                      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalZonasFTP"
                        style="padding: 0 0; cursor: pointer;"><i class='bx bx-info-circle'></i>
                      </button>
                    </h5>

                    <a href="app-planDeportivoTEST.html" class="btn-sm btn-label-success">Actualizar FTP</a>
                  </div>

                  <div class="d-flex align-items-center justify-content-between mb-0" style="margin-left: 24px;">

                    <p style="margin: 0; font-weight: 500;" data-bs-toggle="tooltip" data-bs-offset="0,4"
                      data-bs-placement="bottom" data-bs-html="true" title=" <span>
                      FTP Absoluto </span>">
                      FTP Abs. = <span class="text-success" id="ftpdashboard">0</span> <small class="text-muted">W</small> </p>

                    <p style="margin: 0; margin-right: 20px; font-weight: 500;" data-bs-toggle="tooltip"
                      data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true" title=" <span>
                      FTP Relativo </span>">
                      FTP Rel. = <span class="text-success" id="ftpReldashboard">0</span> <small class="text-muted">W</small> </p>
                  </div>




                  <div class="divider" style="margin: 0;">
                    <div class="divider-text"><i class='bx bxs-battery-charging text-success'
                        style="font-size: 25px;"></i></i></div>
                  </div>





                  <div class="card-body" style="padding-top: 2px;">

                    <ul class="p-0 m-0">
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z1Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">
                              < 55% </small>
                                <h6 class="mb-0">Zona 1</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success">
                                < </span> <span class="text-success" id="zona1ftp"> 0</span></h6>
                            <small class="text-muted">W</small>

                          </div>
                        </div>
                      </li>
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z2Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1"> 56% - 72%</small>
                            <h6 class="mb-0">Zona 2</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="zona2ftp">0 - 0</span></h6>
                            <small class="text-muted">W</small>

                          </div>
                        </div>
                      </li>
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z3Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1"> 73% - 82% </small>
                            <h6 class="mb-0">Zona 3</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="zona3ftp">0 - 0</span></h6>
                            <small class="text-muted">W</small>

                          </div>
                        </div>
                      </li>
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z4Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">83% - 96%</small>
                            <h6 class="mb-0">Zona 4</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="zona4ftp">0 - 0</span></h6>
                            <small class="text-muted">W</small>

                          </div>
                        </div>
                      </li>





                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z5Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">97% - 102%</small>
                            <h6 class="mb-0">Zona 5</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="zona5ftp">0 - 0</span></h6>
                            <small class="text-muted">W</small>

                          </div>
                        </div>
                      </li>





                      <li class="d-flex">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z6Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1"> 103% - 160% </small>
                            <h6 class="mb-0">Zona 6</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"> <span class="text-success" id="zona6ftp">0 - 0</span></h6>
                            <small class="text-muted">W</small>

                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!--/ Order Statistics -->






























              <div class="col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                  <div class="card-header d-flex align-items-center justify-content-between pb-1">
                    <h5 class="card-title m-0">Zonas según tu <span class="text-success">FTHR</span> </h5>

                    <a href="app-planDeportivoTEST.html" class="btn-sm btn-label-success">Actualizar FTHR </a>
                  </div>

                  <div class="mb-0" style="margin-left: 20px;">
                    <p style="margin: 0; font-weight: 500;">FTHR = <span class="text-success" id="fhtrdashboard">0 </span> <small
                        class="text-muted">PPM</small>
                      <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalZonasFC"
                        style="padding: 0 0; cursor: pointer;"><i class='bx bx-info-circle' data-bs-toggle="tooltip"
                          data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true"
                          title=" <span>
                        Zonas calculadas de acuerdo a tu umbral de frecuencia cardíaca. <br> Es decir, tu FTHR (Functional Threshold Heart Rate) es la frecuencia cardíaca promedio de tu test.  </span>"></i>
                      </button>
                    </p>
                  </div>




                  <div class="divider" style="margin: 0;">
                    <div class="divider-text">
                      <i class="fa-solid fa-heart-pulse text-success" style="font-size: 20px;"></i>
                    </div>
                  </div>





                  <div class="card-body" style="padding-top: 2px;">


                    <ul class="p-0 m-0">
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z1Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">
                              < 55% </small>
                                <h6 class="mb-0">Zona 1</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success">
                                < </span> <span class="text-success" id="zona1fhtr">0</span></h6>
                            <small class="text-muted">PPM</small>

                          </div>
                        </div>
                      </li>
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z2Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1"> 56% - 76%</small>
                            <h6 class="mb-0">Zona 2</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="zona2fhtr">0 - 0</span></h6>
                            <small class="text-muted">PPM</small>

                          </div>
                        </div>
                      </li>
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z3Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1"> 77% - 88% </small>
                            <h6 class="mb-0">Zona 3</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="zona3fhtr">0 - 0</span></h6>
                            <small class="text-muted">PPM</small>

                          </div>
                        </div>
                      </li>
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z4Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">89% - 93%</small>
                            <h6 class="mb-0">Zona 4</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="zona4fhtr">0 - 0</span></h6>
                            <small class="text-muted">PPM</small>

                          </div>
                        </div>
                      </li>





                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z5Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">94% - 102%</small>
                            <h6 class="mb-0">Zona 5</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="zona5fhtr">0 - 0</span></h6>
                            <small class="text-muted">PPM</small>

                          </div>
                        </div>
                      </li>





                      <li class="d-flex">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Z6Graficos.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1"> 103% - 125% </small>
                            <h6 class="mb-0">Zona 6</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"> <span class="text-success" id="zona6fhtr">0 - 0</span> </h6>
                            <small class="text-muted">PPM</small>

                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>












              <!-- Transactions -->
              <div class="col-md-6 col-lg-4 mb-3">
                <div class="card h-100">
                  <div class="card-header d-flex align-items-center justify-content-between pb-1"
                    data-bs-toggle="tooltip" data-bs-offset="0,4" data-bs-placement="bottom" data-bs-html="true" title=" 
                  <span>
                    Los test de FTP o FTHR son vitales para actualizar tu entreno periodicamente, llevar el control de tu progreso y ver cómo está tu nivel entre periodos. 
                  </span>">
                    <h5 class="card-title m-0">Fechas de tus <span class="text-success">TESTs</span> <button
                        type="button" class="btn" data-bs-toggle="modal" data-bs-target="#modalTest"
                        style="padding: 0 0; cursor: pointer;"><i class='bx bx-info-circle'></i>
                      </button> </h5>

                    <a href="app-planDeportivoTEST.html" class="btn-sm btn-label-success">Hacer Test</a>
                  </div>

                  <!-- <div class="mb-0" style="margin-left: 24px;">
                    <p style="margin: 0; font-weight: 500;">FTHR = <span class="text-success"> 160 </span> <small class="text-muted">PPM</small> </p>
                  </div> -->




                  <div class="divider" style="margin: 0;">
                    <div class="divider-text">
                      <i class='bx bx-cycling text-success' style="font-size: 22px;"></i>
                    </div>
                  </div>





                  <div class="card-body" style="padding-top: 2px;">


                    <ul class="p-0 m-0">
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Inicio.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1"> Semana 1 </small>
                            <h6 class="mb-0">Test inicial</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="testinicialdashboard"></span> </h6>
                          </div>
                        </div>
                      </li>
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Check.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">Semana 5</small>
                            <h6 class="mb-0">Test de control #1</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="testcontrol1dashboard"></span> </h6>
                          </div>
                        </div>
                      </li>
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Check.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">Semana 9</small>
                            <h6 class="mb-0">Test de control #2</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="testcontrol2dashboard"></span></h6>
                          </div>
                        </div>
                      </li>
                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Check.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">Semana 13</small>
                            <h6 class="mb-0">Test de control #3</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="testcontrol3dashboard"></span></h6>
                          </div>
                        </div>
                      </li>





                      <li class="d-flex mb-4 pb-1">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Check.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1">Semana 17</small>
                            <h6 class="mb-0">Test de control #4</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"><span class="text-success" id="testcontrol4dashboard"></span></h6>
                          </div>
                        </div>
                      </li>





                      <li class="d-flex">
                        <div class="avatar flex-shrink-0 me-3">
                          <img src="../../assets/img/icons/unicons/Meta.png" alt="User" class="rounded" />
                        </div>
                        <div class="d-flex w-100 flex-wrap align-items-center justify-content-between gap-2">
                          <div class="me-2">
                            <small class="text-muted d-block mb-1"> Semana 21 </small>
                            <h6 class="mb-0">Competencia</h6>
                          </div>
                          <div class="user-progress d-flex align-items-center gap-1">
                            <h6 class="mb-0"> <span class="text-success" id="testcontrol5dashboard"></span></h6>


                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!--/ Transactions -->






































              <div class="col-md-4 col-lg-4 mb-md-0 mb-3">
                <div class="card">
                  <div class="card-header d-flex align-items-center justify-content-between"
                    style="padding-bottom: 7px; padding-right: 20px; padding-left: 20px;">
                    <h5 class="card-title m-0 me-2">Número de semanas por meso-ciclo</h5>
                  </div>
                  <div class="table-responsive text-nowrap">
                    <table class="table table-sm table-borderless text-center mb-3">
                      <thead>
                        <tr>
                          <th>Meso-ciclo</th>
                          <th>N° semanas</th>
                        </tr>
                      </thead>
                      <tbody class="table-border-bottom-0">
                        <tr>
                          <td><strong>Adaptación</strong></td>
                          <td style="padding-right: 3px; padding-left: 3px; text-align: center;"><span
                              class="badge bg-label-success text-uppercase"
                              style="font-size: 14px; font-weight:600" id="preparacionDashboard">0</span></td>
                        </tr>
                        <tr>
                          <td><strong>Específico 1</strong></td>
                          <td style="padding-right: 3px; padding-left: 3px; text-align: center;"><span
                              class="badge bg-label-success text-uppercase"
                              style="font-size: 14px; font-weight:600" id="desasrrollador1Dashboard">0</span></td>
                        </tr>
                        <tr>
                          <td> <strong>Específico 2</strong></td>
                          <td style="padding-right: 3px; padding-left: 3px; text-align: center;"><span
                              class="badge bg-label-success text-uppercase" style="font-size: 14px; font-weight:600" id="desasrrollador2Dashboard">0
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Pre-competitivo</strong></td>
                          <td style="padding-right: 3px; padding-left: 3px; text-align: center;"><span
                              class="badge bg-label-success text-uppercase" style="font-size: 14px; font-weight:600" id="precompetitivoDashboard">0
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Competitivo</strong></td>
                          <td style="padding-right: 3px; padding-left: 3px; text-align: center;"><span
                              class="badge bg-label-success text-uppercase" style="font-size: 14px; font-weight:600" id="competitivoDashboard">0
                          </td>
                        </tr>
                        <tr>
                          <td><strong>Transición</strong></td>
                          <td style="padding-right: 3px; padding-left: 3px; text-align: center;"><span
                              class="badge bg-label-success text-uppercase" style="font-size: 14px; font-weight:600" id="transitorioDashboard">0
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                </div>

              </div>










            </div>








































            <!-- BOTONES MODALES -->
            <!-- ---------------------------------------------------------------------------------------------------------------------------------- -->
            <div class="row">
              <div class="col-12">

                <button type="button" class="btn btn-success" data-bs-toggle="modal"
                  data-bs-target="#disponibilidadSemanalModal" id="btndisponibilidadsemanal">Disponibilidad semanal</button>

                <button type="button" class="btn btn-success" data-bs-toggle="modal"
                  data-bs-target="#InicioEntrenoModal" id="btnInicioEntreno">Inicio de entreno</button>

                <button type="button" class="btn btn-success" data-bs-toggle="modal"
                  data-bs-target="#controlPeso">Actualizar peso</button>

                <div id="modal"></div>

              </div>
            </div>
            <!-- ---------------------------------------------------------------------------------------------------------------------------------- -->
            <!-- FIN  BOTONES MODALES -->















            <!-- modal Inicio de entreno 1 -->
            <div class="modal fade animate__animated fadeIn" data-bs-backdrop="static" id="InicioEntrenoModal"
              tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">

                <div class="modal-content">
                  <div class="modal-body">
                    <form id="EntrenoSemanal" class="row g-3" novalidate="novalidate">
                      <div class="col-md-8 fechaInicio">
                        <h4> <span class="concepto">¿Qué día quieres empezar tu entrenamiento?</span> </h4>

                        <input class="form-control mb-1" type="date" id="fechaInicioEntreno" disabled />

                        <p class="inicioEntrenoDisclaimer" data-bs-toggle="tooltip" data-bs-offset="0,2"
                          data-bs-placement="bottom" data-bs-html="true"
                          title="<i class='bx bx-calendar bx-xs' ></i> <span>Será más fácil llevar tu control semana a semana</span>"
                          </p>

                          <input class="form-check-input" type="checkbox" value="" id="inicioProxLunes"
                            onclick="beginNextMonday()" checked />
                          <label class="form-check-label" for="inicioProxLunes"
                            style="font-size: 16px; font-weight: 600;"><small class="text-success">RECOMENDADO </small>
                            - Empezar el próximo lunes </label>

                      </div>


                      <div class="col-md-8 fechasCompetencias" style="margin-top: 40px; margin-bottom:25px">
                        <h4> <span class="concepto">¿Cual es tu objetivo?</span> </h4>

                        <button type="button" onclick="guardarEntreno()" class="btn btn-label-info fechaCompetencia1"
                          style="font-weight: 500; font-size:17px">Solo entrenar</button>

                        ó

                        <!-- <button type="button" class="btn btn-label-primary fechaCompetencia2" style="font-weight:500; font-size:17px">Un fondo o competencia</button>                      accordion-button -->


                        <div id="accordionIcon" class="accordion mt-3 accordion-without-arrow">

                          <div class="accordion-item card">
                            <h2 class="accordion-header text-body d-flex justify-content-between" id="accordionIconOne">
                              <button type="button" class="      collapsed btn btn-label-primary fechaCompetencia2"
                                data-bs-toggle="collapse" data-bs-target="#accordionIcon-1"
                                aria-controls="accordionIcon-1" style="font-weight:500; font-size:17px;">
                                Un Fondo / Competencia
                              </button>
                            </h2>

                            <div id="accordionIcon-1" class="accordion-collapse collapse"
                              data-bs-parent="#accordionIcon">
                              <div class="accordion-body">

                                <div class="formCompetencia"></div>
                                <form class="event-form pt-0" id="eventForm" onsubmit="return false">
                                  <div class="mb-3" style="text-align: left;">
                                    <label class="form-label" for="eventTitle">Nombre del fondo, prueba o
                                      competencia</label>
                                    <input type="text" class="form-control" id="eventTitle" name="eventTitle"
                                      placeholder="Nombre del evento" />
                                  </div>

                                  <div class="mb-3" style="text-align: left;">
                                    <label class="form-label" for="eventLabel">Categoría</label>
                                    <select class="select2 select-event-label form-select" id="eventLabel"
                                      name="eventLabel">
                                      <!-- <option data-label="primary" value="Business" selected>Business</option> -->
                                      <option data-label="danger" value="Personal" selected>Competencia</option>
                                      <!-- <option data-label="warning" value="Family">Family</option>
                                              <option data-label="success" value="Holiday">Holiday</option>
                                              <option data-label="info" value="ETC">ETC</option> -->
                                    </select>
                                  </div>

                                  <div class="mb-3" style="text-align: left;">
                                    <label class="form-label" for="eventStartDate">Fecha del evento</label>
                                    <input type="date" class="form-control" id="eventStartDate" name="eventStartDate"
                                      placeholder="Día del evento" />
                                  </div>

                                  <!-- <div class="mb-3">
                                            <label class="form-label" for="eventEndDate">Fecha final</label>
                                            <input type="text" class="form-control" id="eventEndDate" name="eventEndDate" placeholder="Día que finaliza el evento"/>
                                          </div> -->

                                  <!-- <div class="mb-3">
                                            <label class="switch">
                                              <input type="checkbox" class="switch-input allDay-switch" />
                                              <span class="switch-toggle-slider">
                                                <span class="switch-on"></span>
                                                <span class="switch-off"></span>
                                              </span>
                                              <span class="switch-label">All Day</span>
                                            </label>
                                          </div> -->

                                  <!-- <div class="mb-3" style="text-align: left;">
                                            <label class="form-label" for="eventURL">Página del evento</label>
                                            <input
                                              type="url"
                                              class="form-control"
                                              id="eventURL"
                                              name="eventURL"
                                              placeholder="https://www.elsa360.com"
                                            />
                                          </div> -->

                                  <!-- <div class="mb-3 select2-primary">
                                            <label class="form-label" for="eventGuests">Add Guests</label>
                                            <select
                                              class="select2 select-event-guests form-select"
                                              id="eventGuests"
                                              name="eventGuests"
                                              multiple>
                                              <option data-avatar="1.png" value="Jane Foster">Jane Foster</option>
                                              <option data-avatar="3.png" value="Donna Frank">Donna Frank</option>
                                              <option data-avatar="5.png" value="Gabrielle Robertson">Gabrielle Robertson</option>
                                              <option data-avatar="7.png" value="Lori Spears">Lori Spears</option>
                                              <option data-avatar="9.png" value="Sandy Vega">Sandy Vega</option>
                                              <option data-avatar="11.png" value="Cheryl May">Cheryl May</option>
                                            </select>
                                          </div> -->

                                  <div class="mb-3" style="text-align: left;">
                                    <label class="form-label" for="eventLocation">Lugar</label>
                                    <input type="text" class="form-control" id="eventLocation" name="eventLocation"
                                      placeholder="¿Dónde es el evento?" />
                                  </div>

                                  <div class="mb-3" style="text-align: left;">
                                    <label class="form-label" for="eventLocation">¿Qué tiempo quieres lograr? <i
                                        class='bx bx-stopwatch'></i></label>
                                    <input type="text" class="form-control" id="eventGoal1" name="eventLocation"
                                      placeholder="hh:mm:ss" />
                                  </div>

                                  <div class="mb-3" style="text-align: left;">
                                    <label class="form-label" for="eventLocation">¿Qúe distancia esperas recorrer? <i
                                        class='bx bx-trip'></i></label>
                                    <input type="number" step="0.1" class="form-control" id="eventGoal2"
                                      name="eventLocation" placeholder="117 Km" />
                                  </div>

                                  <div class="mb-3" style="text-align: left;">
                                    <label class="form-label" for="eventLocation">¿En qué puesto quieres terminar? <i
                                        class="fa-solid fa-ranking-star"></i></label>
                                    <input type="text" class="form-control" id="eventGoal3" name="eventLocation"
                                      placeholder="1° / 2° / Top 5" />
                                  </div>

                                  <div class="mb-3" style="text-align: left;">
                                    <label class="form-label" for="eventDescription">Comentarios</label>
                                    <textarea class="form-control" name="eventDescription" id="eventDescription"
                                      placeholder="¿Algún comentario adicional?"></textarea>
                                  </div>

                                  <div class="mb-3 d-flex justify-content-sm-between justify-content-start my-4">
                                    <div class="fechaComp">
                                      <button type="button" class="btn btn-label-success btn-add-event me-sm-3 me-1"
                                        onclick="guardarEntreno()">Definir fecha de prueba</button>
                                    </div>

                                  </div>
                                </form>

                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                      <div class="col-md-8 fechasCompetencias">

                        <button type="button" onclick="guardarEntreno()" hidden
                          class="btn btn-primary me-sm-3 me-1 mt-3 btn-reset mt-3" data-bs-dismiss="modal"
                          aria-label="Close" style="width: 100%;" id="buttonSaveDate">
                          Definir fechas
                        </button>
                      </div>

                    </form>
                  </div>

                </div>
              </div>
            </div>


























            <!-- Modal Disponibilidad semanal-->
            <div class="modal fade" id="disponibilidadSemanalModal" aria-labelledby="modalToggleLabel"
              data-bs-backdrop="static" tabindex="-1" style="display: none" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                  <div class="modal-body" style="padding-right: 10px; padding-left:10px;">

                    <div class="text-center mb-4">
                      <h3>Disponibilidad semanal</h3>
                      <h6 class="mb-0">Te recomendamos que esta semana entrenes: </h6>
                      <h5> Minimo: <span class="text-success"> 3 hrs </span> &nbsp; - &nbsp; Maximo: <span
                          class="text-success"> 6 hrs</span></h5>
                    </div>

                    <form id="EntrenoSemanal" class="row text-center" onsubmit="" novalidate="novalidate">

                      <div class="text-center mb-1">
                        <p class="mb-1">Número de horas que tengo para entrenar cada día de la semana.</p>
                      </div>

                      <div class="col pt-0" style="padding-right: 4px; padding-left:4px;">
                        <label for="dia1">L</label>
                        <input type="number" id="dia1" class="form-control dias text-center" placeholder="L" min="0"
                          max="8" style="padding: 7px 1px;" />
                      </div>

                      <div class="col" style="padding-right: 4px; padding-left:4px;">
                        <label for="dia1">M</label>
                        <input type="number" id="dia2" class="form-control dias text-center" placeholder="M" min="0"
                          max="8" style="padding: 7px 1px;" />
                      </div>

                      <div class="col" style="padding-right: 4px; padding-left:4px;">
                        <label for="dia1">M</label>
                        <input type="number" id="dia3" class="form-control dias text-center" placeholder="M" min="0"
                          max="8" style="padding: 7px 1px;" />
                      </div>

                      <div class="col" style="padding-right: 4px; padding-left:4px;">
                        <label for="dia1">J</label>
                        <input type="number" id="dia4" class="form-control dias text-center" placeholder="J" min="0"
                          max="8" style="padding: 7px 1px;" />
                      </div>

                      <div class="col" style="padding-right: 4px; padding-left:4px;">
                        <label for="dia1">V</label>
                        <input type="number" id="dia5" class="form-control dias text-center" placeholder="V" min="0"
                          max="8" style="padding: 7px 1px;" />
                      </div>

                      <div class="col" style="padding-right: 4px; padding-left:4px;">
                        <label for="dia1">S</label>
                        <input type="number" id="dia6" class="form-control dias text-center" placeholder="S" min="0"
                          max="8" style="padding: 7px 1px;" />
                      </div>

                      <div class="col" style="padding-right: 4px; padding-left:4px;">
                        <label for="dia1">D</label>
                        <input type="number" id="dia7" class="form-control dias text-center" placeholder="D" min="0"
                          max="8" style="padding: 7px 1px;" />
                      </div>

                      <div class="text-center mb-1">
                        <p class="mt-3">Disponibilidad total (hrs) semanal
                          <br> <span id="horasEntrenamiento" class="badge bg-label-success"
                            style="font-size: 20px;">0</span>
                        </p>

                        <p> N° de días que voy a entrenar en la semana semana
                          <br> <span id="DisponibilidadDias" class="badge bg-label-warning"
                            style="font-size: 20px;">0</span>
                        </p>

                      </div>

                    </form>
                  </div>

                  <div class="col-12 text-center" style="margin-bottom: 30px;">
                    <button class="btn btn-success" data-bs-target="#confirmacionDisponibilidadSem"
                      data-bs-toggle="modal" data-bs-dismiss="modal">Enviar mi disponibilidad</button>
                  </div>
                </div>
              </div>
            </div>



















            <!-- Modal confirmación disponibilidad semanal-->
            <div class="modal fade" id="confirmacionDisponibilidadSem" data-bs-backdrop="static" aria-hidden="true"
              aria-labelledby="modalToggleLabel2" tabindex="-1">
              <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">

                  <div class="modal-body text-center">¿Quieres confirmar esta disponibilidad de tiempo para entrenar
                    estos días en la semana?</div>

                  <div class="text-center mb-1">
                    <p>Disponibilidad total (hrs) semanal
                      <br> <span id="horasEntrenamiento1" class="badge bg-label-success"
                        style="font-size: 20px;">0</span>
                    </p>

                    <p> N° de días que voy a entrenar en la semana
                      <br> <span id="DisponibilidadDias1" class="badge bg-label-warning"
                        style="font-size: 20px;">0</span>
                    </p>

                  </div>

                  <div class="modal-footer">
                    <button class="btn btn-secondary" data-bs-target="#disponibilidadSemanalModal"
                      data-bs-toggle="modal" data-bs-dismiss="modal">Volver</button>
                    <form action="">
                      <button type="button" class="btn btn-success" data-bs-toggle="modal"
                        data-bs-target="#confirmarDisponibilidad" onclick="confirmarDisponibilidad()">Confirmar
                        disponibilidad</button>
                    </form>
                  </div>

                </div>
              </div>
            </div>






            <!-- modal Inicio de entreno 1 -->
            <div class="modal fade animate__animated fadeIn" data-bs-backdrop="static" id="controlPeso" tabindex="-1"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">

                <div class="modal-content">

                  <div class="modal-body">

                    <div class="text-center mb-0">
                      <h3 class="mb-0">Actualiza tu peso</h3>
                      <p>Para poder adaptar tu entreno y plan nutricional</p>
                    </div>

                    <form id="" class="row g-3" onsubmit="" novalidate="novalidate">


                      <div class="col-md-8 fechasCompetencias">
                        <input class="form-control" type="number" id="actualizarPeso" name="Peso"
                          placeholder="¿Cuanto pesas hoy (kg)? (Ej:72,7)" step="0.1" min="0">
                      </div>


                      <div class="col-md-8 fechasCompetencias">

                        <button type="button" class="btn btn-success me-sm-3 me-1 mt-3 btn-reset mt-3"
                          data-bs-dismiss="modal" aria-label="Close" style="width: 100%;" onclick="guardarPeso()">
                          Actualizar peso
                        </button>
                      </div>

                    </form>
                  </div>

                </div>
              </div>
            </div>
            <!-- / Content -->








            <div class="modal fade" id="modalHidratacion" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-lg" role="document">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="modalCenterTitle">Como saber si estoy bien hidratad@</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-body text-center" style="padding-bottom: 5px;">
                    <div class="row">
                      <div class="col">
                        <p style="margin-bottom: 0px;">
                          Puedes controlar tus niveles de hidratación verificando el color de tu orina cada vez que
                          vayas al baño. <br> <br>

                          Un sintoma de deshidratación es que tu orina tenga un olor más fuerte de lo normal. <br><br>

                          <span class="concepto"> TEN EN CUANTA:</span> Algunas vitaminas o suplementos pueden cambiar
                          el color de tu orina durante unas horas. Así que si estás tomando
                          algún suplemento, quiza, este método no sea el más fiable. <br><br>

                          En ELSA creemos que es conveniente tener un rango de seguridad para no llegar al límite de
                          ninguno de los dos lados, por eso, sugerimos manejar los límites de tu peso saludable entre
                          un
                          <span class="concepto">IMC de 19,5 y 23,9</span>
                        </p>
                      </div>
                    </div>
                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <!-- <button type="button" class="btn btn-primary">Save changes</button> -->
                  </div>
                </div>
              </div>
            </div>















            <div class="modal fade" id="modalRPE" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header mb-0">
                    <h5 class="modal-title mb-0" id="modalCenterTitle">Escala de esfuerzo percibido (RPE)</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>


                  <div class="modal-body text-center" style="padding-bottom: 5px; padding-top: 10px;">
                    <div class="row">
                      <div class="col">
                        <img src="../../assets/img/pages/RPE.png" class="mb-3" alt="" width="100%">
                        <p style="margin-bottom: 0px;">
                          La escala de Borg (conocida como RPE por sus siglas en inglés Rating of Perceived Exertion)
                          es un instrumento
                          que fue creado con el propósito de medir el esfuerzo y exigencia de cada entrenamiento, así
                          de sencillo. <br><br>

                          También conocida como la escala de Esfuerzo Percibido, mide, como su nombre lo indica, la
                          percepción de esfuerzo,
                          la intensidad y volumen de la actividad física que tuvo el deportista de ese entrenamiento
                          en específico.
                        </p>
                      </div>
                    </div>

                  </div>




                  <div class="modal-footer">
                    <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div>



























            <!-- <div class="modal fade" id="modalZonasFC" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header mb-0">
                    <h5 class="modal-title mb-0" id="modalCenterTitle">Zonas según tu <span class="text-success">FTHR</span></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-body text-center" style="padding-bottom: 5px; padding-top: 10px;">
                    <div class="row">
                      <div class="col">                        
                        <p style="margin-bottom: 0px;">
                          Zonas calculadas de acuerdo a tu umbral de frecuencia cardíaca. <br> Es decir, la frecuencia cardíaca promedio de tu test FTHR (Functional Threshold Heart Rate) 
                        </p>
                      </div>
                    </div>

                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div> -->








            <!-- <div class="modal fade" id="modalZonasFTP" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header mb-0">
                    <h5 class="modal-title mb-0" id="modalCenterTitle">Zonas según tu <span class="text-success">FTP</span></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-body text-center" style="padding-bottom: 5px; padding-top: 10px;">
                    <div class="row">
                      <div class="col">                        
                        <p style="margin-bottom: 0px;">
                          Zonas calculadas de acuerdo a tu umbral de potencia funcional. <br> Es decir, la máxima potencia que eres capaz de mantener
                          en un estado casi estable sin fatigarte. El FTP (Functional Threshold Power) es el 95% de la potencia máxima de tu test. 
                        </p>
                      </div>
                    </div>

                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div> -->














            <!-- <div class="modal fade" id="modalTest" tabindex="-1" aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered" role="document">
                <div class="modal-content">
                  <div class="modal-header mb-0">
                    <h5 class="modal-title mb-0" id="modalCenterTitle">Test de <span class="text-success">FTP / FTHR</span></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>

                  <div class="modal-body text-center" style="padding-bottom: 5px; padding-top: 10px;">
                    <div class="row">
                      <div class="col">                        
                        <p style="margin-bottom: 0px;">
                          Zonas calculadas de acuerdo a tu umbral de potencia funcional. <br> Es decir, la máxima potencia que eres capaz de mantener
                          en un estado casi estable sin fatigarte durante 20 minutos. Es el 95% de la potencia máxima de tu test FTP (Functional Threshold Power)
                        </p>
                      </div>
                    </div>

                  </div>

                  <div class="modal-footer">
                    <button type="button" class="btn btn-label-secondary" data-bs-dismiss="modal">Cerrar</button>
                  </div>
                </div>
              </div>
            </div> -->































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
</body>

</html>