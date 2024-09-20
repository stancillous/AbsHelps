<template>
  <div>
    <main>

      <div @click="showMobileNav = !showMobileNav" :class="['mobile-overlay', { 'hideMobileOverlay': !showMobileNav}]"></div>


      <section class="hero-section">
        <div class="hs-wrp">
          <div class="hswrp-container">
            <h1 class="hero-ttl">
              Tailored staffing services <br>
              with guaranteed quality
            </h1>
            <!-- <h1 class="hero-ttl">
              Tailored
              <span>staffing services with</span>
              <span>guaranteed quality</span>
            </h1> -->
          </div>
        </div>
      </section>


      <section class="after-hs-section">
        <div class="after-hs">
          <div class="container">
            <div class="row">
              <div class="col-md-6 img-wrp">
                <img
                  width="100%"
                  src="../assets/images/tools.jpeg"
                  alt="picture of a person working"
                />
              </div>
              <div class="col-md-6 dets">
                <div>
                  <h2 class="mb-4">Let us turn your vision into reality</h2>
                  <p>
                    At Absolute Helps, we provide trusted, professional domestic
                    and corporate staffing solutions tailored to your unique
                    needs. Whether you require a housekeeper, nanny, or
                    specialized staff, our rigorous vetting process ensures that
                    you receive only the most qualified and reliable candidates.
                  </p>
                  <div class="link mt-5">
                    <a class="text-decoration-underline" href="">Learn more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="lt-benefits-wrapper">
        <div class="lbw-wrp">
          <div class="lbw-container">
            <h1 class="section-ttl text-center">Key advantages</h1>
            <h2 class="lbw-wrp-header text-center mb-5">
              Choose Quality <br />
              with Absolute Helps
            </h2>
            <div class="lbw-dg container">
              <div class="row">
                <div class="col-lg-4 lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Cost-effective & Flexible Solutions</p>
                    <p class="lbw-p">
                      Absolute Helps manages to strike this balance by offering
                      competitive pricing without compromising service
                      standards.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Client-Cetric Approach</p>
                    <p class="lbw-p">
                      Tailored solutions are a hallmark of our service,
                      recognizing that every housekeeping or childcare job has
                      its own set of demands.
                    </p>
                  </div>
                </div>

                <div class="col-lg-4 lbw-b">
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
                <div class="col-md-4 lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Training and Quality Assurance</p>
                    <p class="lbw-p">
                      We, in collaboration with relevant coaching and training
                      programs, place a significant emphasis on continuous
                      training and development.
                    </p>
                  </div>
                </div>
                <div class="col-md-4 lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Extensive Range of Services</p>
                    <p class="lbw-p">
                      The array of services provided by Absolute Helps is
                      extensive, catering to a variety of clients and settings.
                    </p>
                  </div>
                </div>
                <div class="col-md-4 lbw-b">
                  <div class="grid-ctr">
                    <p class="lbw-ttle">Training and Quality Assurance</p>
                    <p class="lbw-p">
                      We, in collaboration with relevant coaching and training
                      programs place a significant emphasis on continuous
                      training and development.
                    </p>
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
              <a class="text-decoration-underline" href="">Learn more</a>
            </div>
            <div class="grid-det">
              <p>Childcare services</p>
              <a class="text-decoration-underline" href="">Learn more</a>
            </div>
            <div class="grid-det">
              <p>Temporary & permanent staff</p>
              <a class="text-decoration-underline" href="">Learn more</a>
            </div>
            <div class="grid-det">
              <p>Corporate staffing solutions</p>
              <a class="text-decoration-underline" href="">Learn more</a>
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
        <Faqs/>
      </section>


    </main>
  </div>
</template>

<script setup lang="ts">

// variable to tell if to show the mobile nav
const showMobileNav = ref(false)


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


</script>

<style scoped lang="scss">


section{
  padding-left: 1.4rem;
  padding-right: 1.4rem;
}

// styles for the 'tiny title in each section
.section-ttl {
  font-size: 1.2rem;
  opacity: 0.8;
}

// to be shown on mobile when user clicks on menu btn
.mobile-overlay{
  position: fixed;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 3;
  height: 100vh;
  width: 100vw;
}

// class to hide mobile overlay
.hideMobileOverlay{
    display: none;

}


.hero-section {
  position: relative;
  height: 90vh;
  height: 70vh;
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
      color: #fad6a5;
      color: white;
  }

  p {
    font-size: 1.6rem;
    opacity: 0.9;
    padding: 1rem 0;
    max-width: 700px;
    font-weight: 500;
    line-height: 170%;
    fonbuttont-size: 1.8rem;
  }

  .btns {
    border: 1px solid;

    a {
      color: black;
      font-size: 1.4rem;
    }
    .get-started {
      background-color: greenyellow;
      padding: 1rem 2rem;
      font-weight: 700;
      margin-right: 2rem;
    }

    .learn-more {
      color: white;
      font-weight: 700;
    }
  }
}

