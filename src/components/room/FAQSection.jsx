
const FAQSection = () => {
  const faqs = [
    {
      question: "What are the essential pieces of furniture I need in a bedroom?",
      answer:
        "Essential bedroom furniture includes a bed, wardrobe, bedside table, nightstands, dressers or chests for storage, and seating like a chair or bench for comfort and functionality.",
    },
    {
      question: "How do I choose the right bed for my bedroom?",
      answer:
        "Choose a bed based on size (twin, full, queen, king), comfort level (firmness), and style (platform, sleigh, canopy) that complements your bedroom’s size and décor.",
    },
    {
      question: "How can I optimize storage in a small bedroom?",
      answer:
        "Optimize storage in a small bedroom by using multifunctional furniture such as beds with drawers. Utilizing vertical space with shelves or tall dressers also helps.",
    },
    {
      question: "What should I consider when choosing bedroom furniture materials?",
      answer:
        "Consider bedroom furniture materials based on durability, ease of maintenance, and aesthetic appeal that fit your lifestyle and design preferences.",
    },
    {
      question: "How do I create a cohesive bedroom design with different furniture styles?",
      answer:
        "Create a cohesive bedroom design by choosing furniture with complementary colors, textures, and styles while maintaining a consistent color palette and balancing visual weights.",
    },
    {
      question: "Can I customize the color or finish of bedroom furniture to match my decor?",
      answer:
        "Yes, you can customize bedroom furniture colors or finishes by exploring options like custom orders, painting or staining existing pieces, or choosing retailers that offer a variety of finishes to match your décor scheme.",
    },
    {
      question: "What are some tips for arranging furniture in a bedroom?",
      answer:
        "Arrange furniture in a bedroom by first considering the bed placement, maximizing natural light and traffic flow, balancing symmetry with functionality, and leaving enough space for easy movement.",
    },
    {
      question: "How should I care for and maintain my bedroom furniture?",
      answer:
        "Care for bedroom furniture by dusting regularly with a soft cloth, using coasters and mats to prevent damage, tightening hardware periodically, and addressing spills or stains promptly with appropriate cleaners to maintain its beauty and longevity.",
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
