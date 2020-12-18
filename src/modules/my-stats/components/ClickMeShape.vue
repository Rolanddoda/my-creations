<template>
  <div class="start">
    <div class="shape">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#2af598"
          d="M41.9,-53.4C56.8,-46.7,73.2,-37.9,81.4,-23.8C89.6,-9.7,89.5,9.7,81.5,24.1C73.5,38.5,57.6,47.9,42.6,58.1C27.7,68.4,13.9,79.4,-2.6,83C-19,86.6,-38.1,82.6,-52,72C-66,61.5,-74.8,44.3,-79.8,26.5C-84.8,8.7,-85.9,-9.8,-79,-24C-72,-38.1,-57,-47.9,-42.5,-54.7C-28,-61.6,-14,-65.4,-0.3,-65.1C13.5,-64.7,26.9,-60.1,41.9,-53.4Z"
          transform="translate(100 100)"
        />
      </svg>

      <div class="click-me">
        Click me 😊
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@800&display=swap");

.start {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "JetBrains Mono", monospace;

  .shape {
    top: 20vmin;
    width: 25vmin;
    height: 25vmin;
    filter: drop-shadow(7px 6px 10px rgba(255, 255, 255, 0.2));
    animation: showing 0.5s ease-in forwards 5s,
      flying 1.2s ease-in-out alternate infinite 5s;
    transform: scale(0);

    > svg path {
      cursor: pointer;
    }
  }

  .click-me {
    position: absolute;
    top: 12.5vmin;
    left: 7vmin;
    pointer-events: none;
    font-size: 2vmin;
  }
}

@keyframes showing {
  to {
    transform: scale(1);
  }
}

@keyframes flying {
  to {
    transform: translateY(-2vmin);
  }
}
</style>
