exports.seed = function (knex) {
    return knex('guests').insert([
      {
        guest_name: "Sally",
        rsvp: true

      },
      {
        guest_name: "Billy",
        rsvp: true

      },
    ]);
  };