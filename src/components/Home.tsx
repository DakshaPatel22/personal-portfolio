import React from 'react';
import { Github, Linkedin, Code2, Mail, Twitter, MapPin, Calendar, ExternalLink, User, Heart, GraduationCap, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function Home() {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/DakshaPatel22",
      description: "Check out my latest projects and contributions",
      color: "hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white",
      gradient: "from-gray-800 to-gray-900"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/daksha-patel-5093612b0/",
      description: "Connect with me professionally",
      color: "hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 hover:text-white",
      gradient: "from-blue-900 to-blue-800"
    },
    {
      name: "LeetCode",
      icon: Code2,
      url: "https://leetcode.com/u/DeadEngineer/",
      description: "View my coding solutions and progress",
      color: "hover:bg-gradient-to-r hover:from-orange-500 hover:to-yellow-500 hover:text-white",
      gradient: "from-orange-900 to-red-900"
    }
  ];

  const connectOptions = [
    {
      name: "Twitter",
      icon: Twitter,
      url: "https://x.com/Daksha_harsh",
      color: "bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50"
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      url: "https://www.linkedin.com/in/daksha-patel-5093612b0/",
      color: "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 hover:scale-110 hover:shadow-2xl hover:shadow-indigo-500/50"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:dakshapatel221102@gmail.com",
      color: "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 hover:scale-110 hover:shadow-2xl hover:shadow-green-500/50"
    }
  ];