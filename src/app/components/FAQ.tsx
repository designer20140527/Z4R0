"use client";

import { useState } from 'react';
import Image from 'next/image';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "What is Z4R0?",
      answer: "Z4R0 is a decentralized AI agent protocol built for Ethereum and Layer 2s. It automates DeFi tasks like staking, yield rebalancing, and arbitrage."
    },
    {
      question: "How is Z4R0 different from a trading bot?",
      answer: "Z4R0 agents are on-chain, composable, and governed by smart contracts. They don't rely on off-chain triggers and are transparent, auditable, and DAO-governed."
    },
    {
      question: "What can I use Z4R0 for?",
      answer: "You can use it to automate DeFi strategies such as farming optimization, staking shifts, cross-chain arbitrage, and sentiment-driven portfolio adjustment."
    },
    {
      question: "Do I need to know how to code?",
      answer: "No. Z4R0 is designed to be plug-and-play. Users will interact via the dApp interface. Developers can optionally create or upload new modules."
    },
    {
      question: "Which chains does Z4R0 support?",
      answer: "Z4R0 launches on Ethereum mainnet and plans to expand to Arbitrum, Optimism, zkSync, BNB Chain, and others via LayerZero & IBC."
    },
    {
      question: "What is $ZRX used for?",
      answer: "$ZRX is the governance and utility token. It's used to stake agents, vote on DAO proposals, access plug-ins, and earn rewards."
    },
    {
      question: "How do I earn $ZRX?",
      answer: "You can earn $ZRX by contributing strategies, building modules, providing data feeds, running agent nodes, or voting in DAO decisions."
    },
    {
      question: "Is this non-custodial?",
      answer: "Yes. All funds remain in user wallets unless a smart contract strategy explicitly moves them. Agents operate on-chain with transparency."
    },
    {
      question: "Is Z4R0 open-source?",
      answer: "Yes. Core contracts and SDKs will be open-sourced. Strategy modules may optionally be private or monetized."
    },
    {
      question: "How can I get involved?",
      answer: "Join the DAO, stake $ZRX, test early modules, vote on proposals, or build custom agents using the SDK."
    }
  ];

  return (
    <section className="w-full bg-[#010613] py-20">
      <div className="w-[70vw] mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Image
            src="/images/logo-white.png"
            alt="Z4R0 Logo"
            width={40}
            height={40}
          />
          <h2 className="text-white text-3xl font-medium font-[var(--font-aldrich)]">
            FAQ
          </h2>
        </div>

        <div className="space-y-0">
          {faqItems.map((item, index) => (
            <div key={index} className="border-b border-gray-800">
              <button
                className="w-full flex justify-between items-center py-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h3 className="text-white text-xl font-medium">{item.question}</h3>
                <svg 
                  className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 10L12 14L16 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 text-lg">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 