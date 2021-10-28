USE sakila;

CREATE VIEW film_info AS
SELECT fa.actor_id,
CONCAT(a.first_name, ' ', a.last_name) AS `actor`,
f.title
FROM film_actor AS fa
INNER JOIN film AS f ON f.film_id = fa.film_id
INNER JOIN actor AS a ON a.actor_id = fa.actor_id
ORDER BY actor;

DESC film_info;
