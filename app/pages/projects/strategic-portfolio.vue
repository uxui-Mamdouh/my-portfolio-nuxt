<template>
  <div class="main">
    <AppHeader />
    <header
      class="hero flex flex-col md:gap-40 justify-start md:justify-center items-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div
        class="max-w-4xl mx-auto flex flex-col items-center text-center gap-8"
        aria-labelledby="about-heading"
      >
        <!-- Subtitle with Icon -->
        <div class="flex items-center gap-2 text-neutral-300">
          <MyIcon
            name="solar:folder-bold"
            textClass="text-neutral-300"
            aria-hidden="true"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            data-aos-duration="500"
          />
          <span
            class="text-neutral-300 text-base font-medium tracking-wide"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
            data-aos-duration="500"
            >Case Study</span
          >
        </div>

        <!-- Main Heading -->
        <h1
          id="about-heading"
          class="text-3xl md:text-4xl font-semibold text-neutral-100 -tight max-w-3xl"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          Building a Strategic Portfolio
        </h1>

        <!-- Description -->
        <p
          class="text-lg sm:text-xl text-neutral-400 -relaxed max-w-2xl"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          Designing a High-Impact Portfolio Website for a Product Designer
          targeting B2B SaaS, Fintech, and startups
        </p>
      </div>

      <!-- Project Details -->
      <section
        class="mt-12 w-full lg:max-w-5xl mx-0 lg:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-base"
        aria-label="Project Details"
      >
        <dl
          class="flex flex-col gap-1"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="50"
          data-aos-duration="500"
        >
          <dt class="text-neutral-400 font-medium">Client</dt>
          <dd class="text-neutral-100">Myself (Personal Brand)</dd>
        </dl>
        <dl
          class="flex flex-col gap-1"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          <dt class="text-neutral-400 font-medium">Timeline</dt>
          <dd class="text-neutral-100">4 weeks</dd>
        </dl>
        <dl
          class="flex flex-col gap-1"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          <dt class="text-neutral-400 font-medium">Role</dt>
          <dd class="text-neutral-100">Product Designer</dd>
        </dl>
        <dl
          class="flex flex-col gap-1"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <dt class="text-neutral-400 font-medium">Focus</dt>
          <dd class="text-neutral-100">Strategic Positioning</dd>
        </dl>
      </section>
    </header>
    <div class="custom-marquee flex justify-center items-center mb-10">
      <InfiniteBoxes />
    </div>
    <div class="challenge py-10">
      <div class="container small">
        <div
          class="bg-indigo-600 rounded-3xl overflow-hidden py-12 px-4 sm:px-6 lg:px-8 group transition-all duration-300 ease-in-out hover:shadow-2xl"
          data-aos="fade-out"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <div class="flex flex-col items-center gap-8">
            <div class="flex flex-col items-center gap-4">
              <!-- Placeholder for icon/logo, assuming it's an image or SVG -->
              <div class="w-10 h-10 relative">
                <!-- If this is an image, add alt attribute for SEO -->

                <MyIcon
                  name="solar:swimming-bold"
                  textClass="text-indigo-50"
                  class="text-5xl transition-all duration-300 ease-in-out group-hover:rotate-12"
                />
              </div>
              <h2
                class="text-neutral-200 text-xl font-medium text-center transition-all duration-300 ease-in-out group-hover:scale-110"
              >
                The Challenge
              </h2>
              <h3
                class="text-neutral-200 text-3xl font-bold text-center sm:text-4xl transition-all duration-300 ease-in-out group-hover:translate-x-3"
              >
                Most portfolios fail to answer one question
              </h3>
            </div>
            <p
              class="text-neutral-50 text-2xl sm:text-4xl font-semibold text-center -relaxed max-w-2xl transition-all duration-300 ease-in-out group-hover:translate-x-2"
            >
              "Can you solve real product problems — or just make things look
              good?"
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="goal py-10">
      <div class="container small">
        <div class="flex flex-col gap-8 px-0 lg:px-10">
          <!-- Left Column: Text and Illustration -->
          <article class="flex gap-6">
            <h2
              class="text-neutral-800 text-xl sm:text-3xl text-center font-semibold px-9"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              I needed to build more than a website — I needed a strategic
              hiring
            </h2>
          </article>

          <!-- Right Column: Feature Cards -->
          <!-- component -->
          <div
            class="flex flex-col md:flex-row mx-auto w-full items-center justify-between"
          >
            <nuxt-img
              src="/images/goal-section-img.png"
              alt="Visual concept of a portfolio as a strategic hiring tool for product designers"
              format="webp"
              quality="80"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-delay="50"
              data-aos-duration="500"
            />

            <ul class="flex flex-col py-4">
              <li
                class="border-gray-400 flex flex-row mb-2"
                data-aos="fade-out"
                data-aos-easing="ease-in-out"
                data-aos-delay="50"
                data-aos-duration="500"
              >
                <div
                  class="select-none cursor-pointer gap-2 bg-indigo-50 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <MyIcon
                    name="solar:command-bold"
                    textClass="text-indigo-600"
                    class="mt-1"
                  />
                  <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium text-indigo-600">
                      Deliver impact
                    </div>
                    <div class="text-neutral-600 text-sm">
                      Results over pretty pixels
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="border-gray-400 flex flex-row mb-2"
                data-aos="fade-out"
                data-aos-easing="ease-in-out"
                data-aos-delay="100"
                data-aos-duration="500"
              >
                <div
                  class="select-none cursor-pointer gap-2 bg-indigo-50 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <MyIcon
                    name="solar:wireless-charge-bold"
                    textClass="text-indigo-600"
                    class="mt-1"
                  />
                  <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium text-indigo-600">
                      Simplify complexity
                    </div>
                    <div class="text-neutral-600 text-sm">
                      Clear communication of complex ideas
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="border-gray-400 flex flex-row mb-2"
                data-aos="fade-out"
                data-aos-easing="ease-in-out"
                data-aos-delay="150"
                data-aos-duration="500"
              >
                <div
                  class="select-none cursor-pointer gap-2 bg-indigo-50 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <MyIcon
                    name="streamline:strategy-tasks-solid"
                    textClass="text-indigo-600"
                    class="mt-1"
                  />
                  <div class="flex-1 pl-1 mr-16">
                    <div class="font-medium text-indigo-600">
                      Think like a product partner
                    </div>
                    <div class="text-neutral-600 text-sm">
                      Strategic thinking beyond visual design
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="init-research py-10 lg:py-40">
      <div class="container small">
        <section class="px-4 sm:px-6 lg:px-8">
          <p
            class="text-neutral-900 text-2xl sm:text-3xl sm:leading-12 font-medium text-center"
            data-aos="zoom-out"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
          >
            Reviewed 15+ senior designer portfolios — most started with visuals,
            not context. Job posts emphasized “strategic thinker,” not “UI
            expert.”
          </p>
        </section>
      </div>
    </div>
    <div class="research py-10">
      <div class="container small">
        <div class="flex flex-col gap-12">
          <!-- Header Section -->
          <div
            class="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <h2
              class="text-neutral-800 text-2xl sm:text-3xl font-bold"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="50"
              data-aos-duration="500"
            >
              Research & Key Insights
            </h2>
            <p
              class="text-neutral-600 text-lg sm:text-xl font-medium text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="100"
              data-aos-duration="500"
            >
              I didn’t start with inspiration — I started with empathy.
            </p>
          </div>

          <!-- Personas and Validation -->
          <div class="flex flex-col gap-8">
            <p
              class="text-neutral-600 text-sm italic text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              Mapped how three key personas experience portfolios
            </p>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <UserCard
                v-for="(person, i) in people"
                :key="i"
                :name="person.name"
                :role="person.role"
                :description="person.description"
                :image="person.image"
                data-aos="fade-up"
                data-aos-easing="ease-in-out"
                data-aos-delay="200"
                data-aos-duration="500"
              />
            </div>
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center gap-3 md:gap-6 p-6"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              <h3
                class="text-neutral-700 text-lg sm:text-xl font-medium text-center"
              >
                How I validated
              </h3>
              <p class="text-neutral-600 text-lg max-w-2xl">
                Analyzed job descriptions, studied top Behance/Dribbble case
                studies, and used FigJam to map user journeys and pain points.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="approach py-10">
      <div class="container">
        <div class="max-w-6xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col gap-6 md:gap-12">
            <!-- Header -->
            <h2
              class="text-neutral-800 text-2xl sm:text-3xl font-bold text-left md:text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-delay="50"
              data-aos-duration="500"
            >
              My Approach to the Solution
            </h2>

            <!-- Steps -->
            <div class="flex flex-col gap-8">
              <div class="">
                <div class="grid gap-4">
                  <!-- Row 1 (2 columns) -->
                  <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <!-- Step 1: User Journey -->
                    <JourneyStep
                      colsClass="col-span-2"
                      number="01"
                      title="Start with the user journey"
                      description="Mapped how Olena, Alex, and Mariia move from entry to decision."
                      :imgDesk="img01"
                      :imgMobile="img01Mobile"
                      imgAlt="User journey map showing persona entry, first impression, and exploration steps"
                      data-aos="fade-out"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="500"
                      data-aos-delay="50"
                    />
                    <!-- Step 2: Core Problem -->
                    <JourneyStep
                      colsClass="col-span-3"
                      number="02"
                      title="Define the core problem"
                      description='"How might we help hiring managers quickly identify a strategic product designer — not just a visually skilled one?" This HMW question guided every design and content decision.'
                      :imgDesk="img02"
                      :imgMobile="img02Mobile"
                      imgAlt="HMW question guiding the portfolio design: How might we prove strategic thinking?"
                      data-aos="fade-out"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="500"
                      data-aos-delay="100"
                    />
                  </div>

                  <!-- Row 2 (3 columns) -->
                  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4">
                    <!-- Step 3: Clarity -->
                    <article
                      class="bg-neutral-100 rounded-2xl p-8 flex flex-col gap-6 group transition-all duration-300 ease-in hover:scale-[1.04] hover:-translate-y-2 hover:shadow-lg"
                      data-aos="fade-out"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="500"
                      data-aos-delay="150"
                    >
                      <div class="flex flex-col gap-4">
                        <div class="flex flex-col gap-2">
                          <span
                            class="text-indigo-600 text-xl font-semibold transition-all duration-300 ease-in group-hover:text-indigo-800 group-hover:translate-x-1"
                            >03</span
                          >
                          <h3
                            class="text-neutral-700 text-2xl font-bold transition-all duration-300 ease-in group-hover:translate-x-1 group-hover:text-indigo-700"
                          >
                            Build around clarity, not decoration
                          </h3>
                        </div>
                        <ul
                          class="flex flex-col gap-2 transition-all duration-300 ease-in group-hover:translate-x-2 group-hover:opacity-95"
                        >
                          <li class="flex items-center gap-2">
                            <img src="/images/Checkbox.svg" alt="checklist" />
                            <span class="text-neutral-600 text-base"
                              >No unnecessary animations</span
                            >
                          </li>
                          <li class="flex items-center gap-2">
                            <img src="/images/Checkbox.svg" alt="checklist" />
                            <span class="text-neutral-600 text-base"
                              >Only 3 curated projects</span
                            >
                          </li>
                          <li class="flex items-center gap-2">
                            <img src="/images/Checkbox.svg" alt="checklist" />
                            <span class="text-neutral-600 text-base"
                              >Every sentence serves a purpose</span
                            >
                          </li>
                        </ul>
                      </div>
                      <!-- Simplified mockup -->
                      <div
                        class="image transition-all duration-300 ease-in group-hover:scale-110 group-hover:rotate-3"
                      >
                        <nuxt-img
                          src="/images/goal.png"
                          alt="Before/After comparison: clean, content-first UI vs. cluttered, decorative design"
                          format="webp"
                          quality="80"
                        />
                      </div>
                    </article>

                    <!-- Step 4: Content -->
                    <JourneyStep
                      number="04"
                      title="Use content as a competitive advantage"
                      description="Wireframe showing clear structure and hierarchy, designed for impact not visuals."
                      :img="img04"
                      imgAlt="Content-first approach: writing all copy before designing in Figma"
                      data-aos="fade-out"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="500"
                      data-aos-delay="200"
                    />

                    <!-- Step 5: Impact -->
                    <JourneyStep
                      number="05"
                      title="Design for impact, not just beauty"
                      description="Wireframe showing clear structure and hierarchy, designed for impact not visuals"
                      :img="img05"
                      imgAlt="Wireframe showing clear structure and hierarchy, designed for impact not visuals"
                      data-aos="fade-out"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="500"
                      data-aos-delay="250"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="design py-10">
      <div class="container">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <div
              class="relative gap-20 flex flex-col items-center justify-start bg-neutral-100 rounded-3xl overflow-hidden py-16 px-6"
            >
              <!-- Heading -->
              <div
                class="relative z-1 inline-flex flex-col justify-start items-center gap-1"
              >
                <h3
                  class="text-center justify-start text-neutral-700 text-2xl font-semibold"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="50"
                  data-aos-duration="500"
                >
                  Before
                </h3>
                <p
                  class="text-center justify-start text-neutral-600 text-xl font-medium"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="150"
                  data-aos-duration="500"
                >
                  Scattered Notes in FigJam
                </p>
              </div>

              <!-- Sticky Notes Container -->
              <div
                class="image relative z-1"
                data-aos="fade-out"
                data-aos-easing="ease-in-out"
                data-aos-duration="500"
                data-aos-delay="50"
              >
                <nuxt-img
                  class="hidden md:inline-block"
                  src="/images/before-notes.png"
                  alt="Chaotic FigJam board with scattered notes and no clear structure"
                  format="webp"
                  quality="80"
                />
                <nuxt-img
                  class="inline-block md:hidden"
                  src="/images/before-notes-mobile.png"
                  alt="Chaotic FigJam board with scattered notes and no clear structure"
                  format="webp"
                  quality="80"
                />
              </div>
              <!-- <nuxt-img
                class="absolute top-0 left-0 z-0 w-full h-full object-cover"
                src="/images/lg-dots.png"
                alt="dots background"
                format="webp"
                quality="80"
                data-aos="fade-in"
                data-aos-easing="ease-in-out"
                data-aos-duration="500"
              /> -->
            </div>
          </div>
          <div>
            <div
              class="relative gap-20 flex flex-col items-center justify-start bg-neutral-100 rounded-3xl overflow-hidden py-16 px-6"
            >
              <!-- Heading -->
              <div
                class="relative z-1 inline-flex flex-col justify-start items-center gap-1"
              >
                <h3
                  class="text-center justify-start text-neutral-700 text-2xl font-semibold"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="50"
                  data-aos-duration="500"
                >
                  After
                </h3>
                <p
                  class="text-center justify-start text-neutral-600 text-xl font-medium"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="150"
                  data-aos-duration="500"
                >
                  Organized Strategy Map
                </p>
              </div>

              <!-- Sticky Notes Container -->
              <div
                class="image relative z-1"
                data-aos="fade-out"
                data-aos-easing="ease-in-out"
                data-aos-duration="500"
                data-aos-delay="150"
              >
                <nuxt-img
                  class="hidden md:inline-block"
                  src="/images/Organized-Strategy-Map.png"
                  alt="Organized strategy map in FigJam: personas, problem, UVP, MVP, wireframes"
                  format="webp"
                  quality="80"
                />
                <nuxt-img
                  class="w-full block md:hidden"
                  src="/images/Organized-Strategy-Map-mobile.png"
                  alt="Organized strategy map in FigJam: personas, problem, UVP, MVP, wireframes"
                  format="webp"
                  quality="80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="user-flow bg-neutral-800 py-10">
      <div class="container">
        <div
          class="relative z-1 flex flex-col justify-center items-center gap-1"
        >
          <h3
            class="text-center justify-start text-neutral-100 text-2xl font-semibold"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="50"
            data-aos-duration="500"
          >
            User Flow
          </h3>
          <!-- <p
            class="text-center justify-start text-neutral-100 text-xl font-medium"
            data-aos="fade-up"
            data-aos-easing="ease-in-out"
            data-aos-delay="100"
            data-aos-duration="500"
          >
            Scattered Notes in FigJam
          </p> -->
        </div>
        <div class="image relative z-1 my-16">
          <nuxt-img
            class="hidden md:block"
            src="/images/user-flow.png"
            alt="User flow diagram: Homepage → Projects → Case Study → Contact, with About linked"
            format="webp"
            quality="80"
            data-aos="fade-out"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="150"
          />
          <nuxt-img
            class="block w-full md:hidden"
            src="/images/user-flow-mobile.png"
            alt="User flow diagram: Homepage → Projects → Case Study → Contact, with About linked"
            format="webp"
            quality="80"
            data-aos="fade-out"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="150"
          />
        </div>
        <div class="flex justify-center">
          <div class="the-button hidden md:inline-block">
            <AnimatedButton
              to="https://www.figma.com/design/ShAqfKstzxbFGlVYeg0lku/Mamdouh--Strategic-Portfolio?node-id=207-2432&t=lhgPOiGQnPvK7ROh-1"
              icon-name="solar:figma-bold"
              text-main="View The Project in Figma"
              text-sec="Right Now"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="150"
              class="flex"
              target="_blank"
              @click="trackClick('View The Project in Figma - Portfolio')"
            />
          </div>
          <div class="the-button inline-block md:hidden">
            <AnimatedButton
              to="https://www.figma.com/design/ShAqfKstzxbFGlVYeg0lku/Mamdouh--Strategic-Portfolio?node-id=207-2432&t=lhgPOiGQnPvK7ROh-1"
              icon-name="solar:figma-bold"
              text-main="View The Project in Figma"
              text-sec="Right Now"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="150"
              class="flex"
              target="_blank"
              @click="trackClick('View The Project in Figma - Portfolio')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="out-comes py-10">
      <div class="container small">
        <section class="py-12 sm:px-6 lg:px-8">
          <div class="flex flex-col gap-12">
            <!-- Header -->
            <h2
              class="text-neutral-800 text-2xl sm:text-3xl font-bold text-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              Outcome & Impact
            </h2>

            <!-- Content -->
            <div class="flex flex-col gap-12">
              <!-- Achievements -->
              <article class="flex flex-col md:flex-row gap-8">
                <h3
                  class="text-neutral-700 text-xl sm:text-2xl font-semibold max-w-64"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-duration="500"
                  data-aos-delay="50"
                >
                  Real improvements — even before launch.
                </h3>
                <ul class="flex-1 flex flex-col gap-4">
                  <li
                    class="flex items-center gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    <Icon
                      name="solar:archive-minimalistic-bold"
                      class="text-lg text-indigo-600 w-5 h-5 flex-shrink-0"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      Built a clear UVP that communicates value in under 10
                      seconds
                    </p>
                  </li>
                  <li
                    class="flex items-center gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="150"
                  >
                    <Icon
                      name="solar:archive-minimalistic-bold"
                      class="text-lg text-indigo-600 w-5 h-5 flex-shrink-0"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      Defined 3 user personas with deep empathy
                    </p>
                  </li>
                  <li
                    class="flex items-center gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="200"
                  >
                    <Icon
                      name="solar:archive-minimalistic-bold"
                      class="text-lg text-indigo-600 w-5 h-5 flex-shrink-0"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      Created a content-first wireframe
                    </p>
                  </li>
                  <li
                    class="flex items-center gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="250"
                  >
                    <Icon
                      name="solar:archive-minimalistic-bold"
                      class="text-lg text-indigo-600 w-5 h-5 flex-shrink-0"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      Structured case studies to start with the problem
                    </p>
                  </li>
                  <li
                    class="flex items-center gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <Icon
                      name="solar:archive-minimalistic-bold"
                      class="text-lg text-indigo-600 w-5 h-5 flex-shrink-0"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      Designed a minimal, high-impact layout
                    </p>
                  </li>
                  <li
                    class="flex items-center gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="350"
                  >
                    <Icon
                      name="solar:archive-minimalistic-bold"
                      class="text-lg text-indigo-600 w-5 h-5 flex-shrink-0"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      Prepared full dev handoff using Nuxt.js + Tailwind CSS
                    </p>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="change py-10">
      <div
        class="container full flex flex-col justify-center items-center gap-12"
      >
        <h3
          class="text-neutral-700 text-xl sm:text-2xl text-center font-semibold"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          What changed?
        </h3>
        <div class="flex flex-col lg:flex-row gap-12">
          <div
            class="before flex flex-col gap-6 bg-neutral-100 p-12 rounded-4xl"
            data-aos="fade-in"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
          >
            <div class="now-head">
              <h3 class="text-xl text-neutral-800 font-medium">Before</h3>
              <p class="text-base text-neutral-600">
                Status: Disjointed screens with no strategy.
              </p>
            </div>
            <!-- component -->
            <div class="flex mx-auto w-full items-center justify-center">
              <ul class="flex w-full flex-col">
                <li class="border-indigo-600 flex flex-row mb-2">
                  <div
                    class="select-none cursor-pointer bg-neutral-200 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="solar:danger-triangle-bold"
                      textClass="text-neutral-600"
                    />
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-neutral-600">
                        No clear UVP or audience focus.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="border-indigo-600 flex flex-row mb-2">
                  <div
                    class="select-none cursor-pointer bg-neutral-200 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="game-icons:card-random"
                      textClass="text-neutral-600"
                    />
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-neutral-600">
                        Scattered content with no user journey.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="border-indigo-600 flex flex-row mb-2">
                  <div
                    class="select-none cursor-pointer bg-neutral-200 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="solar:user-cross-bold"
                      textClass="text-neutral-600"
                    />
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-neutral-600">
                        Unaddressed pain points for hiring managers.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="now-footer">
              <p class="text-sm text-neutral-400 italic">
                Initial exploration: Drafting a basic structure for user needs.
              </p>
            </div>
          </div>
          <div class="now-to flex items-center">
            <MyIcon
              name="line-md:chevron-triple-right"
              textClass="text-indigo-600"
              data-aos="fade-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="200"
            />
          </div>
          <div
            class="after flex flex-col gap-6 bg-indigo-50 p-12 rounded-4xl"
            data-aos="fade-out"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="200"
          >
            <div class="now-head">
              <h3 class="text-xl text-neutral-800 font-medium">After</h3>
              <p class="text-base text-neutral-600">
                Status: Strategic product addressing hiring needs proactively.
              </p>
            </div>
            <!-- component -->
            <div class="flex mx-auto w-full items-center justify-center">
              <ul class="flex w-full flex-col bg-indigo-50">
                <li class="border-indigo-600 flex flex-row mb-2">
                  <div
                    class="select-none cursor-pointer bg-indigo-100 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="solar:archive-minimalistic-bold"
                      textClass="text-indigo-600"
                    />
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-indigo-600">
                        Defined UVP tackling audience pain points.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="border-indigo-600 flex flex-row mb-2">
                  <div
                    class="select-none cursor-pointer bg-indigo-100 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="solar:signpost-2-bold"
                      textClass="text-indigo-600"
                    />
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-indigo-600">
                        Structured user journey with research-backed sections.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="border-indigo-600 flex flex-row mb-2">
                  <div
                    class="select-none cursor-pointer bg-indigo-100 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="solar:ranking-bold"
                      textClass="text-indigo-600"
                    />
                    <div class="flex-1 pl-1 mr-16">
                      <div class="font-medium text-indigo-600">
                        Solved pain points with 30% faster engagement.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="now-footer">
              <p class="text-sm text-indigo-600 italic">
                In progress: Developing a Q&A framework for 5 hiring priorities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="now py-20">
      <div class="container small">
        <section
          class="bg-indigo-600 rounded-3xl py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-8 max-w-5xl mx-auto group transition-all duration-300 ease-in-out hover:shadow-2xl"
          data-aos="fade-out"
          data-aos-easing="ease-in-out"
          data-aos-duration="500"
        >
          <div
            class="flex flex-col items-center gap-4 text-center transition-all duration-300 ease-in-out group-hover:scale-110"
          >
            <p class="text-neutral-200 text-lg sm:text-xl font-medium">Now,</p>
            <h2 class="text-neutral-200 text-2xl sm:text-3xl font-bold">
              instead of asking "Do you like my work?"
            </h2>
          </div>
          <nuxt-img
            class="w-20 h-20 rounded-full max-w-full h-auto transition-all duration-300 ease-in-out group-hover:rotate-12"
            src="/images/product-designer-avatar.png"
            alt="Profile picture of the designer"
            format="webp"
            quality="80"
          />

          <div
            class="flex flex-col items-center gap-4 text-center max-w-lg transition-all duration-300 ease-in-out group-hover:translate-x-3"
          >
            <p class="text-neutral-200 text-lg sm:text-xl font-medium">
              I’m asking,
            </p>
            <h2 class="text-neutral-200 text-2xl sm:text-3xl font-bold">
              Want to solve complex product challenges together?
            </h2>
          </div>
        </section>
      </div>
    </div>
    <div class="main-cta">
      <Maincta
        cta-title="Want to build a portfolio that gets you hired — not just seen?"
        cta-button-text="Hire Me for Your Team"
        cta-icon-name="clarity:email-solid"
        ctaButtonLink="/contact"
        data-aos="fade-in"
        data-aos-easing="ease-in-out"
        data-aos-duration="600"
      />
    </div>
    <AppFooter />
  </div>
