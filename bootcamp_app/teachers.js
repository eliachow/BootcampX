// database connection

const { Pool } = require('pg');

const pool = new Pool({
  user: 'labber',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

// ---------------------------------------

// pool.query(`
// SELECT 
// DISTINCT teachers.name as teacher, 
// cohorts.name as cohort,
// count(assistance_requests) as total_assistances
// FROM teachers
// JOIN assistance_requests ON teacher_id = teachers.id
// JOIN students ON student_id = students.id
// JOIN cohorts ON cohort_id = cohorts.id
// WHERE cohorts.name = '%${process.argv[2]}'
// GROUP BY teachers.name, cohorts.name
// ORDER BY teacher;
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.cohorts.name}: ${user.name}`)
//   })
// }).catch(err => console.error('query error', err.stack));

const cohortName = process.argv[2] || 'JUL02';
const values = [`%${cohortName}%`];

pool.query({
  text:`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name LIKE $1
ORDER BY teacher;
`,
values: values
})
.then(res => {
  res.rows.forEach(row => {
    console.log(`${row.cohort}: ${row.teacher}`);
  })
});