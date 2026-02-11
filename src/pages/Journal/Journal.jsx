import React from "react";
import { motion } from "framer-motion";
import { articles } from "../../utils/journalData";

const Journal = () => {
  return (
    <div className="pt-32 pb-20 bg-healer-cream min-h-screen px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-20 text-center">
          <h1 className="text-5xl md:text-7xl font-serif text-healer-green italic mb-4">
            The Journal
          </h1>
          <p className="text-healer-green/60 uppercase tracking-widest text-sm font-medium">
            Insights on Holistic Living
          </p>
        </header>

        {/* Featured Article (Large) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {articles.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col group cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm mb-6 aspect-[4/5]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <span className="text-healer-gold text-xs uppercase tracking-widest font-bold mb-2">
                {post.category} — {post.date}
              </span>
              <h2 className="text-2xl font-serif text-healer-green group-hover:text-healer-gold transition-colors duration-300">
                {post.title}
              </h2>
              <p className="text-healer-green/60 mt-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-6 w-10 h-[1px] bg-healer-green group-hover:w-20 transition-all duration-500" />
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Journal;
