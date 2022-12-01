[33mcommit d1ff213ca568046632cb178874d92613157371eb[m[33m ([m[1;36mHEAD -> [m[1;32mmaster[m[33m)[m
Author: ElsaApp360 <programadorelsa360@gmail.com>
Date:   Sat Nov 26 10:43:45 2022 -0500

    Ajuste modales dashboard

[1mdiff --git a/assets/vendor/css/pages/page-auth.css b/assets/vendor/css/pages/page-auth.css[m
[1mindex bb2f205..5121f01 100644[m
[1m--- a/assets/vendor/css/pages/page-auth.css[m
[1m+++ b/assets/vendor/css/pages/page-auth.css[m
[36m@@ -322,7 +322,7 @@[m
     align-items: center;[m
 }[m
 [m
[31m-.modal{[m
[32m+[m[32m/* .modal{[m
     width: 570px;[m
     background-color: #ffffff;[m
     border-radius: 2px;[m
[36m@@ -356,7 +356,7 @@[m
     transform: translateY(0%);[m
     overflow: hidden;[m
     padding-bottom: 5px;[m
[31m-}[m
[32m+[m[32m} */[m
 [m
 .modal-close{[m
     transform: translateY(-200%);[m

[33mcommit 2058eb159cadc3c59e0a338b5ece7f3fec0a7bdb[m
Author: ElsaApp360 <programadorelsa360@gmail.com>
Date:   Fri Nov 25 16:34:32 2022 -0500

    Spinner en registro funcional

[1mdiff --git a/assets/vendor/css/pages/page-auth.css b/assets/vendor/css/pages/page-auth.css[m
[1mindex fd38b1e..bb2f205 100644[m
[1m--- a/assets/vendor/css/pages/page-auth.css[m
[1m+++ b/assets/vendor/css/pages/page-auth.css[m
[36m@@ -13,6 +13,17 @@[m
   justify-content: center;[m
   overflow: hidden;[m
 }[m
[32m+[m
[32m+[m[32m.spinnerLayout{[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  top: 0;[m
[32m+[m[32m  left: 0;[m
[32m+[m[32m  z-index: 99999999;[m
[32m+[m[32m  background: rgba(0,0,0,0.8);[m
[32m+[m[32m}[m
[32m+[m
 .authentication-wrapper.authentication-cover {[m
   align-items: flex-start;[m
 }[m

[33mcommit cd3e8ee7ece69c7c5110c8ab43955085f8a103f5[m
Author: ElsaApp360 <programadorelsa360@gmail.com>
Date:   Fri Nov 4 20:18:20 2022 -0500

    Graficos semanales

[1mdiff --git a/assets/vendor/css/pages/page-auth.css b/assets/vendor/css/pages/page-auth.css[m
[1mindex d7aa4ba..fd38b1e 100644[m
[1m--- a/assets/vendor/css/pages/page-auth.css[m
[1m+++ b/assets/vendor/css/pages/page-auth.css[m
[36m@@ -25,8 +25,8 @@[m
 }[m
 [m
 .authentication-wrapper.authentication-basic .authentication-inner:after {[m
[31m-  width: 243px;[m
[31m-  height: 240px;[m
[32m+[m[32m  width: 2px;[m
[32m+[m[32m  height: 2px;[m
   content: " ";[m
   position: absolute;[m
   bottom: -68px;[m
[36m@@ -127,7 +127,18 @@[m
 [m
 [m
 [m
[31m-[m
[32m+[m[32m.redesSociales{[m
[32m+[m[32m  border: #9BCB3B solid 1px;[m
[32m+[m[32m  color: #9BCB3B;[m
[32m+[m[32m  background-color: transparent;[m
[32m+[m[32m  border-radius: 100px;[m
[32m+[m[32m  padding-left: 10px;[m
[32m+[m[32m  padding-right: 10px;[m
[32m+[m[32m  padding-top: 10px;[m
[32m+[m[32m  padding-bottom: 10px;[m
[32m+[m[32m  margin-left: 30px;[m
[32m+[m[32m  margin-right: 30px;[m
[32m+[m[32m}[m
 [m
 [m
 [m

[33mcommit 7b93a4ed6dd79edd69ebeaec543d41e8217ccc5c[m
Author: ElsaApp360 <programadorelsa360@gmail.com>
Date:   Wed Oct 26 22:31:53 2022 -0500

    Trabajo en graficos

[1mdiff --git a/assets/vendor/css/pages/page-auth.css b/assets/vendor/css/pages/page-auth.css[m
[1mindex a6d1f52..d7aa4ba 100644[m
[1m--- a/assets/vendor/css/pages/page-auth.css[m
[1m+++ b/assets/vendor/css/pages/page-auth.css[m
[36m@@ -55,7 +55,7 @@[m
 }[m
 [m
 .light-style .authentication-wrapper .authentication-bg {[m
[31m-  background-color: #fff;[m
[32m+[m[32m  background-color: #2b2c40;[m
 }[m
 [m
 [m

[33mcommit 4d9b9243f65602ec3e448e577e31a38ce2c105c8[m
Author: Leonardo Barona <lebab1990@gmail.com>
Date:   Tue Sep 27 12:36:08 2022 -0500

    Cargue del FrontEnd

[1mdiff --git a/assets/vendor/css/pages/page-auth.css b/assets/vendor/css/pages/page-auth.css[m
[1mnew file mode 100644[m
[1mindex 0000000..a6d1f52[m
[1m--- /dev/null[m
[1m+++ b/assets/vendor/css/pages/page-auth.css[m
[36m@@ -0,0 +1,459 @@[m
[32m+[m[32m@charset "UTF-8";[m
[32m+[m[32m.authentication-wrapper {[m
[32m+[m[32m  display: flex;[m
[32m+[m[32m  flex-basis: 100%;[m
[32m+[m[32m  min-height: 100vh;[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m}[m
[32m+[m[32m.authentication-wrapper .authentication-inner {[m
[32m+[m[32m  width: 100%;[m
[32m+[m[32m}[m
[32m+[m[32m.authentication-wrapper.authentication-basic {[m
[32m+[m[32m  align-items: center;[m
[32m+[m[32m  justify-content: center;[m
[32m+[m[32m  overflow: hidden;[m
[32m+[m[32m}[m
[32m+[m[32m.authentication-wrapper.authentication-cover {[m
[32m+[m[32m  align-items: flex-start;[m
[32m+[m[32m}[m
[32m+[m[32m.authentication-wrapper.authentication-cover .authentication-inner {[m
[32m+[m[32m  height: 100vh;[m
[32m+[m[32m}[m
[32m+[m[32m.authentication-wrapper.authentication-basic .authentication-inner {[m
[32m+[m[32m  max-width: 400px;[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.authentication-wrapper.authentication-basic .authentication-inner:after {[m
[32m+[m[32m  width: 243px;[m
[32m+[m[32m  height: 240px;[m
[32m+[m[32m  content: " ";[m
[32m+[m[32m  position: absolute;[m
[32m+[m[32m  bottom: -68px;[m
[32m+[m[32m  left: -46px;[m
[32m+[m[32m}[m
[32m+[m[32m.authentication-wrapper.authentication-basic .authentication-inner .card {[m
[32m+[m[32m  z-index: 1;[m
[32m+[m[32m}[m
[32m+[m[32m.authentication-wrapper.authentication-basic .authentication-inner .card .app-brand {[m
[32m+[m[32m  margin-bottom: 2.5rem;[m
[32m+[m[32m}[m
[32m+[m[32m.authentication-wrapper .auth-input-wrapper .auth-input {[m
[32m+[m[32m  max-width: 50px;[m
[32m+[m[32m  padding-left: 0.4rem;[m
[32m+[m[32m  padding-right: 0.4rem;[m
[32m+[m[32m  font-size: 150%;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m@media (max-width: 575.98px) {[m
[32m+[m[32m  .authentication-wrapper .auth-input-wrapper .auth-input {[m
[32m+[m[32m    font-size: 1.125rem;[m
[32m+[m[32m  }[m
[32m+[m[32m}[m
[32m+[m[32m#twoStepsForm .fv-plugins-bootstrap5-row-invalid .form-control {[m
[32m+[m[32m  border-color: #ff3e1d;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.light-style .authentication-wrapper .authentication-bg {[m
[32m+[m[32m  background-color: #fff;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m[32m.dark-style .authentication-wrapper .authentication-bg {[m
[32m+[m[32m  background-color: #2b2c40;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m[32m.container{[m
[32m+[m[32m  width: 450px;[m
[32m+[m[32m  /* height: 500px; */[m
[32m+[m[32m  margin-left: auto;[m
[32m+[m[32m  margin-right: auto;[m
[32m+[m[32m  /* margin-top: 30px; */[m
[32m+[m[32m  /* background: #2c2c44 ; */[m
[32m+[m[32m  /* border: #ffffff solid ; */[m
[32m+[m[32m  /* border-radius: 2px; */[m
[32m+[m[32m  position: relative;[m
[32m+[m[32m  overflow: hidden;[m[41m    [m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m[32m#Preguntas2{[m
[32m+[m[32m  left: 450px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m#Preguntas3{[m
[32m+[m[32m  left: 450px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m[32m.numPagina{[m
[32m+[m[32m  font-size: 8px;[m
[32m+[m[32m  color: #ffffff;[m
[32m+[m[32m  text-align: right;[m
[32m+[m[32m  margin-top: 2px;[m
[32m+[m[32m  width: 330px;[m
[32m+[m[32m}[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+[m
[32m+