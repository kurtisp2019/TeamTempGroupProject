INSERT INTO StoreItems (name, description, price, quantity) VALUES ("Item1", "Item1", 200, 50), ("Item2", "Item2", 200, 50), ("Item3", "Item3", 200, 50), ("Item4", "Item4", 200, 50), ("Item5", "Item5", 200, 50), ("Item6", "Item6", 200, 50), ("Item7", "Item7", 200, 50), ("Item8", "Item8", 200, 50);
-- ShoppingCart Seeds
INSERT INTO ShoppingCarts (storeItemId, curUserId)
VALUES (0, 0);

-- StoreItems Seeds
INSERT INTO StoreItems (name, description, price, quantity, image)
VALUES ("Von Miller Jersey", "Authentic Denver Broncos home jersey.", 120, 60, "https://fanatics.frgimages.com/FFImage/thumb.aspx?i=/productimages/_1357000/ff_1357430_xl.jpg&w=600"),
("Nathan MacKinnon Jersey", "Authentic Colorado Avalanche away jersey.", 140, 50, "https://images-na.ssl-images-amazon.com/images/I/81lQ7SqEFZL._SX355_.jpg"),
("TaylorMade RocketBallz Driver", "TaylorMade RocketBallz Driver 9.5° Used Golf Club Left Hand", 220, 10, "https://cdn0.globalgolf.com/images/product/large/1022000/1022875-aaa.jpg"),
("Teddy Bear", "This adorable JOON Bear is about 28 inches of huggable, loveable joy! Complete with a ribbon on his neck, this big best friend will look great in any bedroom or playroom.", 20, 660, "https://images-na.ssl-images-amazon.com/images/I/81wpQlT3T5L._SX425_.jpg"),
("720p Roku Smart LED TV", "Dimensions (W x H x D): TV without stand: 28.9 x 17.1 x 3.2, TV with stand: 28.9 x 19.2 x 7.2", 520, 46, "https://images-na.ssl-images-amazon.com/images/I/81u%2BuVYTlxL._SX425_.jpg"),
("Coffee Mug", "Cool mint ceramic coffee cup", 120, 60, "https://target.scene7.com/is/image/Target/GUEST_a07c3482-8f3b-4e1d-ae35-8b8620aa7e98?wid=488&hei=488&fmt=pjpeg"),
("Ruby Calculator", "Connect to the Internet and read Search Engine Results for any query you like", 100, 20, "https://www.rubydevices.com.au/images/peel_off_sticker.jpg"),
("Motorolla Razr", "Flip phone for texting and calling", 60, 1230, "https://9to5google.com/wp-content/uploads/sites/4/2019/01/motorola_razr_1.jpg");

INSERT INTO StoreItems (name, description, price, quantity, image)
VALUES ("PS4", "Playstation 4 pro for playing your favorite games!", 300, 15,"https://media.playstation.com/is/image/SCEA/playstation-4-slim-vertical-product-shot-01-us-07sep16?$native_t$"),
("MacBook Pro", "The newest version of Macbook will take care off all your computer needs.", 1300, 5, "https://i5.walmartimages.com/asr/4486ddb3-acfb-4425-9ddd-d8cfb6808a4e_1.41822ef269d39eab6ab76c12a5d166cd.jpeg"),
("Titlest Pro V1 Golf Balls", "Get the best ball in the game with the new Titlest Pro V1", 40, 20, "https://images-na.ssl-images-amazon.com/images/I/715DNiayNgL._SX466_.jpg"),
("Syntrax Protein Powder", "Newly formulated Syntrax has over 25g of Protein per serving", 20, 30, "http://si03.com/images/nectar-sk.png"),
("Samsung 42' Flatscreen 4k TV", "Best picture quality available from Samsung", 500, 10, "http://cdn.shopify.com/s/files/1/2660/5202/products/c6zyudairdkryrsnczsh_54ae3bee-7fdd-4475-b63a-3c7b017c4c81_800x.jpg?v=1537236908"),
("Chefs Knife", "Sharp chefs knife for all your cooking needs", 150, 15, "https://images.crateandbarrel.com/is/image/Crate/Classic8inChefsKnifeSHF16/$web_product_hero$/160727162029/w%C3%BCsthof-classic-8-chefs-knife.jpg"),
("Bulletproof Coffee", "Dark roast", 15, 35, "https://images-na.ssl-images-amazon.com/images/I/41iTkhM-ieL.jpg"),
("Albino Lion", "Exotic cat makes a great pet!", 325000, 17, "https://cdni.rt.com/files/2018.11/article/5bf16152dda4c87b578b465f.jpg");


-- User Seeds
INSERT INTO Users (userName, password)
VALUES ("steve", "123");
