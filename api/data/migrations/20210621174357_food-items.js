exports.up = function(knex) {
    await knex.schema
    .createTable('items', (items) => {
        items.increments('item_id')
        items.string('item_name', 100).notNullable()
        items.integer("potluck_id")
            .unsigned()
            .notNullable()
            .references("potluck_id")
            .inTable("potlucks")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");
        items.integer("guest_id")
            .unsigned()
            .notNullable()
            .references("guest_id")
            .inTable("guests")
            .onDelete("CASCADE")
            .onUpdate("CASCADE");      
    })
};

exports.down = function(knex) {
    await knex.schema.dropTableIfExists('items')
};
