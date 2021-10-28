USE sakila;

CREATE VIEW address_info AS
SELECT a.address_id,
a.address,
a.district,
a.city_id,
c.city
FROM address AS a
INNER JOIN city AS c ON c.city_id = a.city_id
ORDER BY c.city;

DESC address_info;
