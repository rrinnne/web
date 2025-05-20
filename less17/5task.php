<?php

echo "Вариант первый <br><br>";
include("year.php");

echo "<br><br><br><br><br>";

echo "Вариант второй <br><br>";
$file = file_get_contents("year.php");
echo $file;

echo "<br><br><br><br><br>";

echo "Вариант третий <br><br>";
function renderTemplate($page)
{
    ob_start();
    include $page . ".php";
    return ob_get_clean();
}
$file2 = renderTemplate("year");
echo $file2;

echo "<br><br><br><br><br>";
?>