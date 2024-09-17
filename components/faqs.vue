<template>
  <section class="faq-section">
    <div class="faq-wrp">
      <p class="section-ttl">Got questions?</p>
      <h2>Get answers</h2>
      <div v-for="(faq, index) in faqs" :key="index" class="faq-item"  @click="toggleFAQ(index)">
        <div class="faq-question">
          <span>{{ faq.question }}</span>
          <span class="icon">{{ activeFAQ === index ? "-" : "+" }}</span>
        </div>
        <transition name="fade">
          <div class="faq-answer-wrp">
              <p></p>
              <p v-if="activeFAQ === index" class="faq-answer">{{ faq.answer }}</p>
          </div>
        </transition>
      </div>

    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      activeFAQ: null,
      faqs: [
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
      ],
    };
  },
  methods: {
    toggleFAQ(index) {
      this.activeFAQ = this.activeFAQ === index ? null : index;
    },
  },
};
</script>

<style lang="scss">
.faq-section {
  .faq-wrp{
    max-width: 1500px;
    margin: 0 auto;
    padding: 5rem 1.4rem;

  }

  .section-ttl {
    font-size: 1.2rem;
    opacity: 0.8;
  }

  h2 {
    padding: 0.4rem 0;
    font-size: 3.9rem;
    color: #FF6700;
    opacity: 0.9;
    padding-bottom: 1.4rem;
    
  }

  .faq-answer{
    font-size: 1.7rem;
    padding: 1rem;
  }
}

.faq-item {
  margin-bottom: 1.5rem;
  border-bottom: 1px solid #e0e0e0;
  cursor: pointer;
  padding: 2rem 0;
}

.faq-answer-wrp{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

.faq-question {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 500;
  font-size: 2.2rem;
  opacity: .8;
}

.icon {
//   font-size: 24px;
  transition: all 0.3s ease;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}


@media screen and (max-width: 800px) {

  .faq-answer-wrp{
    display: grid;
    grid-template-columns: 1fr;
}
    .faq-question{
        font-size: 2rem;
    }
    .faq-section .faq-answer{
        font-size: 1.5rem;
        padding: 1rem 0;
    }
    
}

</style>
