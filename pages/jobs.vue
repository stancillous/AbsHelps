<template>
  <div class="jobs-container">

    <div class="ttls">

</div>


<div class="jobs-container-wrp">
  
  <div class="jobs-list">
    <div
      v-for="(job, index) in jobs"
      :key="job.reference"
      class="job-item"
      :class="{
        selected: selectedJob && selectedJob.reference === job.reference,
      }"
      @click="selectJob(index)"
    >
      <h3 class="job-ttl">{{ job.title }}</h3>

      <div class="addn-dets">
        <!-- <p class="salary-wrp">Salary: {{ job.salary }}</p> -->
        <div class="d-flex align-items-center p-2 px-3 mb-3">
          <svg
            width="18px"
            height="24px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M12 21C15.5 17.4 19 14.1764 19 10.2C19 6.22355 15.866 3 12 3C8.13401 3 5 6.22355 5 10.2C5 14.1764 8.5 17.4 12 21Z"
                stroke="#000000"
                stroke-width="0.9359999999999999"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M12 12C13.1046 12 14 11.1046 14 10C14 8.89543 13.1046 8 12 8C10.8954 8 10 8.89543 10 10C10 11.1046 10.8954 12 12 12Z"
                stroke="#000000"
                stroke-width="0.9359999999999999"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </g>
          </svg>
          <span class="ps-2">{{ job.location }}</span>
        </div>
      </div>
      <div class="job-descr-wrp">
        <p class="job-descr">{{ truncateDescription(job.description) }}</p>
        <!-- Truncated description -->
      </div>

      <div class="tags-wrp">
        <p class="text-capitalize">Tags: {{ job.tags.join(", ") }}</p>
      </div>
      <NuxtLink class="see-more-wrp">See more</NuxtLink>
    </div>
  </div>

  <div class="job-details-wrp" v-if="selectedJob">
    <div class="job-details">
      <div class="d-flex align-items-center justify-content-between">
        <h2 class="job-ttl">{{ selectedJob.title }}</h2>
        <div class="applnc-btn">
          <button class="text-capitalize">Easy apply</button>
        </div>

      </div>
      <div class="job-dets-addn my-5">
        <p> <span>Location</span>{{ selectedJob.location }}</p>
        <p><span>Salary</span> {{ selectedJob.salary }}</p>
        <p><span>Reference</span> {{ selectedJob.reference }}</p>
        <p> <span>Tags</span>{{ selectedJob.tags.join(", ") }}</p>
      </div>
      <div class="job-descr">
        <p>{{ selectedJob.description }}</p>
      </div>
      <div class="my-4">
        <h3 class="py-2">Position Benefits:</h3>
        <ul>
          <li v-for="(benefit, index) in selectedJob.benefits" :key="index">
            {{ benefit }}
          </li>
        </ul>

      </div>
      <p>Profile sought: {{ selectedJob.profile }}</p>
    </div>
  </div>

  <template v-if="showOverlay">
    <div class="job-info-overlay" v-if="selectedJob">
      <div class="overlay-content job-details">
        <div>
          <p @click="closeOverlay" class="close-button d-flex align-items-center">
            <svg class="nav-btn" fill="#000000" height="20px" width="20px" version="1.1" id="XMLID_54_" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" xml:space="preserve" stroke="#000000" stroke-width="0.00024000000000000003" data-v-inspector="pages/index.vue:266:23" data-v-02281a80=""><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-inspector="pages/index.vue:282:25" data-v-02281a80=""></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-inspector="pages/index.vue:283:25" data-v-02281a80=""></g><g id="SVGRepo_iconCarrier" data-v-inspector="pages/index.vue:288:25" data-v-02281a80=""><g id="previous" data-v-inspector="pages/index.vue:289:27" data-v-02281a80=""><g data-v-inspector="pages/index.vue:290:29" data-v-02281a80=""><polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 " data-v-inspector="pages/index.vue:291:31" data-v-02281a80=""></polygon></g></g></g></svg>
            <span class="ms-1">
              Click to go back

            </span>
          </p>
          <div class="d-flex align-items-center justify-content-between">
            <h2 style="font-size: 2.5rem" class="job-ttl">{{ selectedJob.title }}</h2>
            <div class="applnc-btn">
              <button style="font-size: 1.4rem;" class="text-capitalize">Easy apply</button>
            </div>
    
          </div>
          <div class="job-dets-addn my-5">
            <p> <span>Location</span>{{ selectedJob.location }}</p>
            <p><span>Salary</span> {{ selectedJob.salary }}</p>
            <p><span>Reference</span> {{ selectedJob.reference }}</p>
            <p> <span>Tags</span>{{ selectedJob.tags.join(", ") }}</p>
          </div>
          <div class="job-descr">
            <p>{{ selectedJob.description }}</p>
          </div>
          <div class="my-4">
            <h3 class="py-2">Position Benefits:</h3>
            <ul>
              <li v-for="(benefit, index) in selectedJob.benefits" :key="index"  style="font-size: 1.6rem ;">
                {{ benefit }}
              </li>
            </ul>
    
          </div>
          <p>Profile sought: {{ selectedJob.profile }}</p>

          </div>
      </div>
    </div>

  </template>


