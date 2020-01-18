USE burgers_db;

INSERT INTO burgers (burger_name, devoured)
Values ("Bacon CheeseBurger", true),
("Hamburger", false),
("Impossible Burger", false);

SELECT IF(devoured, 'true', 'false') devoured FROM burgers;