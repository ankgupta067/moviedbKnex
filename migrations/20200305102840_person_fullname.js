exports.up = function(knex) {
  return knex.schema.hasTable("person").then(exists => {
    if (exists) {
      return knex.schema.table("person", tbl => {
        return tbl.renameColumn("junk", "name");
      });
    }
  });
};

exports.down = function(knex) {
    return knex.schema.table("person", tbl => {
        return tbl.renameColumn("name", "junk");
      });
};
