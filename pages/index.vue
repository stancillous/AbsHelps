<template>
  <div>
    <main class="main-wrp">
      <section class="hero-section">
        <div class="hs-wrp">
          <div class="hswrp-container">
            <h1 class="hero-ttl">
              Tailored staffing services <br />
              with guaranteed quality
            </h1>
            <div class="job-form-wrp">
              <div class="jf-container">
                <form
                  action=""
                  @submit.prevent="showJobs()"
                >
                  <div class="job-dets">
                    <div @click="showJobFilters = !showJobFilters" class="profession-div">
                      <label for="profession">Profession</label>
                      <input
                      readonly
                        v-model="userEnteredProfession"
                        id="profession"
                        type="text"
                        placeholder="Select your profession"
                      />

                      <template v-if="showJobFilters">
                        <div class="job-filters">
                          <ul>
                            <li @click.prevent="userEnteredProfession='Housekeeping'"><NuxtLink to="">Housekeeping</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Nannies'"><NuxtLink to="">Nannies</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Domestic managers'"><NuxtLink to="">Domestic managers</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Cleaners'" ><NuxtLink to="">Cleaners</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Chefs'"><NuxtLink to="">Chefs/cooks</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Gardeners'"><NuxtLink to="">Gardeners</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Office assistants'"><NuxtLink to="">Office assistants</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Receptionists'" ><NuxtLink to="">Receptionists</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Sales rep'"><NuxtLink to="">Sales representative</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Drivers'"><NuxtLink to="">Drivers</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Cashiers'"><NuxtLink to="">Cahiers</NuxtLink></li>
                            <li @click.prevent="userEnteredProfession='Waiters'"><NuxtLink to="">Waiters</NuxtLink></li>
                            <li  @click.prevent="userEnteredProfession='Caregivers'" ><NuxtLink to="">Caregivers</NuxtLink></li>
                          </ul>
                        </div>

                      </template>
                    </div>


                    <div>
                      <label for="location">Location</label>
                      <input
                        id="location"
                        type="text"
                        placeholder="City/Department/Region"
                      />
                    </div>
                  </div>

                  <div class="btnwrp">
                    <button type="submit">
                      <svg
                        width="20px"
                        height="20px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="#ffffff"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M16.6725 16.6412L21 21M19 11C19 15.4183 15.4183 19 11 19C6.58172 19 3 15.4183 3 11C3 6.58172 6.58172 3 11 3C15.4183 3 19 6.58172 19 11Z"
                            stroke="#ffffff"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </g>
                      </svg>
                      <span class="text-light">Search</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="after-hs-section">
        <div class="after-hs">
          <div class="container-wrp text-center">
            <h2 class="f-ttl">Are you a recruiter?</h2>
            <div class="row-wrp">
              <div class="dets">
                <div>
                  <h2 class="mb-5">Let us turn your vision into reality</h2>
                  <p>
                    At Absolute Helps, we provide trusted, professional domestic
                    and corporate staffing solutions tailored to your unique
                    needs. Whether you require a housekeeper, nanny, or
                    specialized staff, our rigorous vetting process ensures that
                    you receive only the most qualified and reliable candidates.
                  </p>
                  <div class="link mt-5">
                    <a class="text-decoration-underline" href="">Get started</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="services">
        <div class="services-wrp">
          <div class="services-wrp-container">
            <h1 class="section-ttl">Services</h1>
            <h2>Everything covered</h2>
            <p>
              We offer a wide range of staffing services to meet diverse needs,
              including:
            </p>
          </div>
          <div class="grid-wrp">
            <div class="grid-det">
              <p>Housekeeping</p>
              <div class="d-flex">
                <a class="grid-md" href="">Learn more</a>
                <a class="grid-md" href="">Find work</a>
              </div>
            </div>
            <div class="grid-det">
              <p>Childcare services</p>
              <div class="d-flex">
                <a class="grid-md" href="">Learn more</a>
                <a class="grid-md" href="">Find work</a>
              </div>
            </div>
            <div class="grid-det">
              <p>Temporary & permanent staff</p>
              <div class="d-flex">
                <a class="grid-md" href="">Learn more</a>
                <a class="grid-md" href="">Find work</a>
              </div>
            </div>
            <div class="grid-det">
              <p>Corporate staffing solutions</p>
              <div class="d-flex">
                <a class="grid-md" href="">Learn more</a>
                <a class="grid-md" href="">Find work</a>
              </div>
            </div>
            <div class="grid-det">
              <p>Corporate staffing solutions</p>
              <div class="d-flex">
                <a class="grid-md" href="">Learn more</a>
                <a class="grid-md" href="">Find work</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <Jobs />
      </section>

      <section class="lt-benefits-wrapper">
        <div class="lbw-wrp">
          <div class="lbw-container">
            <div class="pinned">
              <h1 class="section-ttl">Key advantages</h1>
              <h2 class="lbw-wrp-header mb-5">
                Choose Quality <br />
                with Absolute Helps
              </h2>
            </div>
            <div class="lbw-dg">
              <div class="row">
                <div class="lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Cost-effective & Flexible Solutions</p>
                    <p class="lbw-p">
                      Finding a balance between affordability and quality is a
                      challenge that many seek in a housekeeping and childcare
                      agency. <br />
                      <br />
                      Absolute Helps manages to strike this balance by offering
                      competitive pricing without compromising service
                      standards.
                    </p>
                  </div>
                </div>

                <div class="lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Client-Cetric Approach</p>
                    <p class="lbw-p">
                      Central to the philosophy of Absolute Help’s is a
                      client-centric approach that prioritizes the unique
                      requirements and preferences of each client. <br />
                      <br />
                      Tailored solutions are a hallmark of our service,
                      recognizing that every housekeeping or childcare job has
                      its own set of demands.
                    </p>
                  </div>
                </div>

                <div class="lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Reliability & Availability</p>
                    <p class="lbw-p">
                      Reliability is a non-negotiable aspect. Absolute Helps has
                      built a reputation for reliability, with a robust system
                      in place to handle any emergencies or last-minute
                      requests.
                    </p>
                  </div>
                </div>
                <div class="lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Training and Quality Assurance</p>
                    <p class="lbw-p">
                      We, in collaboration with relevant coaching and training
                      programs, place a significant emphasis on continuous
                      training and development. <br />
                      <br />
                      Housekeepers and other staff are kept up-to-date with the
                      latest cleaning techniques, products, and health and
                      safety regulations as well as best practice in employment
                    </p>
                  </div>
                </div>
                <div class="lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Extensive Range of Services</p>
                    <p class="lbw-p">
                      The array of services provided by Absolute Helps is
                      extensive, catering to a variety of clients and settings.
                      <br />
                      <br />
                      This can range from domestic housekeeping tasks such as
                      cleaning, laundry, and ironing and child care services to
                      more specialized services like deep cleans or event
                      preparation and clean-up
                    </p>
                  </div>
                </div>
                <div class="lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Training and Quality Assurance</p>
                    <p class="lbw-p">
                      We, in collaboration with relevant coaching and training
                      programs place a significant emphasis on continuous
                      training and development. <br />
                      <br />
                      Housekeepers and other staff are kept up-to-date with the
                      latest cleaning techniques, products, and health and
                      safety regulations as well as best practice in employment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="testimonials">
        <div class="test-wrp">
          <div class="test-wrp-container">
            <p class="section-ttl">What they say</p>
            <h1>Testimonials</h1>
            <div class="row-wrp">
              <div class="col-md-6 author">
                <img :src="currentReview.img" alt="image of reviewer" />
                <p class="author-name">{{ currentReview.author }}</p>

                <div class="nav-btns">
                  <div class="navbtns-wrp">
                    <!-- <div> -->
                    <div>
                      <svg
                        @click="prevReview"
                        :class="['nav-btn', { disabled: currentIndex === 0 }]"
                        fill="#000000"
                        height="26px"
                        width="26px"
                        version="1.1"
                        id="XMLID_54_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                        xml:space="preserve"
                        stroke="#000000"
                        stroke-width="0.00024000000000000003"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="previous">
                            <g>
                              <polygon
                                points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 "
                              ></polygon>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="line"></div>
                    <div>
                      <svg
                        @click="nextReview"
                        :class="[
                          'nav-btn',
                          { disabled: currentIndex === reviews.length - 1 },
                        ]"
                        fill="#000000"
                        height="26px"
                        width="26px"
                        version="1.1"
                        id="XMLID_287_"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 24 24"
                        xml:space="preserve"
                        stroke="#000000"
                        stroke-width="0.00024000000000000003"
                      >
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <g id="next">
                            <g>
                              <polygon
                                points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 "
                              ></polygon>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6 comment">
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#000000"
                  stroke-width="0.00016"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M5.29289 1.29291L6.70711 2.70712L3 6.41423V7.00001H7V14H1V5.5858L5.29289 1.29291Z"
                      fill="#000000"
                    ></path>
                    <path
                      d="M15 7.00001H11V6.41423L14.7071 2.70712L13.2929 1.29291L9 5.5858V14H15V7.00001Z"
                      fill="#000000"
                    ></path>
                  </g>
                </svg>

                <!-- <transition name="slide" mode="out-in"> -->

                <div class="comment-wrp">
                  <p>
                    {{ currentReview.content }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <Faqs />
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";

// variable to tell if to show the mobile nav
const showMobileNav = ref(false);

const showJobFilters = ref(false); /**to tell when to show/hide thejob filters on the hero section */

let userEnteredProfession = ref(""); /**to hold the profession name entered by the user */

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 800px)", () => {
    ScrollTrigger.create({
      trigger: ".lbw-wrp",
      start: "top 20%",
      end: "bottom 40%",
      pin: ".pinned",
      pinSpacing: false,
    });
  });
});

