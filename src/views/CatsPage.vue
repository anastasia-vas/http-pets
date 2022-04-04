<template>
  <div class="cats">
    <div class="left-block">
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
      <div class="image">
        <div class="empty">
          <div class="text">Enter a status code and get a cat</div>
        </div>
        <img src="#" alt="" />
      </div>
    </div>
    <div class="right-block">
      <div class="get-image">
        <p>Enter a status code</p>
        <label>
          <input type="text" maxlength="3" pattern="^[0-9]" autofocus />
          <button type="submit"></button>
        </label>
      </div>
      <div class="error"></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.cats {
  padding: 2% 10%;
  display: flex;
  align-items: center;
  .left-block {
    display: flex;
    flex-direction: column;
    margin: 0 10% 0 0;
    .note {
      margin: 0 0 6% 0;
      h2 {
        font-size: 25px;
        line-height: 1;
        margin: 0 0 5px 0;
      }
      p {
        font-size: 15px;
        line-height: 1;
        color: rgba($color: #fff, $alpha: 0.6);
        margin: 3px 0;
        letter-spacing: 0.5px;
      }
    }
    .image {
      .empty {
        display: flex;
        justify-content: center;
        align-content: center;
        width: 500px;
        height: 500px;
        border: 3px solid #c4c4c4;
        .text {
          font-size: 14px;
          line-height: 1.1;
          color: rgba($color: #fff, $alpha: 0.3);
          display: flex;
          align-self: center;
        }
      }
    }
  }
  .right-block {
    .get-image {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      p {
        font-size: 25px;
        line-height: 1.2;
        margin: 0 0 10px 0;
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
