exports.seed = function (knex) {
    return knex('items').insert([
      {
        item_name: "Fruit Salad",
        potluck_id: 1,
        guest_id: 1,
      },
      {
        item_name: "Turkey",
        potluck_id: 1,
        guest_id: 1,
      },
      {
        item_name: "Crackers and Cheese",
        potluck_id: 2,
        guest_id: 2,
      },
      {
        item_name: "3 Layer Dessert",
        potluck_id: 2,
        guest_id: 2,
      },
    ]);
  };