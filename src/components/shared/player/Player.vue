<template>
  <div class="aurora-outer">
    <div class="aurora-inner">
      <slot />
    </div>
  </div>
</template>

<style>
.aurora-outer {
  background: linear-gradient(45deg, #32a6ff 0%, #3f6fff 49%, #8d54ff 82%);
  background-size: 200%;
  animation: aurora 10s infinite;
}

.aurora-inner {
  background: radial-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.15));
  background-size: 200%;
  animation: aurora 7s infinite;
}

@keyframes aurora {
  0% {
    background-position: left top;
  }
  25% {
    background-position: right top;
  }
  50% {
    background-position: right bottom;
  }
  75% {
    background-position: left bottom;
  }
  100% {
    background-position: left top;
  }
}
</style>
