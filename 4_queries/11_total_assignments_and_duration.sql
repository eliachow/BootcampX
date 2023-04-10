-- SELECT 
-- day, 
-- count(assignments.*) as number_of_assignemnts,
-- duration
-- FROM assignments
-- GROUP BY day
-- ORDER BY day;


SELECT 
day, 
count(*) as number_of_assignemnts,
sum(duration) as duration
FROM assignments
GROUP BY day
ORDER BY day;