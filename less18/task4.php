<?php

echo "<h2>Задание 4</h2>";

$menu = [
    'Главная' => '/',
    'Услуги' => [
        'Консалтинг' => '/catalog/consalting',
        'Разработка' => '/catalog/development',
        'Поддержка' => '/catalog/help'
    ],
    'О компании' => '/about',
    'Контакты' => '/contacts'
];

function buildMenu($items) {
    echo '<ul>';
    foreach ($items as $title => $value) {
        if (is_array($value)) {
            echo '<li>' . $title;
            buildMenu($value);
            echo '</li>';
        } else {
            echo '<li><a href="' . $value . '">' . $title . '</a></li>';
        }
    }
    echo '</ul>';
}

echo "<div style='border:1px solid #ccc; padding:10px; display:inline-block;'>";
buildMenu($menu);
echo "</div>";
?>
