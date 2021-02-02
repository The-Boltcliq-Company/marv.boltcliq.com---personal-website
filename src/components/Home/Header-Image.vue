<template>
  <div>
    <div class="container">
      <div class="grid">
        <div class="grid-fade">
          <div class="row">
          <img
            class="rounded-circle d-block mx-auto mb-5"
            src="@/assets/img/marvelous.jpg"
            style="height: 250px; width: 250px; margin-top: 20px" 
          />
          </div>
          <h4 style="margin-top: 20px">Akporowho Marvelous</h4>
        </div>
        <div class="grid-lines" id="colour"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {}
};
</script>

<style scoped>
body {
  background-color: black;
}

.grid {
  width: 100%;
  height: 300px;
  overflow: hidden;
  perspective: 560px;
  border-radius: 60%;
}

.grid-fade {
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
  background: radial-gradient(
    ellipse at 50% 50%,
    rgba(255, 255, 255, 0) 0%,
    #000 80%
  );
}

.grid-lines {
  width: 100%;
  height: 200%;
  opacity: 0.6;
  background-image: linear-gradient(to right, #ffffff 2px, rgba(0, 0, 0, 0) 0%),
    linear-gradient(to bottom, #61667f 2px, rgba(0, 0, 0, 0) 0%);
  background-size: 45px 30px;
  background-repeat: repeat;
  transform-origin: 100% 0 0;
  animation: play 15s linear infinite;
}

@keyframes play {
  0% {
    transform: rotateX(45deg) translateY(-50%);
  }
  100% {
    transform: rotateX(45deg) translateY(0);
  }
}
</style>