import React from "react";

import { motion } from "framer-motion";


import frustration from "../assets/blogImages/frustration.jpg";


const BlogArticle2 = () => {
  const handleShare = (platform) => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(
      "Check out this thoughtful article on embracing failure!"
    );

    const shareUrls = {
      twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
    };

    window.open(shareUrls[platform], "_blank", "noopener,noreferrer");
  };

  return (
  <motion.div
    className="container py-5"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 1 }}
  >
    {/* HEADER */}
    <motion.header
      className="mb-5"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="row align-items-center">
        <div className="col-lg-7">
          <motion.h1
            className="fw-bold text-primary display-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Embracing Failure as a Path to Growth
          </motion.h1>
          <motion.p
            className="text-muted"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Published on: November 17, 2024
          </motion.p>
          <motion.p
            className="lead"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            Failure isn’t the opposite of success—it’s part of the journey. Here’s
            why I believe we should celebrate our failures.
          </motion.p>
        </div>
        <motion.div
          className="col-lg-5 text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            style={{ position: 'relative', zIndex: '1' }}
            src={frustration}
            alt="Thinking about AI"
            className="img-fluid rounded shadow"
          />
        </motion.div>
      </div>
    </motion.header>

    {/* ARTICLE */}
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5, duration: 1 }}
    >
      <div className="row mb-5">
        <div className="col-12">
          <motion.h2
            className="text-primary mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Rethinking Failure
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Growing up, failure felt like a dead end. It was the ultimate "don’t let this happen" scenario—something to avoid at all costs. But over the years, I’ve realized failure is more like a stepping stone, a chance to recalibrate and move forward stronger than before.
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            When I look back, my biggest breakthroughs came after my biggest failures. The job I didn’t get taught me how to interview better. The project that flopped forced me to confront weak points in my skills. Failure, as painful as it feels in the moment, is a teacher like no other.
          </motion.p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <motion.h2
            className="text-primary mt-5 mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Why We Fear Failure
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            Much of our fear of failure comes from societal conditioning. Success is celebrated loudly, while failure is quietly swept under the rug. We’re taught to aim for perfection, but perfection is an illusion. The truth is, failure humanizes us and gives us depth.
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            This fear holds us back. How many ideas go unspoken, risks go untaken, or dreams go unpursued because of the shadow of failure? If we reframe failure as a lesson instead of an endpoint, we free ourselves to explore, experiment, and grow.
          </motion.p>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <motion.h2
            className="text-primary mt-5 mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Lessons Learned Through Failure
          </motion.h2>
          <motion.ul
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <li>
              <strong>Resilience:</strong> Every failure makes us stronger. It’s proof that we can endure setbacks and still move forward.
            </li>
            <li>
              <strong>Creativity:</strong> When Plan A fails, we’re forced to think differently. Some of the most innovative ideas come from Plan B—or Plan Z.
            </li>
            <li>
              <strong>Humility:</strong> Failure reminds us that we’re not invincible. It keeps us grounded and fosters empathy for others on their journeys.
            </li>
          </motion.ul>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <motion.h2
            className="text-primary mt-5 mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Turning Failure into Fuel
          </motion.h2>
          <motion.ol
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            <li>
              <strong>Reflect and Learn:</strong> Ask yourself what went wrong and what could be improved. Be honest, but don’t be overly critical.
            </li>
            <li>
              <strong>Stay Open:</strong> Sometimes, failure is just redirection. Look for the doors it might be opening instead of focusing on the ones that closed.
            </li>
            <li>
              <strong>Share Your Story:</strong> Talking about failure normalizes it. It can inspire others and create a culture where trying—and failing—is celebrated.
            </li>
          </motion.ol>
        </div>
      </div>

      <div className="row mb-5">
        <div className="col-12">
          <motion.h2
            className="text-primary mt-5 mb-4"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            A Personal Take
          </motion.h2>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
          >
            For me, one of the most transformative moments was a project I poured my heart into that didn’t meet expectations. At first, I was devastated. But as time passed, I realized it had taught me more about resilience and creative problem-solving than any successful endeavor ever could.
          </motion.p>
          <motion.p
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
          >
            Failure shaped me. It’s why I take risks today, why I dream bigger, and why I’m unafraid to step into the unknown. If you’re reading this, I hope you’ll take your next failure as a badge of honor—a sign that you’re pushing boundaries and living boldly.
          </motion.p>
        </div>
      </div>
    </motion.article>

    {/* SOCIAL SHARING */}
    <motion.section
      className="text-center mt-5"
      style={{ position: 'relative', zIndex: '1' }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 1 }}
    >
      <motion.h4
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Share this article:
      </motion.h4>
      <motion.button
        onClick={() => handleShare("twitter")}
        className="btn btn-primary me-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Twitter
      </motion.button>
      <motion.button
        onClick={() => handleShare("facebook")}
        className="btn btn-primary me-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Facebook
      </motion.button>
      <motion.button
        onClick={() => handleShare("linkedin")}
        className="btn btn-primary"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        LinkedIn
      </motion.button>
    </motion.section>
  </motion.div>
  );
};

export default BlogArticle2;
