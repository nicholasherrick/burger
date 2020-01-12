USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
Values ("Bacon CheeseBurger", 1),
("Hamburger", 0),
("Impossible Burger", 0);

SELECT IF(devoured, 'true', 'false') devoured FROM burgers;