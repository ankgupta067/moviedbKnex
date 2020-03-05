exports.up = function(knex) {
  return knex.schema
    .createTable("rating", function(tbl) {
      tbl.increments();
      tbl
        .string("name", 5)
        .notNullable()
        .unique("uq_rating_name");
    })
    .createTable("movie", function(tbl) {
      tbl.increments();
      tbl
        .integer("rating_id")
        .notNullable()
        .references("id")
        .inTable("rating");
      tbl
        .integer("director_id")
        .notNullable()
        .references("id")
        .inTable("person");

      tbl
        .string("title", 205)
        .notNullable()
        .defaultTo("");
      tbl.string("overview", 999);
      tbl.integer("releaseyr");
      tbl
        .integer("score")
        .notNullable()
        .defaultTo(7);
      tbl
        .integer("runtime")
        .notNullable()
        .defaultTo(90);
      tbl.date("lastplaydt");
    })
    .createTable("tag", function(tbl) {
      tbl.increments();
      tbl
        .string("name", 30)
        .notNullable()
        .unique("uq_tag_name");
    })
    .createTable("tag_movie", function(tbl) {
      tbl
        .integer("tag_id")
        .references("id")
        .inTable("tag");
      tbl
        .integer("movie_id")
        .references("id")
        .inTable("movie");

      tbl.primary(["tag_id", "movie_id"]);
    })
    .createTable("actor_movie", function(tbl) {
      tbl
        .integer("person_id")
        .references("id")
        .inTable("person");
      tbl
        .integer("movie_id")
        .references("id")
        .inTable("movie");

      tbl.primary(["person_id", "movie_id"]);
    });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists("rating")
    .dropTableIfExists("movie")
    .dropTableIfExists("tag")
    .dropTableIfExists("tag_movie")
    .dropTableIfExists("actor_movie");
};
