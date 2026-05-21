import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Tailwind 클래스를 안전하게 합쳐주는 유틸 함수
// 사용 예: cn("px-4 py-2", isActive && "bg-red-500")
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
