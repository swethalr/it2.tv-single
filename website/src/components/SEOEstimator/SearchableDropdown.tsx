"use client";

import { useState, useEffect, useRef, useMemo } from "react";

interface Props {
  label: string;
  placeholder: string;
  options: string[];
  value: string;
  onChange: (val: string) => void;
  disabled?: boolean;
  optional?: boolean;
  loading?: boolean;
}

export default function SearchableDropdown({
  label,
  placeholder,
  options,
  value,
  onChange,
  disabled = false,
  optional = false,
  loading = false,
}: Props) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Sync display text with selected value
  useEffect(() => {
    setQuery(value ?? "");
  }, [value]);

  // Close on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
        // If user typed but didn't select, revert
        if (!options.includes(query) && value) setQuery(value);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [query, value, options]);

  const filtered = useMemo(
    () =>
      options
        .filter((o) => o.toLowerCase().includes(query.toLowerCase()))
        .slice(0, 100),
    [options, query]
  );

  const handleSelect = (opt: string) => {
    onChange(opt);
    setQuery(opt);
    setOpen(false);
  };

  return (
    <div className="relative" ref={containerRef}>
      {/* Label */}
      <label className="block text-[11px] font-semibold text-green-800 mb-1.5 uppercase tracking-wider">
        {label}{" "}
        {optional && (
          <span className="text-green-400 font-normal normal-case tracking-normal">
            (Optional)
          </span>
        )}
      </label>

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={loading ? "Loading..." : query}
          disabled={disabled || loading}
          placeholder={
            disabled ? "Select previous field first" : placeholder
          }
          onChange={(e) => {
            setQuery(e.target.value);
            onChange("");
            setOpen(true);
          }}
          onFocus={() => !disabled && !loading && setOpen(true)}
          className={`
            w-full px-3.5 py-3 pr-10 rounded-xl border-2 text-sm transition-all duration-200 outline-none
            ${open ? "border-green-600 shadow-[0_0_0_3px_rgba(22,163,74,0.15)]" : "border-green-200"}
            ${disabled || loading
              ? "bg-green-50 text-gray-400 cursor-not-allowed"
              : "bg-white text-green-950 cursor-text hover:border-green-400"
            }
          `}
        />
        <span className="absolute right-3 top-1/2 -translate-y-1/2 text-green-500 pointer-events-none">
          {loading ? (
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </div>

      {/* Dropdown */}
      {open && !disabled && !loading && (
        <div className="absolute top-[calc(100%+4px)] left-0 right-0 bg-white border-2 border-green-200 rounded-xl shadow-xl max-h-56 overflow-y-auto z-50">
          {filtered.length === 0 ? (
            <div className="px-4 py-3 text-sm text-gray-400">No results found</div>
          ) : (
            filtered.map((opt) => (
              <div
                key={opt}
                onMouseDown={() => handleSelect(opt)}
                className={`
                  px-4 py-2.5 text-sm cursor-pointer transition-colors border-b border-green-50 last:border-0
                  ${opt === value
                    ? "bg-green-50 text-green-800 font-semibold"
                    : "text-green-950 hover:bg-green-50"
                  }
                `}
              >
                {opt === value && (
                  <span className="mr-2 text-green-600">✓</span>
                )}
                {opt}
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}