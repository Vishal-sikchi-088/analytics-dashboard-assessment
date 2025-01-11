import Papa from "papaparse";

export const fetchData = () => {
  return new Promise((resolve, reject) => {
    Papa.parse('/assets/Electric_Vehicle_Population_Data.csv', {
      download: true,
      header: true,
      complete: (results) => resolve(results.data),
      error: (error) => reject(error),
    })
  })
}
