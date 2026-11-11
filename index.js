import { PGlite } from '@electric-sql/pglite';
import fs from 'node:fs'

const db = new PGlite('./pgdata');

// Read and execute setup.sql
const setup = fs.readFileSync('./sql/setup.sql', 'utf8');
await db.exec(setup);

// Check query
const checkQuery = await db.query('SELECT COUNT(*) FROM users')

if (Number(checkQuery.rows[0].count) === 0) {
    // Read and execute seed.sql
    const seed = fs.readFileSync('./sql/seed.sql', 'utf8');
    await db.exec(seed);
}

// Read and execute
const query = fs.readFileSync('./sql/query.sql', 'utf8');

const response = await db.query(query);

console.clear();
console.table(response.rows);