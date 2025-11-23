<template>
  <div class="main">
    <AppHeader />
    <header
      class="hero flex flex-col md:gap-40 justify-center items-center pt-20 px-4 sm:px-6 lg:px-8"
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
          <span class="text-neutral-300 text-base font-medium tracking-wide"
            >Case Study</span
          >
        </div>

        <!-- Main Heading -->
        <h1
          id="about-heading"
          class="text-3xl md:text-4xl font-semibold text-neutral-100 -tight max-w-3xl"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="100"
          data-aos-duration="500"
        >
          Doctor Booking App
        </h1>

        <!-- Description -->
        <p
          class="text-lg sm:text-xl text-neutral-400 -relaxed max-w-2xl"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="150"
          data-aos-duration="500"
        >
          Designing a Seamless Doctor Booking Experience For patients and
          families navigating Egypt’s unique healthcare flow
        </p>
      </div>

      <!-- Project Details -->
      <section
        class="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-base"
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
          <dd class="text-neutral-100">Healthcare UX in Egypt</dd>
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
          <dd class="text-neutral-100">
            UX Research, Strategy, IA, Wireframes
          </dd>
        </dl>
        <dl
          class="flex flex-col gap-1"
          data-aos="fade-up"
          data-aos-easing="ease-in-out"
          data-aos-delay="200"
          data-aos-duration="500"
        >
          <dt class="text-neutral-400 font-medium">Focus</dt>
          <dd class="text-neutral-100">
            (Research → Strategy → Wireframes → UI System)
          </dd>
        </dl>
      </section>
    </header>
    <div
      class="custom-marquee flex justify-center items-center mb-10"
      v-gsap.whenVisible.from="{ opacity: 0, y: -32 }"
    >
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
                class="text-neutral-200 text-lg font-bold text-center transition-all duration-300 ease-in-out group-hover:translate-x-3"
              >
                Booking a doctor in Egypt is still messy. Most clinics run by
                queue order, not fixed appointments. Patients wait for hours,
                trust ratings feel fake, and families struggle booking for
                multiple members.
              </h3>
            </div>
            <p
              class="text-neutral-50 text-lg font-semibold text-center max-w-2xl transition-all duration-300 ease-in-out group-hover:translate-x-2"
            >
              For clinics, this creates no-shows, wasted time, and revenue loss.
              For users, it means frustration, uncertainty, and lack of
              transparency.
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
              class="text-neutral-800 text-2xl sm:text-3xl text-center font-semibold px-0 lg:px-9"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
            >
              Patients asks
            </h2>
          </article>

          <!-- Right Column: Feature Cards -->
          <!-- component -->
          <div
            class="flex flex-col lg:flex-row mx-auto w-full items-center justify-between"
          >
            <nuxt-img
              src="/images/Patients-asks.png"
              alt="Top user questions in Egyptian healthcare: queue number, wait time, family booking"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-delay="50"
              data-aos-duration="500"
              format="webp"
              quality="80"
            />

            <ul class="flex flex-col py-4">
              <li
                class="border-neutral-400 flex flex-row mb-2"
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
                  <div class="flex-1 pl-1 mr-0 lg:mr-16">
                    <div class="font-medium text-indigo-600">
                      DWhat’s my number in line?
                    </div>
                    <div class="text-neutral-600 text-sm">
                      Users need real-time queue visibility.
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="border-neutral-400 flex flex-row mb-2"
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
                  <div class="flex-1 pl-1 mr-0 lg:mr-16">
                    <div class="font-medium text-indigo-600">
                      How long will I wait?
                    </div>
                    <div class="text-neutral-600 text-sm">
                      Users want accurate time estimates.
                    </div>
                  </div>
                </div>
              </li>
              <li
                class="border-neutral-400 flex flex-row mb-2"
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
                  <div class="flex-1 pl-1 mr-0 lg:mr-16">
                    <div class="font-medium text-indigo-600">
                      Can I book for my kids too?
                    </div>
                    <div class="text-neutral-600 text-sm">
                      Users need family-friendly booking.
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="init-research py-10 md:py-40">
      <div class="container small">
        <section class="px-4 sm:px-6 lg:px-8">
          <p
            class="text-neutral-900 text-2xl sm:text-3xl sm:leading-12 font-medium text-center"
            data-aos="zoom-out"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
          >
            Competitive analysis (Vezeeta, Clinido) → focused on rigid slots.
            User research → 80% expect flexible “queue” experience instead.
          </p>
        </section>
      </div>
    </div>
    <div class="research py-10">
      <div class="container small">
        <div class="flex flex-col gap-12">
          <!-- Header Section -->
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="col-span-1">
              <div class="flex flex-col justify-between gap-6">
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
                  class="text-neutral-600 text-base sm:text-xl pr-0 md:pr-4 font-medium"
                  data-aos="fade-up"
                  data-aos-easing="ease-in-out"
                  data-aos-delay="100"
                  data-aos-duration="500"
                >
                  I didn’t start with inspiration — I started with empathy.
                </p>
              </div>
            </div>
            <div class="col-span-2">
              <div class="flex flex-col gap-6">
                <article class="">
                  <p
                    class="text-neutral-600 text-base"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="150"
                    data-aos-duration="500"
                  >
                    Mapped how three key personas experience portfolios
                  </p>
                </article>
                <div class="flex flex-col md:flex-row gap-4">
                  <UserCard
                    v-for="(person, i) in people"
                    :key="i"
                    :name="person.name"
                    :role="person.role"
                    :description="person.description"
                    :image="person.image"
                    class="w-full md:w-[50%]"
                    data-aos="fade-up"
                    data-aos-easing="ease-in-out"
                    data-aos-delay="200"
                    data-aos-duration="500"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- Personas and Validation -->
          <div class="flex flex-col gap-8">
            <div
              class="grid grid-cols-1 md:grid-cols-3 justify-between items-start md:items-center gap-3 md:gap-8 p-0 md:p-6"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-delay="150"
              data-aos-duration="500"
            >
              <h3
                class="md:col-span-1 text-neutral-700 text-lg sm:text-xl font-medium"
              >
                How I validated
              </h3>

              <ul class="md:col-span-2">
                <li
                  class="fordark flex items-start gap-3 px-4 py-3 hover:bg-neutral-50 rounded-md transition"
                >
                  <!-- أيقونة صغيرة -->
                  <MyIcon
                    name="solar:document-add-bold"
                    textClass="text-indigo-600"
                    class="text-2xl min-w-6"
                  />
                  <span class="text-neutral-800"
                    >Trust gap — reviews don’t feel reliable.
                  </span>
                </li>

                <li
                  class="fordark flex items-start gap-3 px-4 py-3 hover:bg-neutral-50 rounded-md transition"
                >
                  <MyIcon
                    name="solar:document-add-bold"
                    textClass="text-indigo-600"
                    class="text-2xl min-w-6"
                  />
                  <span class="text-neutral-800"
                    >Speed gap — too many steps before booking.
                  </span>
                </li>

                <li
                  class="fordark flex items-start gap-3 px-4 py-3 hover:bg-neutral-50 rounded-md transition"
                >
                  <MyIcon
                    name="solar:document-add-bold"
                    textClass="text-indigo-600"
                    class="text-2xl min-w-6"
                  />
                  <span class="text-neutral-800"
                    >Family gap — no smooth way to manage multiple profiles.
                  </span>
                </li>
              </ul>
            </div>
            <div
              class="grid grid-cols-1 md:grid-cols-3 justify-between items-start md:items-center gap-3 md:gap-8 p-0 md:p-6"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-delay="250"
              data-aos-duration="500"
            >
              <h3
                class="md:col-span-1 text-neutral-700 text-lg sm:text-xl font-medium"
              >
                Validation
              </h3>

              <ul class="md:col-span-2">
                <li
                  class="fordark flex items-start gap-3 px-4 py-3 hover:bg-neutral-50 rounded-md transition"
                >
                  <!-- أيقونة صغيرة -->
                  <MyIcon
                    name="solar:notes-bold"
                    textClass="text-indigo-600"
                    class="text-2xl min-w-6"
                  />
                  <span class="text-neutral-800"
                    >Studied 5 competitors + 50+ user reviews.
                  </span>
                </li>

                <li
                  class="fordark flex items-start gap-3 px-4 py-3 hover:bg-neutral-50 rounded-md transition"
                >
                  <MyIcon
                    name="solar:ruler-pen-bold"
                    textClass="text-indigo-600"
                    class="text-2xl min-w-6"
                  />
                  <span class="text-neutral-800"
                    >Tested wireframes in early sketches → confirmed trust &
                    queue focus.
                  </span>
                </li>
              </ul>
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
                  <!-- الصف الأول -->
                  <div class="grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <!-- Step 1: User Journey -->
                    <JourneyStep
                      colsClass="col-span-2"
                      number="01"
                      title="Remove friction at entry"
                      description="Doctor booking app with guest mode and Book Now button to reduce friction"
                      :img="img01"
                      imgAlt="Doctor booking app with guest mode and Book Now button to reduce friction"
                      data-aos="fade-out"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="500"
                      data-aos-delay="50"
                    />

                    <!-- Step 2: Core Problem -->
                    <JourneyStep
                      colsClass="col-span-3"
                      number="02"
                      title="Bring clarity to the queue"
                      description="Introduced dynamic turn estimation: “You’re #12 ≈ 7:30 PM” — based on real-time clinic data."
                      :img="img02"
                      imgAlt="Real-time queue estimation showing user's position and estimated time: You're #12 ≈ 7:30 PM"
                      data-aos="fade-out"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="500"
                      data-aos-delay="100"
                    />
                  </div>

                  <!-- الصف الثاني -->
                  <div class="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-4">
                    <!-- Step 3: Clarity -->
                    <JourneyStep
                      number="03"
                      title="Design for family booking"
                      description="Built Family Profiles to save child data and switch instantly."
                      :img="img03"
                      imgAlt="Family booking feature: manage multiple profiles including children with saved medical data"
                      data-aos="fade-out"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="500"
                      data-aos-delay="150"
                    />

                    <!-- Step 4: Content -->
                    <JourneyStep
                      number="04"
                      title="Build trust in doctors"
                      description="Added verified badges, detailed reviews, and clear insurance coverage — all in Arabic."
                      :img="img04"
                      imgAlt="Trusted doctor profile with verified badge, patient reviews, and insurance coverage details"
                      data-aos="fade-out"
                      data-aos-easing="ease-in-out"
                      data-aos-duration="500"
                      data-aos-delay="200"
                    />

                    <!-- Step 5: Impact -->
                    <JourneyStep
                      number="05"
                      title="Payment for local context"
                      description="Supported Cash, Vodafone Cash, Fawry — no Western-only flows."
                      :img="img05"
                      imgAlt="Local payment options for Egypt: Cash, Vodafone Cash, Fawry — no credit card required"
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
        <div class="flex flex-col gap-6 md:gap-12">
          <h2
            class="text-neutral-800 text-2xl sm:text-3xl font-bold text-center"
          >
            Design Evolution
          </h2>
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
                    src="/images/doctor-app-notes.png"
                    alt="Traditional doctor booking with rigid time slots that don't reflect real clinic queues in Egypt"
                    format="webp"
                    quality="80"
                  />
                  <nuxt-img
                    class="inline-block md:hidden"
                    src="/images/doctor-app-notes-mobile.png"
                    alt="Traditional doctor booking with rigid time slots that don't reflect real clinic queues in Egypt"
                    format="webp"
                    quality="80"
                  />
                </div>
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
                    src="/images/doctor-app-stratgy-map.png"
                    alt="After redesign: queue transparency and family profiles for seamless doctor booking in Egypt"
                    format="webp"
                    quality="80"
                  />

                  <nuxt-img
                    class="inline-block md:hidden"
                    src="/images/doctor-app-stratgy-map-mobile.png"
                    alt="After redesign: queue transparency and family profiles for seamless doctor booking in Egypt"
                    format="webp"
                    quality="80"
                  />
                </div>
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
            src="/images/doctor-app-flow.png"
            alt="User flow diagram: from home to booking confirmation with queue estimation and notifications"
            format="webp"
            quality="80"
            data-aos="fade-out"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="150"
          />

          <nuxt-img
            class="block w-full md:hidden"
            src="/images/doctor-app-flow-mobile.png"
            alt="User flow diagram: from home to booking confirmation with queue estimation and notifications"
            format="webp"
            quality="80"
            data-aos="fade-out"
            data-aos-easing="ease-in-out"
            data-aos-duration="500"
            data-aos-delay="150"
          />
        </div>
        <div class="flex justify-center">
          <div class="the-button hidden md:block">
            <AnimatedButton
              to="https://www.figma.com/design/EVfnnRsml9cqjSrOhi8gNT/Doctor-App?m=auto&t=FyJSnvervquyO1M5-1"
              icon-name="solar:figma-bold"
              text-main="View The Project in Figma"
              text-sec="Right Now"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="150"
              class="flex"
              @click="trackClick('View The Project in Figma - Doctor')"
              target="_blank"
            />
          </div>
          <div class="the-button block md:hidden">
            <AnimatedButton
              to="https://www.figma.com/design/EVfnnRsml9cqjSrOhi8gNT/Doctor-App?m=auto&t=FyJSnvervquyO1M5-1"
              icon-name="solar:figma-bold"
              text-main="View The Project in Figma"
              text-sec="Right Now"
              data-aos="fade-out"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="150"
              class="flex"
              target="_blank"
              @click="trackClick('View The Project in Figma - Docotr')"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="out-comes py-10">
      <div class="container small">
        <section class="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
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
                    class="flex items-start gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    <MyIcon
                      name="solar:archive-minimalistic-bold"
                      textClass="text-indigo-600"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      50% faster booking (under 1 min as guest)
                    </p>
                  </li>
                  <li
                    class="flex items-start gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="150"
                  >
                    <MyIcon
                      name="solar:archive-minimalistic-bold"
                      textClass="text-indigo-600"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      First queue-based booking flow tailored to Egypt
                    </p>
                  </li>
                  <li
                    class="flex items-start gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="200"
                  >
                    <MyIcon
                      name="solar:archive-minimalistic-bold"
                      textClass="text-indigo-600"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      Family booking feature absent in main competitors
                    </p>
                  </li>
                  <li
                    class="flex items-start gap-3"
                    data-aos="fade-out"
                    data-aos-easing="ease-in-out"
                    data-aos-duration="500"
                    data-aos-delay="250"
                  >
                    <MyIcon
                      name="solar:archive-minimalistic-bold"
                      textClass="text-indigo-600"
                    />
                    <p class="text-neutral-900 text-lg font-medium">
                      Trust rebuilt via transparent reviews + insurance display
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
        <div class="grid grid-cols-1 lg:grid-cols-9 gap-12">
          <div
            class="before col-span-4 flex flex-col gap-6 bg-neutral-100 p-12 rounded-4xl"
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
                    class="select-none cursor-pointer gap-2 bg-neutral-200 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="solar:clock-circle-bold"
                      textClass="text-neutral-600"
                    />
                    <div class="flex-1 pl-1 mr-0 md:mr-16">
                      <div class="font-medium text-neutral-600">
                        A collection of rigid time slots that didn’t match real
                        clinic workflows in Egypt. clarity.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="border-indigo-600 flex flex-row mb-2">
                  <div
                    class="select-none cursor-pointer gap-2 bg-neutral-200 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="solar:confounded-circle-bold"
                      textClass="text-neutral-600"
                    />
                    <div class="flex-1 pl-1 mr-0 md:mr-16">
                      <div class="font-medium text-neutral-600">
                        Users were left guessing their turn, frustrated by long
                        waits and lack of
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div class="now-to md:col-span-1 flex justify-center items-center">
            <MyIcon
              name="line-md:chevron-triple-right"
              textClass="text-indigo-600"
              class="rotate-90 md:rotate-none"
              data-aos="fade-in"
              data-aos-easing="ease-in-out"
              data-aos-duration="500"
              data-aos-delay="200"
            />
          </div>
          <div
            class="after col-span-4 flex flex-col gap-6 bg-indigo-50 p-12 rounded-4xl"
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
                    class="select-none cursor-pointer gap-2 bg-indigo-100 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="solar:calendar-add-bold"
                      textClass="text-indigo-600"
                    />
                    <div class="flex-1 pl-1 mr-0 md:mr-16">
                      <div class="font-medium text-indigo-600">
                        Fast & transparent booking with real-time queue
                        estimates that match Egypt’s clinic workflows.
                      </div>
                    </div>
                  </div>
                </li>
                <li class="border-indigo-600 flex flex-row mb-2">
                  <div
                    class="select-none cursor-pointer gap-2 bg-indigo-100 rounded-md flex flex-1 items-start p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg"
                  >
                    <MyIcon
                      name="solar:wallet-2-bold"
                      textClass="text-indigo-600"
                    />
                    <div class="flex-1 pl-1 mr-0 md:mr-16">
                      <div class="font-medium text-indigo-600">
                        Family-first design + local payments (Fawry, Vodafone
                        Cash) for seamless access.
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
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
            class="flex flex-col items-center gap-4 text-center transition-all duration-300 ease-in-out group-hover:translate-x-3"
          >
            <p class="text-neutral-200 text-lg sm:text-xl font-medium">Now,</p>
            <h2 class="text-neutral-200 text-2xl sm:text-3xl font-bold">
              instead of asking
              <span class="font-normal italic">"Do you like this UI?"</span>
            </h2>
          </div>
          <nuxt-img
            class="w-20 h-20 rounded-full max-w-full h-auto transition-all duration-300 ease-in-out group-hover:rotate-12"
            src="/images/product-designer-avatar.png"
            alt="Profile picture of the designer"
            format="webp"
            quality="80"
          />

          <div class="flex flex-col items-center gap-4 text-center max-w-lg">
            <p
              class="text-neutral-200 text-lg sm:text-xl font-medium transition-all duration-300 ease-in-out group-hover:translate-x-2"
            >
              I’m asking,
            </p>
            <h2
              class="text-neutral-200 text-2xl sm:text-3xl font-bold transition-all duration-300 ease-in-out group-hover:scale-110"
            >
              <span class="font-semibold italic"
                >"Shall we solve healthcare UX challenges together?"</span
              >
            </h2>
          </div>
        </section>
      </div>
    </div>
    <div class="main-cta">
      <Maincta
        cta-title="Want to design healthcare products that solve real patient needs?"
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
  title: "Case Study: Egyptian Doctor Booking App | Mamdouh Ghaneemy",
  meta: [
    {
      name: "description",
      content:
        "Redesigned doctor booking for Egypt’s queue-based clinics. Fast, family-friendly, and trustworthy — built for real user needs.",
    },
    {
      name: "robots",
      content: "index, follow",
    },
  ],
  meta: [
    {
      property: "og:title",
      content: "Case Study: Egyptian Doctor Booking App",
    },
    {
      property: "og:description",
      content:
        "A queue-aware, family-first booking experience for Egyptian patients. Solving trust, speed, and local context.",
    },
    {
      property: "og:image",
      content: "https://mamdouh.com/og-case-study-doctor.jpg",
    },
    {
      property: "og:url",
      content: "https://mamdouh.com/projects/doctor-booking-app",
    },
    { name: "twitter:card", content: "summary_large_image" },
  ],
});
definePageMeta({
  layout: "default",
});
import img01 from "/images/doctor-app-user-flow.png";
import img02 from "/images/queue.png";
import img03 from "/images/family.png";
import img04 from "/images/trusted-doctors.png";
import img05 from "/images/doctor-flexable-payment.png";
// user personas
import mona from "/images/Mariia.png";
import ahmed from "/images/Alex.png";
const people = [
  {
    name: "Mona",
    role: "40, mother",
    description: "books for her children, needs family support.",
    image: mona,
  },
  {
    name: "Ahmed",
    role: "34, works late",
    description: "needs fastest booking after work.",
    image: ahmed,
  },
];
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
  .now-to {
    width: 100%;
  }
}
</style>
