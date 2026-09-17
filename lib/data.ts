// Central content source. Update copy, stats, testimonials and photos here —
// every page pulls from this file instead of duplicating content per template.

export const site = {
  name: "Gurusthetics",
  tagline: "Online Fitness Coaching by Guru",
  whatsappNumber: "918754712377",
  email: "info.gurusthetics@gmail.com",
  phoneDisplay: "+91 87547 12377",
  instagram: "https://www.instagram.com/gurusthetics",
  facebook: "https://www.facebook.com/share/1DE9jh3w69/",
  youtube: "https://www.youtube.com/@gurustheticss",
};

export function waLink(message: string) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const stats = [
  { label: "Followers", value: 25, suffix: "K+" },
  { label: "Happy Clients", value: 300, suffix: "+" },
  { label: "Social Media Reach", value: 2, suffix: "M+" },
  { label: "Client Reviews", value: 4.8, suffix: "/5" },
];

export const navLinks = [
  { label: "Home", href: "/" },
  {
    label: "Programs",
    href: "#programs",
    children: [
      { label: "Weight Loss", href: "/programs/weight-loss" },
      { label: "Muscle Building", href: "/programs/muscle-building" },
      { label: "Powerlifting", href: "/programs/powerlifting" },
      { label: "Mobility", href: "/programs/mobility" },
    ],
  },
  { label: "Blogs", href: "/blogs" },
  { label: "Shop", href: "/shop" },
  { label: "About", href: "/about" },
];

export const classes = [
  {
    title: "Strength & Hypertrophy",
    description: "Build muscle, improve endurance, and enhance overall strength.",
  },
  {
    title: "HIIT Conditioning",
    description: "High-intensity interval training for fat loss and endurance.",
  },
  {
    title: "Mobility & Recovery",
    description: "Improve balance, flexibility, and mental relaxation.",
  },
  {
    title: "Power & Athleticism",
    description: "Enhance speed, agility, and explosive power.",
  },
  {
    title: "Group Energy Sessions",
    description: "Fun, high-energy workouts with community motivation.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Initial Assessment",
    description: "Understand your body, goals, and lifestyle.",
  },
  {
    step: "02",
    title: "Customised Program Design",
    description: "A diet and workout chart built exactly for you.",
  },
  {
    step: "03",
    title: "Guided Implementation",
    description: "I guide, you follow, I correct your form and pace.",
  },
  {
    step: "04",
    title: "Progress Tracking & Refinement",
    description: "Weekly check-ins with real adjustments, not guesswork.",
  },
];

export type Transformation = {
  name: string;
  location: string;
  days: string;
  category: "Weight Loss" | "Muscle Building" | "Powerlifting";
  image: string;
};

