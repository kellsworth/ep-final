DELETE FROM cart_items
WHERE id=$1;

SELECT c.id, c.quantity, p.product_name, p.material, p.price, p.image 
FROM cart_items c
JOIN products p 
ON p.id = c.product_id 
WHERE c.user_id = $2;