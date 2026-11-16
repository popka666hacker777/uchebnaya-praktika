<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title>Витрина мини-магазина</title>
</head>
<body>
<?php
$studentName = "Лаврентьева Милена"; 
$group = "ИС-1-25"; 
$course = 2; 
$city = "Чебоксары"; 

echo "<h2>О разработчике</h2>";
echo "<ul>" .
     "<li>Имя: " . $studentName . "</li>" .
     "<li>Группа: " . $group . "</li>" .
     "<li>Курс: " . $course . "</li>" .
     "<li>Город: " . $city . "</li>" .
     "</ul>";

echo "<h2>Витрина мини-магазина</h2>";


$product1 = "Ноутбук";
$price1 = 55000;
$quantity1 = 2;
$discount1 = 10; 

$totalWithoutDiscount1 = $price1 * $quantity1;
$discountAmount1 = ($totalWithoutDiscount1 * $discount1) / 100;
$finalPrice1 = $totalWithoutDiscount1 - $discountAmount1;

echo "<h3>Товар 1: " . $product1 . "</h3>";
echo "Цена за штуку: " . $price1 . " руб.<br>";
echo "Количество: " . $quantity1 . " шт.<br>";
echo "Общая стоимость без скидки: " . $totalWithoutDiscount1 . " руб.<br>";
echo "Размер скидки (" . $discount1 . "%): " . $discountAmount1 . " руб.<br>";
echo "Итоговая стоимость со скидкой: " . $finalPrice1 . " руб.<br><hr>";

$product2 = "Беспроводная мышь";
$price2 = 1500;
$quantity2 = 4;
$discount2 = 5;

$totalWithoutDiscount2 = $price2 * $quantity2;
$discountAmount2 = ($totalWithoutDiscount2 * $discount2) / 100;
$finalPrice2 = $totalWithoutDiscount2 - $discountAmount2;

echo "<h3>Товар 2: " . $product2 . "</h3>";
echo "Цена за штуку: " . $price2 . " руб.<br>";
echo "Количество: " . $quantity2 . " шт.<br>";
echo "Общая стоимость без скидки: " . $totalWithoutDiscount2 . " руб.<br>";
echo "Размер скидки (" . $discount2 . "%): " . $discountAmount2 . " руб.<br>";
echo "Итоговая стоимость со скидкой: " . $finalPrice2 . " руб.<br><hr>";

$product3 = "Механическая клавиатура";
$price3 = 4200;
$quantity3 = 1;
$discount3 = 15;

$totalWithoutDiscount3 = $price3 * $quantity3;
$discountAmount3 = ($totalWithoutDiscount3 * $discount3) / 100;
$finalPrice3 = $totalWithoutDiscount3 - $discountAmount3;

echo "<h3>Товар 3: " . $product3 . "</h3>";
echo "Цена за штуку: " . $price3 . " руб.<br>";
echo "Количество: " . $quantity3 . " шт.<br>";
echo "Общая стоимость без скидки: " . $totalWithoutDiscount3 . " руб.<br>";
echo "Размер скидки (" . $discount3 . "%): " . $discountAmount3 . " руб.<br>";
echo "Итоговая стоимость со скидкой: " . $finalPrice3 . " руб.<br><hr>";

$product = $product1;
$price = $price1;
$quantity = $quantity1;
$discount = $discount1;
$inStock = true;
$rating = 4.7;

echo "<h2>Типы данных</h2>";
var_dump($product);
echo "<br>";
var_dump($price);
echo "<br>";
var_dump($quantity);
echo "<br>";
var_dump($discount);
echo "<br>";
var_dump($inStock);
echo "<br>";
var_dump($rating);
echo "<br>";
?>

</body>
</html>