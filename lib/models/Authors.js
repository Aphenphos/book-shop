const pool = require('../utils/pool');

class Author {
  id;
  name;
  dob;
  pob;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dob = row.dob;
    this.pob = row.pob;
  }

  static async getAll() {
    const { rows } = await pool.query(
      `SELECT * from authors
        `
    );
    return rows.map((row) => new Author(row));
  }

  static async getById(id) {
    const { rows } = await pool.query(
      `SELECT * from authors  
        WHERE authors.id = $1      
        `, [id]
    );
    return new Author(rows[0]);
  }
}

module.exports = { Author };
