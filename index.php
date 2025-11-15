<?php $TEST=true;?>
<!DOCTYPE html>
<html lang="zh">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!-- META -->
  <link rel="icon" type="image/x-icon" href="https://thisoe.dev/ico.ico">
  <title>Main Home | Thisoe</title>
<!-- JS -->
  <script src="./src/jquery.js"></script>
  <script src="./src/index.js?v0<?php if($TEST)echo '=t'.time();?>"></script>
<!-- CSS -->
  <link rel="stylesheet" href="./src/index.css?v0<?php if($TEST)echo '=t'.time();?>">
</head>
<body>

<main id="index">
  <i>
    <h1>Main Home Project</h1>
    <nav>
      <a href="map"><p>实时地图</p></a>
      <i>
        <button id="goto-places"><p>地区一览</p></button>
        <button id="goto-heritages"><p>文化财清单</p></button>
      </i>
      <button id="goto-clipboard"><p>指令剪切板</p></button>
      <a><p>（敬请期待）</p></a>
      <i>
        <a><p>（施工中）</p></a>
        <button id="goto-about"><p>加入我们</p></button>
      </i>
    </nav>
  </i>
</main>



<main id="places">
  <h1>地区一览</h1>
  <i class='list'>
    <!-- Dynamic -->
  </i>
  <i class='options'>
    <i>
      <button><p>添加地区</p></button>
      <button><p>返回</p></button>
    </i>
  </i>
</main>



<main id="heritages">
  heritages page under construction...
</main>



<main id="clipboard">
  clipboard page under construction...
</main>



<main id="about">
  about page under construction...
</main>


<footer>©Thisoe</footer>
</body>
</html>