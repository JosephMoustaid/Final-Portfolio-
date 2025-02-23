import React from "react";

import solarpunk from "../assets/blogImages/solarpunk.jpg";

import aSpaceOdyyses from "../assets/blogImages/aSpaceOdyssey.webp";

import { motion } from "framer-motion";

const BlogArticle5 = () => {
  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Reflect on the balance between technology and humanity in this thought-provoking piece."
    );

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
  };

  return (
<div className="container py-5">
  <header className="mb-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="fw-bold text-primary display-4">
            The Intersection of Technology and Humanity
            </h1>
            <p className="text-muted">Published on: November 17, 2024</p>
            <p className="lead">
            As technology evolves, how do we ensure it enhances humanity rather 
            than diminishes it?
            </p>
          </div>
          <div className="col-lg-5 text-center">
            <img
            style={{ position: 'relative' , zIndex:"1"}}
              src={solarpunk}
              alt="solarpunk"
              className="img-fluid rounded shadow"
            />
          </div>
        </div>
  </header>

  <article>
    <h2 className="text-primary mb-4">A Double-Edged Sword</h2>
    <p>
      Technology is a reflection of human potential and creativity, but it 
      also raises profound questions about our identity and values. On one hand, 
      it has connected us in unprecedented ways, allowing ideas to flow freely 
      and solutions to emerge rapidly. On the other hand, it can isolate us in 
      digital bubbles, create dependency, and exacerbate societal inequalities.
    </p>
    <p>
      For me, this duality represents both the promise and the peril of 
      technological progress. While it offers tools to solve our biggest 
      challenges, it also requires us to ask tough questions about how, and for 
      whom, it is wielded.
    </p>
    <iframe 
    width="100%" 
    height="315" 
    style={{ position: 'relative' , zIndex:"1"}}
    src="https://www.youtube.com/embed/z-Ng5ZvrDm4?si=OcrARFoxM-N8CNB1" 
    title="YouTube video player" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
  ></iframe>
  <i>This is a video from solar punk, an animation work that resembles my hopes about the future of technology in our world , where nature and technology are one and very different from the dull world we're trying to make, which resemble more works like Blade runner.</i>


    <h2 className="text-primary mt-5 mb-4">Human-Centered Technology</h2>
    <p>
      I believe technology should serve humanity, not the other way around. 
      This means designing tools and systems that amplify our empathy, creativity, 
      and connections. It’s about creating platforms that encourage meaningful 
      interactions rather than shallow engagement. 
    </p>
    <p>
      One example is AI. While it has the power to automate tasks and solve 
      complex problems, we must ensure it aligns with ethical principles that 
      protect individual rights and promote collective well-being. It’s not 
      enough for technology to be efficient—it must also be humane.
    </p>

    <h2 className="text-primary mt-5 mb-4">The Balance We Must Strike</h2>
    <p>
      The challenge lies in balance. Can we harness technology to amplify our 
      humanity without losing sight of what makes us human? It’s tempting to 
      prioritize speed and efficiency, but at what cost? We risk replacing 
      authentic connection with digital convenience and meaningful creativity 
      with algorithmic optimization.
    </p>
    <p>
      The future of technology isn’t just about innovation; it’s about 
      integration. It’s about weaving the digital and the human together in a 
      way that strengthens our shared humanity rather than fracturing it. 
    </p>

    <h2 className="text-primary mt-5 mb-4">A Vision for the Future</h2>
    <p>
      I imagine a future where technology encourages us to ask better questions 
      about ourselves and the world around us. A future where it bridges gaps 
      rather than widens them, where it nurtures relationships instead of 
      replacing them. 
    </p>
    <p>
      Ultimately, the question isn’t whether technology will shape our future. 
      It’s how we, as humans, will shape technology. Let’s build tools that 
      inspire, unite, and empower us to create a more compassionate and 
      connected world.
    </p>
  </article>

  <div className="row align-items-center">

          <div className="col-lg-3 text-center">
            <img
            style={{ position: 'relative' , zIndex:"1"}}
              src={aSpaceOdyyses}
              alt="solarpunk"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-9">
            <p className="lead">
            This is an image of a movie called <strong className="underline"> "2001: A Space Odyssey" </strong> by Stanley Kubrick , <br/>
            a movie that inspired me to think about <i>the future of technology and humanity </i>, one of the scenes in this movie , basicly there is an AGI or more likely an ASI computer that controlls the full spaceship , at one moment in the movie when they were close to arriving to their mission the AGI faked the existence of a physical problem all in order to get the astronauts to the deployement room , to then open up the deployement door to kill them , this was due to the AGI calculating the probability of their comeback amd finding it to be a bit low , so to prevent that it made a plan to get rid of all the astrounauts and then get back.
            </p>
          </div>
        </div>

  <section className="text-center mt-5" style={{ position: 'relative' , zIndex:"1"}}> 
    <h4>Share this article:</h4>
    <button
      onClick={() => handleShare("twitter")}
      className="btn btn-primary me-2"
    >
      Twitter
    </button>
    <button
      onClick={() => handleShare("facebook")}
      className="btn btn-primary me-2"
    >
      Facebook
    </button>
    <button
      onClick={() => handleShare("linkedin")}
      className="btn btn-primary"
    >
      LinkedIn
    </button>
  </section>
</div>

  );
};

export default BlogArticle5;
