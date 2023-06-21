CREATE TABLE customers (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    email VARCHAR(100)
);

ALTER TABLE customers ADD COLUMN phone VARCHAR(20);

DROP TABLE customers;


INSERT INTO customers (id, name, email)
VALUES (1, 'John Doe', 'john@example.com');

UPDATE customers SET email = 'jane@example.com' WHERE id = 2;

DELETE FROM customers WHERE id = 3;


GRANT SELECT, INSERT ON customers TO user1;

REVOKE DELETE ON customers FROM user2;


   ID | Name  | Age | Gender
   -----------------------
   1  | John  | 25  | Male
   2  | Jane  | 30  | Female
   3  | Mark  | 40  | Male


   ID, Name, Age, Gender
   1, John, 25, Male
   2, Jane, 30, Female
   3, Mark, 40, Male

POINT (100 200)
LINESTRING (100 200, 150 250, 200 300)
POLYGON ((100 200, 150 250, 200 200, 100 200))
MULTIPOINT ((100 200), (150 250), (200 200))
MULTILINESTRING ((100 200, 150 250, 200 200), (300 400, 350 450, 400 400))
MULTIPOLYGON (((100 200, 150 250, 200 200, 100 200)), ((300 400, 350 450, 400 400, 300 400)))

GEOMETRYCOLLECTION (POINT (100 200), LINESTRING (100 200, 150 250, 200 200))



-- การบวกเลข
SELECT 5 + 3;

-- การลบเลข
SELECT 10 - 4;

-- การคูณเลข
SELECT 2 * 6;

-- การหารเลข
SELECT 20 / 5;


-- การรวมสตริง
SELECT CONCAT('Hello', ' ', 'World');

-- การหาความยาวของสตริง
SELECT LENGTH('Hello World');

-- การแปลงสตริงเป็นตัวพิมพ์ใหญ่
SELECT UPPER('hello');

-- การแปลงสตริงเป็นตัวพิมพ์เล็ก
SELECT LOWER('WORLD');

-- การค้นหาสตริงภายในสตริง
SELECT INSTR('Hello World', 'World');


-- การดึงวันที่ปัจจุบัน
SELECT CURDATE();

-- การดึงเวลาปัจจุบัน
SELECT CURTIME();

-- การรวมวันที่และเวลา
SELECT CONCAT(CURDATE(), ' ', CURTIME());

-- การหาค่าส่วนลดวันที่
SELECT DATE_SUB(CURDATE(), INTERVAL 7 DAY);


-- การใช้งาน IF-ELSE
SELECT IF(5 > 3, 'Yes', 'No');

-- การใช้งาน CASE
SELECT CASE WHEN age > 18 THEN 'Adult' ELSE 'Child' END
FROM customers;


-- การหาค่าเฉลี่ย
SELECT AVG(price)
FROM products;

-- การหาค่าสูงสุด
SELECT MAX(quantity)
FROM products;

-- การหาค่าต่ำสุด
SELECT MIN(price)
FROM products;

-- การนับจำนวนแถว
SELECT COUNT(*)
FROM customers;


SELECT ST_Distance(ST_Point(10, 20), ST_Point(30, 40));

SELECT *
FROM spatial_table
WHERE ST_Intersects(geom1, geom2);

SELECT *
FROM spatial_table
WHERE ST_Within(geom, boundary);


SELECT ST_Union(geom)
FROM spatial_table;

SELECT ST_Buffer(geom, 10)
FROM spatial_table;
