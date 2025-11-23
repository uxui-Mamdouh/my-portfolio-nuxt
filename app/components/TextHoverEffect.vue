<template>
  <component
    :is="tag"
    class="text-hover-effect"
    @mouseenter="applyEffect"
    @mouseleave="resetEffect"
  >
    <span class="text-content" ref="textElement">
      <slot>{{ text }}</slot>
    </span>
  </component>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import { gsap } from "gsap";

const props = defineProps({
  text: {
    type: String,
    default: "Hover Me",
  },
  effect: {
    type: String,
    default: "wave",
    validator: (value) => {
      const validEffects = [
        "wave",
        "bounce",
        "rotate",
        "scale",
        "fade",
        "slide",
        "flip",
        "elastic",
        "skew",
        "blur",
        "rainbow",
        "split",
        "jello",
        "typewriter",
        "glitch",
        "swing",
        "shake",
        "morph",
        "glow",
        "compress",
      ];
      return validEffects.includes(value);
    },
  },
  tag: {
    type: String,
    default: "div",
    validator: (value) => {
      const validTags = [
        "div",
        "span",
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "a",
        "button",
        "label",
      ];
      return validTags.includes(value);
    },
  },
});

const textElement = ref(null);

const splitText = (element) => {
  const text = element.textContent;
  element.innerHTML = "";

  const words = text.split(" ");
  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement("span");
    wordSpan.className = "word";
    wordSpan.style.display = "inline-block";
    wordSpan.style.marginRight = "0.3em";
    [...word].forEach((char) => {
      const span = document.createElement("span");
      span.className = "char";
      span.style.display = "inline-block";
      span.style.position = "relative";
      span.textContent = char;
      wordSpan.appendChild(span);
    });

    element.appendChild(wordSpan);
    if (wordIndex < words.length - 1) {
      element.appendChild(document.createTextNode(" "));
    }
  });
};

const effects = {
  wave: (chars) => {
    gsap.to(chars, {
      y: -20,
      stagger: 0.03,
      duration: 0.4,
      ease: "power2.out",
      yoyo: true,
      repeat: 1,
    });
  },
  bounce: (chars) => {
    gsap.to(chars, {
      y: -30,
      stagger: 0.02,
      duration: 0.3,
      ease: "bounce.out",
    });
  },
  rotate: (chars) => {
    gsap.to(chars, {
      rotation: 360,
      stagger: 0.03,
      duration: 0.5,
      ease: "back.out(1.7)",
    });
  },
  scale: (chars) => {
    gsap.to(chars, {
      scale: 1.5,
      stagger: 0.025,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  },
  fade: (chars) => {
    gsap.to(chars, {
      opacity: 0,
      stagger: 0.03,
      duration: 0.2,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  },
  slide: (chars) => {
    gsap.to(chars, {
      x: 30,
      stagger: 0.025,
      duration: 0.35,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  },
  flip: (chars) => {
    gsap.to(chars, {
      rotationY: 180,
      stagger: 0.03,
      duration: 0.4,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  },
  elastic: (chars) => {
    gsap.to(chars, {
      y: -25,
      stagger: 0.02,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  },
  skew: (chars) => {
    gsap.to(chars, {
      skewX: 20,
      stagger: 0.025,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  },
  blur: (chars) => {
    chars.forEach((char, i) => {
      gsap.to(char, {
        filter: "blur(5px)",
        duration: 0.2,
        delay: i * 0.025,
        yoyo: true,
        repeat: 1,
      });
    });
  },
  rainbow: (chars) => {
    const colors = ["#ff6b6b", "#4ecdc4", "#45b7d1", "#ffa07a", "#98d8c8"];
    chars.forEach((char, i) => {
      gsap.to(char, {
        color: colors[i % colors.length],
        scale: 1.2,
        duration: 0.2,
        delay: i * 0.03,
        yoyo: true,
        repeat: 1,
      });
    });
  },
  split: (chars) => {
    gsap.to(chars, {
      x: (i) => (i % 2 === 0 ? -30 : 30),
      y: (i) => (i % 2 === 0 ? -20 : 20),
      stagger: 0.025,
      duration: 0.35,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  },
  jello: (chars) => {
    gsap.to(chars, {
      scaleX: 1.25,
      scaleY: 0.75,
      stagger: 0.02,
      duration: 0.2,
      yoyo: true,
      repeat: 3,
      ease: "power1.inOut",
    });
  },
  typewriter: (chars) => {
    gsap.fromTo(
      chars,
      { opacity: 0, x: -10 },
      { opacity: 1, x: 0, stagger: 0.05, duration: 0.2, ease: "power2.out" }
    );
  },
  glitch: (chars) => {
    chars.forEach((char, i) => {
      gsap.to(char, {
        x: () => Math.random() * 10 - 5,
        y: () => Math.random() * 10 - 5,
        duration: 0.06,
        delay: i * 0.015,
        repeat: 3,
        yoyo: true,
      });
    });
  },
  swing: (chars) => {
    gsap.to(chars, {
      rotation: 15,
      transformOrigin: "top center",
      stagger: 0.025,
      duration: 0.25,
      yoyo: true,
      repeat: 3,
      ease: "power1.inOut",
    });
  },
  shake: (chars) => {
    chars.forEach((char, i) => {
      gsap.to(char, {
        x: () => Math.random() * 6 - 3,
        duration: 0.05,
        delay: i * 0.015,
        repeat: 5,
        yoyo: true,
      });
    });
  },
  morph: (chars) => {
    gsap.to(chars, {
      scaleX: 0.5,
      scaleY: 1.8,
      stagger: 0.025,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  },
  glow: (chars) => {
    chars.forEach((char, i) => {
      gsap.to(char, {
        textShadow: "0 0 20px #667eea, 0 0 30px #667eea",
        scale: 1.3,
        duration: 0.3,
        delay: i * 0.03,
        yoyo: true,
        repeat: 1,
      });
    });
  },
  compress: (chars) => {
    gsap.to(chars, {
      scaleX: 0.3,
      stagger: 0.02,
      duration: 0.3,
      yoyo: true,
      repeat: 1,
      ease: "power2.inOut",
    });
  },
};

const applyEffect = () => {
  const chars = textElement.value?.querySelectorAll(".char");
  if (chars && effects[props.effect]) {
    effects[props.effect](chars);
  }
};

const resetEffect = () => {
  const chars = textElement.value?.querySelectorAll(".char");
  if (chars) {
    gsap.to(chars, {
      x: 0,
      y: 0,
      z: 0,
      rotation: 0,
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      scaleX: 1,
      scaleY: 1,
      skewX: 0,
      opacity: 1,
      filter: "blur(0px)",
      color: "inherit",
      textShadow: "none",
      duration: 0.3,
      ease: "power2.out",
    });
  }
};

const initText = () => {
  if (textElement.value) {
    splitText(textElement.value);
  }
};

onMounted(() => {
  initText();
});

watch(
  () => props.text,
  () => {
    initText();
  }
);
</script>

<style scoped>
.text-hover-effect {
  display: inline-block;
  cursor: pointer;
}

.text-content {
  display: inline-block;
  line-height: 1.4;
}
</style>
