<template>
  <div class="search-box">
    <div class="input-wrapper">
      <input type="search" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-box {
  display: grid;
  justify-content: center;
  align-items: center;
  height: 100%;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
  color: white;

  --input-height: 15vh;
  --border-width: 3px;

  > .input-wrapper {
    position: relative;

    > input {
      border-top: var(--border-width) solid;
      border-bottom: var(--border-width) solid;
      width: 0vw;
      height: var(--input-height);
    }

    &:before {
      position: absolute;
      content: "";
      border: var(--border-width) solid;
      //border-right: none;
      //left: -1.25vw;
      width: var(--input-height);
      height: var(--input-height);
      border-radius: 50%;
      //border-radius: 50% 0 0 50%;
    }

    &:after {
      //border-left: none;
      border-right: var(--border-width) solid;
      left: unset;
      //right: -1.25vw;
      //border-radius: 0 50% 50% 0;
    }
  }
}
</style>
