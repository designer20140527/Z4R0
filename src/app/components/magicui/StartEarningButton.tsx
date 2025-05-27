"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function StartEarningButton() {
  return (
    <Link
      href="#start"
      className={
        cn(
          "group relative inline-flex items-center justify-start overflow-hidden p-2 rounded-full border-2 border-white bg-white transition-all duration-300",
          "focus:outline-none",
          "h-[64px] min-w-[220px]"
        )
      }
      style={{ height: 64, minWidth: 220 }}
    >
      {/* 动画圆形（背景） */}
      <span
        className={
          cn(
            "absolute left-0 top-0 flex items-center justify-center bg-black rounded-full transition-all duration-300 z-0",
            "w-[60px] h-[60px] group-hover:w-full group-hover:h-full group-hover:bg-[#264188]"
          )
        }
        style={{ transitionProperty: 'width, height, background, border-radius' }}
      />
      {/* 箭头icon */}
      <span
        className={
          cn(
            "absolute left-0 top-0 flex items-center justify-center w-[60px] h-[60px] z-10 transition-all duration-300",
            "group-hover:w-full group-hover:h-full group-hover:left-0 group-hover:top-0"
          )
        }
        style={{ transitionProperty: 'width, height, left, top' }}
      >
        <svg
          className={
            cn(
              "w-6 h-6 transition-all duration-300"
            )
          }
          fill="none"
          stroke="white"
          strokeWidth="2.2"
          viewBox="0 0 24 24"
        >
          <path
            d="M7 17L17 7M17 7H9M17 7V15"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {/* 文字 */}
      <span
        className={
          cn(
            "text-black text-xl font-[var(--font-aldrich)] transition-all duration-300 z-10",
            "mr-[15px] ml-[65px] group-hover:opacity-0 group-hover:translate-x-4"
          )
        }
        style={{ letterSpacing: 1 }}
      >
        Start Earning
      </span>
    </Link>
  );
} 