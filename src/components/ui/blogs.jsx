
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ExternalLink, ArrowLeft } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

const BlogsPage = ({ portfolioData }) => {
  const blogs = portfolioData?.blogs || [];

  if (blogs.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">My Blog Posts</h1>
            <p className="text-gray-400">No blog posts available at the moment.</p>
          </div>
        </div>
      </div>
    );
  }

  // Generate placeholder colors for different platforms
  const getPlatformColor = (platform) => {
    const colors = {
      'Medium': 'from-green-300/20 via-green-400/10 to-emerald-300/20',
      'Dev.to': 'from-purple-300/20 via-blue-300/10 to-indigo-300/20',
      'Kodaschool': 'from-emerald-300/20 via-teal-400/10 to-cyan-300/20',
      'default': 'from-emerald-300/20 via-blue-300/10 to-purple-300/20'
    };
    return colors[platform] || colors.default;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#111111] to-[#0a0a0a]">
      {/* Background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-300/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <motion.div whileHover={{ x: -5 }}>
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-emerald-300 hover:text-emerald-200 transition-colors duration-200"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="text-sm">Back to Portfolio</span>
              </Link>
            </motion.div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            My <span className="text-emerald-300">Blog</span> Posts
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Sharing insights, tutorials, and experiences from my journey in software development and technology.
          </p>

          {/* Stats */}
          <div className="flex justify-center gap-8 mt-8 text-sm text-gray-400">
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-300">{blogs.length}</div>
              <div>Articles</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-emerald-300">
                {blogs.reduce((total, blog) => total + (blog.read_time || 0), 0)}
              </div>
              <div>Total Minutes</div>
            </div>
          </div>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog, index) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-emerald-300/30 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              {/* Blog Image Placeholder */}
              <div className={`relative h-48 bg-gradient-to-br ${getPlatformColor(blog.platform)} overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>

                {/* Platform badge */}
                <div className="absolute top-4 left-4">
                  <Badge
                    variant="secondary"
                    className="bg-emerald-300/20 text-emerald-200 border-emerald-300/30"
                  >
                    {blog.platform}
                  </Badge>
                </div>

                {/* Decorative elements */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-emerald-300/30 rounded-lg flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-emerald-300/60" />
                  </div>
                </div>

                {/* Reading time badge */}
                {blog.read_time && (
                  <div className="absolute top-4 right-4">
                    <Badge
                      variant="secondary"
                      className="bg-gray-900/60 text-gray-200 border-gray-600/50"
                    >
                      {blog.read_time} min read
                    </Badge>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta information */}
                <div className="flex items-center gap-4 mb-4 text-xs text-gray-400">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    <span>{blog.published_date}</span>
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-emerald-300 transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h2>

                {/* Description */}
                <p className="text-gray-300 text-sm leading-relaxed mb-4 line-clamp-3">
                  {blog.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {blog.tags?.slice(0, 3).map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-300 text-xs hover:bg-emerald-700/30 hover:text-emerald-200 transition-all duration-200"
                    >
                      {tag}
                    </Badge>
                  ))}
                  {blog.tags?.length > 3 && (
                    <Badge
                      variant="secondary"
                      className="bg-gray-700/50 text-gray-400 text-xs"
                    >
                      +{blog.tags.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Read More Button */}
                <motion.a
                  href={blog.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/btn inline-flex items-center gap-2 px-4 py-2 bg-emerald-300/10 hover:bg-emerald-300/20 border border-emerald-300/30 hover:border-emerald-300/50 rounded-lg text-emerald-300 hover:text-emerald-200 text-sm font-medium transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Read Article
                  <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </motion.a>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-300/0 via-emerald-300/5 to-emerald-300/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </motion.article>
          ))}
        </div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-20 p-8 bg-gray-900/30 backdrop-blur-sm border border-gray-800 rounded-2xl"
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Want to stay updated?
          </h3>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Follow me on my blogging platforms to get notified when I publish new articles about web development, AWS, and emerging technologies.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {[...new Set(blogs.map(blog => blog.platform))].map((platform) => (
              <Badge
                key={platform}
                variant="secondary"
                className="bg-emerald-300/10 text-emerald-300 border-emerald-300/30 px-4 py-2"
              >
                {platform}
              </Badge>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogsPage;
