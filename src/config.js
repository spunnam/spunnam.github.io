module.exports = {
  siteTitle: 'Punnam Samarasimha Reddy | Machine learning Engineer',
  siteDescription:
    'Samarasimha Reddy Punnam holds a Bachelor of Technology degree from the Indian Institute of Technology (BHU), Varanasi, and a Master’s degree in Engineering Data Science from the University of Houston, Houston, Texas.',
  siteKeywords:
  'Punnam Samarasimha Reddy, Reddy, Samara, Samarasimha, Punnam, Software Developer, Software Engineer, Machine Learning Engineer, Generative AI Engineer, AI Engineer, Data Scientist, Data Engineer, NLP Engineer, LLM Engineer, University of Houston, UH, Indian Institute of Technology BHU, IIT BHU, AI & ML, Deep Learning, Large Language Models, LLM, RAG, NLP, GPT, BERT, Hugging Face, TensorFlow, PyTorch, AWS, Azure, LangChain, Vector Databases, OpenAI, Prompt Engineering, Kubernetes, Docker, MLOps, DevOps, Spring Boot, Java, Python, C++, SQL, MongoDB, DynamoDB, MySQL, React, NodeJS, REST APIs, FastAPI, Flask, Data Visualization, Tableau, Power BI, AI Chatbots, Fraud Detection, Anomaly Detection, Recommendation Systems, Apache Spark, Hadoop, Kafka',
  siteUrl: 'https://spunnam.github.io/',
  siteLanguage: 'en_US',
  location: 'Houston',
  email: 'psamarasimha.reddy06@gmail.com',
  github: 'https://github.com/spunnam',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/spunnam',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/spunnam',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/spunnam',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/spunnam',
    }
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Projects',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200, viewFactor = 0.25) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};