// holds the user testimonials
const reviews = ref([
  {
    img: "https://images.generated.photos/AbnJeADipVEc32X4wfumMUnS_ft4NEH4oTHhANCTygw/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Mjg5NjE5LmpwZw.jpg",
    content:
      "Absolute Helps provided us with a fantastic nanny who fit right into our family. The entire process was seamless, and we appreciate how they really listened to our needs.",
    author: "Maria K.",
  },
  {
    img: "https://images.generated.photos/6Rvff04erBdpLhPXyV-GZE500SIzKI-YCBtlLykuZog/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzYxODI0LmpwZw.jpg",
    content:
      "We were struggling to find a reliable housekeeper until we came across Absolute Helps. Their vetting process gave us peace of mind, and the service has been impeccable.",
    author: "James O.",
  },
  {
    img: "https://images.generated.photos/_6k0_gRXM89EclypTE03kJzSlNvtssinYSczO3R0wxA/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/MTYwNzI1LmpwZw.jpg",
    content:
      "The professionalism at Absolute Helps is unmatched. From the moment we reached out, the team was responsive and understanding of our specific needs for corporate cleaning services.",
    author: "Grace N.",
  },
  {
    img: "https://images.generated.photos/ihTqasG-Z79-kF2ZK0yjklP-vO6Etrm2aTwhDwKFviQ/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NDgwMTI4LmpwZw.jpg",
    content:
      "The quality of staff we've received from Absolute Helps has been outstanding. We've hired both temporary and permanent housekeepers, and each has been skilled and reliable.",
    author: "David M.",
  },
  {
    img: "https://images.generated.photos/nKTQmgagstcNwz4qKsGqaYiWTJtC1dIzKtgXZgjq_ks/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzE1NTkxLmpwZw.jpg",
    content:
      "I couldn't be happier with the nanny we found through Absolute Helps. She is experienced, trustworthy, and has been an incredible addition to our home.",
    author: "Ann W.",
  },
  {
    img: "https://images.generated.photos/ZQMTQ_PRwXxOJ-hCHlLBJnCbjAKvUPdHk5EqvnVVyII/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NjQzMDQ4LmpwZw.jpg",
    content:
      "Absolute Helps is our go-to for staffing solutions. Their personalized service and rigorous vetting ensure we always get high-quality, reliable staff.",
    author: "Samuel T.",
  },
]);

