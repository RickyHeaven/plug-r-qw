<template>
  <div class="examplePageL vh100">
    <toHome/>
    <h2>纯CSS3图形以及常用keyframes动画实例（非组件形式，直接复制样式即可使用）</h2>

    <!--图形-->
    <div class="figure">
      <div class="burst-8" id="burst-8">burst-8</div>
      <div class="burst-12" id="burst-12"></div>
      <div class="talkbubble" id="talkbubble"></div>
      <div class="heart" id="heart"></div>
      <div class="star-six" id="star-six"></div>
      <div class="parallelogram" id="parallelogram"></div>
      <div class="triangle-bottomright" id="triangle-bottomright"></div>
      <div class="triangle-bottomleft" id="triangle-bottomleft"></div>
      <div class="triangle-topright" id="triangle-topright"></div>
      <div class="triangle-topleft" id="triangle-topleft"></div>
      <div class="triangle-right" id="triangle-right"></div>
      <div class="triangle-left" id="triangle-left"></div>
      <div class="triangle-down" id="triangle-down"></div>
      <div class="triangle-up" id="triangle-up"></div>
      <div class="hexagon" id="hexagon"></div>
      <div class="pacman" id="pacman"></div>
      <div class="star-five" id="star-five"></div>
    </div>

    <!--动画-->
    <div class="animated rect swing">swing</div>
    <div class="animated rect swing reverse">swing reverse</div>
    <div class="animated rect swing alternate">alternate</div>
    <div class="animated circle spin">spin</div>
    <div class="animated rect rubberBand">rubberBand</div>
    <div class="animated rect colorchange">colorchange</div>
    <div class="animated rect-h multi">multi prop</div>
    <div class="animated rect up-fade">up-fade</div>
    <div class="animated rect movex">movex</div>
    <div class="animated rect mask">mask</div>
    <div class="animated rect zoomInDown">zoomInDown</div>
    <div class="animated rect flash">flash</div>
    <div class="animated rect pulse">pulse</div>
    <div class="animated rect shake">shake</div>
    <div class="animated rect tada">tada</div>
    <div class="animated rect wobble">wobble</div>
    <h3>bounce</h3>
    <hr>
    <div class="animated rect bounce">bounce</div>
    <h3>bounceIn</h3>
    <hr>
    <div class="animated rect bounceIn">bounceIn</div>
    <div class="animated rect bounceInDown">bounceInDown</div>
    <div class="animated rect bounceInLeft">bounceInLeft</div>
    <div class="animated rect bounceInRight">bounceInRight</div>
    <div class="animated rect bounceInUp">bounceInUp</div>
    <h3>bounceOut</h3>
    <hr>
    <div class="animated rect bounceOut">bounceOut</div>
    <div class="animated rect bounceOutDown">bounceOutDown</div>
    <div class="animated rect bounceOutLeft">bounceOutLeft</div>
    <div class="animated rect bounceOutRight">bounceOutRight</div>
    <div class="animated rect bounceOutUp">bounceOutUp</div>
    <h3>fadeIn</h3>
    <hr>
    <div class="animated rect fadeIn">fadeIn</div>
    <div class="animated rect fadeInDown">fadeInDown</div>
    <div class="animated rect fadeInDownBig">fadeInDownBig</div>
    <div class="animated rect fadeInLeft">fadeInLeft</div>
    <div class="animated rect fadeInLeftBig">fadeInLeftBig</div>
    <div class="animated rect fadeInRight">fadeInRight</div>
    <div class="animated rect fadeInRightBig">fadeInRightBig</div>
    <div class="animated rect fadeInUp">fadeInUp</div>
    <h3>fadeOut</h3>
    <hr>
    <div class="animated rect fadeInUpBig">fadeInUpBig</div>
    <div class="animated rect fadeOut">fadeOut</div>
    <div class="animated rect fadeOutDown">fadeOutDown</div>
    <div class="animated rect fadeOutDownBig">fadeOutDownBig</div>
    <div class="animated rect fadeOutLeft">fadeOutLeft</div>
    <div class="animated rect fadeOutLeftBig">fadeOutLeftBig</div>
    <div class="animated rect fadeOutRight">fadeOutRight</div>
    <div class="animated rect fadeOutRightBig">fadeOutRightBig</div>
    <div class="animated rect fadeOutUp">fadeOutUp</div>
    <div class="animated rect fadeOutUpBig">fadeOutUpBig</div>
    <h3>flip</h3>
    <hr>
    <div class="animated rect flip">flip</div>
    <div class="animated rect flipInX">flipInX</div>
    <div class="animated rect flipInY">flipInY</div>
    <div class="animated rect flipOutX">flipOutX</div>
    <div class="animated rect flipOutY">flipOutY</div>
    <div class="animated rect lightSpeedIn">lightSpeedIn</div>
    <div class="animated rect lightSpeedOut">lightSpeedOut</div>
    <h3>rotate</h3>
    <hr>
    <div class="animated rect rotate">rotate</div>
    <div class="animated circle rotateIn">rotateIn</div>
    <div class="animated circle rotateInDownLeft">rotateInDownLeft</div>
    <div class="animated circle rotateInDownRight">rotateInDownRight</div>
    <div class="animated circle rotateInUpLeft">rotateInUpLeft</div>
    <div class="animated circle rotateInUpRight">rotateInUpRight</div>
    <div class="animated circle rotateOut">rotateOut</div>
    <div class="animated circle rotateOutDownLeft">rotateOutDownLeft</div>
    <div class="animated circle rotateOutDownRight">rotateOutDownRight</div>
    <div class="animated circle rotateOutUpLeft">rotateOutUpLeft</div>
    <div class="animated circle rotateOutUpRight">rotateOutUpRight</div>
    <h3>hinge</h3>
    <hr>
    <div class="animated circle hinge">hinge</div>
    <!-- <div class="rect hinge">hinge</div> -->
    <h3>roll</h3>
    <hr>
    <div class="animated circle rollIn">rollIn</div>
    <div class="animated circle rollOut">rollOut</div>
    <h3>Zoom</h3>
    <hr>
    <div class="animated circle zoomIn">zoomIn</div>
    <div class="animated circle zoomInDown">zoomInDown</div>
    <div class="animated circle zoomInLeft">zoomInLeft</div>
    <div class="animated circle zoomInRight">zoomInRight</div>
    <div class="animated circle zoomInUp">zoomInUp</div>
    <hr>
    <div class="animated circle zoomOut">zoomOut</div>
    <div class="animated circle zoomOutDown">zoomOutDown</div>
    <div class="animated circle zoomOutLeft">zoomOutLeft</div>
    <div class="animated circle zoomOutRight">zoomOutRight</div>
    <div class="animated circle zoomOutUp">zoomOutUp</div>
    <h3>slide</h3>
    <hr>
    <div class="animated rect slideInDown">slideInDown</div>
    <div class="animated rect slideInLeft">slideInLeft</div>
    <div class="animated rect slideInRight">slideInRight</div>
    <div class="animated rect slideInUp">slideInUp</div>
    <h3>slideOut</h3>
    <hr>
    <div class="animated rect slideOutDown">slideOutDown</div>
    <div class="animated rect slideOutLeft">slideOutLeft</div>
    <div class="animated rect slideOutRight">slideOutRight</div>
    <div class="animated rect slideOutUp">slideOutUp</div>
  </div>
