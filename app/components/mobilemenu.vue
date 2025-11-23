<template>
  <label
    class="flex items-center justify-between font-extrabold px-4 py-1 rounded-xl h-10 w-full relative cursor-pointer text-neutral-50 main"
  >
    Mamdouh
    <input class="inp" checked="" type="checkbox" />
    <div class="bar flex flex-col gap-1.5 h-1/2 w-5 cursor-pointer">
      <span class="top bar-list"></span>
      <span class="middle bar-list"></span>
      <span class="bottom bar-list"></span>
    </div>
    <section
      class="menu-container py-4 absolute left-0 top-[130%] w-full bg-neutral-50 rounded-xl overflow-hidden text-neutral-800"
    >
      <div
        v-for="link in navLinks"
        :key="link.path"
        class="menu-list px-4 py-3 rounded-xl"
      >
        <NuxtLink
          :to="link.path"
          :class="[
            'h-10 px-5 rounded-full flex items-center text-lg font-normal  leading-7 transition-colors duration-200',
            isActive(link.path) ? ' text-indigo-600' : ' hover:text-indigo-600',
          ]"
        >
          {{ link.name }}
        </NuxtLink>
      </div>
      <div class="px-4 py-3 pt-4 rounded-xl">
        <ButtonHoverEffect
          to="/contact"
          variant="primary"
          effect="blur"
          icon-name="solar:arrow-right-outline"
          icon-component="Icon"
          text="Hire Me"
          border-color="indigo-50"
          text-color="indigo-50"
          icon-color="indigo-50"
          size="small"
        />
      </div>
    </section>
  </label>
</template>
<script setup>
import { useRoute } from "vue-router";

const route = useRoute();

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];
const isActive = (path) => route.path === path;
</script>
<style scoped>
.main > .inp {
  display: none;
}
.arrow {
  height: 34%;
  aspect-ratio: 1;
  margin-block: auto;
  position: relative;
  display: flex;
  justify-content: center;
  transition: all 0.3s;
}
.arrow::after,
.arrow::before {
  content: "";
  position: absolute;
  background-color: var(--color-neutral-50);
  height: 100%;
  width: 2.5px;
  border-radius: 500px;
  transform-origin: bottom;
}
.arrow::after {
  transform: rotate(35deg) translateX(-0.5px);
}
.arrow::before {
  transform: rotate(-35deg) translateX(0.5px);
}
.main > .inp:checked + .arrow {
  transform: rotateX(180deg);
}
.menu-container {
  background-color: var(--color-neutral-50);
  border-radius: 10px;
  position: absolute;
  width: 100%;
  left: 0;
  top: 130%;
  overflow: hidden;
  clip-path: inset(0% 0% 0% 0% round 10px);
  transition: all 0.4s;
}
.menu-list {
  --delay: 0.4s;
  --trdelay: 0.15s;
  border-radius: inherit;
  transition: background-color 0.2s 0s;
  position: relative;
  transform: translateY(30px);
  opacity: 0;
}
.menu-list::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  height: 1px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 95%;
}
.menu-list:hover {
  background-color: rgb(223, 223, 223);
}
.inp:checked ~ .menu-container {
  clip-path: inset(10% 50% 90% 50% round 10px);
}
.inp:not(:checked) ~ .menu-container .menu-list {
  transform: translateY(0);
  opacity: 1;
}
.inp:not(:checked) ~ .menu-container .menu-list:nth-child(1) {
  transition: transform 0.4s var(--delay), opacity 0.4s var(--delay);
}
.inp:not(:checked) ~ .menu-container .menu-list:nth-child(2) {
  transition: transform 0.4s calc(var(--delay) + (var(--trdelay) * 1)),
    opacity 0.4s calc(var(--delay) + (var(--trdelay) * 1));
}
.inp:not(:checked) ~ .menu-container .menu-list:nth-child(3) {
  transition: transform 0.4s calc(var(--delay) + (var(--trdelay) * 2)),
    opacity 0.4s calc(var(--delay) + (var(--trdelay) * 2));
}
.inp:not(:checked) ~ .menu-container .menu-list:nth-child(4) {
  transition: transform 0.4s calc(var(--delay) + (var(--trdelay) * 3)),
    opacity 0.4s calc(var(--delay) + (var(--trdelay) * 3));
}
.bar-inp {
  -webkit-appearance: none;
  display: none;
  visibility: hidden;
}
.bar-list {
  --transform: -25%;
  display: block;
  width: 100%;
  height: 3px;
  border-radius: 50px;
  background-color: white;
  transition: all 0.4s;
  position: relative;
}
.inp:not(:checked) ~ .bar > .top {
  transform-origin: top right;
  transform: translateY(var(--transform)) rotate(-45deg);
}
.inp:not(:checked) ~ .bar > .middle {
  transform: translateX(-50%);
  opacity: 0;
}
.inp:not(:checked) ~ .bar > .bottom {
  transform-origin: bottom right;
  transform: translateY(calc(var(--transform) * -1)) rotate(45deg);
}
</style>