const currentIndex = ref(0);

const currentReview = computed(() => reviews.value[currentIndex.value]);

const nextReview = () => {
  if (currentIndex.value < reviews.value.length - 1) {
    currentIndex.value += 1;
  }
};

const prevReview = () => {
  if (currentIndex.value > 0) {
    currentIndex.value -= 1;
  }
};

async function showJobs() {
  await navigateTo("jobs")
}
</script>

<style scoped lang="scss">
section {
  padding-left: var(--sectionPaddingX) !important;
  padding-right: var(--sectionPaddingX) !important;
}

// styles for the 'tiny title in each section
.section-ttl {
  font-size: 1.6rem;
  opacity: 0.8;
}

.hero-section {
  position: relative;
  height: 80vh;

  max-width: var(--sectionMaxWidth);
  margin: 0rem auto;
  color: white;
  display: flex;
  padding: 0 1rem;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("../assets/images/bgimg.jpeg");
    background-size: cover;
    border-radius: var(--sectionBorderRadius);
    background-position: center;
    z-index: -2;
  }
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(255, 165, 0, 0.1);
    background-color: rgba(0, 0, 0, 0.73);
    z-index: -1;
    border-radius: var(--sectionBorderRadius);
  }
  .hs-wrp {
    position: relative;
    z-index: 1;
    height: 100%;
    display: grid;
    place-items: center;
  }
  .hswrp-container {
  }

  .hero-ttl {
    font-size: 9rem;
    line-height: 120px;
    z-index: 1;
    font-weight: 500;
    opacity: 0.9;
    letter-spacing: 0.1rem;
    color: white;
  }

  .job-form-wrp {
    margin-top: 6rem;
    .jf-container {
      background-color: white;
      padding: 0.6rem 0.5rem;
      border-radius: 1.1rem;
      color: black;

      form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between
      }
      label,
      input {
        width: 100%;
        padding: 0.4rem 1rem;
        font-size: 1.5rem;
        display: block;
      }
      input {
        padding: 1rem;
        border: none;
        &:focus {
          outline: none;
          border: none;
        }
      }
      .job-dets {
        display: grid;
        width: 100%;
        grid-template-columns: 1fr 1fr;

        .profession-div{
          position: relative;
          input{
            cursor: pointer;
          }
          .job-filters{
            // border: 1px solid;
            position: absolute;
            top: 6.8rem;
            left: -0.4rem;
            right: 0;
            width: 100%;
            height: auto;
            max-height: 30rem;
            overflow-y: auto;
            background-color: white;
            border-radius: 1rem;
            ul li{
              display: block;
              margin: .5rem 0;
              padding: 0.5rem 0.2rem;
              border-bottom: .1px solid gainsboro;
              font-size: 1.4rem;
              opacity: .9;

              &:hover{
                background-color: gainsboro;
              }
              a{
                color: black;
              }
            }
          }

          
        }
        // div {
        //   &:nth-child(1) {
        //     border-right: 1px solid gainsboro;
        //   }

        // }
      }

      .btnwrp {
        // padding: 0 1rem;
        // width: 10rem;
        height: 100%;

        button {
          margin: 0 1rem;
          background-color: black;
          padding: 0.5rem;
          border-radius: 0.6rem;
          border: unset;
          display: grid;
          place-items: center;
          // padding: 1.5rem 2rem;
          height: 100%;
          font-size: 1.5rem;

          span{
            display: none;
          }
        }
      }
    }
  }


}