</template>


<script>
  export default {
    name: "figureEX",
    data() {
      return {

      }
    }
  }
</script>


<style  lang="less">
.examplePageL{
  h2{
    text-align: center;
    color: #000;
    font-size: 26px
  }

  .figure{
    width: 100%;
    padding: 50px 20px;
    overflow: hidden;
    div{
      float: left;
      margin-right: 50px;
      margin-bottom:50px;
    }
  }
  /*六边形*/
  #hexagon {
    width: 100px;
    height: 55px;
    background: red;
    position: relative;
    margin-top:50px
  }
  #hexagon:before {
    content: "";
    position: absolute;
    top: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 25px solid red
  }
  #hexagon:after {
    content: "";
    position: absolute;
    bottom: -25px;
    left: 0;
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 25px solid red
  }

  /*八角星*/
  #burst-8 {
    background: red;
    width: 80px;
    height: 80px;
    position: relative;
    text-align: center;
    -webkit-transform: rotate(20deg);
    -moz-transform: rotate(20deg);
    -ms-transform: rotate(20deg);
    -o-transform: rotate(20eg);
    transform: rotate(20deg)
  }
  #burst-8:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 80px;
    background: red;
    -webkit-transform: rotate(135deg);
    -moz-transform: rotate(135deg);
    -ms-transform: rotate(135deg);
    -o-transform: rotate(135deg);
    transform: rotate(135deg)
  }

  /*十二角星*/
  #burst-12 {
    background: red;
    width: 80px;
    height: 80px;
    position: relative;
    text-align: center
  }
  #burst-12:before, #burst-12:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 80px;
    width: 80px;
    background: red
  }
  #burst-12:before {
    -webkit-transform: rotate(30deg);
    -moz-transform: rotate(30deg);
    -ms-transform: rotate(30deg);
    -o-transform: rotate(30deg);
    transform: rotate(30deg)
  }
  #burst-12:after {
    -webkit-transform: rotate(60deg);
    -moz-transform: rotate(60deg);
    -ms-transform: rotate(60deg);
    -o-transform: rotate(60deg);
    transform: rotate(60deg)
  }

  /*对话框*/
  #talkbubble {
    width: 120px;
    height: 80px;
    background: red;
    position: relative;
    -moz-border-radius:    10px;
    -webkit-border-radius: 10px;
    border-radius:         10px
  }

  #talkbubble:before {
    content:"";
    position: absolute;
    right: 100%;
    top: 26px;
    width: 0;
    height: 0;
    border-top: 13px solid transparent;
    border-right: 26px solid red;
    border-bottom: 13px solid transparent
  }

  /*食逗人*/
  #pacman {
    width: 0px;
    height: 0px;
    border-right: 60px solid transparent;
    border-top: 60px solid red;
    border-left: 60px solid red;
    border-bottom: 60px solid red;
    border-top-left-radius: 60px;
    border-top-right-radius: 60px;
    border-bottom-left-radius: 60px;
    border-bottom-right-radius: 60px
  }

  /*爱心*/
  #heart {
    position: relative;
    width: 100px;
    height: 90px
  }
  #heart:before,
  #heart:after {
    position: absolute;
    content: "";
    left: 50px;
    top: 0;
    width: 50px;
    height: 80px;
    background: red;
    -moz-border-radius: 50px 50px 0 0;
    border-radius: 50px 50px 0 0;
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -ms-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-transform-origin: 0 100%;
    -moz-transform-origin: 0 100%;
    -ms-transform-origin: 0 100%;
    -o-transform-origin: 0 100%;
    transform-origin: 0 100%
  }

  #heart:after {
    left: 0;
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    transform-origin :100% 100%
  }

  /*五角星*/
  #star-five {
    margin: 50px 0;
    position: relative;
    display: block;
    color: red;
    width: 0px;
    height: 0px;
    border-right:  100px solid transparent;
    border-bottom: 70px  solid red;
    border-left:   100px solid transparent;
    -moz-transform:    rotate(35deg);
    -webkit-transform: rotate(35deg);
    -ms-transform:     rotate(35deg);
    -o-transform:      rotate(35deg)
  }
  #star-five:before {
    border-bottom: 80px solid red;
    border-left: 30px solid transparent;
    border-right: 30px solid transparent;
    position: absolute;
    height: 0;
    width: 0;
    top: -45px;
    left: -65px;
    display: block;
    content: '';
    -webkit-transform: rotate(-35deg);
    -moz-transform:    rotate(-35deg);
    -ms-transform:     rotate(-35deg);
    -o-transform:      rotate(-35deg)
  }
  #star-five:after {
    position: absolute;
    display: block;
    color: red;
    top: 3px;
    left: -105px;
    width: 0px;
    height: 0px;
    border-right: 100px solid transparent;
    border-bottom: 70px solid red;
    border-left: 100px solid transparent;
    -webkit-transform: rotate(-70deg);
    -moz-transform:    rotate(-70deg);
    -ms-transform:     rotate(-70deg);
    -o-transform:      rotate(-70deg);
    content: ''
  }

  /*六角星*/
  #star-six {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
    position: relative
  }
  #star-six:after {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid red;
    position: absolute;
    content: "";
    top: 30px;
    left: -50px
  }

  /*平行四边形*/
  #parallelogram {
    width: 150px;
    height: 100px;
    margin-left:20px;
    -webkit-transform: skew(20deg);
    -moz-transform: skew(20deg);
    -o-transform: skew(20deg);
    background: red
  }

  /*右下三角*/
  #triangle-bottomright {
    width: 0;
    height: 0;
    border-bottom: 100px solid red;
    border-left: 100px solid transparent
  }

  /*左下三角*/
  #triangle-bottomleft {
    width: 0;
    height: 0;
    border-bottom: 100px solid red;
    border-right: 100px solid transparent
  }

  /*右上三角*/
  #triangle-topright {
    width: 0;
    height: 0;
    border-top: 100px solid red;
    border-left: 100px solid transparent
  }

  /*左上三角*/
  #triangle-topleft {
    width: 0;
    height: 0;
    border-top: 100px solid red;
    border-right: 100px solid transparent
  }

  /*右三角*/
  #triangle-right {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-left: 100px solid red;
    border-bottom: 50px solid transparent
  }

  /*左三角*/
  #triangle-left {
    width: 0;
    height: 0;
    border-top: 50px solid transparent;
    border-right: 100px solid red;
    border-bottom: 50px solid transparent
  }

  /*下三角*/
  #triangle-down {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-top: 100px solid red
  }

  /*上三角*/
  #triangle-up {
    width: 0;
    height: 0;
    border-left: 50px solid transparent;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red
  }

  /*
    演示动画用的DIV
 */
  .rect,.rect-h,.multi,.circle {
    display: inline-block;
    background-color: red;
    margin: 30px;
  }
  .rect {
    width: 60px;
    height: 100px;
    -webkit-transform-origin: center bottom;
    -moz-transform-origin: center bottom;
    -ms-transform-origin: center bottom;
    -o-transform-origin: center bottom;
    transform-origin: center bottom;
  }
  .rect-h {
    width: 100px;
    height: 60px;
  }
  .multi:hover{
    width: 60px;
    height: 100px;
    background-color: blue;
    -webkit-transition: width 1s,height 2s,background-color 3s;
    -o-transition: width 1s,height 2s,background-color 3s;
    transition: width 1s,height 2s,background-color 3s;
  }
  .circle {
    border: 3px dotted white;
    border-radius: 500px;
    width: 100px;
    height: 100px;
  }


  /*
   *	@description - 初始化定义animation
   */

  .animated{
    /**
     * @description - 规定动画在播放之前或之后，其动画效果是否可见
     * @value none - 不改变默认行为
     * @value forwards - 当动画完成后，保持最后一个属性值
     * @value backwards - 在 animation-delay 所指定的一段时间内，在动画显示之前，应用开始属性值
     * @value both - 向前和向后填充模式都被应用
     */
    -webkit-animation-fill-mode:both;
    -moz-animation-fill-mode:both;
    -ms-animation-fill-mode:both;
    -o-animation-fill-mode:both;
    animation-fill-mode:both;

    /**
     * @description - 规定动画的速度曲线
     * @value linear - 动画从头到尾的速度是相同的
     * @value ease - 默认。动画以低速开始，然后加快，在结束前变慢
     * @value ease-in - 动画以低速开始
     * @value ease-out - 动画以低速结束
     * @value ease-in-out - 动画以低速开始和结束
     * @value cubic-bezier(n,n,n,n) - 自定义速度
     */
    -webkit-animation-timing-function: ease-in;
    -moz-animation-timing-function: ease-in;
    -ms-animation-timing-function: ease-in;
    -o-animation-timing-function: ease-in;
    animation-timing-function: ease-in;

    /*规定何时开始*/
    -webkit-animation-delay: 0s;
    -moz-animation-delay: 0s;
    -ms-animation-delay: 0s;
    -o-animation-delay: 0s;
    animation-delay: 0s;

    /*规定完成动画所花费的时间。默认值是 0，意味着没有动画效果。*/
    -webkit-animation-duration:2s;
    -moz-animation-duration:2s;
    -ms-animation-duration:2s;
    -o-animation-duration:2s;
    animation-duration:2s;

    /**
     * @description - 规定动画的播放次数，默认1次
     * @value infinite - 规定动画无限次播放
     */
    -webkit-animation-iteration-count:infinite;
    -moz-animation-iteration-count:infinite;
    -ms-animation-iteration-count:infinite;
    -o-animation-iteration-count:infinite;

    /**
     * @description - 规定动画的播放方向
     * @value normal - 默认，从0%执行到100%
     * @value reverse - 动画从100%执行到0%
     * @value alternate - 动画在0%到100%之间往复执行
     * @value alternate-reverse - 与alternate一致，不过是从100%开始
     */
    -webkit-animation-direction: normal;
    -moz-animation-direction: normal;
    -o-animation-direction: normal;
    animation-direction: normal;

  }

  /* 动画效果 */
  @-webkit-keyframes colorchange {
    0%   { background-color: #00F; /* from: blue */ }
    25%  { background-color: #F00; /* red        */ }
    50%  { background-color: #0F0; /* green      */ }
    75%  { background-color: #F0F; /* purple     */ }
    100% { background-color: #00F; /* to: blue   */ }
  }
  @keyframes colorchange {
    0%   { background-color: #00F; /* from: blue */ }
    25%  { background-color: #F00; /* red        */ }
    50%  { background-color: #0F0; /* green      */ }
    75%  { background-color: #F0F; /* purple     */ }
    100% { background-color: #00F; /* to: blue   */ }
  }
  .colorchange {
    -webkit-animation-name: colorchange;
    animation-name: colorchange;
  }

  @-webkit-keyframes swing{
    0%{transform:rotate(1deg);-webkit-transform:rotate(1deg);}
    10%{transform:rotate(7deg);-webkit-transform:rotate(7deg);}
    20%{transform:rotate(10deg);-webkit-transform:rotate(10deg);}
    30%{transform:rotate(7deg);-webkit-transform:rotate(7deg);}
    40%{transform:rotate(3deg);-webkit-transform:rotate(3deg);}
    50%{transform:rotate(0deg);-webkit-transform:rotate(0deg);}
    60%{transform:rotate(-3deg);-webkit-transform:rotate(-3deg);}
    70%{transform:rotate(-7deg);-webkit-transform:rotate(-7deg);}
    80%{transform:rotate(-10deg);-webkit-transform:rotate(-10deg);}
    90%{transform:rotate(-7deg);-webkit-transform:rotate(-7deg);}
    100%{transform:rotate(-1deg);-webkit-transform:rotate(-1deg);}
  }
  @keyframes swing{
    0%{transform:rotate(1deg);-webkit-transform:rotate(1deg);}
    10%{transform:rotate(7deg);-webkit-transform:rotate(7deg);}
    20%{transform:rotate(10deg);-webkit-transform:rotate(10deg);}
    30%{transform:rotate(7deg);-webkit-transform:rotate(7deg);}
    40%{transform:rotate(3deg);-webkit-transform:rotate(3deg);}
    50%{transform:rotate(0deg);-webkit-transform:rotate(0deg);}
    60%{transform:rotate(-3deg);-webkit-transform:rotate(-3deg);}
    70%{transform:rotate(-7deg);-webkit-transform:rotate(-7deg);}
    80%{transform:rotate(-10deg);-webkit-transform:rotate(-10deg);}
    90%{transform:rotate(-7deg);-webkit-transform:rotate(-7deg);}
    100%{transform:rotate(-1deg);-webkit-transform:rotate(-1deg);}
  }
  .swing {
    -webkit-animation-name: swing;
    animation-name: swing;
  }
  .swing.reverse {
    -webkit-animation-direction: reverse;
    -o-animation-direction: reverse;
    animation-direction: reverse;
  }
  .swing.alternate {
    -webkit-animation-direction: alternate-reverse;
    -o-animation-direction: alternate-reverse;
    animation-direction: alternate-reverse;
  }


  @-webkit-keyframes rotate {
    from {
      -webkit-transform: rotate(0deg)
    }

    to {
      -webkit-transform: rotate(360deg)
    }
  }
  @keyframes rotate {
    from {
      -webkit-transform: rotate(0deg)
    }

    to {
      -webkit-transform: rotate(360deg)
    }
  }
  .rotate {
    -webkit-animation-name: rotate;
    animation-name: rotate;
  }

  @-webkit-keyframes up-fade {
    0% {
      opacity: 1
    }

    100% {
      -webkit-transform: translate3d(0px,-6px,0);
      opacity: .5
    }
  }
  @keyframes up-fade {
    0% {
      opacity: 1
    }

    100% {
      -webkit-transform: translate(0,-20px);
      -ms-transform: translate(0,-20px);
      -o-transform: translate(0,-20px);
      transform: translate(0,-20px);
      opacity: .0
    }
  }
  .up-fade {
    -webkit-animation-name: up-fade;
    animation-name: up-fade;
  }

  @-webkit-keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1,1,1)
    }

    30% {
      -webkit-transform: scale3d(1.25,0.75,1);
      transform: scale3d(1.25,0.75,1)
    }

    40% {
      -webkit-transform: scale3d(0.75,1.25,1);
      transform: scale3d(0.75,1.25,1)
    }

    50% {
      -webkit-transform: scale3d(1.15,0.85,1);
      transform: scale3d(1.15,0.85,1)
    }

    65% {
      -webkit-transform: scale3d(.95,1.05,1);
      transform: scale3d(.95,1.05,1)
    }

    75% {
      -webkit-transform: scale3d(1.05,.95,1);
      transform: scale3d(1.05,.95,1)
    }

    100% {
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1,1,1)
    }
  }
  @keyframes rubberBand {
    0% {
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1,1,1)
    }

    30% {
      -webkit-transform: scale3d(1.25,0.75,1);
      transform: scale3d(1.25,0.75,1)
    }

    40% {
      -webkit-transform: scale3d(0.75,1.25,1);
      transform: scale3d(0.75,1.25,1)
    }

    50% {
      -webkit-transform: scale3d(1.15,0.85,1);
      transform: scale3d(1.15,0.85,1)
    }

    65% {
      -webkit-transform: scale3d(.95,1.05,1);
      transform: scale3d(.95,1.05,1)
    }

    75% {
      -webkit-transform: scale3d(1.05,.95,1);
      transform: scale3d(1.05,.95,1)
    }

    100% {
      -webkit-transform: scale3d(1,1,1);
      transform: scale3d(1,1,1)
    }
  }

  .rubberBand {
    -webkit-animation-name: rubberBand;
    animation-name: rubberBand;
  }


  @-webkit-keyframes movex {
    0% {
      -webkit-transform: translateX(-40px);
      transform: translateX(-40px)
    }

    100% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px)
    }
  }
  @keyframes movex {
    0% {
      -webkit-transform: translateX(-40px);
      transform: translateX(-40px)
    }

    100% {
      -webkit-transform: translateX(100px);
      transform: translateX(100px)
    }
  }
  .movex {
    -webkit-animation-name: movex;
    animation-name: movex;
  }


  @-webkit-keyframes mask {
    0% {
      -webkit-transform: translate3d(100%,-20%,0)
    }
    100% {
      -webkit-transform: translate3d(100%,76%,0)
    }
  }
  @keyframes mask {
    0% {
      -webkit-transform: translate3d(100%,-20%,0)
    }
    100% {
      -webkit-transform: translate3d(100%,76%,0)
    }
  }
  .mask {
    -webkit-animation-name: mask;
    animation-name: mask;
  }
  @-webkit-keyframes zoomInDown {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
      transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
      -webkit-animation-timing-function: cubic-bezier(0.550,0.055,0.675,0.190);
      animation-timing-function: cubic-bezier(0.550,0.055,0.675,0.190)
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
      transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
      -webkit-animation-timing-function: cubic-bezier(0.175,0.885,0.320,1);
      animation-timing-function: cubic-bezier(0.175,0.885,0.320,1)
    }
  }
  @keyframes zoomInDown {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
      transform: scale3d(.1,.1,.1) translate3d(0,-1000px,0);
      -webkit-animation-timing-function: cubic-bezier(0.550,0.055,0.675,0.190);
      animation-timing-function: cubic-bezier(0.550,0.055,0.675,0.190)
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
      transform: scale3d(.475,.475,.475) translate3d(0,60px,0);
      -webkit-animation-timing-function: cubic-bezier(0.175,0.885,0.320,1);
      animation-timing-function: cubic-bezier(0.175,0.885,0.320,1)
    }
  }

  .zoomInDown {
    -webkit-animation-name: zoomInDown;
    animation-name: zoomInDown;
  }

  @-webkit-keyframes spin {
    0% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    0% {
      -webkit-transform: rotate(0);
      -ms-transform: rotate(0);
      -o-transform: rotate(0);
      transform: rotate(0);
    }
    100% {
      -webkit-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .spin {
    -webkit-animation-name: spin;
    animation-name: spin;
  }

  @-webkit-keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }

    40%, 43% {
      -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0, -30px, 0);
      transform: translate3d(0, -30px, 0);
    }

    70% {
      -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0, -15px, 0);
      transform: translate3d(0, -15px, 0);
    }

    90% {
      -webkit-transform: translate3d(0,-4px,0);
      transform: translate3d(0,-4px,0);
    }
  }

  @keyframes bounce {
    0%, 20%, 53%, 80%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      -webkit-transform: translate3d(0,0,0);
      transform: translate3d(0,0,0);
    }

    40%, 43% {
      -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0, -30px, 0);
      transform: translate3d(0, -30px, 0);
    }

    70% {
      -webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
      -webkit-transform: translate3d(0, -15px, 0);
      transform: translate3d(0, -15px, 0);
    }

    90% {
      -webkit-transform: translate3d(0,-4px,0);
      transform: translate3d(0,-4px,0);
    }
  }
  .bounce {
    -webkit-animation-name: bounce;
    animation-name: bounce;
  }

  @-webkit-keyframes flash {
    0%, 50%, 100% {
      opacity: 1;
    }

    25%, 75% {
      opacity: 0;
    }
  }

  @keyframes flash {
    0%, 50%, 100% {
      opacity: 1;
    }

    25%, 75% {
      opacity: 0;
    }
  }

  .flash {
    -webkit-animation-name: flash;
    animation-name: flash;
  }

  @-webkit-keyframes pulse {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes pulse {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  .pulse {
    -webkit-animation-name: pulse;
    animation-name: pulse;
  }

  @-webkit-keyframes shake {
    0%, 100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    10%, 30%, 50%, 70%, 90% {
      -webkit-transform: translate3d(-5px, 0, 0);
      transform: translate3d(-5px, 0, 0);
    }

    20%, 40%, 60%, 80% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }
  }

  @keyframes shake {
    0%, 100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }

    10%, 30%, 50%, 70%, 90% {
      -webkit-transform: translate3d(-5px, 0, 0);
      transform: translate3d(-5px, 0, 0);
    }

    20%, 40%, 60%, 80% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }
  }

  .shake {
    -webkit-animation-name: shake;
    animation-name: shake;
  }
  @-webkit-keyframes tada {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    10%, 20% {
      -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    }

    30%, 50%, 70%, 90% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%, 60%, 80% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes tada {
    0% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    10%, 20% {
      -webkit-transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(.9, .9, .9) rotate3d(0, 0, 1, -3deg);
    }

    30%, 50%, 70%, 90% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
    }

    40%, 60%, 80% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
      transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
    }

    100% {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  .tada {
    -webkit-animation-name: tada;
    animation-name: tada;
  }

  @-webkit-keyframes wobble {
    0% {
      -webkit-transform: none;
      transform: none;
    }

    15% {
      -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }

    30% {
      -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }

    45% {
      -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }

    60% {
      -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }

    75% {
      -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }

    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes wobble {
    0% {
      -webkit-transform: none;
      transform: none;
    }

    15% {
      -webkit-transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
      transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
    }

    30% {
      -webkit-transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
      transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
    }

    45% {
      -webkit-transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
      transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
    }

    60% {
      -webkit-transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
      transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
    }

    75% {
      -webkit-transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
      transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
    }

    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  .wobble {
    -webkit-animation-name: wobble;
    animation-name: wobble;
  }

  @-webkit-keyframes bounceIn {
    0%, 20%, 40%, 60%, 80%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }

    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      -webkit-transform: scale3d(.9, .9, .9);
      transform: scale3d(.9, .9, .9);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      -webkit-transform: scale3d(.97, .97, .97);
      transform: scale3d(.97, .97, .97);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  @keyframes bounceIn {
    0%, 20%, 40%, 60%, 80%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }

    20% {
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    40% {
      -webkit-transform: scale3d(.9, .9, .9);
      transform: scale3d(.9, .9, .9);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(1.03, 1.03, 1.03);
      transform: scale3d(1.03, 1.03, 1.03);
    }

    80% {
      -webkit-transform: scale3d(.97, .97, .97);
      transform: scale3d(.97, .97, .97);
    }

    100% {
      opacity: 1;
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

  .bounceIn {
    -webkit-animation-name: bounceIn;
    animation-name: bounceIn;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
  }

  @-webkit-keyframes bounceInDown {
    0%, 60%, 75%, 90%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
    }

    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }

    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes bounceInDown {
    0%, 60%, 75%, 90%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
    }

    75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
    }

    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  .bounceInDown {
    -webkit-animation-name: bounceInDown;
    animation-name: bounceInDown;
  }

  @-webkit-keyframes bounceInLeft {
    0%, 60%, 75%, 90%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(-3000px, 0, 0);
      transform: translate3d(-3000px, 0, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0);
    }

    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }

    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }

    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes bounceInLeft {
    0%, 60%, 75%, 90%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(-3000px, 0, 0);
      transform: translate3d(-3000px, 0, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(25px, 0, 0);
      transform: translate3d(25px, 0, 0);
    }

    75% {
      -webkit-transform: translate3d(-10px, 0, 0);
      transform: translate3d(-10px, 0, 0);
    }

    90% {
      -webkit-transform: translate3d(5px, 0, 0);
      transform: translate3d(5px, 0, 0);
    }

    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  .bounceInLeft {
    -webkit-animation-name: bounceInLeft;
    animation-name: bounceInLeft;
  }

  @-webkit-keyframes bounceInRight {
    0%, 60%, 75%, 90%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(3000px, 0, 0);
      transform: translate3d(3000px, 0, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(-25px, 0, 0);
      transform: translate3d(-25px, 0, 0);
    }

    75% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }

    90% {
      -webkit-transform: translate3d(-5px, 0, 0);
      transform: translate3d(-5px, 0, 0);
    }

    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes bounceInRight {
    0%, 60%, 75%, 90%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(3000px, 0, 0);
      transform: translate3d(3000px, 0, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(-25px, 0, 0);
      transform: translate3d(-25px, 0, 0);
    }

    75% {
      -webkit-transform: translate3d(10px, 0, 0);
      transform: translate3d(10px, 0, 0);
    }

    90% {
      -webkit-transform: translate3d(-5px, 0, 0);
      transform: translate3d(-5px, 0, 0);
    }

    100% {
      -webkit-transform: none;
      transform: none;
    }
  }

  .bounceInRight {
    -webkit-animation-name: bounceInRight;
    animation-name: bounceInRight;
  }

  @-webkit-keyframes bounceInUp {
    0%, 60%, 75%, 90%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }

    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }

    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes bounceInUp {
    0%, 60%, 75%, 90%, 100% {
      -webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
      transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    }

    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 3000px, 0);
      transform: translate3d(0, 3000px, 0);
    }

    60% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }

    75% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }

    90% {
      -webkit-transform: translate3d(0, -5px, 0);
      transform: translate3d(0, -5px, 0);
    }

    100% {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .bounceInUp {
    -webkit-animation-name: bounceInUp;
    animation-name: bounceInUp;
  }

  @-webkit-keyframes bounceOut {
    20% {
      -webkit-transform: scale3d(.9, .9, .9);
      transform: scale3d(.9, .9, .9);
    }

    50%, 55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }
  }

  @keyframes bounceOut {
    20% {
      -webkit-transform: scale3d(.9, .9, .9);
      transform: scale3d(.9, .9, .9);
    }

    50%, 55% {
      opacity: 1;
      -webkit-transform: scale3d(1.1, 1.1, 1.1);
      transform: scale3d(1.1, 1.1, 1.1);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }
  }

  .bounceOut {
    -webkit-animation-name: bounceOut;
    animation-name: bounceOut;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
  }

  @-webkit-keyframes bounceOutDown {
    20% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }

    40%, 45% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
  }

  @keyframes bounceOutDown {
    20% {
      -webkit-transform: translate3d(0, 10px, 0);
      transform: translate3d(0, 10px, 0);
    }

    40%, 45% {
      opacity: 1;
      -webkit-transform: translate3d(0, -20px, 0);
      transform: translate3d(0, -20px, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
  }

  .bounceOutDown {
    -webkit-animation-name: bounceOutDown;
    animation-name: bounceOutDown;
  }

  @-webkit-keyframes bounceOutLeft {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(20px, 0, 0);
      transform: translate3d(20px, 0, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }

  @keyframes bounceOutLeft {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(20px, 0, 0);
      transform: translate3d(20px, 0, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }

  .bounceOutLeft {
    -webkit-animation-name: bounceOutLeft;
    animation-name: bounceOutLeft;
  }

  @-webkit-keyframes bounceOutRight {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(-20px, 0, 0);
      transform: translate3d(-20px, 0, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  }

  @keyframes bounceOutRight {
    20% {
      opacity: 1;
      -webkit-transform: translate3d(-20px, 0, 0);
      transform: translate3d(-20px, 0, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  }

  .bounceOutRight {
    -webkit-animation-name: bounceOutRight;
    animation-name: bounceOutRight;
  }

  @-webkit-keyframes bounceOutUp {
    20% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }

    40%, 45% {
      opacity: 1;
      -webkit-transform: translate3d(0, 20px, 0);
      transform: translate3d(0, 20px, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }
  }

  @keyframes bounceOutUp {
    20% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
    }

    40%, 45% {
      opacity: 1;
      -webkit-transform: translate3d(0, 20px, 0);
      transform: translate3d(0, 20px, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }
  }

  .bounceOutUp {
    -webkit-animation-name: bounceOutUp;
    animation-name: bounceOutUp;
  }

  @-webkit-keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  @keyframes fadeIn {
    0% {opacity: 0;}
    100% {opacity: 1;}
  }

  .fadeIn {
    -webkit-animation-name: fadeIn;
    animation-name: fadeIn;
  }

  @-webkit-keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInDown {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInDown {
    -webkit-animation-name: fadeInDown;
    animation-name: fadeInDown;
  }

  @-webkit-keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInDownBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInDownBig {
    -webkit-animation-name: fadeInDownBig;
    animation-name: fadeInDownBig;
  }

  @-webkit-keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInLeft {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInLeft {
    -webkit-animation-name: fadeInLeft;
    animation-name: fadeInLeft;
  }

  @-webkit-keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInLeftBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInLeftBig {
    -webkit-animation-name: fadeInLeftBig;
    animation-name: fadeInLeftBig;
  }

  @-webkit-keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInRight {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInRight {
    -webkit-animation-name: fadeInRight;
    animation-name: fadeInRight;
  }

  @-webkit-keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInRightBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInRightBig {
    -webkit-animation-name: fadeInRightBig;
    animation-name: fadeInRightBig;
  }

  @-webkit-keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInUp {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInUp {
    -webkit-animation-name: fadeInUp;
    animation-name: fadeInUp;
  }

  @-webkit-keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes fadeInUpBig {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .fadeInUpBig {
    -webkit-animation-name: fadeInUpBig;
    animation-name: fadeInUpBig;
  }

  @-webkit-keyframes fadeOut {
    0% {opacity: 1;}
    100% {opacity: 0;}
  }

  @keyframes fadeOut {
    0% {opacity: 1;}
    100% {opacity: 0;}
  }

  .fadeOut {
    -webkit-animation-name: fadeOut;
    animation-name: fadeOut;
  }

  @-webkit-keyframes fadeOutDown {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }

  @keyframes fadeOutDown {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
  }

  .fadeOutDown {
    -webkit-animation-name: fadeOutDown;
    animation-name: fadeOutDown;
  }

  @-webkit-keyframes fadeOutDownBig {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
  }

  @keyframes fadeOutDownBig {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, 2000px, 0);
      transform: translate3d(0, 2000px, 0);
    }
  }

  .fadeOutDownBig {
    -webkit-animation-name: fadeOutDownBig;
    animation-name: fadeOutDownBig;
  }

  @-webkit-keyframes fadeOutLeft {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  @keyframes fadeOutLeft {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0);
      transform: translate3d(-100%, 0, 0);
    }
  }

  .fadeOutLeft {
    -webkit-animation-name: fadeOutLeft;
    animation-name: fadeOutLeft;
  }

  @-webkit-keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }

  @keyframes fadeOutLeftBig {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(-2000px, 0, 0);
      transform: translate3d(-2000px, 0, 0);
    }
  }

  .fadeOutLeftBig {
    -webkit-animation-name: fadeOutLeftBig;
    animation-name: fadeOutLeftBig;
  }

  @-webkit-keyframes fadeOutRight {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  @keyframes fadeOutRight {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0);
      transform: translate3d(100%, 0, 0);
    }
  }

  .fadeOutRight {
    -webkit-animation-name: fadeOutRight;
    animation-name: fadeOutRight;
  }

  @-webkit-keyframes fadeOutRightBig {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  }

  @keyframes fadeOutRightBig {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(2000px, 0, 0);
      transform: translate3d(2000px, 0, 0);
    }
  }

  .fadeOutRightBig {
    -webkit-animation-name: fadeOutRightBig;
    animation-name: fadeOutRightBig;
  }

  @-webkit-keyframes fadeOutUp {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }

  @keyframes fadeOutUp {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -100%, 0);
      transform: translate3d(0, -100%, 0);
    }
  }

  .fadeOutUp {
    -webkit-animation-name: fadeOutUp;
    animation-name: fadeOutUp;
  }

  @-webkit-keyframes fadeOutUpBig {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }
  }

  @keyframes fadeOutUpBig {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(0, -2000px, 0);
      transform: translate3d(0, -2000px, 0);
    }
  }

  .fadeOutUpBig {
    -webkit-animation-name: fadeOutUpBig;
    animation-name: fadeOutUpBig;
  }
  @-webkit-keyframes flip {
    0% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    40% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
      transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    50% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
      transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    80% {
      -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
      transform: perspective(400px) scale3d(.95, .95, .95);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  }

  @keyframes flip {
    0% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -360deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    40% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
      transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -190deg);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }

    50% {
      -webkit-transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
      transform: perspective(400px) translate3d(0, 0, 150px) rotate3d(0, 1, 0, -170deg);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    80% {
      -webkit-transform: perspective(400px) scale3d(.95, .95, .95);
      transform: perspective(400px) scale3d(.95, .95, .95);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }

    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
  }

  .flip {
    -webkit-backface-visibility: visible;
    backface-visibility: visible;
    -webkit-animation-name: flip;
    animation-name: flip;
  }

  @-webkit-keyframes flipInX {
    0% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }

    60% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }

    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }

  @keyframes flipInX {
    0% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }

    60% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
    }

    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }

  .flipInX {
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInX;
    animation-name: flipInX;
  }

  @-webkit-keyframes flipInY {
    0% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }

    60% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }

    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }

  @keyframes flipInY {
    0% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
      opacity: 0;
    }

    40% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
      -webkit-transition-timing-function: ease-in;
      transition-timing-function: ease-in;
    }

    60% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
    }

    100% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }
  }

  .flipInY {
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipInY;
    animation-name: flipInY;
  }

  @-webkit-keyframes flipOutX {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }

    30% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }

    100% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }

  @keyframes flipOutX {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }

    30% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
      opacity: 1;
    }

    100% {
      -webkit-transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
      opacity: 0;
    }
  }

  .flipOutX {
    -webkit-animation-name: flipOutX;
    animation-name: flipOutX;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
  }

  @-webkit-keyframes flipOutY {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }

    30% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }

    100% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }

  @keyframes flipOutY {
    0% {
      -webkit-transform: perspective(400px);
      transform: perspective(400px);
    }

    30% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
      opacity: 1;
    }

    100% {
      -webkit-transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
      opacity: 0;
    }
  }

  .flipOutY {
    -webkit-backface-visibility: visible !important;
    backface-visibility: visible !important;
    -webkit-animation-name: flipOutY;
    animation-name: flipOutY;
    -webkit-animation-duration: .75s;
    animation-duration: .75s;
  }

  @-webkit-keyframes lightSpeedIn {
    0% {
      -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
      transform: translate3d(100%, 0, 0) skewX(-30deg);
      opacity: 0;
    }

    60% {
      -webkit-transform: skewX(20deg);
      transform: skewX(20deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: skewX(-5deg);
      transform: skewX(-5deg);
      opacity: 1;
    }

    100% {
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  @keyframes lightSpeedIn {
    0% {
      -webkit-transform: translate3d(100%, 0, 0) skewX(-30deg);
      transform: translate3d(100%, 0, 0) skewX(-30deg);
      opacity: 0;
    }

    60% {
      -webkit-transform: skewX(20deg);
      transform: skewX(20deg);
      opacity: 1;
    }

    80% {
      -webkit-transform: skewX(-5deg);
      transform: skewX(-5deg);
      opacity: 1;
    }

    100% {
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  .lightSpeedIn {
    -webkit-animation-name: lightSpeedIn;
    animation-name: lightSpeedIn;
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }

  @-webkit-keyframes lightSpeedOut {
    0% {
      opacity: 1;
    }

    100% {
      -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
      transform: translate3d(100%, 0, 0) skewX(30deg);
      opacity: 0;
    }
  }

  @keyframes lightSpeedOut {
    0% {
      opacity: 1;
    }

    100% {
      -webkit-transform: translate3d(100%, 0, 0) skewX(30deg);
      transform: translate3d(100%, 0, 0) skewX(30deg);
      opacity: 0;
    }
  }

  .lightSpeedOut {
    -webkit-animation-name: lightSpeedOut;
    animation-name: lightSpeedOut;
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }

  @-webkit-keyframes rotateIn {
    0% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, -200deg);
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  @keyframes rotateIn {
    0% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, -200deg);
      transform: rotate3d(0, 0, 1, -200deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  .rotateIn {
    -webkit-animation-name: rotateIn;
    animation-name: rotateIn;
  }

  @-webkit-keyframes rotateInDownLeft {
    0% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  @keyframes rotateInDownLeft {
    0% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  .rotateInDownLeft {
    -webkit-animation-name: rotateInDownLeft;
    animation-name: rotateInDownLeft;
  }

  @-webkit-keyframes rotateInDownRight {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  @keyframes rotateInDownRight {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  .rotateInDownRight {
    -webkit-animation-name: rotateInDownRight;
    animation-name: rotateInDownRight;
  }

  @-webkit-keyframes rotateInUpLeft {
    0% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  @keyframes rotateInUpLeft {
    0% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  .rotateInUpLeft {
    -webkit-animation-name: rotateInUpLeft;
    animation-name: rotateInUpLeft;
  }

  @-webkit-keyframes rotateInUpRight {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, -90deg);
      transform: rotate3d(0, 0, 1, -90deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  @keyframes rotateInUpRight {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, -90deg);
      transform: rotate3d(0, 0, 1, -90deg);
      opacity: 0;
    }

    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: none;
      transform: none;
      opacity: 1;
    }
  }

  .rotateInUpRight {
    -webkit-animation-name: rotateInUpRight;
    animation-name: rotateInUpRight;
  }

  @-webkit-keyframes rotateOut {
    0% {
      -webkit-transform-origin: center;
      transform-origin: center;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, 200deg);
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
  }

  @keyframes rotateOut {
    0% {
      -webkit-transform-origin: center;
      transform-origin: center;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: center;
      transform-origin: center;
      -webkit-transform: rotate3d(0, 0, 1, 200deg);
      transform: rotate3d(0, 0, 1, 200deg);
      opacity: 0;
    }
  }

  .rotateOut {
    -webkit-animation-name: rotateOut;
    animation-name: rotateOut;
  }

  @-webkit-keyframes rotateOutDownLeft {
    0% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  }

  @keyframes rotateOutDownLeft {
    0% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, 45deg);
      transform: rotate3d(0, 0, 1, 45deg);
      opacity: 0;
    }
  }

  .rotateOutDownLeft {
    -webkit-animation-name: rotateOutDownLeft;
    animation-name: rotateOutDownLeft;
  }

  @-webkit-keyframes rotateOutDownRight {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }

  @keyframes rotateOutDownRight {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }

  .rotateOutDownRight {
    -webkit-animation-name: rotateOutDownRight;
    animation-name: rotateOutDownRight;
  }

  @-webkit-keyframes rotateOutUpLeft {
    0% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }

  @keyframes rotateOutUpLeft {
    0% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: left bottom;
      transform-origin: left bottom;
      -webkit-transform: rotate3d(0, 0, 1, -45deg);
      transform: rotate3d(0, 0, 1, -45deg);
      opacity: 0;
    }
  }

  .rotateOutUpLeft {
    -webkit-animation-name: rotateOutUpLeft;
    animation-name: rotateOutUpLeft;
  }

  @-webkit-keyframes rotateOutUpRight {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, 90deg);
      transform: rotate3d(0, 0, 1, 90deg);
      opacity: 0;
    }
  }

  @keyframes rotateOutUpRight {
    0% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      opacity: 1;
    }

    100% {
      -webkit-transform-origin: right bottom;
      transform-origin: right bottom;
      -webkit-transform: rotate3d(0, 0, 1, 90deg);
      transform: rotate3d(0, 0, 1, 90deg);
      opacity: 0;
    }
  }

  .rotateOutUpRight {
    -webkit-animation-name: rotateOutUpRight;
    animation-name: rotateOutUpRight;
  }

  @-webkit-keyframes hinge {
    0% {
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
    }

    20%, 60% {
      -webkit-transform: rotate3d(0, 0, 1, 80deg);
      transform: rotate3d(0, 0, 1, 80deg);
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
    }

    40%, 80% {
      -webkit-transform: rotate3d(0, 0, 1, 60deg);
      transform: rotate3d(0, 0, 1, 60deg);
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      opacity: 1;
    }

    100% {
      -webkit-transform: translate3d(0, 700px, 0);
      transform: translate3d(0, 700px, 0);
      opacity: 0;
    }
  }

  @keyframes hinge {
    0% {
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
    }

    20%, 60% {
      -webkit-transform: rotate3d(0, 0, 1, 80deg);
      transform: rotate3d(0, 0, 1, 80deg);
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
    }

    40%, 80% {
      -webkit-transform: rotate3d(0, 0, 1, 60deg);
      transform: rotate3d(0, 0, 1, 60deg);
      -webkit-transform-origin: top left;
      transform-origin: top left;
      -webkit-animation-timing-function: ease-in-out;
      animation-timing-function: ease-in-out;
      opacity: 1;
    }

    100% {
      -webkit-transform: translate3d(0, 700px, 0);
      transform: translate3d(0, 700px, 0);
      opacity: 0;
    }
  }

  .hinge {
    -webkit-animation-name: hinge;
    animation-name: hinge;
  }

  /* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

  @-webkit-keyframes rollIn {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  @keyframes rollIn {
    0% {
      opacity: 0;
      -webkit-transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
      transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
    }

    100% {
      opacity: 1;
      -webkit-transform: none;
      transform: none;
    }
  }

  .rollIn {
    -webkit-animation-name: rollIn;
    animation-name: rollIn;
  }

  /* originally authored by Nick Pettit - https://github.com/nickpettit/glide */

  @-webkit-keyframes rollOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }

  @keyframes rollOut {
    0% {
      opacity: 1;
    }

    100% {
      opacity: 0;
      -webkit-transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
      transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
    }
  }

  .rollOut {
    -webkit-animation-name: rollOut;
    animation-name: rollOut;
  }

  @-webkit-keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }

    50% {
      opacity: 1;
    }
  }

  @keyframes zoomIn {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }

    50% {
      opacity: 1;
    }
  }

  .zoomIn {
    -webkit-animation-name: zoomIn;
    animation-name: zoomIn;
  }

  @-webkit-keyframes zoomInDown {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  @keyframes zoomInDown {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, -1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  .zoomInDown {
    -webkit-animation-name: zoomInDown;
    animation-name: zoomInDown;
  }

  @-webkit-keyframes zoomInLeft {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
      transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  @keyframes zoomInLeft {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
      transform: scale3d(.1, .1, .1) translate3d(-1000px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(10px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  .zoomInLeft {
    -webkit-animation-name: zoomInLeft;
    animation-name: zoomInLeft;
  }

  @-webkit-keyframes zoomInRight {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
      transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  @keyframes zoomInRight {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
      transform: scale3d(.1, .1, .1) translate3d(1000px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(-10px, 0, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  .zoomInRight {
    -webkit-animation-name: zoomInRight;
    animation-name: zoomInRight;
  }

  @-webkit-keyframes zoomInUp {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  @keyframes zoomInUp {
    0% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, 1000px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    60% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  .zoomInUp {
    -webkit-animation-name: zoomInUp;
    animation-name: zoomInUp;
  }

  @-webkit-keyframes zoomOut {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }

    100% {
      opacity: 0;
    }
  }

  @keyframes zoomOut {
    0% {
      opacity: 1;
    }

    50% {
      opacity: 0;
      -webkit-transform: scale3d(.3, .3, .3);
      transform: scale3d(.3, .3, .3);
    }

    100% {
      opacity: 0;
    }
  }

  .zoomOut {
    -webkit-animation-name: zoomOut;
    animation-name: zoomOut;
  }

  @-webkit-keyframes zoomOutDown {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  @keyframes zoomOutDown {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  .zoomOutDown {
    -webkit-animation-name: zoomOutDown;
    animation-name: zoomOutDown;
  }

  @-webkit-keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
      transform: scale(.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      transform-origin: left center;
    }
  }

  @keyframes zoomOutLeft {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(42px, 0, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(.1) translate3d(-2000px, 0, 0);
      transform: scale(.1) translate3d(-2000px, 0, 0);
      -webkit-transform-origin: left center;
      transform-origin: left center;
    }
  }

  .zoomOutLeft {
    -webkit-animation-name: zoomOutLeft;
    animation-name: zoomOutLeft;
  }

  @-webkit-keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
      transform: scale(.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      transform-origin: right center;
    }
  }

  @keyframes zoomOutRight {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
      transform: scale3d(.475, .475, .475) translate3d(-42px, 0, 0);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale(.1) translate3d(2000px, 0, 0);
      transform: scale(.1) translate3d(2000px, 0, 0);
      -webkit-transform-origin: right center;
      transform-origin: right center;
    }
  }

  .zoomOutRight {
    -webkit-animation-name: zoomOutRight;
    animation-name: zoomOutRight;
  }

  @-webkit-keyframes zoomOutUp {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  @keyframes zoomOutUp {
    40% {
      opacity: 1;
      -webkit-transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      transform: scale3d(.475, .475, .475) translate3d(0, 60px, 0);
      -webkit-animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
      animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);
    }

    100% {
      opacity: 0;
      -webkit-transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
      transform: scale3d(.1, .1, .1) translate3d(0, -2000px, 0);
      -webkit-transform-origin: center bottom;
      transform-origin: center bottom;
      -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
      animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);
    }
  }

  .zoomOutUp {
    -webkit-animation-name: zoomOutUp;
    animation-name: zoomOutUp;
  }

  @-webkit-keyframes slideInDown {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes slideInDown {
    0% {
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .slideInDown {
    -webkit-animation-name: slideInDown;
    animation-name: slideInDown;
  }

  @-webkit-keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes slideInLeft {
    0% {
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  .slideInLeft {
    -webkit-animation-name: slideInLeft;
    animation-name: slideInLeft;
  }

  @-webkit-keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes slideInRight {
    0% {
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  .slideInRight {
    -webkit-animation-name: slideInRight;
    animation-name: slideInRight;
  }

  @-webkit-keyframes slideInUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  @keyframes slideInUp {
    0% {
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
      visibility: visible;
    }

    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }
  }

  .slideInUp {
    -webkit-animation-name: slideInUp;
    animation-name: slideInUp;
  }

  @-webkit-keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  @keyframes slideOutDown {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translateY(100%);
      transform: translateY(100%);
    }
  }

  .slideOutDown {
    -webkit-animation-name: slideOutDown;
    animation-name: slideOutDown;
  }

  @-webkit-keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  @keyframes slideOutLeft {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translateX(-100%);
      transform: translateX(-100%);
    }
  }

  .slideOutLeft {
    -webkit-animation-name: slideOutLeft;
    animation-name: slideOutLeft;
  }

  @-webkit-keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  @keyframes slideOutRight {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translateX(100%);
      transform: translateX(100%);
    }
  }

  .slideOutRight {
    -webkit-animation-name: slideOutRight;
    animation-name: slideOutRight;
  }

  @-webkit-keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  @keyframes slideOutUp {
    0% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
    }

    100% {
      visibility: hidden;
      -webkit-transform: translateY(-100%);
      transform: translateY(-100%);
    }
  }

  .slideOutUp {
    -webkit-animation-name: slideOutUp;
    animation-name: slideOutUp;
  }

}
</style>
