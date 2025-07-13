export type ExpertiseDataType = {
  id: number;
  title: string;
  price: number;
  service: string;
  bulletPoints: string[];
};

export const expertiseData = [
  {
    id: 1,
    title: "Social Media Advertising",
    price: 20,
    service: "Ads",
    bulletPoints: [
      "Facebook Ads Creation: Design, write, and launch compelling ad campaigns tailored to specific audience segments.",
      "Ad Targeting & Strategy: Use advanced targeting methods to reach ideal customers efficiently.",
      "A/B Testing: Test variations of ads to optimize click-through rates and conversions.",
      "Audience Research: Analyze customer behavior and interests to build high-converting audiences.",
      "Campaign Reporting: Monitor performance and provide actionable insights for continuous improvement.",
    ],
  },
  {
    id: 2,
    title: "YouTube SEO & Optimization",
    price: 10,
    service: "Video",
    bulletPoints: [
      "Keyword Research: Discover high-ranking keywords to target the right audience and boost visibility.",
      "Video Metadata Optimization: Craft SEO-optimized titles, descriptions, and tags to improve search performance.",
      "Thumbnails & CTR Strategy: Develop compelling thumbnails and titles to increase click-through rates.",
      "Channel Structuring: Organize playlists, content categories, and navigation to enhance the viewer experience.",
      "Analytics & Reporting: Monitor video performance and provide insights for continuous improvement.",
      "Competitor Analysis: Benchmark content strategies to stay ahead of trends and optimize opportunities.",
    ],
  },
  {
    id: 3,
    title: "Google Ads Campaign Management",
    price: 30,
    service: "Ads",
    bulletPoints: [
      "Search Ads Creation: Craft compelling ad copy and keyword strategies to appear in high-intent search results.",
      "Display Ads Design: Set up visually engaging banners across Google's Display Network to reach new audiences.",
      "Keyword Research & Optimization: Use keyword tools to find high-converting, low-competition search terms.",
      "A/B Testing: Continuously test ad variations for better performance and improved ROI.",
      "Ad Extensions Implementation: Maximize visibility and relevance with site links, callouts, and structured snippets.",
      "Campaign Setup & Launch: Build full campaigns tailored to your business goals with precise targeting.",
    ],
  },
];
