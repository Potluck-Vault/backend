exports.up = async (knex) => {
    await knex.schema
    .createTable('guests', (guests) => {
        guests.increments('guest_id')
        guests.string('guest_name', 100).notNullable()
        guests.boolean('rsvp')
    })
};

exports.down = async (knex) => {
    await knex.schema.dropTableIfExists('guests')
};
