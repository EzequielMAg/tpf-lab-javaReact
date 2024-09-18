const deleteEmployee = async (id) => {

  const url = `http://localhost:3000/employee/${id}`;

  const response = await fetch(url, {method: 'DELETE'});

  if (!response.ok) {
    throw new Error(`Error: ${response.status} - ${response.statusText}`);
  }
};

export default deleteEmployee;