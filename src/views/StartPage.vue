<template>
  <div class="start">
    <div class="main-content">
      <h1>
        Here you can find pets for each http protocol response status code
      </h1>
      <p>Choose a pet:</p>
      <div class="pets-buttons">
        <div class="dog button">
          <router-link to="/dogs">Dog</router-link>
        </div>
        <div class="cat button">
          <router-link to="/cats">Cat</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.start {
  min-width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  .main-content {
    text-align: center;
    display: flex;
    flex-direction: column;
    align-self: center;
    color: #fff;
    h1 {
      font-size: 30px;
      line-height: 1.2;
      margin: 0 0 40px 0;
    }
    p {
      font-size: 25px;
      line-height: 1.2;
    }
    .pets-buttons {
      display: flex;
      justify-content: space-around;
      margin: 70px 0 0 0;
      .button {
        a {
          position: relative;
          display: flex;
          border: 4px solid #8f8f8f;
          padding: 15px 80px;
          color: #fff;
          font-size: 27px;
          line-height: 1.2;
        }
      }
      .dog {
        a {
          &::before {
            content: url("../assets/left_dogs_ear.svg");
            position: absolute;
            top: -41%;
            left: -15%;
          }
          &::after {
            content: url("../assets/right_dogs_ear.svg");
            position: absolute;
            top: -40%;
            right: -15%;
          }
        }
      }
      .cat {
        a {
          &::before {
            content: url("../assets/left_cats_ear.svg");
            position: absolute;
            top: -98%;
            left: 1%;
          }
          &::after {
            content: url("../assets/right_cats_ear.svg");
            position: absolute;
            top: -98%;
            right: 1%;
          }
        }
      }
    }
  }
}
</style>
