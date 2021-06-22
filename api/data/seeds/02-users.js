exports.seed = function (knex) {
    return knex('users').insert(
      {
        user_username: "admin",
        user_password: "password",
        user_email: "admin@potlucks.com",
      }
    );
  };