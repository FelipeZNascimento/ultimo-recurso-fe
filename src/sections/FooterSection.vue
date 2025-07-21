<template>
  <section class="footer-container">
    <div class="forest">
      <div class="tree"></div>
      <div class="tree"></div>
      <div class="tree"></div>
      <div class="tree"></div>
      <div class="land left"></div>
      <div class="land right"></div>
      <div class="mountain left"></div>
      <div class="mountain center"></div>
      <div class="mountain right"></div>
    </div>
    <div class="cloud-container">
      <div class="cloud"></div>
      <div class="cloud center"></div>
      <div class="cloud"></div>
      <div class="cloud center"></div>
      <div class="cloud center small"></div>
      <div class="cloud center small"></div>
    </div>
  </section>
</template>
<style lang="css" scoped>
.footer-container {
  display: flex;
  justify-content: center;
  justify-items: center;
  background-color: var(--ur-c-green);
  max-width: 100vw;
  height: 100%;
}
/* Circle */
.forest {
  position: relative;
  border-radius: 50rem;
  background-color: #cdebc8;
  width: 400px;
  height: 200px;
  overflow: hidden;
}
/* Land */
.land {
  position: absolute;
  bottom: -20px;
  z-index: 3;
  width: 70%;
  height: 150px;
}
.land.left {
  border-radius: 0 50rem 0 0;
  background-color: #a2d897;
}
.land.right {
  right: -25px;
  border-radius: 50rem 0 0;
  background-color: #addda2;
  width: 75%;
}
/* Mountains */
.mountain {
  position: absolute;
  bottom: 100px;
  border-right: 90px solid transparent;
  border-bottom: 100px solid #c1e8bb;
  border-left: 90px solid transparent;
  border-radius: 15px;
  width: 0;
  height: 0;
}
.mountain.left {
  left: -50px;
}
.mountain.center {
  left: 50%;
  transform: translateX(-50%) scale(2);
}
.mountain.right {
  right: -50px;
}
/* Trees */
.tree {
  display: flex;
  position: absolute;
  bottom: 60px;
  left: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 5;
  margin: 40px;
}
.tree::before {
  transform-origin: bottom;
  z-index: 6;
  animation: swing 4s infinite ease-in-out;
  border-radius: 50rem;
  background-color: #6db959;
  width: 40px;
  height: 70px;
  content: '';
}
.tree::after {
  margin-top: -10px;
  border-radius: 3px;
  background-color: #386029;
  width: 15px;
  height: 25px;
  content: '';
}
.tree:nth-of-type(1) {
  transform: scale(0.8);
}
.tree:nth-of-type(2) {
  bottom: 10px;
  left: 10px;
}
.tree:nth-of-type(2)::before,
.tree:nth-of-type(4)::before {
  background-color: #8ccf7c;
  width: 65px;
  height: 65px;
}
.tree:nth-of-type(3) {
  right: 50px;
  bottom: 0px;
  left: initial;
  transform: scale(1.2);
  z-index: 10;
}
.tree:nth-of-type(3)::before {
  background-color: #74c06b;
}
.tree:nth-of-type(4) {
  right: -20px;
  bottom: 50px;
  left: initial;
}
.tree:nth-of-type(4)::before {
  background-color: #9dd590;
}

/* Clouds */
.cloud-container {
  position: absolute;
  z-index: 100;
  width: 400px;
  height: 400px;
}
.cloud {
  position: absolute;
  animation: move 2s ease-in-out alternate infinite;
  border-radius: 50rem;
  background-color: #eff6fb;
  width: 40px;
  height: 40px;
}
.cloud::before,
.cloud::after {
  position: absolute;
  bottom: -5px;
  border-radius: 50rem;
  background-color: #eff6fb;
  width: 30px;
  height: 30px;
  content: '';
}
.cloud::before {
  left: -15px;
}
.cloud::after {
  right: -15px;
}
.cloud.center {
  top: 0;
  right: 0;
}
.cloud.center::after,
.cloud.center::before {
  bottom: 50%;
  transform: translateY(50%);
  width: 25px;
  height: 25px;
}
.cloud.center.small {
  transform: scale(0.7);
  animation: movesmall 2s ease-in-out alternate infinite;
  background-color: transparent;
  width: 10px;
  height: 10px;
}
.cloud:nth-of-type(1) {
  --d: 10px;
  top: 90px;
  left: 40px;
}
.cloud:nth-of-type(2) {
  --d: 13px;
  top: 40px;
  left: 130px;
}
.cloud:nth-of-type(3) {
  --d: 5px;
  top: 100px;
  left: 210px;
}
.cloud:nth-of-type(4) {
  --d: 8px;
  top: 70px;
  left: 300px;
}
.cloud:nth-of-type(5) {
  --d: 22px;
  top: 155px;
  left: 140px;
}
.cloud:nth-of-type(6) {
  --d: 11px;
  top: 140px;
  left: 340px;
}

/* Animations */
@keyframes swing {
  0% {
    transform: rotate(-10deg);
  }
  50% {
    transform: rotate(10deg);
  }
  100% {
    transform: rotate(-10deg);
  }
}
@keyframes move {
  0% {
    transform: translateX(calc(var(--d) * -1));
  }
  100% {
    transform: translateX(var(--d));
  }
}
@keyframes movesmall {
  0% {
    transform: translateX(calc(var(--d) * -1)) scale(0.7);
  }
  100% {
    transform: translateX(var(--d)) scale(0.7);
  }
}
</style>
