'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const timelineData = [
  {
    year: 'About Zammy Zaif',
    title: 'Google Expert from India - Asia',
    level : 'h2',
    desc: 'Zammy Zaif is an best google SEO Expert from India residing in Tirunelveli, Tamilnadu who has had phenomenal success with SEO, especially placing first on Google for a competitive term like Google Ranking Expert. He achieved this world-class position in a short period of time since he is a dedicated SEO specialist and also because of his amazing hard work and smart work. When Google PageRank first appeared on the scene, Zammy Zaif began his profession in SEO around the same time. He rapidly understood that Search Engine Optimization will play a significant role in his professional future. His huge achievement came only after experiencing a lot of suffering and hardship. People used to call Zammy a Computer Genius when he was a kid. He had about 15 cousins in his house because he belonged to a joint family. When all of his cousins just learned how to play games on the computer, little Zammy performed more than that. He used to modify the computer password that his uncle had set in order to prevent the youngsters from using it. He was the naughty one in his family, changing the password every time his uncle uncovered it.',
    img: '/assets/images/about/leading-google-seo-expert.webp', // From your image_989856.jpg
    alt: 'leading google seo expert',
    side: 'right',
  },
  {
    year: 'Early Childhood',
    title: 'Zammy Zaif in his Early Childhood',
    level: 'h3',
    desc: 'He started using a computer at the age of nine and it was then that he aspired to become a computer engineer. Young Zammy reasoned that because a computer is an electronic machine, obtaining a Diploma in Electronics and Communication Engineering would help him reach his goal and he enrolled in a college for the same. Later on, he discovered that he needed to major in Information Technology or Computer Science Engineering in order to get the position he had always aspired to. But it was too late for him to change his major and he had to drop out in the third year influenced by financial difficulties. Following that, he enrolled in a three-month hardware and networking certification course. Over time, he developed into an expert in his area and he attracted consumers from all over the world. He used his hard-earned money to re-enrol in the same engineering course, which he finished successfully the following year with a different batch.',
    img: '/assets/images/aboutimage/childhood-zammy.webp', // From your image_989856.jpg
    alt: 'childhood zammy zaif',
    side: 'left',
  },
  {
    year: '2008',
    title: 'Overseas Life of Zammy',
    level: 'h2',
    desc: 'In the year 2008, Zammy, a fresher, launched Hopes Infosys to provide hardware and networking services. Later, he started blogging and learned the concepts of web design and SEO. Due to his financial difficulties and family condition, he began to work for other companies in foreign countries. At first, he relocated to Dubai for a company and began his overseas life there. Meanwhile, he learned more about search engine optimization, blogging, content writing, email marketing and internet marketing over time.Following the contract from Dubai, he returned to India and formally established his own company, Bams Technologies. With a handful of employees in Tirunelveli in January 2015, began to work for many companies and did several independent projects in different countries, including web designing, web development and SEO. In Oman, he assisted a prominent firm in ranking #1 for the term Hydraulic Spare - OMAN, which is still the case. He completed multiple projects in Myanmar and several other projects in the United States, including Customer Relationship Management (CRM) and Content Management System (CMS) software services.',
    img: '/assets/images/aboutimage/zammy-in-dubai.webp', // From your image_66c823.jpg
    alt: 'zammy zaif in dubai',
    side: 'right',
  },
  {
    year: '2010 - 2014',
    title: 'Corporate Entity ',
    level: 'h2',
    desc: "In 2016, as he was struggling due to some family issues, he once again had to set about his overseas voyage and this time he flew to Bahrain. In Bahrain, he designed a website for an advertising firm that ranked first on Google in the nation. In Qatar, he has also worked for firms such as Milano Trading and Venture Partner. While overseas, he never abandoned his own firm, Bams Technologies and worked on various projects in Germany and the United Kingdom under the name of his own organisation.Regardless of the fact that his clients and other employers thought of him as a successful and effective SEO expert, he had always desired to establish his own corporate firm.Zammy Zaif's company eventually struck gold in 2019. On May 1, Labour Day, he started Bams Technologies Private Limited in Erode and Trivandrum alongside Suresh Kumar as a co-founder.",
    img: '/assets/images/aboutimage/zammy-1.webp', // From your image_989afa.jpg
    alt: 'zammy zaif corporate entity',
    side: 'left',
  },
  {
    year: '2015 - Present',
    title: 'Dream, Struggle, Perseverance',
    level: 'h3',
    desc: 'BAMS stands for Business Administration and Management Services, respectively. He founded this company to pursue his dream project, a Next Generation Social Media App, while also doing tasks such as web designing, web development, app development, digital marketing and other IT services. He spent almost 2 million Indian rupees on his dream project and ultimately, the great Bio War arrived in his life with the name Covid-19 as Corona; the pandemic convulsed the globe and the firm was forced to cease down. Zammy is a committed person who never quits. He will stop at nothing to achieve a goal or a purpose. His long-term goal of creating a next-generation social media app is served by his short-term goal of acquiring the sufficient amount of funds required for the same. And for which, he is utilizing the SEO platform as an economic resource. No one has ever achieved success in a single go, they must have had many failed attempts before actually reaching their goals. Zammy’s case is just the same. He is a true inspiration for people who have failed in their lives',
    img: '/assets/images/aboutimage/google-ranking-expert.webp',
    alt: 'google ranking expert',
    side: 'right',
  },
  {
   
    title: 'Mind Map – A Success Prototype',
    level: 'h3',
    desc: 'Even though he is a person who has achieved many things in his life at a very young age, he considers himself as just an entrepreneur who is in the initial stage of building teams. His dream is to build a territory of his own where he has complete authority, also he has to bring his business to a supreme level in which it remains unaffected and continues to run successfully even if he makes himself unavailable for some duration of time. He believes that a successful businessman is someone who has achieved immense success also at the same time enormous wealth through many years of expertise and extreme passionate effort. He wants to become wealthy as well as a powerful person in his particular business or industry. He aims to attain more leads, revenue and reputation in the long run and he knows exactly what goes into it. In order to achieve this ultimate goal and be more successful in his terms, Zammy has created a Mind Map that helps in analysing himself to see where he stands in the journey of being a successful businessman. He has modelled this mind map as a success prototype and observes the analysis process as an Art of Attracting Money towards us.',
    img: '/assets/images/aboutimage/art-of-attracting-money.webp',
    alt: 'art of attracting money',
    side: 'left',
  },
  {
    
    title: "Zammy's Global Recognition",
    level: 'h3',
    desc: 'Since implementing this in his own life, he achieved the world level Google ranking for the keyword Google Ranking Expert and has rapidly made a brand name for himself. He has come a long way and gained many recognitions from all over the world. He is a key person in the Malaysia South India Chamber of Commerce and they designated him as the co-ordinator. He achieved a lifelong membership in a Canadian Community called Landed for Success. Zammy Zaif is the first and the only member from India who has attained this privilege.Zammy finds this mind map very beneficial and has not only applied this strategy personally but has also helped many other people from small, mid-sized to large businessmen. He pitched his unique success mantra to all the ones who were failing in their businesses and has helped many businessmen who were on the verge of closing down.',
    img: '/assets/images/aboutimage/zammy-zaif-google-ranking-expert.webp',
    alt :'zammy zaif global recognition',
    side: 'right',
  },
  {
    
    title: 'Zammy - Business Mentor',
    level: 'h3',
    desc: "He has also been a mentor to entrepreneurs who had just started a company and later found that things weren't working out the way they thought it would be. He has been a great help in empowering several businesspersons who were in business for more than 20 years and still seemed struggling. Many business tycoons who were already in a good position in their industry, hoping to take it to the next level had approached Zammy to gain valuable advice from him.When he first started hosting webinars, a minimum of 70 people would show up for each session. Following that, when he began professionally delivering sessions twice a month, exclusively for businesspeople, a minimum of 15 individuals showed up for each session.",
    img: '/assets/images/aboutimage/zammy-business-mentor.webp',
    alt: 'zammy zaif business mentor',
    side: 'left',
  },

  {
    
    title: 'A Great Public Speaker',
    level: 'h3',
    desc: 'His workshops are mainly based on topics “Money Making, Business Growth, Secret of Success and The Art of Attracting Money.” Whether if you are a person who is taking baby steps in your business or a person who is planning to take a big leap in your business, Zammy can guide you through, to reach great success. You can have a look at the testimonial videos from the benefitted businesspersons on his Instagram, go search him: googlerankingexpert. He has also been taking SEO lessons that he learned along the way. Many enthusiasts who seek opportunities and aspirants who wish to start a career in SEO have joined the course to learn from Zammyand they all call him Master in SEO.',
    img: '/assets/images/aboutimage/zammy-zaif-public-speaker.webp',
    alt : 'zammy zaif public speaker',
    side: 'right',
  },
  {
    title: "Zammy's Online Presence",
    level: 'h3',
    desc: "Zammy has always tried to impart his knowledge to people in different ways and he has always been such a great public speaker. For this, he makes use of many digital platforms to reach a large audience. He has made his online presence felt in MSN Messenger, Yahoo Messenger, Tamil Flash Chatrooms, Nimbus Chat, Mig33 Chat, Qeep Chat (he has been a qeeper for nearly 8 years), Bigo Live (he has nearly 10k followers), MICO and Hago, from its very beginning itself. He is also a Telegram Dominator with 40+ job groups each with 40,000 members, where he spends his own money to disseminate information about job openings. He has also made it into the clubhouse, where he's the administrator of two clubs: Tamil Global Business, which has 5,000 members and Tamil Business Coaching, which has 1000 members. He is also the leader of Vere Level Business (VLB) group, which has 12,500 members. He has a tremendous fan base in clubhouse, with 1.5k followers and anytime he gives a talk there, at least 500 people show up to listen to him.",
    img: '/assets/images/aboutimage/zammy-online-presence.webp',
    alt : 'zammy online presence',
    side: 'left',
  },
  {
    title: 'SEO Strategy of Zammy Zaif',
    level: 'h3',
    desc: "Without having very deep pockets and spending a lot of money, every firm can increase its sales and profits. Zammy demonstrates how to leverage SEO to enhance organic traffic, lead generation and conversion. He is the most trusted Google Ranking SEO Expert as recognised by Google itself who is capable of ranking your business on the first page first rank of Google search results. He is a devoted SEO professional with more than a decade of vast knowledge in this sector. He begins by learning about his clients’ targeted audience, potential customers, competitors and most importantly, their business culture. He then creates a customised SEO strategy that focuses on meeting his clients' needs in order to generate income for them. His unique approach puts them miles ahead of the competition, allowing them to establish trust and credibility among the public while also establishing their company as a leader in that particular field. Zammy Zaif keeps a keen eye on every little detail and tiny aspect of search engine optimization with his extensive learning expertise. He is always up to date with the latest Google ranking factors and algorithms. He will go to any extent to achieve the desired organic result. Zammy Zaif is unquestionably a man of action, as evidenced by the end outcome. So Everyone expects that in this 2022 Zammy will be the world's leading seo Expert.",
    img: '/assets/images/aboutimage/seo-strategy.webp',
    alt: 'seo strategy of zammy zaif',
    side: 'right',
  },
];

