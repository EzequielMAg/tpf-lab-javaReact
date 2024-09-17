const getEmployees = async () => {

  //TODO: tener un archivo configuracion global, ya que dependiendo en que ambiente me encuentre esta url va a cambiar (desarrollo!=produccion)
  const url = `http://localhost:3000/employee`;

  const response = await fetch(url);

  if (!response.ok) {
    // Si la respuesta no es exitosa, lanzamos un error personalizado
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }

  // Si la respuesta es exitosa, parseamos el JSON
  const data = await response.json();

  console.log(response);
  console.log(data);

  return data;
}

export default getEmployees;