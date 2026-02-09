"use client";

import { useState } from "react";
import { Share2 } from "lucide-react";

export function ShareSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      const url = window.location.href;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(url);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = url;
        textarea.style.position = "fixed";
        textarea.style.left = "-9999px";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }

      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="mt-12 pt-8 border-t border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <Share2 className="w-5 h-5 text-brand-primary" />
        <span className="font-medium">Share this article</span>
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          onClick={handleCopy}
          className="px-4 py-2 bg-white/10 hover:bg-brand-primary/20 rounded-lg text-sm font-medium transition-colors"
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>
    </div>
  );
}

