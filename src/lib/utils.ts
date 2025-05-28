import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge multiple class names into one string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
} 