const ZammyTimeline = () => {
return (
    <section className="relative overflow-hidden bg-white px-4 py-16 md:px-6 md:py-32">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:40px_40px]" />
      <div className="pointer-events-none absolute bottom-[5%] left-[-5%] h-[300px] w-[300px] md:h-[500px] md:w-[500px] animate-pulse rounded-full bg-[#3cb878]/30 blur-[80px] md:blur-[100px]" />
      
      {/* Main Container - Changed max-width logic for mobile */}
      <div className="relative mx-auto w-full max-w-7xl md:w-[90%] lg:w-[85%]">
        
        {/* Header Section */}
        <div className="mb-16 md:mb-24 text-center px-4">
          <h1 className="h1 font-bold leading-tight text-zinc-900">
            The Journey of <span className="text-[#3bc878]">Zammy Zaif</span>
          </h1>
          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-[#3bc878]" />
        </div>

        {/* Central Path Line - Hidden on very small screens, adjusted top */}
        <div className="absolute bottom-0 left-1/2 top-[200px] hidden w-[3px] -translate-x-1/2 bg-zinc-100 md:block" />
        <div className="absolute bottom-0 left-1/2 top-[200px] hidden w-[3px] -translate-x-1/2 bg-gradient-to-b from-[#3bc878] to-emerald-100 md:block" />

        <div className="space-y-16 md:space-y-32">
          {timelineData.map((item, idx) => (
            <div
              key={idx}
              className={`relative flex w-full flex-col items-center justify-between gap-8 md:flex-row ${
                item.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Text Card */}
              <motion.div
                initial={{ opacity: 0, y: 20, x: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                className="w-full px-4 md:w-[45%] md:px-0"
              >
                <div className="relative rounded-[30px] md:rounded-[40px] border-2 border-[#3bc878] bg-white p-6 md:p-10 shadow-xl">
                  {/* The Pointing Triangle - Hidden on mobile */}
                  <div
                    className={`absolute top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-[-45deg] border-b-2 border-r-2 border-[#3bc878] bg-white md:block ${
                      item.side === 'left' ? '-right-2.5' : '-left-2.5 rotate-[135deg]'
                    }`}
                  />

                  {/*<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#3bc878]">
                    {item.year}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 mt-2 text-zinc-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-base md:text-[17px] leading-relaxed md:leading-[1.8em] text-zinc-700">
                    {item.desc}
                  </p>*/}
                  {/* Inside the map function: timelineData.map((item, idx) => ... */}

<span className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#3bc878]">
  {item.year}
</span>

{/* Dynamic Heading Logic */}
{item.level === 'h2' ? (
  <h2 className="h2 font-extrabold mb-4 mt-2 text-zinc-900 leading-tight">
    {item.title}
  </h2>
) : (
  <h3 className="h3 font-bold mb-4 mt-2 text-zinc-800 leading-tight">
    {item.title}
  </h3>
)}

<p className="text-base md:text-[17px] leading-relaxed md:leading-[1.8em] text-zinc-700">
  {item.desc}
</p>
                </div>
              </motion.div>

              {/* Central Node Icon - Desktop Only */}
              <div className="absolute left-1/2 z-10 hidden h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border-4 border-[#3bc878] bg-white shadow-[0_0_15px_rgba(59,200,120,0.4)] md:flex">
                <div className="h-2 w-2 animate-pulse rounded-full bg-[#3bc878]" />
              </div>

              {/* Image Container - Fixed height for mobile, larger for desktop */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="w-full px-4 md:w-[45%] md:px-0"
              >
                <div className="group relative h-[350px] sm:h-[450px] md:h-[550px] overflow-hidden rounded-[30px] md:rounded-[40px] border-4 border-[#3bc878]/10 shadow-lg">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    priority={idx < 2}
                  />
                  {/* Overlay gradient for better depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ZammyTimeline;