</div>

  </div>
</template>

<script setup>
import { ref } from "vue";

// Sample jobs data
const jobs = ref([
  {
    title: "Housekeeper ",
    salary: "Ksh 25,000",
    reference: "3433",
    location: "Nairobi",

    tags: ["housekeeper", "domestic work"],
    description:
      "We are seeking a dedicated and professional housekeeper to join our team. The ideal candidate will have experience in residential cleaning and a keen eye for detail. Responsibilities include cleaning and organizing living spaces, laundry, and assisting with meal preparations. You will be expected to maintain high standards of cleanliness and ensure that the household runs smoothly. This role requires strong communication skills, reliability, and the ability to work independently. We offer flexible hours, a supportive work environment, and competitive pay. If you take pride in your work and enjoy helping others, we would love to hear from you!",
    benefits: [
      "Full-time position",
      "Salary plus overtime",
      "Friendly work environment",
    ],
    profile: "Experience in housekeeping and a valid work permit.",
  },
  {
    title: "Needed office Assistant",
    salary: "Ksh 30,000",
    reference: "34223",
    location: "Mombasa",

    tags: ["office assistant", "administration"],
    description:
      "An established company in Mombasa is looking for an office assistant to support daily operations, manage documents, and assist with client inquiries.",
    benefits: [
      "Full-time position",
      "Health insurance",
      "Opportunities for advancement",
    ],
    profile: "Strong organizational skills and proficiency in MS Office.",
  },
  {
    title: "Office Assistant",
    salary: "Ksh 30,000",
    reference: "3434",
    location: "Mombasa",

    tags: ["office assistant", "administration"],
    description:
      "An established company in Mombasa is looking for an office assistant to support daily operations, manage documents, and assist with client inquiries.",
    benefits: [
      "Full-time position",
      "Health insurance",
      "Opportunities for advancement",
    ],
    profile: "Strong organizational skills and proficiency in MS Office.",
  },
  {
    title: "Chef - Kisumu",
    salary: "Ksh 35,000",
    location: "Kisumu",

    reference: "3435",
    tags: ["chef", "cooking"],
    description:
      "We are looking for an experienced chef who can lead our kitchen and create a menu that will delight our customers. The ideal candidate will have experience in various cuisines, with a special emphasis on Mediterranean and Asian dishes. You will be responsible for overseeing the preparation and presentation of all food items, ensuring consistency and quality. In addition to cooking, you will be managing kitchen staff, ordering supplies, and maintaining kitchen safety and hygiene standards. This position requires a passion for food, creativity, and the ability to work under pressure. As part of our team, you will have the opportunity to experiment with new recipes, create seasonal menus, and contribute to the overall dining experience. We offer a competitive salary, benefits, and opportunities for professional growth. Join us in crafting memorable meals that bring people together!",
    benefits: [
      "Flexible working hours",
      "Meal allowances",
      "Performance bonuses",
    ],
    profile: "Culinary school graduate with at least 3 years of experience.",
  },
  {
    title: "Needed office Assistant",
    salary: "Ksh 30,000",
    reference: "342232",
    location: "Mombasa",

    tags: ["office assistant", "administration"],
    description:
      "An established company in Mombasa is looking for an office assistant to support daily operations, manage documents, and assist with client inquiries.",
    benefits: [
      "Full-time position",
      "Health insurance",
      "Opportunities for advancement",
    ],
    profile: "Strong organizational skills and proficiency in MS Office.",
  },
  {
    title: "Office Assistant",
    salary: "Ksh 30,000",
    reference: "343423",
    location: "Mombasa",

    tags: ["office assistant", "administration"],
    description:
      "An established company in Mombasa is looking for an office assistant to support daily operations, manage documents, and assist with client inquiries.",
    benefits: [
      "Full-time position",
      "Health insurance",
      "Opportunities for advancement",
    ],
    profile: "Strong organizational skills and proficiency in MS Office.",
  },
  {
    title: "Chef - Kisumu",
    salary: "Ksh 35,000",
    location: "Kisumu",

    reference: "333435",
    tags: ["chef", "cooking"],
    description:
      "We are looking for an experienced chef who can lead our kitchen and create a menu that will delight our customers. The ideal candidate will have experience in various cuisines, with a special emphasis on Mediterranean and Asian dishes. You will be responsible for overseeing the preparation and presentation of all food items, ensuring consistency and quality. In addition to cooking, you will be managing kitchen staff, ordering supplies, and maintaining kitchen safety and hygiene standards. This position requires a passion for food, creativity, and the ability to work under pressure. As part of our team, you will have the opportunity to experiment with new recipes, create seasonal menus, and contribute to the overall dining experience. We offer a competitive salary, benefits, and opportunities for professional growth. Join us in crafting memorable meals that bring people together!",
    benefits: [
      "Flexible working hours",
      "Meal allowances",
      "Performance bonuses",
    ],
    profile: "Culinary school graduate with at least 3 years of experience.",
  },
    {
    title: "Office Assistant",
    salary: "Ksh 30,000",
    reference: "3434",
    location: "Mombasa",

    tags: ["office assistant", "administration"],
    description:
      "An established company in Mombasa is looking for an office assistant to support daily operations, manage documents, and assist with client inquiries.",
    benefits: [
      "Full-time position",
      "Health insurance",
      "Opportunities for advancement",
    ],
    profile: "Strong organizational skills and proficiency in MS Office.",
  },
    {
    title: "Needed office Assistant",
    salary: "Ksh 30,000",
    reference: "34223",
    location: "Mombasa",

    tags: ["office assistant", "administration"],
    description:
      "An established company in Mombasa is looking for an office assistant to support daily operations, manage documents, and assist with client inquiries.",
    benefits: [
      "Full-time position",
      "Health insurance",
      "Opportunities for advancement",
    ],
    profile: "Strong organizational skills and proficiency in MS Office.",
  },
  {
    title: "Office Assistant",
    salary: "Ksh 30,000",
    reference: "3434",
    location: "Mombasa",

    tags: ["office assistant", "administration"],
    description:
      "An established company in Mombasa is looking for an office assistant to support daily operations, manage documents, and assist with client inquiries.",
    benefits: [
      "Full-time position",
      "Health insurance",
      "Opportunities for advancement",
    ],
    profile: "Strong organizational skills and proficiency in MS Office.",
  },
  {
    title: "Chef - Kisumu",
    salary: "Ksh 35,000",
    location: "Kisumu",

    reference: "3435",
    tags: ["chef", "cooking"],
    description:
      "We are looking for an experienced chef who can lead our kitchen and create a menu that will delight our customers. The ideal candidate will have experience in various cuisines, with a special emphasis on Mediterranean and Asian dishes. You will be responsible for overseeing the preparation and presentation of all food items, ensuring consistency and quality. In addition to cooking, you will be managing kitchen staff, ordering supplies, and maintaining kitchen safety and hygiene standards. This position requires a passion for food, creativity, and the ability to work under pressure. As part of our team, you will have the opportunity to experiment with new recipes, create seasonal menus, and contribute to the overall dining experience. We offer a competitive salary, benefits, and opportunities for professional growth. Join us in crafting memorable meals that bring people together!",
    benefits: [
      "Flexible working hours",
      "Meal allowances",
      "Performance bonuses",
    ],
    profile: "Culinary school graduate with at least 3 years of experience.",
  },
]);

