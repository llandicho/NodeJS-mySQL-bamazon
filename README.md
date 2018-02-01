# NodeJS-mySQL-bamazon


Creating an Amazon-like storefront using MySQL, Prompt, Javascript and Node.js. The app will take in orders from customers and deplete stock from the store's inventory.

<b>Video Demo:</b><a href="https://youtu.be/xZEY0pdeX88" target="_blank">MySQL NodeJS</a>


<b>Technologies Used:</b>
<ul>
	<li>Javascript</li>
	<li>nodeJS</li>
	<li>MySQL</li>
</ul>

<b>npm packages:</b>
<ul>
	<li>mysql</li>
	<li>prompt</li>
	<li>inquire</li>
</ul>


<h2>Instructions:</h2>

1. Create a MySQL Database called bamazonDB.

2. Create a Table inside of that database called products.

3. The products table should have each of the following columns:
<ul>
<li>item_id (unique id for each product)</li></li>
<li>product_name (Name of product)</li>
<li>department_name</li>
<li>price (cost to customer)</li>
<li>stock_quantity (how much of the product is available in stores)</li>
</ul>
4. Mockup and populate this database with around 10 different products.

5. Then create a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.

6. The app should then prompt users with two messages.
<ul>
<li>a. The first should ask them the ID of the product they would like to buy.</li>
<li>b. The second message should ask how many units of the product they would like to buy.</li>
</ul>
7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.
If not, the app should log a phrase like "Sorry! Insufficient quantity!", and then prevent the order from going through.

However, if your store does have enough of the product, you should fulfill the customer's order.
This means updating the SQL database to reflect the remaining quantity.
Once the update goes through, show the customer the total cost of their purchase.


