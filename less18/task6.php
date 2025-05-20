<?php

$regions = [
    "Московская область" => ["Москва", "Зеленоград", "Клин"],
    "Ленинградская область" => ["Санкт-Петербург", "Всеволожск", "Павловск", "Кронштадт"],
    "Рязанская область" => ["Рязань", "Касимов", "Скопин", "Шацк"]
];

foreach ($regions as $region => $cities) {
    $filtered = array_filter($cities, fn($city) => mb_substr($city, 0, 1, 'UTF-8') === 'К');
    if (!empty($filtered)) {
        echo "$region:<br>";
        echo implode(', ', $filtered) . ".<br><br>";
    }
}
?>
