import database from "infra/database.js"

async function status(request, response) {
  const updateAt = new Date().toISOString();

  const databaseVersionResult = await database.query("SHOW server_version;")
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  response.status(200).json({
    update_at: updateAt,
    depedencies: {
      database: {
        version: databaseVersionValue,
      }
    }
  });
}

export default status;
