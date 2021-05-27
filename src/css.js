const string=`
.skin * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  .skin *::before,
  .skin *::after {
    box-sizing: border-box;
  }
  
  .skin {
    position: relative;
    background: #ffe600;
    min-height: 50vh; /*占满全屏*/
  }
  .nose {
    border: 10px solid black;
    /*border-color: red black green blue;*/
    border-color: black transparent green transparent;
    border-bottom: none;
    width: 0px;
    height: 0px;
    position: relative;
    left: 50%;
    top: 145px;
    margin-left: -10px;
  }
  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    33% {
      transform: rotate(5deg);
    }
    66% {
      transform: rotate(-5deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .nose:hover {
    transform-origin: center bottom;
    animation: wave 300ms infinite linear;
  }
  .yuan {
    position: absolute;
    width: 20px;
    height: 6px;
    top: -16px;
    left: -10px;
    border-radius: 10px 10px 0 0;
    background: black;
  }
  .eye {
    border: 2px solid #000;
    width: 64px;
    height: 64px;
    position: absolute;
    left: 50%;
    top: 100px;
    margin-left: -32px;
    background: #2e2e2e;
    border-radius: 50%;
  }
  .eye::before {
    /*伪元素，content可见的，不写则看不见*/
    content: "";
    display: block; /*默认是span内联元素需要把它变成block*/
    border: 3px solid #000;
    width: 30px;
    height: 30px;
    background: #fff;
    border-radius: 50%;
    position: relative;
    left: 4px;
    top: 2px;
  }
  .eye.left {
    /*注意class间不能有空格*/
    transform: translateX(-100px);
  }
  .eye.right {
    transform: translateX(100px);
  }
  .mouth {
    width: 200px;
    height: 200px;
    position: absolute;
    left: 154px;
    top: 170px;
    margin-left: 387px; /*有问题bug,应该改为绝对定位*/
  }
  .mouth.up {
    position: relative;
    top: -20px;
  }
  .mouth .up .lip {
    /*优化*/
    border: 3px solid black;
    height: 30px;
    width: 100px;
    border-top-color: transparent;
    border-right-color: transparent;
    position: relative;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    background: #ffe600;
  }
  .mouth .up .lip.left {
    /*多个class间用空格*/
    border-radius: 0 0 0 50px;
    transform: rotate(-15deg) translateX(-53px);
  }
  .mouth .up .lip.right {
    /*多个class间用空格*/
    border-radius: 0 0 50px 0;
    transform: rotate(15deg) translateX(53px);
  }
  .mouth .up .lip::before {
    /*优化*/
    content: "";
    display: block;
    width: 7px;
    height: 30px;
    bottom: 0;
    background: #ffe600;
    position: absolute;
  }
  .mouth .up .lip.left::before {
    /*伪元素前不能有空格*/
    right: -6px;
  }
  .mouth .up .lip.right::before {
    /*伪元素前不能有空格*/
    left: -6px;
  }
  .mouth .down {
    height: 180px;
    position: absolute;
    top: 22px;
    width: 100%;
    overflow: hidden;
  }
  .mouth .down .yuan1 {
    border: 2px solid black;
    width: 150px;
    height: 1000px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -75px;
    border-radius: 75px/300px;
    background: #9a0513;
    z-index: -1;
    overflow: hidden;
  }
  .mouth .down .yuan1 .yuan2 {
    width: 200px;
    height: 300px;
    position: absolute;
    background: blue;
    bottom: -155px;
    left: 50%;
    margin-left: -100px;
    background: #fc536e;
    border-radius: 100px;
  }
  .face {
    position: absolute;
    left: 50%;
    border: 3px solid rgb(34, 22, 22);
    width: 88px;
    height: 88px;
    top: 220px;
    margin-left: -44px;
  }
  .face > img {
    position: absolute;
    top: 50%;
    left: 50%;
  }
  .face.left {
    transform: translateX(-180px);
    background: red;
    border-radius: 50%;
  }
  .face.left > img {
    transform: rotateY(180deg);
    transform-origin: 0 0;
  }
  .face.right {
    transform: translateX(180px);
    background: red;
    border-radius: 50%;
  }
`
export default string;