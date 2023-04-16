// database connection

const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});


// ------------------------------------------------------------------

// returns a javascript object
// pool.query(`
// SELECT id, name, cohort_id
// FROM students
// LIMIT 5;
// `)
// .then(res => {
//   console.log(res.rows);
// })
// .catch(err => console.error('query error', err.stack));

/*
Output: 
[
  { id: 1, name: 'Armand Hilll', cohort_id: 1 },
  { id: 2, name: 'Stephanie Wolff', cohort_id: 1 },
  { id: 3, name: 'Stan Miller', cohort_id: 1 },
  { id: 4, name: 'Elliot Dickinson', cohort_id: 1 },
  { id: 5, name: 'Lloyd Boehm', cohort_id: 1 }
]
*/
// ------------------------------------------------------------------


// returns sentence
// pool.query(`
// SELECT students.id as id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 5;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
//   })
// });

/*
Output:
Armand Hilll has an id of 1 and was in the FEB12 cohort
Stephanie Wolff has an id of 2 and was in the FEB12 cohort
Stan Miller has an id of 3 and was in the FEB12 cohort
Elliot Dickinson has an id of 4 and was in the FEB12 cohort
Lloyd Boehm has an id of 5 and was in the FEB12 cohort
*/

// ------------------------------------------------------------------

// pool.query(`
// SELECT students.id as id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// LIMIT 2;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort} cohort`);
//   })
// });

/*
output: 
Armand Hilll has an id of 1 and was in the FEB12 cohort
Stephanie Wolff has an id of 2 and was in the FEB12 cohort
*/

// ------------------------------------------------------------------
const cohortName = process.argv[2];
const limit = process.argv[3] || [5];
const values = [`%${cohortName}%`, limit];

pool.query({
  text:`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON cohorts.id = cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2
`,
values: values
})
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
  })
}).catch(err => console.error('query error', err.stack));

/**
 * input: node students.js FEB 2
 * output:
 * Pamela Runolfsson has an id of 18 and was in the FEB12 cohort
Colten Gutkowski has an id of 17 and was in the FEB12 cohort
 */