.after-hs-section {
  // background-color: whitesmoke;
  padding: 10rem 0.5rem;
  // background-color: #fcfbe5;
  .after-hs {
    // max-width: 1500px;
    max-width: 85vw;
    margin: 0 auto;
    font-size: 1.5rem;
    .container {
      .row {
        .img-wrp {
          margin-bottom: 5rem;
        }
        .dets {
          padding-left: 2rem;
          display: flex;
          align-items: center;

          p{
            // font-size: 1.5rem;
          }
          a {
            color: black;
            font-size: 1.7rem;
          }
        }
      }
    }
  }
}

.services {
  padding: 8rem 1.4rem;
  .services-wrp {
    // max-width: 1500px;
    max-width: 85vw;
    max-width: 1500px;
    margin: 0 auto;
    .services-wrp-container {
      h2 {
        padding: 0.4rem 0;
        font-size: 3.9rem;
  color: #FF6700;

        opacity: 0.9;
        padding-bottom: 1.4rem;
      }
    }
    .grid-wrp {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 2rem;
      .grid-det {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 1.5rem;
        color: white;
        // margin: 0 1rem;
        background-image: linear-gradient(
            rgba(0, 0, 0, 0.6),
            rgba(0, 0, 0, 0.6)
          ),
          url("https://images.pexels.com/photos/7513064/pexels-photo-7513064.jpeg?auto=compress&cs=tinysrgb&w=600");
        height: 40rem;
        background-repeat: no-repeat;
        background-size: cover;

        &:nth-child(1) {
          background-image:linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ), url("https://images.pexels.com/photos/4108715/pexels-photo-4108715.jpeg?auto=compress&cs=tinysrgb&w=600");
        }
        &:nth-child(2){
          background-image:linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ), url("https://images.pexels.com/photos/1337387/pexels-photo-1337387.jpeg?auto=compress&cs=tinysrgb&w=600");
        }
        &:nth-child(4){
          background-image:linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ), url("https://images.pexels.com/photos/3514805/pexels-photo-3514805.jpeg?auto=compress&cs=tinysrgb&w=600");
        }
        &:nth-child(3){
          background-image:linear-gradient(
            rgba(0, 0, 0, 0.7),
            rgba(0, 0, 0, 0.7)
          ), url("https://images.pexels.com/photos/16684609/pexels-photo-16684609/free-photo-of-man-driving-a-backhoe-on-a-construction-site.jpeg?auto=compress&cs=tinysrgb&w=600");
        }
        p {
          font-size: 2rem;
        }
        a {
          text-decoration: underline;
          color: white;
          font-size: 1.5rem;
        }
      }
    }
  }
}

.lt-benefits-wrapper {
  background-color: #ffe5b432;
  background-color: #ffe5b409;
  background-color: #ffe5b410;
    background-color: #ffe5b422;

  padding: 5rem 0.5rem;
  .lbw-wrp {
    max-width: 1500px;
    padding: 0 2rem;
    margin: 8rem auto;
    margin-top: 16rem;
    .lbw-container {
      .lbw-wrp-header {
        text-align: center;
        opacity: 0.8;
        font-weight: 500;
                color: #FF6700;

        font-size: 3.5rem;
      }
      .lbw-dg {
        .lbw-b {
          padding: 3rem 1rem;
          height: 30rem;
          border: 1px solid rgba(220, 220, 220, 0.3);
          // margin: 2rem 1rem ;
          // max-width: 35rem;
          // width: ;
          display: grid;
          place-items: center;
          text-align: center;

          .grid-ctr {
            display: flex;
            flex-direction: column;
            height: 100%;
          }
          .lbw-ttle {
            font-size: 2rem;
                    color: #FF6700;
                    color: #2e1302;
            opacity: .8;
            font-weight: 400;
            margin-bottom: 3rem;
          }

          .lbw-p {
            // font-size: 1.4rem;
            opacity: .8;
          }
        }
      }
    }
  }
}

.testimonials {
  padding: 5rem 1.4rem;
    background-color: #ffe5b422;
    
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
        color: #FF6700;
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

            p{
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


@media screen and (max-width: 1100px) {
  .hero-section .hero-ttl {
    font-size: 6rem;
    line-height: 70px;
  }
}
@media screen and (max-width: 800px) {
  .hero-section .hero-ttl {
    font-size: 4rem;
    line-height: 50px;
  }
  
}


// show mobile menu here
@media screen and (max-width: 767px) {


  // remove line break
  .hero-section .hs-wrp .hswrp-container .hero-ttl{
    br{
      display: none;
    }
  }

  .services .services-wrp .grid-wrp {
    display: flex;
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
      min-width: 80vw;
      
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
      .comment-wrp p{
        font-size: 1.7rem;
      }
    }
  }
}
</style>
