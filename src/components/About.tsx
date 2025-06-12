function About() {
  const achievements = [
    {
      icon: GraduationCap,
      title: "Academic Excellence",
      description: "Maintaining strong performance in ECE coursework at IIIT Ranchi",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Code2,
      title: "Technical Skills",
      description: "Proficient in programming languages and problem-solving techniques",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "Active on LeetCode and other coding platforms",
      color: "from-yellow-500 to-orange-500"
    },
    {
      icon: Lightbulb,
      title: "Innovation Mindset",
      description: "Always exploring new technologies and creative solutions",
      color: "from-purple-500 to-pink-500"
    }
  ];
  const interests = [
    "Data Structures & Algorithms",
    "Electronics & Circuit Design",
    "Web Development",
    "Machine Learning",
    "Competitive Programming",
    "Open Source Contribution",
    "Technical Writing",
    "Project Management"
  ];
   {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl p-8 border border-purple-500/30 backdrop-blur-sm hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-500">
              <h2 className="text-2xl font-bold text-white mb-4">Let's Connect!</h2>
              <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
                I'm always excited to discuss new opportunities, share ideas, or collaborate on interesting projects. 
                Feel free to reach out through any of my social platforms!
              </p>
              <Link
                to="/"
                className="group inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 hover:from-purple-700 hover:via-pink-700 hover:to-blue-700 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/50"
              >
                <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform duration-300" />
                <span>Back to Home</span>
              </Link>
              <p className="text-sm text-purple-300 flex items-center justify-center mt-6">
                Made with <Heart className="h-4 w-4 mx-1 text-red-400 animate-pulse" /> using React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;