test("GET to api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");
  expect(response.status).toBe(200);

  const responseBody = await response.json();
  //console.log(responseBody)

  const updateAtParsed = new Date(responseBody.update_at).toISOString();
  expect(responseBody.update_at).toEqual(updateAtParsed);

  expect(responseBody.depedencies.database.version).toEqual("16.1");
  expect(responseBody.depedencies.database.max_connections).toEqual(100);
  expect(responseBody.depedencies.database.opened_connections).toEqual(1);
});

test.only("Testando SQL Injection", async () => {
  await fetch("http://localhost:3000/api/v1/status");  
});
