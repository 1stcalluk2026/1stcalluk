export const HOME_FAQS = [
  {
    question: "What UK immigration services do you offer in Nottingham?",
    answer:
      "We provide comprehensive specialist advice on all aspects of UK immigration law. This includes Spouse and Family visas, Skilled Worker and Business visas, Student visas, Indefinite Leave to Remain (ILR), and British Citizenship applications.",
  },
  {
    question: "How do I know if my UK visa application will be successful?",
    answer:
      "While no one can guarantee a result from the Home Office, our 18 years of experience allow us to provide a highly accurate assessment of your chances. We perform a rigorous review of your documents to ensure you meet all requirements before submission.",
  },
  {
    question: "Are your immigration advisors regulated?",
    answer:
      "Yes. 1st Call UK Immigration Services is fully authorised and regulated by the Immigration Advice Authority (IAA), Ref No: F200800049. We adhere to strict professional standards for your peace of mind.",
  },
  {
    question: "Do you offer consultations for complex immigration appeals?",
    answer:
      "Absolutely. We have a strong track record in handling challenging appeals and refusals. We review your refusal letter and provide a clear strategy on the best grounds for appeal or a fresh application.",
  },
  {
    question: "How long does the immigration process usually take?",
    answer:
      "Processing times vary. Generally, standard applications take 3 to 12 weeks. We always provide you with the most current estimated timelines based on the latest Home Office data and priority service availability.",
  },
] as const;

export function homeFaqPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: HOME_FAQS.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };
}
