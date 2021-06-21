
exports.up = async (knex) => {
    await knex.schema
    .createTable('potlucks', (potlucks) => {
      potlucks.increments('potluck_id')
      potlucks.string('potluck_name', 100).notNullable()
      potlucks.string('potluck_date', 50).notNullable()
      potlucks.string('potluck_time', 50).notNullable()
      potlucks.string('potluck_location', 100).notNullable()
      potlucks.integer("user_id")
            .unsigned()
            .notNullable()
            .references("user_id")
            .inTable("users")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
    })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('potlucks')
};
