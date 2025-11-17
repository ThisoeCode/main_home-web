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
  <script src="./src/store.js?v0<?php if($TEST)echo '=t'.time();?>"></script>
  <script src="./db/places.js?v0<?php if($TEST)echo '=t'.time();?>"></script>
  <script src="./db/tags.js?v0<?php if($TEST)echo '=t'.time();?>"></script>
  <script src="./db/cmds.js?v0<?php if($TEST)echo '=t'.time();?>"></script>
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
    <!-- Dynamic -->
  </i>
  <i class='options'>
    <i>
      <button disabled><p>单击复制：开</p></button>
      <button disabled><p>仅复制坐标模式</p></button>
    </i>
    <i>
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
      <button disabled><p>单击复制：开</p></button>
      <button disabled><p>仅复制坐标模式</p></button>
    </i>
    <i>
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