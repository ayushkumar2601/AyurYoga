export interface DoshaContent {
  name: string
  description: string
  qualities: string[]
  diet: {
    title: string
    items: string[]
  }
  lifestyle: {
    title: string
    items: string[]
  }
  yoga: {
    title: string
    items: string[]
  }
  remedies: {
    title: string
    items: string[]
  }
  colors: {
    primary: string
    secondary: string
    accent: string
  }
}

export const doshaData: Record<string, DoshaContent> = {
  vata: {
    name: "Vata",
    description:
      "The energy of movement and change. Vata types are creative, energetic, and quick-thinking but can become anxious and scattered when imbalanced.",
    qualities: ["Creative", "Energetic", "Quick-thinking", "Adaptable", "Enthusiastic"],
    diet: {
      title: "Nourishing Diet for Vata",
      items: [
        "Warm soups and stews with root vegetables and ghee",
        "Sweet, juicy fruits like dates, figs, and cooked apples",
        "Warm spiced milk with turmeric and cardamom before bed",
      ],
    },
    lifestyle: {
      title: "Grounding Lifestyle Tips",
      items: [
        "Maintain regular daily routines and consistent meal times",
        "Practice oil massage (abhyanga) with warm sesame oil daily",
      ],
    },
    yoga: {
      title: "Calming Yoga Practices",
      items: [
        "Child's Pose (Balasana) - Hold for 2-3 minutes to ground nervous energy",
        "Legs-Up-The-Wall Pose (Viparita Karani) - 10-15 minutes for deep relaxation",
      ],
    },
    remedies: {
      title: "Ayurvedic Home Remedies",
      items: [
        "Warm ginger tea with honey to improve digestion and circulation",
        "Triphala powder mixed with warm water before bed for gentle detox",
      ],
    },
    colors: {
      primary: "from-amber-500 to-orange-600",
      secondary: "from-yellow-400 to-amber-500",
      accent: "bg-amber-500/20",
    },
  },
  pitta: {
    name: "Pitta",
    description:
      "The energy of transformation and metabolism. Pitta types are intelligent, focused, and natural leaders but can become irritable and intense when imbalanced.",
    qualities: ["Intelligent", "Focused", "Determined", "Organized", "Natural Leader"],
    diet: {
      title: "Cooling Diet for Pitta",
      items: [
        "Fresh cucumbers, leafy greens, and coconut water for cooling",
        "Sweet fruits like melons, grapes, and pears to balance heat",
        "Cooling mint and coriander tea instead of coffee or black tea",
      ],
    },
    lifestyle: {
      title: "Cooling Lifestyle Tips",
      items: [
        "Avoid excessive heat and direct sunlight during peak hours",
        "Practice moderation in work and exercise to prevent burnout",
      ],
    },
    yoga: {
      title: "Cooling Yoga Practices",
      items: [
        "Moon Salutation (Chandra Namaskara) - Gentle, cooling sequence",
        "Seated Forward Fold (Paschimottanasana) - Hold for 3-5 minutes to cool the mind",
      ],
    },
    remedies: {
      title: "Ayurvedic Home Remedies",
      items: [
        "Aloe vera juice mixed with rose water to cool internal heat",
        "Fennel seed tea after meals to aid digestion and reduce acidity",
      ],
    },
    colors: {
      primary: "from-blue-500 to-cyan-600",
      secondary: "from-teal-400 to-blue-500",
      accent: "bg-blue-500/20",
    },
  },
  kapha: {
    name: "Kapha",
    description:
      "The energy of structure and stability. Kapha types are calm, steady, and nurturing but can become sluggish and resistant to change when imbalanced.",
    qualities: ["Calm", "Steady", "Nurturing", "Patient", "Loyal"],
    diet: {
      title: "Energizing Diet for Kapha",
      items: [
        "Light, warm meals with plenty of spices like ginger and black pepper",
        "Steamed vegetables with minimal oil and warming spices",
        "Herbal teas with ginger, cinnamon, and cloves to boost metabolism",
      ],
    },
    lifestyle: {
      title: "Energizing Lifestyle Tips",
      items: [
        "Engage in regular vigorous exercise to stimulate circulation",
        "Wake up early (before 6 AM) and avoid daytime napping",
      ],
    },
    yoga: {
      title: "Energizing Yoga Practices",
      items: [
        "Sun Salutation (Surya Namaskara) - 5-10 rounds to build heat and energy",
        "Warrior III (Virabhadrasana III) - Hold for 30 seconds each side for strength",
      ],
    },
    remedies: {
      title: "Ayurvedic Home Remedies",
      items: [
        "Warm water with lemon and honey first thing in the morning",
        "Dry brushing before shower to stimulate lymphatic drainage",
      ],
    },
    colors: {
      primary: "from-green-500 to-emerald-600",
      secondary: "from-lime-400 to-green-500",
      accent: "bg-green-500/20",
    },
  },
}

export function getDoshaFromScores(scores: Record<string, number>): string {
  const maxScore = Math.max(...Object.values(scores))
  const dominantDosha = Object.entries(scores).find(([_, score]) => score === maxScore)?.[0]
  return dominantDosha || "vata"
}
