USE sakila;

CREATE VIEW film_with_categories AS
SELECT f.title,
fc.category_id,
c.`name`
FROM film_category AS fc
INNER JOIN film AS f ON f.film_id = fc.film_id
INNER JOIN category AS c ON c.category_id = fc.category_id
ORDER BY title;

DESC film_with_categories;