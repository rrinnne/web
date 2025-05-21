<?php

$logFile = 'log.txt';
$entry = date('Y-m-d H:i:s') . " - Accessed\n";
file_put_contents($logFile, $entry, FILE_APPEND);
$lines = file($logFile, FILE_IGNORE_NEW_LINES);
if (count($lines) >= 10) {
    $i = 0;
    while (file_exists("log$i.txt")) $i++;
    rename($logFile, "log$i.txt");
}

$uploadDir = 'images/';
$thumbDir = 'thumbs/';
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (isset($_FILES['image']) && $_FILES['image']['error'] === 0) {
        $file = $_FILES['image'];
        $allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
        if (in_array($file['type'], $allowedTypes) && $file['size'] < 2 * 1024 * 1024) {
            $ext = pathinfo($file['name'], PATHINFO_EXTENSION);
            $newName = uniqid() . '.' . $ext;
            move_uploaded_file($file['tmp_name'], "$uploadDir$newName");

            $src = imagecreatefromstring(file_get_contents("$uploadDir$newName"));
            $thumb = imagescale($src, 150);
            imagejpeg($thumb, "$thumbDir$newName");
            imagedestroy($src);
            imagedestroy($thumb);

            header("Location: " . $_SERVER['PHP_SELF']);
            exit;
        } else {
            echo "<p style='color:red;'>Ошибка: недопустимый тип или размер файла.</p>";
        }
    }
}

function buildGallery($dir) {
    if (!is_dir($dir)) return;
    $files = array_diff(scandir($dir), ['.', '..']);
    foreach ($files as $file) {
        $path = "$dir/$file";
        if (is_file($path) && exif_imagetype($path)) {
            echo "<a href='$path' target='_blank'><img src='$path' width='150' style='margin:5px;'></a>";
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>Фотогалерея</title>
</head>
<body>

<h2>Задание 1: Статичная галерея</h2>
<?php
$static = ['img1.png', 'img2.png', 'img3.png'];
foreach ($static as $img) {
    echo "<a href='images/$img' target='_blank'><img src='images/$img' width='150' style='margin:5px;'></a>";
}
?>

<h2>Задание 2: Динамическая галерея</h2>
<?php buildGallery('images'); ?>

<h2>Задание 3: Загрузка изображения</h2>
<form method="post" enctype="multipart/form-data">
    <input type="file" name="image" required>
    <button type="submit">Загрузить</button>
</form>

<h2>Миниатюры (thumbs)</h2>
<?php buildGallery('thumbs'); ?>

</body>
</html>
