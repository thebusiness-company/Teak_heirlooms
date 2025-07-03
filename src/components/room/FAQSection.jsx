
const FAQSection = () => {
  const faqs = [
    {
      question: "What does “bespoke furniture” really mean?",
      answer:
        "It means your furniture is made just for you. From the dimensions and design to the materials and finish, every element is tailored to fit your space, lifestyle, and taste. Nothing off the shelf. Nothing ordinary.",
    },
    {
      question: "Can I see and touch material samples before I place an order?",
      answer:
        "Yes, and we encourage it. During your consultation, you’ll explore a curated range of finishes, fabrics, and textures—so you’re confident in every decision.",
    },
    {
      question: "Do you work with architects or interior designers?",
      answer:
        "Absolutely. Whether you bring us blueprints or just a Pinterest board, we work hand-in-hand with design professionals to bring your vision to life.",
    },
    {
      question: "Why choose teak over other types of wood?",
      answer:
        "Teak is nature’s gift to furniture makers—resilient, beautiful, and timeless. It resists wear, weather, and time, making it a smart choice for lasting luxury.",
    },
    {
      question: "Do you deliver across India?",
      answer:
        "Yes. Our white-glove delivery service ensures your furniture arrives safe, assembled, and ready to impress—anywhere in India.",
    },
    {
      question: "How long will it take to receive my custom furniture?",
      answer:
        "Most pieces take 6 to 10 weeks from final approval to delivery. Good things—and great furniture—take time.",
    },
    {
      question: "Can I modify a design I see on your website or catalogue?",
      answer:
        "Of course. Think of our catalogue as inspiration, not limitation. We welcome tweaks and changes to make each piece truly yours.",
    },
    {
      question: "Is there a charge for the first consultation?",
      answer:
        "No, the first one's on us. We want you to dream freely before deciding anything.",
    },
    {
      question: "What kind of maintenance does teak furniture require?",
      answer:
        "Teak is famously low maintenance. A little dusting and occasional polish keeps it glowing. We also offer a care guide with each piece.",
    },
  ];

  return (
    <section className="max-w-8xl mx-auto px-8 py-2">
      <h2 className="text-xl font-semibold mb-6">FAQ</h2>
      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx}>
            <h3 className="font-medium text-base mb-1">{faq.question}</h3>
            <p className="text-sm text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