</template>
<script setup>
useHead({
  title: "Case Study: Building My Strategic Portfolio | Mamdouh Ghaneemy",
  meta: [
    {
      name: "description",
      content:
        "How I designed my portfolio as a product to prove strategic thinking — not just visuals. For hiring managers in SaaS & Fintech.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  meta: [
    {
      property: "og:title",
      content: "Case Study: Building My Strategic Portfolio",
    },
    {
      property: "og:description",
      content:
        "A portfolio that answers hiring questions before they’re asked. Built with Nuxt.js, Tailwind, and user-centered strategy.",
    },
    {
      property: "og:image",
      content: "https://mamdouh.com/og-case-study-portfolio.jpg",
    },
    {
      property: "og:url",
      content: "https://mamdouh.com/projects/portfolio-case-study",
    },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
definePageMeta({
  layout: "default",
});
// user personas
import olena from "/images/olena.png";
import alex from "/images/Alex.png";
import mariia from "/images/Mariia.png";

// ✅ بيانات المستخدمين
const people = [
  {
    name: "Olena",
    role: "Design Manager",
    description: "Needs proof of independent thinking",
    image: olena,
  },
  {
    name: "Alex",
    role: "Product Lead",
    description: "Looks for problem-solving, not polish",
    image: alex,
  },
  {
    name: "Mariia",
    role: "Founder",
    description: "Wants speed + quality",
    image: mariia,
  },
];
import img01 from "/images/user-journey.png";
import img01Mobile from "/images/user-journey-mobile.png";

import img02 from "/images/define-the-problem.png";
import img02Mobile from "/images/problem-for-mobile.png";

import img04 from "/images/content.png";
import img05 from "/images/impact-efforts.png";

const trackClick = (label) => {
  gtm?.trackEvent({
    event: "button_click",
    category: "interaction",
    action: "click",
    label, // البراميتر اللي هتبعتُه وقت الاستدعاء
    value: route.path, // الصفحة الحالية
  });
};
</script>
<style scoped>
.hero {
  height: 100vh;
  background-image: url("~/assets/images/case-study-hero-bg.png");
  background-color: #000;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}
.flow-box {
  font-size: 10px;
}
@media (max-width: 767px) {
  .hero {
    background-image: url("~/assets/images/case-study-hero-mobile-bg.png");
  }
}
</style>
