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

<main id="index"><i class="innerwrap">
  <h1>Main Home Project</h1>
  <nav>
    <a href="map"><p>实时地图</p></a>
    <i>
      <button id="goto-places"><p>地区一览</p></button>
      <button id="goto-heritages"><p>文化财清单</p></button>
    </i>
    <button id="goto-clipboard"><p>指令剪切板</p></button>
    <button disabled><p>（敬请期待）</p></button>
    <i>
      <button disabled><p>（敬请期待）</p></button>
      <button id="goto-about"><p>加入我们</p></button>
    </i>
  </nav>
</i></main>



<main id="places"><h1>地区一览</h1>
  <i class='list'>
    <i>
      <i class='thumb' style='background-image:url("./public/places/伊恩.png"),url("../public/places/_fallback.png")'></i>
      <i class='meta'>
        <i>
          <h2>伊恩</h2>
          <button class="copy"><p>2179 80 -171</p></button>
        </i>
        <i>
          <i class='tag' style='background-color:DarkRed'>世界首都</i>
          <i class='tag' style='background-color:SlateGray'>现代风</i>
          <i class='tag' style='background-color:DarkGoldenRod'>架空</i>
          <i class='tag' style='background-color:DarkGreen'>MC火柴盒</i>
        </i>
      </i>
      <i class='info'><button></button></i>
    </i>
    <i>
      <i class='thumb' style='background-image:url("./public/places/大蘑菇.png"),url("../public/places/_fallback.png")'></i>
      <i class='meta'>
        <i>
          <h2>大蘑菇</h2>
          <button class="copy"><p>2173 64 -21</p></button>
        </i>
        <i>
          <i class='tag' style='background-color:DarkRed'>世界重生点</i>
          <i class='tag' style='background-color:DarkMagenta'>单一建筑或结构</i>
          <i class='tag' style='background-color:Maroon'>指令设施</i>
        </i>
      </i>
      <i class='info'><button></button></i>
    </i>
  </i>
  <i class='options'>
    <i>
      <button disabled><p>复制tp指令:关</p></button>
      <button disabled><p>添加地区</p></button>
      <button class="goback"><p>返回</p></button>
    </i>
  </i>
</main>



<main id="heritages"><h1>文化财清单</h1>
  <i class='list'>
    <!-- Dynamic -->
  </i>
  <i class='options'>
    <i>
      <button disabled><p>添加文化财</p></button>
      <button class="goback"><p>返回</p></button>
    </i>
  </i>
</main>



<main id="clipboard"><h1>指令剪切板</h1>
  <div class='cmd-wrap'>
    <i id='shared'></i>
    <!-- Dynamic -->
  </div>
  <i class='options'>
    <i>
      <button id='cloud-cmd'disabled><p>上传新指令</p></button>
      <button id='local-cmd'disabled><p>添加私人指令</p></button>
    </i>
    <i>
      <button id="toggle-slash"disabled><p>复制斜杠：关</p></button>
      <button class="goback"><p>返回</p></button>
    </i>
  </i>
</main>



<main id="about">
  about page under construction...
</main>



<i id='backdrop'>
  <i id='dialog'></i>
</i>


<footer>©Thisoe</footer>
</body>
</html>