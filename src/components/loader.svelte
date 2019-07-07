<style>
  .spinner {
    width: 15px;
    height: 15px;
    background-color: #79a5e7;
    margin-left: 0.5em;
    border-radius: 100%;
    animation: sk-scaleout 1s infinite ease-in-out;
    -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  }
  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
      opacity: 0;
    }
  }
  @-webkit-keyframes sk-scaleout {
    0% {
      -webkit-transform: scale(0);
    }
    100% {
      -webkit-transform: scale(1);
      opacity: 0;
    }
  }
</style>

<div class="spinner">
  <div />
</div>
