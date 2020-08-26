<template>
  <Grid place-items="center" class="framework">
    <h1 :data-text="name">{{ name }}</h1>
  </Grid>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.framework {
  --calc-skew: calc(var(--skew) - 5deg);

  height: 65vh;
  width: 100vw;

  > h1 {
    position: relative;
    font-size: 15vw;
    text-transform: uppercase;
    -webkit-text-fill-color: #ab1058;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    text-shadow: 1px 0 0 #000, -1px 0 0px #000, 0 -1px 0px #000, 0 1px 0px #000;
    font-family: cursive;
    transform: skewY(var(--calc-skew));

    &::after {
      text-shadow: none;
      position: absolute;
      top: 0;
      left: 0;
      content: attr(data-text);
      transition: transform 1s ease-in-out;
    }

    &:hover {
      color: #000;
      &:after {
        transform: translate(2%, -8%);
        background-size: 10px 10px;
        -webkit-background-clip: text;
        animation: change-bg 2s steps(1) infinite;
      }
    }
  }
}

@keyframes change-bg {
  0% {
    background: linear-gradient(174.38deg, #100f0f -3.36%, #383e56 95.64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  20% {
    background: linear-gradient(
        45deg,
        #00f 1%,
        #fff 1%,
        #fff 49%,
        #00f 49%,
        #00f 51%,
        #fff 51%,
        #fff 99%,
        #00f 99%
      )
      50px 50px;
    background-size: 6px 6px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  40% {
    background-color: #fff;
    background-image: radial-gradient(circle, #00f 15%, transparent 10%),
      radial-gradient(circle, #00f 15%, transparent 10%);
    background-size: 100px 100px;
    background-position: 0 0, 50px 50px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  60% {
    background: linear-gradient(
        45deg,
        #00f 25%,
        transparent 25%,
        transparent 75%,
        #00f 75%
      ),
      linear-gradient(
          45deg,
          #00f 25%,
          transparent 25%,
          transparent 75%,
          #00f 75%
        )
        25px 25px;
    background-size: 50px 50px;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  80% {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='15' height='15'%3E %3Crect width='15' height='15' fill='%234f638d'/%3E %3Cpath d='M0 15L7.5 0L15 15Z' fill='%23303355'/%3E %3C/svg%3E");
  }

  100% {
    background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='90' height='30'%3E %3Crect width='90' height='30' fill='%2300a9f1'/%3E %3Crect width='90' height='18' fill='%2326baf4'/%3E %3C/svg%3E");
  }
}
</style>
