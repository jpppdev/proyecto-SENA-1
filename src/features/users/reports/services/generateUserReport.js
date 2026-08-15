
import { users } from "../../data/users";


import { buildReportDataset } from "../utils/buildReportDataset";


import { generateExcelReport } from "./generateExcelReport";
import { generatePdfReport } from "./generatePdfReport";

export function generateUserReport({
  format, 
  selectedFields,
  scope, 
  documentNumber, 
}) {
  
  const { headers, rows } = buildReportDataset({
    users,
    selectedFields,
    scope,
    documentNumber,
  });

  
  if (!rows.length) {
    alert("No hay datos para generar el reporte.");
    return;
  }

  const timestamp = new Date().toISOString().slice(0, 10);

  if (format === "excel") {
    generateExcelReport({
      headers,
      rows,
      fileName: `users-report-${timestamp}.xlsx`,
    });
  }

  if (format === "pdf") {
    generatePdfReport({
      headers,
      rows,
      fileName: `users-report-${timestamp}.pdf`,
    });
  }
}
