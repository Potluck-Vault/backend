exports.seed = function (knex) {
    return knex('potlucks').insert([
      {
        potluck_name: "The Best Get Together. Ever.",
        potluck_date: "10/1/21",
        potluck_time: "3:00 PM",
        potluck_location: "LA, Califonia",
        user_id: 1,

      },
      {
        potluck_name: "Grandma's Potluck",
        potluck_date: "1/15/1965",
        potluck_time: "12:30 PM",
        potluck_location: "Tallahassee, FL",
        user_id: 1,

      },
    ]);
  };