// Libreria para manipulacion y generacion de archivos Excel
import * as XLSX from "xlsx";


export function generateExcelReport({
  headers, // Array de encabezados (columnas)
  rows, // Array de filas (array de arrays)
  fileName = "user-report.xlsx", // Nombre del archivo de salida
}) {
  const worksheetData = [
    headers,
    ...rows,
  ];

  // Convierte un array de arrays (AOA = Array of Arrays) en una hoja de Excel
  const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

  // Crea un nuevo libro de Excel (workbook)
  const workbook = XLSX.utils.book_new();

  // Agrega la hoja al libro con el nombre "Usuarios"
  XLSX.utils.book_append_sheet(workbook, worksheet, "Usuarios");

  // Genera y descarga el archivo Excel en el cliente
  XLSX.writeFile(workbook, fileName);
}
