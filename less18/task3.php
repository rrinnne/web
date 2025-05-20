<?php

$alphabet = [
    'а' => 'a',  'б' => 'b',  'в' => 'v',  'г' => 'g',
    'д' => 'd',  'е' => 'e',  'ё' => 'yo', 'ж' => 'zh',
    'з' => 'z',  'и' => 'i',  'й' => 'y',  'к' => 'k',
    'л' => 'l',  'м' => 'm',  'н' => 'n',  'о' => 'o',
    'п' => 'p',  'р' => 'r',  'с' => 's',  'т' => 't',
    'у' => 'u',  'ф' => 'f',  'х' => 'h',  'ц' => 'ts',
    'ч' => 'ch', 'ш' => 'sh', 'щ' => 'shch','ъ' => '', 
    'ы' => 'y',  'ь' => '',   'э' => 'e',  'ю' => 'yu',
    'я' => 'ya'
];

function transliterate($text, $map) {
    $text = mb_strtolower($text, 'UTF-8');
    $result = '';
    for ($i = 0; $i < mb_strlen($text, 'UTF-8'); $i++) {
        $char = mb_substr($text, $i, 1, 'UTF-8');
        $result .= $map[$char] ?? $char;
    }
    return $result;
}

// Пример
echo transliterate("Привет, мир!", $alphabet);
?>
