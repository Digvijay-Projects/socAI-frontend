// src/lib/themes.ts

export const themes = [
  {
    id: 'corporate_promo',
    name: 'Corporate Promotional Video',
    description: 'Create professional promotional videos for businesses.',
    defaultImagePrompt: 'High-resolution image of a modern office building, bright natural light, professional setting.',
    defaultVideoPrompt: 'Dynamic video showcasing product features, diverse team collaboration, sleek UI, uplifting background music.',
    imageSuggestions: [
      'Team members collaborating in a modern office, smiling, diverse.',
      'Close-up of a new tech product, sleek design, innovative.',
      'Professional business handshake, blurred city background.'
    ],
    videoSuggestions: [
      'Explainer video: How our SaaS platform simplifies workflow (animated, clean UI).',
      'Customer testimonial video: Professional, warm lighting, clear audio.',
      'Behind-the-scenes video of product development, showing innovation.'
    ]
  },
  {
    id: 'social_media_ad',
    name: 'Social Media Ad (Short)',
    description: 'Quick, engaging ads for platforms like Instagram or TikTok.',
    defaultImagePrompt: 'Vibrant, eye-catching graphic with bold text, suitable for Instagram ad.',
    defaultVideoPrompt: 'Fast-paced, energetic video with quick cuts, trending music, text overlays for social media.',
    imageSuggestions: [
      'Product flat lay with bright colors, playful elements, lifestyle focus.',
      'Person happily using a product, natural setting, warm tones.',
      'Before-and-after comparison, clean design, impactful.'
    ],
    videoSuggestions: [
      '15-second TikTok challenge video, fun, trending audio, product integration.',
      '30-second Instagram carousel ad: Short clips of product in use, quick transitions.',
      'UGC-style video: Person unboxing and reacting to product, authentic feel.'
    ]
  },
  {
    id: 'e_commerce_product',
    name: 'E-commerce Product Showcase',
    description: 'Detailed visual content for online stores.',
    defaultImagePrompt: 'Studio quality product shot, white background, excellent lighting, crisp details.',
    defaultVideoPrompt: '360-degree product view, close-ups of features, lifestyle context video.',
    imageSuggestions: [
      'Product on a clean background, multiple angles, detailed textures.',
      'Lifestyle shot of product being used by a model, aspirational.',
      'Infographic image highlighting key product benefits.'
    ],
    videoSuggestions: [
      'Product demo video: How to assemble/use, step-by-step.',
      'Comparison video: Our product vs. competitors (visuals only, no audio if needed).',
      'Short cinematic product showcase with ambient music.'
    ]
  },
];

export type Theme = typeof themes[0]; 