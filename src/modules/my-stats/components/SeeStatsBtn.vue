<template>
  <div class="button-wrapper">
    <button @click="$emit('see-stats')">See stats</button>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Leckerli+One&display=swap");

.button-wrapper {
  margin-top: 45vmin;

  > button {
    font-family: "Leckerli One", cursive;
    font-size: 2vmin;
    letter-spacing: 0.2rem;
    padding: 2vmin 7vmin;
    border: none;
    outline: none;
    color: #fff;
    background: #111;
    cursor: pointer;
    position: relative;
    z-index: 0;
    border-radius: 10px;
    transform: scale(0);
    animation: show 0.5s ease-in 5s forwards;

    &:before {
      content: "";
      background: linear-gradient(
        45deg,
        #ff0000,
        #ff7300,
        #fffb00,
        #48ff00,
        #00ffd5,
        #002bff,
        #7a00ff,
        #ff00c8,
        #ff0000
      );
      position: absolute;
      top: -2px;
      left: -2px;
      background-size: 400%;
      z-index: -1;
      filter: blur(5px);
      width: calc(100% + 4px);
      height: calc(100% + 4px);
      animation: glowing 20s linear infinite;
      border-radius: 10px;
    }

    &:hover:after {
      background: transparent;
    }

    &:hover {
      color: #000;
      font-weight: bold;
    }

    &:after {
      z-index: -1;
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: #111;
      left: 0;
      top: 0;
      border-radius: 10px;
    }
  }
}

@keyframes show {
  to {
    transform: scale(1);
  }
}

@keyframes glowing {
  0% {
    background-position: 0 0;
  }
  50% {
    background-position: 400% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
