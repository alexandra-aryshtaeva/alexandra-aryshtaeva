<template>
  <!-- <div id="clip-text">Hello World</div> -->
  <h1 id="test">Alexandra Aryshtaeva</h1>
  <div id="moon"><h1 id="test2">Click here</h1></div>
</template>

<style>
* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  font-family: "Lato";

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url(./assets/texture\ .jpg);
  height: 99vh;
}
#test {
  position: absolute;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  background-color: aliceblue;
  /* top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  font-size: 100px;
}
h1 {
  padding: 0px 16px;
}
#moon {
  display: flex;
  /* position: relative; */
  align-self: center;
  align-content: center;

  background: url(assets/moon.png);

  box-shadow: 0px 6px 10px rgb(79, 87, 94);
  background-size: cover;
  background-position: calc(45%);
  background-repeat: no-repeat;
  height: 700px;
  width: 700px;
  border-radius: 900px;
}
#test2 {
  justify-content: flex-start;

  align-items: flex-start;
  align-self: flex-start;

  background-color: aliceblue;
}
#clip-text {
  font-size: 7rem;
  font-weight: 700;
  color: transparent;
  /* text-shadow: 4px 4px #558abb; */
  /* text-shadow: -4px -4px rgb(235, 142, 142);
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgb(67, 67, 148);
  font-family: "Lato"; */

  /* mask */
  background: url(assets/texture\ .jpg);
  text-align: center;
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  background-size: cover;
  background-position: center;
}
</style>
