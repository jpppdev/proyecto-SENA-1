
import jsPDF from "jspdf";


import autoTable from "jspdf-autotable";


export function generatePdfReport({
  headers, 
  rows, 
  fileName = "user-report.pdf", 
}) {
  // Inicializa el documento PDF
  const doc = new jsPDF();

  
  doc.setFontSize(16);
  doc.text("Reporte de Usuarios", 14, 20); 

 
  autoTable(doc, {
    startY: 30, 
    head: [headers], 
    body: rows, 
    theme: "grid", 

    
    headStyles: {
      fillColor: [33, 150, 243], 
      textColor: 255, 
      fontSize: 11,
    },

    // Estilos globales de las celdas
    styles: {
      fontSize: 10,
    },

    // Margenes del documento
    margin: {
      left: 14,
      right: 14,
    },
  });

  // Genera y descarga el archivo PDF
  doc.save(fileName);
}
