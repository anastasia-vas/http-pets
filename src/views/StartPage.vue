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
  padding: 0 15px;
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
      @media (max-width: 1200px) {
        font-size: 27px;
        margin: 0 0 30px 0;
      }
      @media (max-width: 410px) {
        font-size: 24px;
      }
    }
    p {
      font-size: 25px;
      line-height: 1.2;
      @media (max-width: 410px) {
        font-size: 22px;
      }
    }
    .pets-buttons {
      display: flex;
      justify-content: space-around;
      margin: 70px 0 0 0;
      @media (max-width: 992px) {
        width: 45%;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        align-items: center;
        margin: 40px 0 0 0;
      }
      @media (max-width: 600px) {
        width: 70%;
        margin: 40px 0 0 0;
      }
      @media (max-width: 410px) {
        width: 90%;
      }
      .button {
        width: 25%;
        @media (max-width: 992px) {
          width: 80%;
        }
        a {
          position: relative;
          display: flex;
          justify-content: center;
          border: 4px solid #8f8f8f;
          width: 100%;
          padding: 15px 80px;
          color: #fff;
          font-size: 27px;
          line-height: 1.2;
          @media (max-width: 992px) {
            padding: 15px 70px;
            width: 100%;
          }
          @media (max-width: 786px) {
            padding: 15px 55px;
          }
          @media (max-width: 410px) {
            font-size: 24px;
            border: 3px solid #8f8f8f;
          }
        }
      }
      .dog {
        @media (max-width: 992px) {
          margin: 0 0 70px 0;
        }
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
            @media (max-width: 410px) {
              top: -101%;
            }
          }
          &::after {
            content: url("../assets/right_cats_ear.svg");
            position: absolute;
            top: -98%;
            right: 1%;
            @media (max-width: 410px) {
              top: -101%;
            }
          }
        }
      }
    }
  }
}
</style>
