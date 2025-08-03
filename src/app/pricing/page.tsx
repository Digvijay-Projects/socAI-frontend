// src/app/pricing/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Assuming your Shadcn UI Button

// Hardcoded data for subscription plans (updated to USD)
const subscriptionPlans = [
  {
    name: 'Free Plan',
    priceMonthlyUSD: '$0',
    creditsIncludedUSD: '0.1',
    imagesApprox: 'Approx. 1-2 Images',
    features: [
      'Get $0.1 USD credits instantly',
      'Access to basic templates',
      'Watermarked content',
      'Ideal for trials & beginners',
    ],
    buttonText: 'Start for Free',
    buttonLink: '/auth/signup',
    isPrimary: false,
  },
  {
    name: 'Basic Creator Plan',
    priceMonthlyUSD: '$9',
    priceAnnuallyUSD: '$90',
    creditsIncludedUSD: '9',
    imagesApprox: 'Approx. 150 Images',
    features: [
      'Advance Prompt Suggestions',
      'Access to all basic templates',
      'Standard generation speed',
      'Email support',
      'Save 16% with annual billing',
    ],
    buttonText: 'Choose Basic Plan',
    buttonLink: '/auth/signup?plan=basic',
    isPrimary: true, 
  },
  {
    name: 'Pro Business Plan',
    priceMonthlyUSD: '$39',
    priceAnnuallyUSD: '$390',
    creditsIncludedUSD: '39',
    imagesApprox: 'Approx. 650 Images',
    features: [
      'All Basic features',
      'Access to premium templates',
      'Priority generation queue',
      'Dedicated chat support',
      'Early access to new features',
      'Save 16% with annual billing',
    ],
    buttonText: 'Choose Pro Plan',
    buttonLink: '/auth/signup?plan=pro',
    isPrimary: false,
  },
];

// Hardcoded data for credit top-up packages (updated to USD)
const creditPackages = [
  {
    name: 'Small Pack',
    creditsUSD: '5 Credits',
    priceUSD: '$5',
    description: 'Perfect for quick top-ups or small projects.',
    buttonText: 'Buy 5 Credits',
    buttonLink: '/dashboard?action=buy-credits&pack=small',
  },
  {
    name: 'Medium Pack',
    creditsUSD: '15 Credits',
    priceUSD: '$15',
    description: 'More value for ongoing content creation.',
    buttonText: 'Buy 15 Credits',
    buttonLink: '/dashboard?action=buy-credits&pack=medium',
  },
  {
    name: 'Large Pack',
    creditsUSD: '30 Credits',
    priceUSD: '$30',
    description: 'Best value for high-volume content creators.',
    buttonText: 'Buy 30 Credits',
    buttonLink: '/dashboard?action=buy-credits&pack=large',
  },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <header className="text-center mb-16 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 text-white drop-shadow-lg">
          Unlock Your Creative Potential with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Flexible AI Pricing</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          Socai's unique credit system allows you to pay for exactly what you need. Our transparent pricing in US Dollars ($) offers ultimate flexibility for generating high-quality images and videos without any hidden costs.
        </p>
      </header>

      {/* Subscription Plans Section */}
      <section className="mb-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          Subscription Plans
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {subscriptionPlans.map((plan) => (
            <div
              key={plan.name}
              className={`relative p-8 rounded-xl shadow-2xl border transition-all duration-300 ease-in-out
                ${plan.isPrimary
                  ? 'bg-gradient-to-br from-indigo-900 via-purple-900 to-fuchsia-900 border-blue-500 transform scale-105 hover:scale-105 ring-2 ring-blue-500'
                  : 'bg-gray-800 border-gray-700 hover:border-gray-600 hover:shadow-xl'
                }
              `}
            >
              {plan.isPrimary && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md animate-bounce-custom">
                  Most Popular
                </div>
              )}
              <h3 className="text-3xl font-bold text-center mb-4 text-white">
                {plan.name}
              </h3>
              <p className="text-5xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-purple-300">
                {plan.priceMonthlyUSD}<span className="text-xl text-gray-400">/month</span>
              </p>
              {plan.priceAnnuallyUSD && (
                <p className="text-lg text-center text-gray-400 mb-6">
                  or {plan.priceAnnuallyUSD}/year (Save 16%)
                </p>
              )}
              <div className="text-center mb-8">
                <p className="text-2xl font-semibold text-yellow-300">{plan.creditsIncludedUSD} in credits</p>
                <p className="text-sm text-gray-400">{plan.imagesApprox}</p>
              </div>
              <ul className="space-y-3 mb-10 text-gray-200">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg className="w-5 h-5 text-green-400 mr-3 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <Button asChild
                className={`w-full py-3 text-lg font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out
                  ${plan.isPrimary
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                    : 'bg-gray-700 hover:bg-gray-600 text-gray-200'
                  }
                `}
              >
                <Link href={plan.buttonLink}>
                  {plan.buttonText}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Credit Top-Up Packages Section */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-white">
          One-Time Credit Top-Up
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {creditPackages.map((pack) => (
            <div
              key={pack.name}
              className="p-8 rounded-xl shadow-2xl border border-gray-700 bg-gray-800 hover:border-green-500 hover:shadow-xl transition-all duration-300 ease-in-out"
            >
              <h3 className="text-3xl font-bold text-center mb-4 text-white">
                {pack.name}
              </h3>
              <p className="text-5xl font-extrabold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-300">
                {pack.priceUSD}
              </p>
              <p className="text-2xl font-semibold text-center mb-8 text-lime-300">
                {pack.creditsUSD}
              </p>
              <p className="text-lg text-gray-300 text-center mb-10">
                {pack.description}
              </p>
              <Button asChild
                className="w-full py-3 text-lg font-bold rounded-lg shadow-lg transition-all duration-300 ease-in-out
                           bg-green-700 hover:bg-green-800 text-white"
              >
                <Link href={pack.buttonLink}>
                  {pack.buttonText}
                </Link>
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}