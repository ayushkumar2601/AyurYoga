"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FloatingNavbar } from "@/components/floating-navbar";
import { Footer } from "@/components/footer";
import { AuroraBackground } from "@/components/aurora-background";
import { ScrollReveal } from "@/components/scroll-reveal";
import { GradientText } from "@/components/gradient-text";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import CustomCursor from "@/components/CustomCursor";
import Chatbot from "@/components/Chatbot";

export default function UserDashboard() {
  const [hover, setHover] = useState(false);
  const userName = "Ayush"; // Placeholder user name
  const bookedSessions = [
    { id: 1, tutor: "Priya", time: "10:00 AM IST, 2025-08-24" },
    { id: 2, tutor: "Rohan", time: "11:30 AM IST, 2025-08-25" },
  ];
  const progress = 75; // Placeholder progress percentage
  const recommendations = [
    "Try a 10-minute morning meditation.",
    "Incorporate Vata-balancing yoga poses.",
    "Drink warm herbal tea daily.",
  ];

  return (
    <div className="min-h-screen bg-background relative">
      <AuroraBackground />
      <FloatingNavbar />
      <CustomCursor isHover={hover} />

      <main className="pt-20 pb-16">
        {/* Dashboard Header */}
        <section className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto text-center mb-12">
            <ScrollReveal>
              <h1 className="text-4xl lg:text-5xl font-serif font-bold text-gray-800 mb-4">
                Welcome, <GradientText>{userName}</GradientText>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Explore your wellness journey and connect with expert tutors.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Dashboard Content */}
        <section className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Booked Sessions Section */}
            <ScrollReveal delay={100}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Sessions</h3>
                <ul className="space-y-3">
                  {bookedSessions.map((session) => (
                    <li key={session.id} className="text-gray-700">
                      {session.tutor} - {session.time}
                    </li>
                  ))}
                </ul>
                <Link href="/book-session">
                  <Button
                    variant="outline"
                    className="mt-4 w-full border-pink-500 text-pink-600 hover:bg-pink-400/20 hover:text-pink-700"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    Book Another Session
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Progress Section */}
            <ScrollReveal delay={200}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Your Progress</h3>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-2">
                  <div
                    className="bg-pink-500 h-4 rounded-full"
                    style={{ width: `${progress}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-600">{progress}% Complete</p>
                <Link href="/progress">
                  <Button
                    variant="outline"
                    className="mt-4 w-full border-pink-500 text-pink-600 hover:bg-pink-400/20 hover:text-pink-700"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    View Details
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Recommendations Section */}
            <ScrollReveal delay={300}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Personal Recommendations</h3>
                <ul className="space-y-2 text-gray-700">
                  {recommendations.map((rec, index) => (
                    <li key={index} className="text-sm">{rec}</li>
                  ))}
                </ul>
                <Link href="/recommendations">
                  <Button
                    variant="outline"
                    className="mt-4 w-full border-pink-500 text-pink-600 hover:bg-pink-400/20 hover:text-pink-700"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    See More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>

            {/* Book a Tutor Section */}
            <ScrollReveal delay={400}>
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-3">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Find Your Tutor</h3>
                <p className="text-gray-700 mb-4">
                  Connect with a certified yoga tutor tailored to your needs.
                </p>
                <Link href="/find-tutor">
                  <Button
                    variant="outline"
                    className="border-pink-500 text-pink-600 hover:bg-pink-400/20 hover:text-pink-700"
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                  >
                    Discover Tutors
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>

      <Chatbot />
      <Footer />
    </div>
  );
}