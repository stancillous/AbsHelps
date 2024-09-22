<template>
    <div class="faq-section">


<div class="faq-wrp">
          <p class="section-ttl">Got questions?</p>
      <h2>We have answers</h2>
  
  <div v-for="faq in faqs" :key="faq.answer" class="faq-container">
    <div class="question">
      <h3>{{faq.question}}</h3>
      <svg width="34px" height="34px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M6 12H18M12 6V18" stroke="#000000" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
    </div>
    <div class="answercont">
      <div class="answer">
        <p></p>
        <p>{{faq.answer}}</p>

<!-- <a href="https://blog.codepen.io/documentation/features/email-verification/#how-do-i-verify-my-email-2">How to Verify Email Docs</a> -->
      </div>
    </div>
  </div>
  
  
</div>


    </div>
</template>

<script setup>

onMounted(()=>{
    let question = document.querySelectorAll(".question");

question.forEach(question => {
  question.addEventListener("click", event => {
    const active = document.querySelector(".question.active");
    if(active && active !== question ) {
      active.classList.toggle("active");
      active.nextElementSibling.style.maxHeight = 0;
    }
    question.classList.toggle("active");
    const answer = question.nextElementSibling;
    if(question.classList.contains("active")){
      answer.style.maxHeight = answer.scrollHeight + "px";
    } else {
      answer.style.maxHeight = 0;
    }
  })
})
})


// array to hold the common FAQs
const faqs = [
  {
    question: "What types of staff does Absolute Helps provide?",
    answer:
      "We provide housekeepers, nannies, and corporate staff for various roles, including temporary, permanent, live-in, and live-out placements.",
  },
  {
    question: "How does the vetting process work?",
    answer:
      "Our vetting process includes background checks, reference verification, identity checks, and in-person interviews to ensure every candidate is reliable and highly qualified.",
  },
  {
    question: "Can I request temporary staff for short-term needs?",
    answer:
      "Yes, we offer flexible staffing options for both short-term and long-term engagements, tailored to your specific requirements.",
  },
  {
    question: "What if I'm not satisfied with the candidate provided?",
    answer:
      "If the candidate doesn’t meet your expectations, we will work with you to find a more suitable match at no extra cost.",
  },
  {
    question: "Do you provide training for your staff?",
    answer:
      "Yes, we invest in continuous training and development to ensure our staff are up-to-date with the latest techniques and best practices.",
  },
  {
    question: "How long does the matching process take?",
    answer:
      "The time varies based on your specific needs, but we aim to provide you with a suitable candidate within a few days after discussing your requirements.",
  },
]

</script>

<style lang="scss" scoped>


.faq-wrp{
    max-width: 1500px;
        margin: 0 auto;
    padding: 5rem 1.5rem;
}

  .section-ttl {
    font-size: 1.6rem;
    opacity: 0.8;
  }

  h2 {
    padding: 0.4rem 0;
    font-size: 3.9rem;
    color: #FF6700;
  padding-bottom: 5rem;
    opacity: 0.9;
    
}

.faq-container {
  color: black;
  border-top: 1px solid rgba(0,0,0,0.3);
  // margin: 2rem 0;
}

.question {
  font-size: 2.2rem;
  opacity: .8;
  padding: 3.5rem .1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  h3{
  font-size: 3rem;
  font-weight: 500;
  }
}

.question svg{
    transition: 0.2s ease;
}

.question.active svg {
  transform: rotate(45deg);
}

.answercont {
  max-height: 0;
  overflow: hidden;
  transition: 0.3s;
}

.answer {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 1rem 0;
    padding-right: 3rem;
  font-size: 1.7rem;
  opacity: .9;
//   line-height: 1.5rem;

  p{
    font-size: 2.4rem;
    opacity: .8;
  }
}

.question.active + .answercont {
}



@media screen and (max-width: 800px) {

  .answer{
    display: grid;
    grid-template-columns: 1fr;
}
    .question{
      padding: 2rem 0;
        h3{
          font-size: 2.5rem;

        }
    }
    .answer{
      padding: .2rem 0;
    }
    .answer p{
        font-size: 1.8rem;
    }
    
}
</style>