.after-hs-section {
  padding: 15rem 0.5rem;
  .after-hs {
    max-width: 1000px;
    margin: 0 auto;
    font-size: 1.5rem;
    .container-wrp {
      .f-ttl {
        font-size: 3rem;
        color: #ff6700;
      }
      width: 100%;
      .row-wrp {
        text-align: center;

        .dets {
          // padding-left: 2rem;
          display: flex;
          align-items: center;
          h2 {
            font-size: 4rem;
            opacity: 0.9;
          }
          p {
            // font-size: 2rem;
          }
          a {
            color: black;
            font-size: 1.8rem;
          }
        }
      }
    }
  }
}

.services {
  padding: 8rem 1.4rem;
  margin: 0 auto;
  max-width: var(--sectionMaxWidth);
  background-color: whitesmoke;
  margin-bottom: 8rem;
      border-radius: var(--sectionBorderRadius);

  .services-wrp {
    max-width: 1600px;
    margin: 1rem auto;
    .services-wrp-container {
      margin-bottom: 3rem;
      h2 {
        padding: 0.4rem 0;
        font-size: 3.9rem;
        color: #ff6700;
        opacity: 0.9;
        padding-bottom: 1.4rem;
      }

    }
    .grid-wrp {
      // display: grid;
      // grid-template-columns: 1fr 1fr;
      // grid-gap: 2rem;
      display: flex;
      scroll-behavior: smooth;
      overflow-x: scroll;
      /* width */
      &::-webkit-scrollbar {
        width: 20px;
        height: 5px;
      }

      /* Handle */
      &::-webkit-scrollbar-thumb {
        //   background: red;
        border-radius: 10px;
      }

      .grid-det {
        // margin-right: -15rem;
        // width: 550px;
        scroll-snap-align: center; /* Ensure smooth snapping */

        display: flex;
        margin-right: 2rem;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem;
        color: white;
        min-width: 48rem;
        height: 60rem;
        border-radius: 1.5rem;
        background-repeat: no-repeat;
        background-size: cover;

        &:nth-child(1) {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url("https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=600");
          // url("https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600");
        }
        &:nth-child(2) {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url("https://images.pexels.com/photos/298825/pexels-photo-298825.jpeg?auto=compress&cs=tinysrgb&w=600");
          // url("https://images.pexels.com/photos/1337387/pexels-photo-1337387.jpeg?auto=compress&cs=tinysrgb&w=600");
        }
        &:nth-child(3) {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url("https://images.pexels.com/photos/4252142/pexels-photo-4252142.jpeg?auto=compress&cs=tinysrgb&w=600");
          // url("https://images.pexels.com/photos/16684609/pexels-photo-16684609/free-photo-of-man-driving-a-backhoe-on-a-construction-site.jpeg?auto=compress&cs=tinysrgb&w=600");
        }
        &:nth-child(4) {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url("https://images.pexels.com/photos/839443/pexels-photo-839443.jpeg?auto=compress&cs=tinysrgb&w=600");
          // url("https://images.pexels.com/photos/3514805/pexels-photo-3514805.jpeg?auto=compress&cs=tinysrgb&w=600");
        }
        &:nth-child(5) {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.7),
              rgba(0, 0, 0, 0.7)
            ),
            url("https://images.pexels.com/photos/4239035/pexels-photo-4239035.jpeg?auto=compress&cs=tinysrgb&w=600");
        }
        p {
          font-size: 2rem;
        }
        a {
          color: white;
          font-size: 1.5rem;
          border-radius: 10rem;
          padding: 1rem 2rem;
          // width: 16rem;
          font-size: 1.6rem;
          text-align: center;
          border: 1px solid white;
          margin-right: 1rem;
          &:nth-child(1) {
            background-color: white;
            color: black;
          }
        }
      }
    }
  }
}

