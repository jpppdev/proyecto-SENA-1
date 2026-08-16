
export function buildReportDataset({
  users, 
  selectedFields, 
  scope,
  documentNumber, 
}) {
  
  let filteredUsers = [...users];


  if (scope === "document" && documentNumber) {
    filteredUsers = filteredUsers.filter(
      (user) => user.userDocumentNumber === documentNumber,
    );
  }


  const headers = selectedFields.map((field) => field.label);

  const rows = filteredUsers.map((user) =>
    selectedFields.map((field) => {
      const value = user[field.key]; 

  
      if (typeof value === "boolean") {
        return value ? "Si" : "No";
      }

      return value ?? "";
    }),
  );

  return {
    headers, 
    rows, 
  };
}
