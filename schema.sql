CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT(10) AUTO_INCREMENT NOT NULL,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INT (100) NOT NULL,
  PRIMARY KEY (item_id)
);

Select * from products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("prod-one", "dept-one", 100.00, 10),
("prod-two", "dept-two", 200.00, 20),
("prod-three", "dept-three", 300.00, 30),
("prod-four", "dept-four", 400.00, 40),
("prod-five", "dept-five", 500.00, 50),
("prod-six", "dept-six", 600.00, 60),
("prod-seven", "dept-seven", 700.00, 70),
("prod-eight", "dept-eight", 800.00, 80),
("prod-nine", "dept-nine", 900.00, 90),
("prod-ninetyfive", "dept-ninetyfive", 950.00, 95),
("prod-ninetyeight", "dept-ninetyeight", 980.00, 98);