.lt-benefits-wrapper {
  padding: 0 0.5rem;
      max-width: var(--sectionMaxWidth);
  margin: 2rem auto;
  // margin-top: 15rem;
  .lbw-wrp {
    max-width: 1600px;
    // padding: 0 2rem;
    margin: 8rem auto;
    .lbw-container {
      display: grid;
      grid-template-columns: 60% 40%;

      .pinned {
        height: 20rem;
      }
      .lbw-wrp-header {
        // text-align: center;
        opacity: 0.8;
        font-weight: 500;
        color: #ff6700;
        font-size: 3.5rem;
      }
      .lbw-dg {
        .lbw-b {
          border: 1px solid rgba(220, 220, 220, 0.3);
          display: grid;
          margin-bottom: 8rem;
          padding: 0.8rem;

          &:nth-child(even) {
            background-color: rgba(245, 245, 245, 0.2);
          }
          .grid-ctr {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          .lbw-ttle {
            font-size: 2.3rem;
            color: #2e1302;
            font-weight: 400;
          }
          .lbw-p {
            font-size: 1.9rem;
            opacity: 0.8;
          }
        }
      }
    }
  }
}

.testimonials {
  padding: 5rem 1.4rem;
  background-color: #ffe5b422;
  max-width: var(--sectionMaxWidth);
  margin: 0 auto;
  .test-wrp {
    font-size: 1.5rem;
    padding: 2rem 1.4rem;
    .test-wrp-container {
      max-width: 85vw;
      max-width: 1500px;
      margin: 0 auto;
      width: 100%;

      h1 {
        opacity: 0.8;
        color: #ff6700;
        font-size: 3.5rem;
        padding-bottom: 3rem;
      }
      .row-wrp {
        display: grid;
        grid-template-columns: 50% 50%;
        .author {
          margin-bottom: 6rem;
          .author-name {
            font-size: 2.1rem;
          }
          .navbtns-wrp {
            margin-top: 10rem;
            display: flex;
            align-items: center;
          }
          .line {
            background-color: rgba(0, 0, 0, 0.3);
            height: 0.2rem;
            width: 10rem;
            margin: 0 1rem;
          }

          .disabled {
            background-color: rgba(112, 104, 104, 0.344);
            cursor: not-allowed;
            opacity: 0.3;
          }
          svg {
            border: 1px solid rgba(0, 0, 0, 0.3);
            height: 4rem;
            cursor: pointer;
            width: 4rem;
            border-radius: 50%;
            padding: 0.8rem;
          }
        }

        .comment {
          width: 100%;
          .comment-wrp {
            margin-top: 3rem;
            transition: all 2s ease;

            p {
              font-size: 2.4rem;
            }
          }
        }
      }
    }
  }

  img {
    height: 7rem;
    width: 7rem;
    margin: 1rem 0;
    border-radius: 50%;
  }
}

@media screen and (max-width: 1110px) {
  // .lt-benefits-wrapper .lbw-wrp .lbw-container{
  //   grid-template-columns: 1fr;
  // }
  .hero-section .hero-ttl {
    font-size: 6rem;
    line-height: 70px;
  }
}
@media screen and (max-width: 800px) {
  .hero-section {

    .hero-ttl{
      font-size: 4rem;
      line-height: 50px;

    }
    .job-form-wrp .jf-container{
      padding: 1rem;
      form{
        display: unset; 

        .job-dets{
          grid-template-columns: 1fr;

           div {
            margin: .8rem 0;
          &:nth-child(1) {
            border: unset;
            border-bottom: 1px solid gainsboro;
          }
        }
        }

        .btnwrp{
          button{
            width: 100%;
            margin: unset;
            padding: 1.2rem 0;
            border-radius: 1rem;
            display: flex;
            align-items: center;
            justify-content: center;
            span{
              display: inline-block;
              margin-left: 1rem;

            }
          }
        }
      }
    }
  }

  .after-hs-section .after-hs .container-wrp .row-wrp {
    display: flex;
    flex-direction: column;
  }

  .lt-benefits-wrapper .lbw-wrp {
    margin-top: unset;
    margin-bottom: unset;
    .lbw-container {
      grid-template-columns: 1fr;

      .pinned {
        height: auto;
        padding: 2rem 0;
      }
    }
  }
}

// show mobile menu here
@media screen and (max-width: 767px) {
  // remove line break
  .hero-section .hs-wrp .hswrp-container .hero-ttl {
    br {
      display: none;
    }
  }

  .after-hs-section .after-hs .container-wrp .row-wrp .img-wrp {
    height: 27rem;
  }

  .services .services-wrp .grid-wrp {
    .grid-det {
      min-width: 30rem;
      height: 37rem;
    }
  }
  .testimonials .test-wrp .test-wrp-container .row-wrp {
    display: flex;
    flex-direction: column-reverse;
    font-size: 1.9rem;

    .author {
      .navbtns-wrp {
        margin-top: 3rem;
      }
    }

    .comment {
      margin-bottom: 4rem;
      .comment-wrp p {
        font-size: 2rem;
      }
    }
  }
}

// @media screen and (max-width: 800px) {
//   p{
//     color: red;
//     font-size: 1.7rem !important;
//   }
  
// }
</style>
