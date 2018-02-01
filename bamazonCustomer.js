//====Setup Variables====

var mysql = require('mysql');
var inquirer = require('inquirer');

//====Connect to SQL database====

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazonDB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    startPrompt();
});


//====Item and Quantity selection ===

function startPrompt() {

    inquirer.prompt([{

            type: "input",
            name: "inputId",
            message: "Please select the ID of the product that you would like to purchase?",


        },
        {
            type: "input",
            name: "inputNumber",
            message: "How many units of the product you would like to buy?",

        }
    ]).then(function(userPurchase) {

        //connect to database to find stock_quantity in database. If user quantity input is greater than stock, decline purchase.

        connection.query("SELECT * FROM products WHERE item_id=?", userPurchase.inputId, function(err, res) {
            for (var i = 0; i < res.length; i++) {

                if (userPurchase.inputNumber > res[i].stock_quantity) {

                    console.log("===================================================");
                    console.log("Sorry! Insufficient quantity!");
                    console.log("===================================================");
                    startPrompt();

                } else {
                    //list item information for user for confirm prompt
                    console.log("===================================");
                    console.log("We can fulfull your order!");
                    console.log("===================================");
                    console.log("You've selected:");
                    console.log("----------------");
                    console.log("Item: " + res[i].product_name);
                    console.log("Department: " + res[i].department_name);
                    console.log("Price: " + res[i].price);
                    console.log("Quantity: " + userPurchase.inputNumber);
                    console.log("----------------");
                    console.log("Total: " + res[i].price * userPurchase.inputNumber);
                    console.log("===================================");

                    var newStock = (res[i].stock_quantity - userPurchase.inputNumber);
                    var purchaseId = (userPurchase.inputId);
                    //console.log(newStock);
                    confirmPrompt(newStock, purchaseId);
                }
            }
        });
    });
}

//===Confirm Purchase===

function confirmPrompt(newStock, purchaseId) {

    inquirer.prompt([{

        type: "confirm",
        name: "confirmPurchase",
        message: "How many units of the product you would like to buy?",

        default: true

    }]).then(function(userConfirm) {
        if (userConfirm.confirmPurchase === true) {

            //if user confirms purchase, update mysql database with new stock quantity by subtracting user quantity purchased.

            connection.query("UPDATE products SET ? WHERE ?", [{
                stock_quantity: newStock
            }, {
                item_id: purchaseId
            }], function(err, res) {});

            console.log("=================================");
            console.log("Transaction completed. Thank you.");
            console.log("=================================");
            startPrompt();
        } else {
            console.log("=================================");
            console.log("No worries. Maybe next time!");
            console.log("=================================");
            startPrompt();
        }
    });
}