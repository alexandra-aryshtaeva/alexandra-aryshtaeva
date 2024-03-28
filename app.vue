<template>
  <div class="clip-text">Hello World</div>
</template>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(142, 235, 235);
  height: 99vh;
}

.clip-text {
  font-size: 7rem;
  font-weight: 700;
  color: transparent;
  text-shadow: 4px 4px #558abb;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(67, 67, 148);
  font-family: "Lato";

  /* mask */
  /* background: url(assets/texture\ .jpg);
  text-align: center;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-size: cover;
  background-position: center;
 */
}
</style>
