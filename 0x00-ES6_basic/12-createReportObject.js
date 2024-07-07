export default function createReportObject(employeesList) {
  const reportObj = {
    allEmployees: {
      ...employeesList,
    },
    getNumberOfDepartments(list) {
      return Object.keys(list).length;
    },
  };
  return reportObj;
}
