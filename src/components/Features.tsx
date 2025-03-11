
import React from 'react';

const features = [
  {
    title: "Intelligent Task Management",
    description: "Manus learns your preferences and adapts to your workflow, prioritizing tasks intelligently.",
    delay: "0.1s"
  },
  {
    title: "Seamless Integration",
    description: "Connect with your favorite tools and services without friction or complicated setup.",
    delay: "0.2s"
  },
  {
    title: "Natural Communication",
    description: "Interact with Manus just like you would with a human assistant, using natural language.",
    delay: "0.3s"
  },
  {
    title: "Privacy-First Design",
    description: "Your data stays private and secure, with local processing for sensitive information.",
    delay: "0.4s"
  }
];

const Features: React.FC = () => {
  return (
    <section className="relative py-24 px-6 md:px-10 bg-gray-50" id="product">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Designed for efficiency
          </h2>
          <p className="text-lg text-gray-600 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Manus combines powerful AI with thoughtful design to create an assistant that truly understands your needs.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-all duration-300 animate-fade-in"
              style={{ animationDelay: feature.delay }}
            >
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
