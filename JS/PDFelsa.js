import * as pdfMake from '../libs/pdfmake/build/pdfmake';
function printpdf() {
    console.log("HOLA")
    pdfMake.createPdf(index.html).print();
}


