-- ShoppingCart Seeds
INSERT INTO ShoppingCarts (storeItemId, curUserId)
VALUES (0, 0);

-- StoreItems Seeds
INSERT INTO StoreItems (name, description, price, quantity)
VALUES ("Shoes", "For your feet", 50, 20);

-- User Seeds
INSERT INTO Users (userName, password)
VALUES ("steve", "123");