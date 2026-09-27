'use client';

import { Ruler, X } from 'lucide-react';

const rows = [
  ['M', '40–42', '27–28'],
  ['L', '42–44', '28–29'],
  ['XL', '44–46', '29–30'],
  ['XXL', '46–48', '30–31'],
];

type SizeGuideProps = {
  open: boolean;
  onClose: () => void;
};

export default function SizeGuide({ open, onClose }: SizeGuideProps) {
  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[75] flex items-center justify-center bg-black/60 p-5 backdrop-blur-sm">
      <div className="w-full max-w-xl bg-[#f4efe5] p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2 text-[#b58d49]">
              <Ruler size={17} />
              <span className="text-[10px] font-bold tracking-[0.2em]">SIZE GUIDE</span>
            </div>
            <h2 className="serif mt-2 text-3xl">Find your fit</h2>
            <p className="mt-2 text-xs leading-6 text-black/50">
              Measurements are approximate. If you are between sizes, choose the larger size for a relaxed fit.
            </p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close size guide">
            <X size={20} />
          </button>
        </div>

        <div className="mt-7 overflow-hidden border border-black/10 bg-white">
          <div className="grid grid-cols-3 bg-[#071725] px-4 py-3 text-[9px] font-bold uppercase tracking-[0.15em] text-white">
            <span>Size</span>
            <span>Chest (inch)</span>
            <span>Length (inch)</span>
          </div>
          {rows.map(([size, chest, length]) => (
            <div
              key={size}
              className="grid grid-cols-3 border-t border-black/5 px-4 py-3 text-sm"
            >
              <span className="font-semibold">{size}</span>
              <span>{chest}</span>
              <span>{length}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