const showOverlay = ref(false);
const isMobileView = ref(false);
const selectedJob = ref(jobs.value[0]); // Automatically select the first job

const selectJob = (index) => {
  selectedJob.value = jobs.value[index];

    if (isMobileView.value) {
    showOverlay.value = true;
  }
};

const closeOverlay = () => {
  showOverlay.value = false;
};

// Detect screen size changes
const handleResize = () => {
  isMobileView.value = window.innerWidth <= 1000; // Define mobile view width
};

onMounted(() => {
  handleResize();
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});


const truncateDescription = (description) => {
  const words = description.split(" ");
  return words.length > 20 ? words.slice(0, 20).join(" ") + "..." : description;
};
</script>

<style scoped lang="scss">

.jobs-container {
  // max-width: 1600px;
  max-width: var(--sectionMaxWidth);
  margin: 1rem auto;


  .ttls{
    padding: 2rem 0;
    margin: 1rem 0;

     h2 {
        padding: 0.4rem 0;
        font-size: 3.9rem;
        color: #ff6700;
        opacity: 0.9;
        padding-bottom: 1.4rem;
      }
  }
  
}

.jobs-container-wrp{
  
  height: 1400px;
  overflow: hidden;
    display: grid;
    grid-template-columns: 40% 60%;

}

