
import Head from "next/head";

const faqs = [
  { question: "How we serve food?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "How can we get in touch with you?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "How is our food quality?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "What will be delivered? And when?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "How do we give home delivery?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
  { question: "Is this restaurant 24 hours open?", answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit..." },
];

export default function FAQPage() {
  return (
    <div className="bg-black min-h-screen text-white flex items-center justify-center">
      <Head>
        <title>FAQ Page</title>
      </Head>
      <div className="max-w-4xl w-full p-6 sm:p-8 lg:p-12 bg-white text-black rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4 text-center text-orange-500">Questions Looks Here</h1>
        <p className="text-gray-600 mb-8 text-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800 text-white p-6 rounded-lg shadow-md hover:bg-orange-400 hover:text-white transition duration-300 ease-in-out transform hover:scale-105"
            >
              <h2 className="text-xl font-semibold mb-2">{faq.question}</h2>
              <p className="text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}