export const transformations: Transformation[] = [
  {
    name: "Venkat",
    location: "Chennai",
    days: "180 Days",
    category: "Muscle Building",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/04/Muscle-Building-Client-Venkat-from-Chennai-180-Days-transformation-Front-view-scaled.jpg",
  },
  {
    name: "Rajkumar",
    location: "Chennai",
    days: "90 Days",
    category: "Muscle Building",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/06/Muscle-Building-Rajkumar-Chennai-90-Days-Front-scaled.jpg",
  },
  {
    name: "Swetha",
    location: "Andhra",
    days: "90 Days",
    category: "Weight Loss",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/04/Weight-Loss-Client-Swetha-from-Andhra-90-Days-transformation-Front-view-scaled.jpg",
  },
  {
    name: "Pradeep",
    location: "Singapore",
    days: "90 Days",
    category: "Muscle Building",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/06/Muscle-Building-Pradeep-Singapore-90-Days-Front-scaled.jpg",
  },
  {
    name: "Narasimha",
    location: "Hyderabad",
    days: "150 Days",
    category: "Muscle Building",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/04/Muscle-Building-Client-Narasimha-from-Hyderabad-150-Days-transformation-Front-view-1024x1024.jpg",
  },
  {
    name: "Kavin",
    location: "Chennai",
    days: "90 Days",
    category: "Muscle Building",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/04/Muscle-Building-Client-Kavin-from-Chennai-90-Days-transformation-Front-view-1024x1024.jpg",
  },
  {
    name: "Veera",
    location: "Dubai",
    days: "90 Days",
    category: "Weight Loss",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/04/Weight-Loss-Transformation-Client-Veera-from-Dubai-90-Days-transformation-Side-view-1024x1024.jpg",
  },
  {
    name: "Deepan",
    location: "Dubai",
    days: "150 Days",
    category: "Muscle Building",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/08/Muscle-Building-Deepan-Dubai-150-Days-Front-1024x1024.jpg",
  },
  {
    name: "Sharath",
    location: "Chennai",
    days: "90 Days",
    category: "Weight Loss",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/06/Weight-Loss-Sharath-Chennai-90-Days-Front-1024x1024.jpg",
  },
  {
    name: "Suresh",
    location: "Dubai",
    days: "90 Days",
    category: "Weight Loss",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/06/Weight-Loss-Suresh-Dubai-90-Days-Back-1024x1024.jpg",
  },
  {
    name: "Dr. Prabhu",
    location: "Chennai",
    days: "90 Days",
    category: "Powerlifting",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/04/My-Powerlifting-Client-Dr.Prabhu-from-Chennai-90-Days-transformation-Front-view-1024x1024.jpg",
  },
  {
    name: "Vijay",
    location: "Dindigul",
    days: "150 Days",
    category: "Weight Loss",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/08/Weight-Loss-Vijay-Dindugal-150-Days-Front-1024x1024.jpg",
  },
  {
    name: "Siva",
    location: "Abu Dhabi",
    days: "90 Days",
    category: "Weight Loss",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/04/Weight-Loss-Client-Siva-from-Abu-Dhabi-90-Days-transformation-Front-view-1024x1024.jpg",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  location: string;
  flag: string;
};

export const homeTestimonials: Testimonial[] = [
  {
    quote:
      "Worth the investment. Guru helped me lose 9 kilos in 90 days — I smile every time I see my physique in the mirror now.",
    name: "Sidharth",
    location: "USA",
    flag: "🇺🇸",
  },
  {
    quote:
      "Guru corrected my form, fixed my diet, and kept me accountable every day. Best investment I've made. I've since joined again for powerlifting.",
    name: "Ravi",
    location: "Dubai",
    flag: "🇦🇪",
  },
  {
    quote:
      "I didn't join to build abs. I joined for discipline and structure. I'd tried losing weight before and always gained it back — this was the first plan I could stick to. Lost 8 kg in 3 months.",
    name: "Ganapathi",
    location: "Chennai",
    flag: "🇮🇳",
  },
  {
    quote:
      "Your coaching felt personal, supportive, and structured after I'd failed at multiple programs before. My body changed, my strength improved, and everyone noticed.",
    name: "Kishore",
    location: "France",
    flag: "🇫🇷",
  },
  {
    quote:
      "I'd started diets so many times before and always quit. Losing 6 kg in 90 days feels amazing. Thanks for keeping me accountable throughout.",
    name: "Venkat",
    location: "Chennai",
    flag: "🇮🇳",
  },
];

export const muscleTestimonials: Testimonial[] = [
  {
    quote:
      "I'd been training for almost three years but barely looked like it. Guru's program fixed everything I was doing wrong — I gained 4 kilos of muscle, lost fat, and got much stronger.",
    name: "Arun",
    location: "Dubai",
    flag: "🇦🇪",
  },
  {
    quote:
      "I went from 61kg to 72kg in 9 months and almost doubled my strength. People at my gym started noticing — that feeling is hard to describe.",
    name: "Rohit",
    location: "Chennai",
    flag: "🇮🇳",
  },
  {
    quote:
      "I thought I had bad genetics. You showed me my training and nutrition were the real problem. I've made more progress in a few months than in the previous two years.",
    name: "Sriram",
    location: "USA",
    flag: "🇺🇸",
  },
  {
    quote:
      "I gained around 8 kilos in 7 months. Someone finally asked if I'd been working out — that small comment meant everything.",
    name: "Rahul",
    location: "Pune",
    flag: "🇮🇳",
  },
  {
    quote:
      "I joined hoping to build muscle, but what I gained was confidence. My t-shirt fits differently now and every mirror reminds me how far I've come.",
    name: "Sathish",
    location: "Germany",
    flag: "🇩🇪",
  },
];

export const faqsGeneric = [
  {
    q: "I've been training for months with no results. Can I still transform?",
    a: "Yes. If you're not seeing results, you're either training wrong, eating wrong, or both. This program fixes those mistakes with a science-backed plan built around your body.",
  },
  {
    q: "Do I need a gym, or can I do this at home?",
    a: "Both work. A gym helps maximize results, but if you train at home I'll build an effective plan around the equipment you have — and help you source anything essential.",
  },
  {
    q: "How long before I see results?",
    a: "Most people notice changes in 8–12 weeks, with clearly visible results by 90 days. For a dramatic transformation, plan for 180 days.",
  },
  {
    q: "Do I need supplements?",
    a: "Not necessarily — most people can hit their targets through food alone. If your schedule makes that hard, we can discuss supplements as an option, not a requirement.",
  },
  {
    q: "What if I can't stay consistent?",
    a: "That's what the structure is for. Weekly check-ins, tracked progress, and direct accountability keep you locked in even when motivation dips.",
  },
];

export type Program = {
  slug: "weight-loss" | "muscle-building" | "powerlifting" | "mobility";
  name: string;
  headline: string;
  subhead: string;
  description: string[];
  heroImage: string;
  benefits: string[];
  whoShouldJoin: string[];
  category: Transformation["category"] | "all";
  testimonials: Testimonial[];
  faqs: { q: string; a: string }[];
};

export const programs: Program[] = [
  {
    slug: "weight-loss",
    name: "Weight Loss",
    headline: "Sustainable Fat Loss, Built Around Your Life",
    subhead:
      "90-day, science-backed fat loss — without crash diets or hours in the gym.",
    description: [
      "Transform your body with science-backed fat loss strategies. This personalized 90-day program helps you shed fat while maintaining energy for the rest of your life.",
      "Our approach combines customized meal plans, structured workouts, and expert guidance to help you burn fat effectively — with regular tracking and adjustments so results actually last. Our motto: first master your mind, then sculpt your body.",
    ],
    heroImage:
      "https://gurusthetics.com/wp-content/uploads/2026/04/Weight-Loss-Client-Swetha-from-Andhra-90-Days-transformation-Front-view-scaled.jpg",
    benefits: [
      "Customized fat-loss meal plan — no crash diets",
      "Structured workouts for home or gym",
      "Weekly progress tracking & plan adjustments",
      "Daily chat & call support",
      "Habit and mindset coaching, not just a workout PDF",
      "Sustainable pace built around your work-life balance",
    ],
    whoShouldJoin: [
      "You've tried multiple diets and always gained the weight back",
      "You want fat loss without giving up your entire social life",
      "You're not sure your current workouts are actually working",
      "You want a coach checking in on you, not a generic app",
    ],
    category: "Weight Loss",
    testimonials: homeTestimonials,
    faqs: faqsGeneric,
  },
  {
    slug: "muscle-building",
    name: "Muscle Building",
    headline: "Strength, Size & Definition — In One Program",
    subhead:
      "90-day muscle-building formula built on progressive overload, not guesswork.",
    description: [
      "Tired of lifting weights but seeing no real gains? This 90-day muscle-building program is designed to help you gain strength, size, and definition — without wasting time on ineffective workouts.",
      "With a scientific training approach, muscle-focused nutrition, and expert guidance, you'll finally build the strong, aesthetic physique you've always wanted.",
    ],
    heroImage:
      "https://gurusthetics.com/wp-content/uploads/elementor/thumbs/04-Kettlebell-1-r3t5pkvq4y4weu3ecvv8lkp3xlokku78nkcd3p0rgg.png",
    benefits: [
      "Customized muscle-building diet plan",
      "Personalized workout program for maximum growth",
      "Progressive overload tracking system",
      "Form guidance via custom tutorial videos",
      "Home & gym workout options based on your access",
      "Weekly progress tracking & plan adjustments",
    ],
    whoShouldJoin: [
      "You're struggling to gain size despite training regularly",
      "You've been working out but aren't seeing noticeable growth",
      "You want a proven system instead of random social-media workouts",
      "You're a beginner who wants to build muscle the right way, first time",
    ],
    category: "Muscle Building",
    testimonials: muscleTestimonials,
    faqs: [
      {
        q: "I've been lifting for months with no results. Can I still transform?",
        a: "Yes. You're either training wrong, eating wrong, or both — this program fixes those mistakes with a plan that's built to grow muscle.",
      },
      {
        q: "Do I need a gym, or can I build muscle at home?",
        a: "You can build muscle with resistance training at home or in a gym. A gym helps maximize gains; at home, I'll build an effective plan around the equipment you have.",
      },
      {
        q: "I don't want to get bulky — will this make me too big?",
        a: "This program is built around your specific physique goal, so I coach toward the look you want, not a default outcome.",
      },
      {
        q: "How long before I see muscle growth?",
        a: "Most people notice changes in 8–12 weeks, with significant results by 90 days. For a very visible transformation, plan for 180 days.",
      },
      {
        q: "Do I have to eat every 2 hours like a bodybuilder?",
        a: "No. Whether you eat 3 meals or 6, I'll help you hit your protein and calorie targets in a way that fits your actual life.",
      },
      {
        q: "Do I need supplements?",
        a: "Not if you can hit your macros and micros from food. If a hectic schedule makes that hard, supplements are an option we can discuss.",
      },
    ],
  },
  {
    slug: "powerlifting",
    name: "Powerlifting",
    headline: "Master The Big Three. Develop Elite Strength.",
    subhead:
      "Science-based strength programming for lifters who want to dominate.",
    description: [
      "Take your strength to elite levels with a comprehensive powerlifting program. We focus on perfecting technique in the squat, bench, and deadlift while implementing strategic progressive overload.",
      "Whether you're competing or simply want to get incredibly strong, this approach combines technical mastery with mental toughness — coached by a state-level competitive powerlifter.",
    ],
    heroImage:
      "https://gurusthetics.com/wp-content/uploads/2026/04/My-Powerlifting-Client-Dr.Prabhu-from-Chennai-90-Days-transformation-Front-view-1024x1024.jpg",
    benefits: [
      "Technique coaching on squat, bench & deadlift",
      "Structured progressive-overload programming",
      "Competition prep guidance, if that's your goal",
      "Mobility & recovery work built into the plan",
      "Video form checks and direct correction",
      "Mental-toughness and pacing strategy for meet day",
    ],
    whoShouldJoin: [
      "You want to compete, or just want to get seriously strong",
      "You keep hitting plateaus on your big three lifts",
      "You want technical coaching from an actual competitive lifter",
      "You're tired of programs that ignore recovery and mobility",
    ],
    category: "Powerlifting",
    testimonials: homeTestimonials.slice(0, 3),
    faqs: faqsGeneric,
  },
  {
    slug: "mobility",
    name: "Mobility",
    headline: "Move Better. Lift Stronger.",
    subhead:
      "A 90-day mobility program that builds real, usable range — not just stretching.",
    description: [
      "Feeling stiff, tight, or restricted in your lifts? Can't squat deep, move freely, or train pain-free? This 90-day mobility program builds real, usable mobility for strength athletes and beginners alike.",
      "It improves joint function, flexibility, and movement control without sacrificing strength. No random stretches — just smarter movement, better performance, and injury-free training.",
    ],
    heroImage:
      "https://gurusthetics.com/wp-content/uploads/elementor/thumbs/18-Timer-1-r3t5qs4avbs06eqy6zr7i7et78ztq167rhj0vh9erk.png",
    benefits: [
      "Joint-by-joint mobility assessment",
      "Programming built around your specific restrictions",
      "Improved squat, hinge & overhead positions",
      "Injury-prevention focus for strength athletes",
      "Integrates directly with your existing training",
      "Weekly check-ins to track range-of-motion progress",
    ],
    whoShouldJoin: [
      "You can't hit depth in your squat no matter how much you stretch",
      "You're a lifter dealing with nagging joint tightness",
      "You want mobility work that actually carries over to your lifts",
      "You're returning from injury and need a structured, safe path back",
    ],
    category: "all",
    testimonials: homeTestimonials.slice(1, 4),
    faqs: faqsGeneric,
  },
];

export function getProgram(slug: string) {
  return programs.find((p) => p.slug === slug);
}

export const blogPosts = [
  {
    slug: "why-most-diets-fail",
    title: "Why Most Diets Fail (And What Actually Works)",
    excerpt:
      "It's rarely willpower. It's almost always structure. Here's the real reason crash diets don't stick — and what to build instead.",
    date: "2026-07-02",
    readTime: "5 min",
    category: "Nutrition",
  },
  {
    slug: "home-vs-gym-muscle",
    title: "Home vs. Gym: Can You Actually Build Muscle Without Equipment?",
    excerpt:
      "Yes — with the right progression. Here's how to structure resistance training at home so you keep growing.",
    date: "2026-06-18",
    readTime: "6 min",
    category: "Training",
  },
  {
    slug: "protein-without-supplements",
    title: "Hitting Your Protein Target Without Supplements",
    excerpt:
      "Supplements are a convenience, not a requirement. Here's how to hit your daily protein target through food alone.",
    date: "2026-05-27",
    readTime: "4 min",
    category: "Nutrition",
  },
  {
    slug: "squat-depth-mobility",
    title: "Can't Hit Depth? It's Probably Not Your Squat Stance",
    excerpt:
      "Most squat-depth issues trace back to ankle and hip mobility, not technique. Here's how to test and fix it.",
    date: "2026-05-04",
    readTime: "5 min",
    category: "Mobility",
  },
  {
    slug: "first-90-days",
    title: "What Actually Happens In Your First 90 Days",
    excerpt:
      "A realistic, week-by-week look at what changes first — and what takes the full 90 days to show up.",
    date: "2026-04-11",
    readTime: "7 min",
    category: "Mindset",
  },
  {
    slug: "powerlifting-vs-bodybuilding",
    title: "Powerlifting vs. Bodybuilding Programming: What's Different",
    excerpt:
      "Same gym, very different goals. Here's how programming for the platform differs from programming for the mirror.",
    date: "2026-03-22",
    readTime: "6 min",
    category: "Training",
  },
];

export const shopIntro = {
  title: "Recommended Fitness Essentials",
  subtitle:
    "Fitness essentials I personally recommend for beginners and serious trainees — tools to help you build strength, improve mobility, and stay consistent with your training.",
};

export type ShopProduct = {
  name: string;
  price: string;
  description: string;
  image: string;
  buyUrl: string;
  category: "Gym Accessories";
};

export const shopProducts: ShopProduct[] = [
  {
    name: "Wrist Band",
    price: "₹151",
    description: "Protect your wrists during heavy bench press & push workouts.",
    image:
      "https://gurusthetics.com/wp-content/uploads/elementor/thumbs/Wrist-Band-rnhjlbq91i1546nyk08q7q9982b1itxcjj5uffx190.png",
    buyUrl: "https://amzn.to/4dgjcpi",
    category: "Gym Accessories",
  },
  {
    name: "Lifting Belt",
    price: "₹899",
    description: "Lift heavier with better core stability and lower back support.",
    image:
      "https://gurusthetics.com/wp-content/uploads/elementor/thumbs/Lifting-Belt-rnhkvgn2hr6sz5ne5g6i3l4qvwwmc031vvwtfdiduc.png",
    buyUrl: "https://amzn.to/4nubefu",
    category: "Gym Accessories",
  },
  {
    name: "Lifting Strap",
    price: "₹267",
    description: "Lift heavier without losing grip during pull workouts, especially deadlifts.",
    image:
      "https://gurusthetics.com/wp-content/uploads/elementor/thumbs/Weight-Lifting-Strap-rnhkwi8m34m9vk4s1wfkvbn6nbravw8bd208mfymxg.png",
    buyUrl: "https://amzn.to/4nyXgZY",
    category: "Gym Accessories",
  },
  {
    name: "Knee Caps",
    price: "₹539",
    description: "Protect your knees and train harder with better joint stability.",
    image: "https://gurusthetics.com/wp-content/uploads/2026/05/Knee-Caps-286x300.png",
    buyUrl: "https://amzn.to/4ddIZ1h",
    category: "Gym Accessories",
  },
  {
    name: "Home Gym Equipment",
    price: "₹1,419",
    description: "The best home gym equipment for those who can't access a gym.",
    image: "https://gurusthetics.com/wp-content/uploads/2026/05/Home-Gym-Equipment-274x300.png",
    buyUrl: "https://amzn.to/4wD55lu",
    category: "Gym Accessories",
  },
  {
    name: "Floor Mat",
    price: "₹649",
    description: "Train anywhere with better comfort, grip, and stability for every workout.",
    image:
      "https://gurusthetics.com/wp-content/uploads/2026/05/Dual-Colour-Yoga-Mat-300x288.png",
    buyUrl: "https://amzn.to/4dKxRsO",
    category: "Gym Accessories",
  },
  {
    name: "Food Weighing Scale",
    price: "₹1,099",
    description: "Track your calories and macros better with this smooth weighing scale and bowl.",
    image: "https://gurusthetics.com/wp-content/uploads/2026/06/Food-Weighing-Scale-300x260.jpg",
    buyUrl: "https://amzn.to/3RNh2Fi",
    category: "Gym Accessories",
  },
  {
    name: "Weighing Machine",
    price: "₹899",
    description: "Track your bodyweight regularly with a sleek, reliable weighing machine.",
    image: "https://gurusthetics.com/wp-content/uploads/2026/06/Weighing-Machine-300x300.jpg",
    buyUrl: "https://amzn.to/4oc8VOp",
    category: "Gym Accessories",
  },
  {
    name: "Gorilla Tripod",
    price: "₹999",
    description: "Record your training videos with ease, without asking anyone for help.",
    image: "https://gurusthetics.com/wp-content/uploads/2026/06/Gorilla-Tripod-300x300.jpg",
    buyUrl: "https://amzn.to/43mW96i",
    category: "Gym Accessories",
  },
];