/* the job clicked on by user */
.selected {
  background-color: #f8f2ee !important; /* Light green background for selected item */
}

.jobs-list {
  // border-right: 1px solid #ccc;
  overflow-y: unset;
  overflow-y: scroll; /* Allow scrolling if the list is too long */

  /* width */
&::-webkit-scrollbar {
  width: 10px;
  height: 40px;
}

 
/* Handle */
&::-webkit-scrollbar-thumb {
        background-color: #f4e0d3;
  border-radius: 1rem;
}
  .job-item {
    // border: 1px solid gainsboro;
    background-color: rgba(255, 250, 250, 0.927);
    cursor: pointer;
    transition: background-color 0.2s;
    padding: 3rem 2rem;
    margin-bottom: 3rem;
    border-radius: 1rem;

    .job-ttl {
      font-size: 2.5rem;
      padding: 1rem 0;
    }

    .addn-dets {
      display: flex;
      grid-gap: 2rem;
      align-items: center;

      div {
        background-color: #f2ccb3;
        border-radius: 0.1rem;
      }
      span,
      p {
        font-size: 1.5rem !important;
      }
    }

    .job-descr-wrp p {
      opacity: 0.8;
    }

    .tags-wrp {
      p {
        font-size: 1.7rem;
      }
    }
    .see-more-wrp {
      text-decoration: underline !important;
      color: rgb(177, 115, 0);
      font-size: 1.8rem;
    }
  }
}

.job-details-wrp, .job-info-overlay {
  padding: 2rem;
  border: .1px solid gainsboro;
  border-radius: 1rem;

  button{
    all: unset;
    background-color: #f2ccb3;
    padding: 1rem 3rem;
    border-radius: .3rem;
    font-size: 1.8rem;
    cursor: pointer;
  }
  ul li {
    font-size: 2rem;
  }
  .job-details {
    .job-ttl {
      font-size: 3.5rem;
    }
    .job-dets-addn {
      opacity: .9;
      p {
        border-bottom: 1px solid gainsboro;
        padding: 1.3rem 0;
        font-size:2rem;
        display: grid;
        grid-template-columns: 40% 60%;
        span{
          opacity: .7;
        }
      }
    }
    .job-descr{
      line-height: 4.2rem;
      opacity: .9;
    }
  }
}


/* Job info overlay for mobile */
.job-info-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Occupy 90% of the screen */
  background-color: white;
  z-index: 99;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.close-button {
  font-size: 1.6rem !important;
  cursor: pointer;
  margin-bottom: 4rem;
}


// hide the div on the right side showing job info
@media screen and (max-width: 1000px) {


  .jobs-container-wrp {
    grid-template-columns: 1fr;
    .job-details-wrp{
     display: none;
 
   }
  }
  
}
</style>
