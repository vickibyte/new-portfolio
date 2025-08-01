/**
 * @copyright 2025 Fisher9ine
 * @license Apache-2.0
 */

/**
 * Node
 * 
 */

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';


/**
 * Register GSAP plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);

/**
 * Components
 */
import ReviewCard from "./ReviewCard";
import { use } from 'react';

const reviews = [
  {
    content: 'He is an exceptional web developer! He delivered a seamless, responsive site with great UX.',
    name: 'Funke Dare',
    imgSrc: '/images/people-1.jpg',
    company: 'Funke Confectionery'
  },
  
  {
    content: 'Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.',
    name: 'Oghenero Mathew',
    imgSrc: '/images/people-3.jpg',
    company: 'Writer'
  },
  {
    content: 'Creative and skilled! Produced a modern, user-friendly blog that exceeded my expectations.',
    name: 'Kolade David',
    imgSrc: '/images/people-4.jpg',
    company: 'Impact Ministries'
  },
  {
    content: 'A professional that delivers on time, with a polished design and smooth user experience.',
    name: 'Victoria Ajinde',
    imgSrc: '/images/people-5.jpg',
    company: 'Movic Couture'
  },
  {
    content: 'Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.',
    name: 'Clement David',
    imgSrc: '/images/people-2.jpg',
    company: 'Branfect'
  },
  
];



const Review = () =>{

  useGSAP(() => {
    gsap.to('.scrub-slide', {
      scrollTrigger: {
        trigger: '.scrub-slide',
        start: '-100% 60%',
        end: '400% 80%',
        scrub: true
      },
      x: '-1000'
    })
  });



    return (
        <section 
        id="reviews"
        className="section overflow-hidden"
        >

            <div className="container">

                <h2 className="headline-2 mb-8 reveal-up">
                    What our clients say
                </h2>

                <div className="scrub-slide flex  items-stretch gap-3 w-fit">
                    {reviews.map(({content, name, imgSrc, company}, key) => (
                        <ReviewCard 
                        key={key}
                        name={name}
                        imgSrc={imgSrc}
                        company={company}
                        content={content}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Review