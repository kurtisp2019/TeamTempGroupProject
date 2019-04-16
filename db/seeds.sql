INSERT INTO StoreItems (name, description, price, quantity) VALUES ("Item1", "Item1", 200, 50), ("Item2", "Item2", 200, 50), ("Item3", "Item3", 200, 50), ("Item4", "Item4", 200, 50), ("Item5", "Item5", 200, 50), ("Item6", "Item6", 200, 50), ("Item7", "Item7", 200, 50), ("Item8", "Item8", 200, 50);
-- ShoppingCart Seeds
INSERT INTO ShoppingCarts (storeItemId, curUserId)
VALUES (0, 0);

-- StoreItems Seeds
INSERT INTO StoreItems (name, description, price, quantity)
VALUES ("Shoes", "For your feet", 50, 20);

-- User Seeds
INSERT INTO Users (userName, password)
VALUES ("steve", "123");
