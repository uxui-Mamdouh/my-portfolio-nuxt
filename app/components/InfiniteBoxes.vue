<template>
  <div class="marqueue-container md:rotate-[2.5deg]">
    <!-- Back Marquee -->
    <div class="marquee marquee-back bg-neutral-200 py-4">
      <div class="marquee-track">
        <div class="content">
          <div
            v-for="(item, i) in items"
            :key="`${ri}-${i}`"
            class="box flex items-center gap-4 text-indigo-600 text-xl font-medium"
          >
            <MyIcon name="solar:sun-line-duotone" textClass="text-indigo-600" />
            <span>-</span>
            <span class="label">{{ item.label }}</span>
            <span>-</span>
          </div>
        </div>
        <div class="content">
          <div
            v-for="(item, i) in items"
            :key="`${ri}-${i}`"
            class="box flex items-center gap-4 text-indigo-600 text-xl font-medium"
          >
            <MyIcon name="solar:sun-line-duotone" textClass="text-indigo-600" />
            <span>-</span>
            <span class="label">{{ item.label }}</span>
            <span>-</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const items = [
  { label: "Portfolio as a Product" },
  { label: "User-Centered Design" },
  { label: "Strategic Positioning" },
  { label: "Design Systems" },
  { label: "UX Strategy" },
  { label: "Portfolio as a Product" },
  { label: "User-Centered Design" },
  { label: "Strategic Positioning" },
  { label: "Design Systems" },
  { label: "UX Strategy" },
  { label: "Portfolio as a Product" },
  { label: "User-Centered Design" },
  { label: "Strategic Positioning" },
  { label: "Design Systems" },
  { label: "UX Strategy" },
  { label: "Portfolio as a Product" },
  { label: "User-Centered Design" },
  { label: "Strategic Positioning" },
  { label: "Design Systems" },
  { label: "UX Strategy" },
  { label: "Portfolio as a Product" },
  { label: "User-Centered Design" },
  { label: "Strategic Positioning" },
  { label: "Design Systems" },
  { label: "UX Strategy" },
  { label: "Portfolio as a Product" },
  { label: "User-Centered Design" },
  { label: "Strategic Positioning" },
  { label: "Design Systems" },
  { label: "UX Strategy" },
];
</script>

<style scoped>
.marqueue-container {
  position: relative;
  width: 100%;
  margin-top: -40px;
  margin-bottom: 80px;
}

.marquee {
  position: absolute;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 2rem;
  font-weight: bold;
}

.marquee-track {
  display: inline-flex;
  width: max-content;
  animation: scroll 50s linear infinite;
}

.marquee-track .content {
  display: flex;
}

.marquee-track span {
  margin-right: 1rem;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

/* Back marquee */
.marquee-back {
  top: 20%;
  z-index: 1;
}
</style>
