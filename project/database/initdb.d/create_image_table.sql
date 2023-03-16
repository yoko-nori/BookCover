DROP DATABASE IF EXISTS bookcover_db;
CREATE DATABASE IF NOT EXISTS bookcover_db;
USE bookcover_db;

CREATE TABLE IF NOT EXISTS image (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    image_path VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO image (name,image_path) VALUES ("flower","etc/image/flower");
INSERT INTO image (name,image_path) VALUES ("cat","etc/image/cat");
