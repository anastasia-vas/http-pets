<template>
  <div class="cats">
    <div class="to-main-page">
      <router-link to="/"
        ><img src="../assets/back-arrow.svg" alt=""
      /></router-link>
    </div>
    <div class="note-block">
      <div class="note">
        <h2>Note</h2>
        <p>1xx: Informational - Request received, continuing process</p>
        <p>
          2xx: Success - The action was successfully received, understood, and
          accepted
        </p>
        <p>
          3xx: Redirection - Further action must be taken in order to complete
          the request
        </p>
        <p>
          4xx: Client Error - The request contains bad syntax or cannot be
          fulfilled
        </p>
        <p>
          5xx: Server Error - The server failed to fulfill an apparently valid
          request
        </p>
      </div>
    </div>
    <div class="image-block">
      <div class="image">
        <div class="empty" v-if="imgLink == ''">
          <div class="text">Enter a status code and get a cat</div>
        </div>
        <img :src="imgLink" v-else alt="" />
      </div>
      <div class="get-image">
        <p>Enter a status code</p>
        <label>
          <input
            type="text"
            maxlength="3"
            pattern="^[0-9]"
            v-model="statusCode"
            @keyup.enter="getImg()"
            autofocus
          />
          <button type="submit" @click="getImg()"></button>
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      statusCode: "",
      imgLink: "",
    };
  },
  methods: {
    getImg() {
      this.imgLink = `https://http.cat/${this.statusCode}.jpg`;
      this.statusCode = "";
    },
  },
};
</script>

<style lang="scss">
.cats {
  padding: 2% 10%;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  position: relative;
  @media (max-width: 992px) {
    padding: 4% 7%;
  }
  @media (max-width: 786px) {
    padding: 6% 5%;
  }
  @media (max-width: 600px) {
    padding: 11% 5%;
  }
  @media (max-width: 410px) {
    padding: 15% 3%;
  }
  .to-main-page {
    position: absolute;
    top: 15px;
    left: 3%;
    a {
      img {
        width: 12%;
        @media (max-width: 786px) {
          width: 10%;
        }
      }
    }
  }
  .note-block {
    width: 100%;
    text-align: left;
    @media (max-width: 992px) {
      width: 80%;
    }
    @media (max-width: 786px) {
      width: 90%;
    }
    .note {
      margin: 0 0 4% 0;
      h2 {
        font-size: 25px;
        line-height: 1;
        margin: 0 0 5px 0;
        @media (max-width: 786px) {
          font-size: 23px;
        }
      }
      p {
        font-size: 15px;
        line-height: 1.1;
        color: rgba($color: #fff, $alpha: 0.6);
        margin: 4px 0;
        letter-spacing: 0.5px;
        @media (max-width: 786px) {
          font-size: 13px;
          margin: 6px 0;
        }
      }
    }
  }
  .image-block {
    display: flex;
    width: 100%;
    @media (max-width: 992px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
    .image {
      width: 60%;
      @media (max-width: 992px) {
        display: flex;
        justify-content: center;
        width: 80%;
      }
      @media (max-width: 786px) {
        width: 90%;
      }
      .empty {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 80%;
        height: 500px;
        border: 3px solid #c4c4c4;
        @media (max-width: 1200px) {
          height: 400px;
        }
        @media (max-width: 992px) {
          width: 100%;
          height: 450px;
        }
        @media (max-width: 786px) {
          height: 400px;
        }
        @media (max-width: 600px) {
          height: 380px;
        }
        @media (max-width: 410px) {
          height: 340px;
        }
        .text {
          font-size: 14px;
          line-height: 1.1;
          color: rgba($color: #fff, $alpha: 0.3);
          display: flex;
          align-self: center;
          @media (max-width: 786px) {
            font-size: 12px;
          }
        }
      }
      img {
        width: 80%;
        @media (max-width: 992px) {
          width: 100%;
        }
      }
    }
    .get-image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      @media (max-width: 992px) {
        margin: 0 0 20px 0;
      }
      p {
        font-size: 25px;
        line-height: 1.2;
        margin: 0 0 10px 0;
        @media (max-width: 786px) {
          font-size: 23px;
        }
      }
      label {
        display: flex;
        input {
          width: 80px;
          height: 50px;
          padding: 2px 10px 0;
          font-size: 23px;
          line-height: 1.2;
        }
        button {
          width: 50px;
          height: 50px;
          background-color: #1f1b1b;
          border: 2px solid #fff;
          &::after {
            content: url("../assets/submit.svg");
          }
        }
      }
    }
  }
}
</style>
