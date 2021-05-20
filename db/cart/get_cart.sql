SELECT * FROM cart_items c 
JOIN products p 
ON p.id = c.id 
WHERE c.user_id = $1;
