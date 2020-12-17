<template>
  <Grid justify-content="center" align-items="center" class="roland-2020">
    <div class="wrapper">
      <span class="text-wrapper">
        <span class="text">Roland's 2020</span>
      </span>
      <span class="text-wrapper text-wrapper--sibling">
        <span class="text">Roland's 2020</span>
      </span>
      <span class="text-wrapper text-wrapper--sibling">
        <span class="text">Roland's 2020</span>
      </span>
      <span class="text-wrapper text-wrapper--sibling">
        <span class="text">Roland's 2020</span>
      </span>
      <span class="text-wrapper text-wrapper--sibling">
        <span class="text">Roland's 2020</span>
      </span>
      <span class="text-wrapper text-wrapper--sibling">
        <span class="text">Roland's 2020</span>
      </span>
    </div>
  </Grid>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Pacifico&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Staatliches&display=swap");

.roland-2020 {
  position: absolute;
  height: 100%;
  width: 100%;
}

.wrapper {
  position: relative;
  font-size: 10vmin;
  font-family: "Leckerli One", cursive;
}

.text-wrapper {
  display: block;
}
.text-wrapper:nth-child(1) {
  clip-path: polygon(0% 75%, 100% 75%, 100% 100%, 0% 100%);
}
.text-wrapper:nth-child(2) {
  clip-path: polygon(0% 50%, 100% 50%, 100% 75.5%, 0% 75.5%);
}
.text-wrapper:nth-child(3) {
  clip-path: polygon(0% 25%, 100% 25%, 100% 50.5%, 0% 50.5%);
}
.text-wrapper:nth-child(4) {
  clip-path: polygon(0% 0%, 100% -10%, 100% 35.5%, 0% 25.5%);
}
.text-wrapper:nth-child(5) {
  clip-path: polygon(0% -25%, 100% -45%, 100% -9.5%, 0% 0.5%);
}
.text-wrapper:nth-child(6) {
  clip-path: polygon(0% -50%, 100% -85%, 100% -44.4%, 0% -24.5%);
}

.text-wrapper.text-wrapper--sibling {
  position: absolute;
  top: 0;
  left: 0;
  user-select: none;
}

.text {
  display: block;
  transform-origin: bottom left;
  animation: moveIn 2s 3 cubic-bezier(0.36, 0, 0.06, 1) alternate forwards;
}
.text-wrapper:nth-child(1) .text {
  transform: translateY(-0.1em);
}
.text-wrapper:nth-child(2) .text {
  transform: translateY(-0.3em) scaleY(1.1);
}
.text-wrapper:nth-child(3) .text {
  transform: translateY(-0.5em) scaleY(1.2) rotate(-1deg);
}
.text-wrapper:nth-child(4) .text {
  transform: translateY(-0.7em) scaleY(1.3) rotate(-2deg);
}
.text-wrapper:nth-child(5) .text {
  transform: translateY(-0.9em) scaleY(1.4) rotate(-3deg);
}
.text-wrapper:nth-child(6) .text {
  transform: translateY(-1.1em) scaleY(1.5) rotate(-4deg);
}

@keyframes moveIn {
  80%,
  100% {
    transform: translateY(0em);
  }
}
</style>
