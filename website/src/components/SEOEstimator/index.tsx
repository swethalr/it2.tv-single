"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import SearchableDropdown from "./SearchableDropdown";
import type { EstimatorFormData, Step, ScopeType } from "@/src/components/SEOEstimator/type";

// ─── GMB CATEGORIES ──────────────────────────────────────────────────────────
const GMB_CATEGORIES: string[] = [
  "Accountant","Acupuncture clinic","Advertising agency","Air conditioning contractor",
  "Airport","Animal hospital","Antique store","Apartment complex","Appliance repair service",
  "Architect","Art gallery","Auto body shop","Auto parts store","Auto repair shop",
  "Bakery","Bank","Bar","Barbershop","Beauty salon","Bicycle store","Book store",
  "Bowling alley","Breakfast restaurant","Brewery","Bridal shop","Building contractor",
  "Burger restaurant","Bus company","Cabinet store","Car dealer","Car rental agency",
  "Car wash","Catering food and drink company","Cemetery","Chiropractor","Church",
  "City hall","Cleaning service","Clothing store","Coffee shop","Computer repair service",
  "Construction company","Convenience store","Cosmetics store","Counselor",
  "Dance studio","Day spa","Daycare center","Dental clinic","Department store",
  "Dermatologist","Diner","Dog trainer","Driving school","Drug store",
  "Dry cleaner","Electrical installation service","Electronics store",
  "Emergency room","Employment agency","Event planner","Eye care center",
  "Family counselor","Fast food restaurant","Financial planner","Fitness center",
  "Florist","Freight forwarding service","Funeral home","Furniture store",
  "Gas station","General contractor","Gift shop","Glass repair service",
  "Golf club","Graphic designer","Grocery store","Guest house","Gym",
  "Hardware store","Health food store","Home goods store","Home improvement store",
  "Hospice","Hospital","Hotel","House cleaning service","HVAC contractor",
  "Immigration attorney","Indian restaurant","Insurance agency","Interior designer",
  "Investment service","Italian restaurant","Japanese restaurant","Jewelry store",
  "Kindergarten","Kitchen remodeler","Landscaping company","Language school",
  "Laundromat","Law firm","Lawn care service","Library","Liquor store",
  "Locksmith","Logistics service","Massage therapist","Medical center",
  "Mental health service","Mexican restaurant","Mortgage broker","Motel",
  "Moving company","Music school","Nail salon","Night club","Notary public",
  "Nursing home","Nutritionist","Occupational therapist","Optometrist",
  "Orthodontist","Orthopedic surgeon","Outdoor furniture store","Painter",
  "Party planner","Pawn shop","Pediatrician","Personal injury attorney",
  "Personal trainer","Pet groomer","Pet store","Pharmacy","Photo studio",
  "Physical therapist","Pizza restaurant","Plastic surgeon","Plumber",
  "Podiatrist","Pool cleaning service","Printing service","Private investigator",
  "Property management company","Psychiatrist","Psychologist","Real estate agency",
  "Recruiting agency","Rehabilitation center","Restaurant","Roofing contractor",
  "School","Security guard service","Security system supplier","Senior center",
  "Shoe store","Skin care clinic","Sleep clinic","Small appliance repair service",
  "Social worker","Solar energy contractor","Spa","Speech pathologist",
  "Sports club","Storage facility","Supermarket","Sushi restaurant",
  "Tattoo shop","Tax preparation service","Telecommunications service provider",
  "Thai restaurant","Theater","Tire shop","Title company","Tourist attraction",
  "Towing service","Transportation service","Travel agency","Tree service",
  "Trucking company","Tutoring service","Urgent care center","Used car dealer",
  "Vacation home rental agency","Veterinarian","Video production service",
  "Vietnamese restaurant","Web designer","Wedding photographer","Wedding planner",
  "Weight loss service","Window cleaning service","Window installation service",
  "Wine bar","Yoga studio","Zoo",
];

// ─── STEP LABELS ─────────────────────────────────────────────────────────────
const STEPS = ["Business Profile", "Market Capacity", "SEO Level", "Strategy & Price"];

// ─── SCOPE OPTIONS ───────────────────────────────────────────────────────────
const SCOPE_OPTIONS: { value: ScopeType; label: string; desc: string; icon: string }[] = [
  { value: "Area", label: "Area Based", desc: "Neighborhood/Local Dominance", icon: "📍" },
  { value: "City", label: "City Based", desc: "Metropolitan Market Capture", icon: "🏙️" },
  { value: "Region", label: "Region Based", desc: "State/Multi-City Authority", icon: "🗺️" },
  { value: "National", label: "National Based", desc: "Countrywide Search Dominance", icon: "🇺🇸" },
  { value: "Global", label: "Global Based", desc: "International Market Authority", icon: "🌍" },
];

export default function SEOEstimator() {
  const [step, setStep] = useState<Step>(1);

  // Step 1 — Location
  const [categoryQuery, setCategoryQuery]   = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [country, setCountry]   = useState("");
  const [state, setState]       = useState("");
  const [city, setCity]         = useState("");
  const [localArea, setLocalArea] = useState("");

  // Geo data from API
  const [countries, setCountries]   = useState<string[]>([]);
  const [states, setStates]         = useState<string[]>([]);
  const [cities, setCities]         = useState<string[]>([]);
  const [localAreas, setLocalAreas] = useState<string[]>([]);

  // Loading states
  const [loadingCountries, setLoadingCountries] = useState(false);
  const [loadingStates, setLoadingStates]       = useState(false);
  const [loadingCities, setLoadingCities]       = useState(false);
  const [loadingLocal, setLoadingLocal]         = useState(false);

  // Step 2 & 3 & 4 data
  const [form, setForm] = useState<EstimatorFormData>({ 
    businessName: "", 
    website: "", 
    email: "",
    currentCalls: 0,
    currentWalkins: 0,
    currentBookings: 0,
    targetCalls: 0,
    targetWalkins: 0,
    targetBookings: 0,
    scope: undefined
  });
  
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted]   = useState(false);
  const [submitError, setSubmitError] = useState("");

  // ── Fetch countries on mount ────────────────────────────────────────────────
  useEffect(() => {
    setLoadingCountries(true);
    fetch("/api/geo/countries")
      .then((r) => r.json())
      .then((data: string[]) => setCountries(data))
      .catch(() => setCountries([]))
      .finally(() => setLoadingCountries(false));
  }, []);

  // ── Fetch states when country changes ──────────────────────────────────────
  useEffect(() => {
    if (!country) { setStates([]); return; }
    setLoadingStates(true);
    setState(""); setCity(""); setLocalArea("");
    setStates([]); setCities([]); setLocalAreas([]);
    fetch(`/api/geo/states?country=${encodeURIComponent(country)}`)
      .then((r) => r.json())
      .then((data: string[]) => setStates(data))
      .catch(() => setStates([]))
      .finally(() => setLoadingStates(false));
  }, [country]);

  // ── Fetch cities when state changes ────────────────────────────────────────
  useEffect(() => {
    if (!country || !state) { setCities([]); return; }
    setLoadingCities(true);
    setCity(""); setLocalArea("");
    setCities([]); setLocalAreas([]);
    fetch(`/api/geo/cities?country=${encodeURIComponent(country)}&state=${encodeURIComponent(state)}`)
      .then((r) => r.json())
      .then((data: string[]) => setCities(data))
      .catch(() => setCities([]))
      .finally(() => setLoadingCities(false));
  }, [country, state]);

  // ── Fetch local areas when city changes ────────────────────────────────────
  useEffect(() => {
    if (!city) { setLocalAreas([]); return; }
    setLoadingLocal(true);
    setLocalArea("");
    setLocalAreas([]);
    fetch(`/api/geo/localareas?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}`)
      .then((r) => r.json())
      .then((data: string[]) => setLocalAreas(data))
      .catch(() => setLocalAreas([]))
      .finally(() => setLoadingLocal(false));
  }, [city, country]);

  // ── Computed values ─────────────────────────────────────────────────────────
  const filteredCategories = useMemo(
    () => GMB_CATEGORIES.filter((c) => c.toLowerCase().includes(categoryQuery.toLowerCase())),
    [categoryQuery]
  );

  // Calculate gap
  const currentTotal = useMemo(() => 
    (form.currentCalls || 0) + (form.currentWalkins || 0) + (form.currentBookings || 0),
    [form.currentCalls, form.currentWalkins, form.currentBookings]
  );
  
  const targetTotal = useMemo(() => 
    (form.targetCalls || 0) + (form.targetWalkins || 0) + (form.targetBookings || 0),
    [form.targetCalls, form.targetWalkins, form.targetBookings]
  );
  
  const gap = targetTotal - currentTotal;

  // Calculate price based on scope and gap
  const calculatedPrice = useMemo(() => {
    if (!form.scope) return 0;
    
    const scopeBasePrice: Record<ScopeType, number> = {
      "Area": 1500,
      "City": 2500,
      "Region": 5500,
      "National": 8500,
      "Global": 15000
    };
    
    const base = scopeBasePrice[form.scope] || 1500;
    const gapBonus = gap > 500 ? Math.floor((gap - 500) / 100) * 500 : 0;
    
    return base + gapBonus;
  }, [form.scope, gap]);

  // Calculate tier info
  const tierInfo = useMemo(() => {
    if (!form.scope) return null;
    
    const scopeMultiplier: Record<ScopeType, number> = {
      "Area": 1, "City": 1.5, "Region": 2.5, "National": 4, "Global": 8
    };
    
    const weightedGap = gap * (scopeMultiplier[form.scope] || 1);
    
    if (form.scope === "Area" || form.scope === "City") {
      if (weightedGap <= 300) return { tier: "Local Map Dominance", price: "$1,500" };
      else if (weightedGap <= 800) return { tier: "City Market Leader", price: "$3,500" };
      else return { tier: "Total Local Market Capture", price: "$8,500+" };
    } else if (form.scope === "Region") {
      return { tier: "Regional Authority Engine", price: "$5,500" };
    } else if (form.scope === "National") {
      return { tier: "National Enterprise AI", price: "$8,500+" };
    } else {
      return { tier: "Global SEO Dominance", price: "$15,000+" };
    }
  }, [form.scope, gap]);

  const canProceedStep1 = selectedCategory && country && state && city;
  const canProceedStep2 = targetTotal > 0;
  const canProceedStep3 = !!form.scope;
  const canProceedStep4 = form.businessName.trim() && form.email.trim();

  // ── Reset ───────────────────────────────────────────────────────────────────
  const handleReset = useCallback(() => {
    setStep(1);
    setCategoryQuery(""); setSelectedCategory("");
    setCountry(""); setState(""); setCity(""); setLocalArea("");
    setForm({ 
      businessName: "", 
      website: "", 
      email: "",
      currentCalls: 0,
      currentWalkins: 0,
      currentBookings: 0,
      targetCalls: 0,
      targetWalkins: 0,
      targetBookings: 0,
      scope: undefined
    });
    setSubmitted(false); setSubmitError("");
  }, []);

  // ── Submit ──────────────────────────────────────────────────────────────────
  const handleSubmit = async () => {
    if (!canProceedStep4 || !form.scope) return;
    setSubmitting(true);
    setSubmitError("");
    try {
      const res = await fetch("/api/send-estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          category: selectedCategory,
          country, state, city, localArea,
          baseline: {
            current: {
              calls: form.currentCalls,
              walkins: form.currentWalkins,
              bookings: form.currentBookings
            },
            target: {
              calls: form.targetCalls,
              walkins: form.targetWalkins,
              bookings: form.targetBookings
            }
          },
          gap,
          scope: form.scope,
          tier: tierInfo?.tier,
          totalPrice: calculatedPrice,
          form,
        }),
      });
      if (!res.ok) throw new Error("Failed to send");
      setSubmitted(true);
    } catch {
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // ── Progress ────────────────────────────────────────────────────────────────
  const progressPercent = (step / 4) * 100;

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">

        {/* ── Header ── */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-800 to-green-600 text-white text-xs font-bold tracking-widest uppercase px-5 py-2 rounded-full mb-5 shadow-lg shadow-green-900/25">
            <span>✦</span> SEO STRATEGY ESTIMATOR <span>✦</span>
          </div>
          <h2 className="h2 font-extrabold text-green-900 leading-tight mb-3">
            Reveal Your{" "}
            <span className="bg-gradient-to-r from-green-700 to-emerald-500 bg-clip-text text-transparent">
              Market Potential
            </span>
          </h2>
          <p className="text-green-700 text-base sm:text-lg">
            Discover exactly how many leads your business can capture with strategic SEO
          </p>
        </div>

        {/* ── Progress bar ── */}
        <div className="mb-2">
          <div className="h-1.5 bg-green-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-green-700 to-emerald-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        {/* ── Step indicators ── */}
        <div className="flex justify-between mb-8 px-1">
          {STEPS.map((label, i) => {
            const stepNum = (i + 1) as Step;
            const done    = step > stepNum;
            const active  = step === stepNum;
            return (
              <button
                key={i}
                onClick={() => done && setStep(stepNum)}
                className="flex flex-col items-center flex-1 gap-1"
              >
                <div className={`
                  w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
                  ${done  ? "bg-gradient-to-br from-green-700 to-emerald-500 text-white shadow-md shadow-green-900/20"
                          : active ? "bg-white border-2 border-green-600 text-green-700 shadow-[0_0_0_4px_rgba(22,163,74,0.15)]"
                                   : "bg-green-100 border border-green-200 text-green-400"}
                `}>
                  {done ? "✓" : stepNum}
                </div>
                <span className={`text-[10px] sm:text-xs font-medium hidden sm:block ${active ? "text-green-700" : "text-green-400"}`}>
                  {label}
                </span>
              </button>
            );
          })}
        </div>

        {/* ── Main card ── */}
        <div className="bg-white rounded-2xl shadow-2xl shadow-green-900/10 border border-green-100 overflow-hidden">

          {/* Card header */}
          <div className="bg-gradient-to-r from-green-900 to-green-700 px-6 sm:px-8 py-6">
            <h2 className="text-white text-xl font-bold">
              {step === 1 && "📍 Business Profile & Location"}
              {step === 2 && "📊 Baseline vs Market Capacity"}
              {step === 3 && "🚀 Choose Your SEO Level"}
              {step === 4 && "✨ Reveal Strategy & Pricing"}
            </h2>
            <p className="text-green-300 text-sm mt-1">
              {step === 1 && "Select your business category and target location"}
              {step === 2 && "Set your current baseline and target lead volume"}
              {step === 3 && "Select your target scope and dominance level"}
              {step === 4 && "Enter your details to unlock your custom strategy & price"}
            </p>
          </div>

          {/* Card body */}
          <div className="p-6 sm:p-8">

            {/* ════════════════════════════════════════════════════════ STEP 1 */}
            {step === 1 && (
              <div className="space-y-8">

                {/* Category */}
                <div>
                  <label className="block text-[11px] font-semibold text-green-800 mb-2 uppercase tracking-wider">
                    Business Category
                  </label>
                  <div className="relative mb-3">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-green-500">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
                      </svg>
                    </span>
                    <input
                      type="text"
                      placeholder="Search your business category..."
                      value={categoryQuery}
                      onChange={(e) => { setCategoryQuery(e.target.value); setSelectedCategory(""); }}
                      className="w-full pl-10 pr-4 py-3 border-2 border-green-200 rounded-xl text-sm text-green-950 outline-none focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.15)] transition-all"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto pr-1">
                    {filteredCategories.map((cat) => (
                      <button
                        key={cat}
                        type="button"
                        onClick={() => { setSelectedCategory(cat); setCategoryQuery(cat); }}
                        className={`
                          px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 border
                          ${selectedCategory === cat
                            ? "bg-gradient-to-r from-green-700 to-emerald-600 text-white border-transparent shadow-md shadow-green-900/20"
                            : "bg-green-50 text-green-800 border-green-200 hover:border-green-400 hover:bg-green-100"
                          }
                        `}
                      >
                        {cat}
                      </button>
                    ))}
                  </div>
                  {selectedCategory && (
                    <p className="mt-2 text-xs text-green-700 font-semibold">
                      ✓ Selected: <span className="text-green-600">{selectedCategory}</span>
                    </p>
                  )}
                </div>

                {/* Location dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <SearchableDropdown
                    label="Country"
                    placeholder="Search country..."
                    options={countries}
                    value={country}
                    onChange={(v) => setCountry(v)}
                    loading={loadingCountries}
                  />
                  <SearchableDropdown
                    label="State / Province / Region"
                    placeholder="Search state..."
                    options={states}
                    value={state}
                    onChange={(v) => setState(v)}
                    disabled={!country}
                    loading={loadingStates}
                  />
                  <SearchableDropdown
                    label="City"
                    placeholder="Search city..."
                    options={cities}
                    value={city}
                    onChange={(v) => setCity(v)}
                    disabled={!state}
                    loading={loadingCities}
                  />
                  <SearchableDropdown
                    label="Local Area / Neighbourhood"
                    placeholder="Search local area..."
                    options={localAreas}
                    value={localArea}
                    onChange={(v) => setLocalArea(v)}
                    disabled={!city}
                    loading={loadingLocal}
                    optional
                  />
                </div>

                {/* CTA */}
                <button
                  onClick={() => canProceedStep1 && setStep(2)}
                  disabled={!canProceedStep1}
                  className={`
                    w-full py-4 rounded-xl font-bold text-base tracking-wide transition-all duration-300
                    ${canProceedStep1
                      ? "bg-gradient-to-r from-green-800 via-green-700 to-emerald-600 text-white shadow-lg shadow-green-900/30 hover:shadow-xl hover:shadow-green-900/40 hover:-translate-y-0.5"
                      : "bg-green-100 text-green-400 cursor-not-allowed"
                    }
                  `}
                >
                  {canProceedStep1 ? "Continue to Market Capacity →" : "Complete all required fields to continue"}
                </button>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════ STEP 2 */}
            {step === 2 && (
              <div className="space-y-6">
                <p className="text-green-700 text-sm">
                  Set your current baseline and target lead volume. We&apos;ll calculate the gap to determine your investment level.
                </p>

                {/* Current Baseline Inputs */}
                <div className="bg-green-50 rounded-xl p-4 border border-green-200">
                  <h4 className="text-green-800 font-bold text-sm mb-3">📊 Current Monthly Baseline</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {([
                      { key: "currentCalls" as const, label: "Current Calls/mo", placeholder: "0" },
                      { key: "currentWalkins" as const, label: "Current Walk-ins/mo", placeholder: "0" },
                      { key: "currentBookings" as const, label: "Current Bookings/mo", placeholder: "0" },
                    ]).map((f) => (
                      <div key={f.key}>
                        <label className="block text-[10px] font-semibold text-green-600 mb-1 uppercase">{f.label}</label>
                        <input
                          type="number"
                          placeholder={f.placeholder}
                          value={form[f.key] || ""}
                          onChange={(e) => setForm((p) => ({ ...p, [f.key]: parseInt(e.target.value) || 0 }))}
                          className="w-full px-3 py-2 border-2 border-green-200 rounded-lg text-sm text-green-950 outline-none focus:border-green-600 transition-all"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Target Sliders */}
                <div className="space-y-5">
                  {([
                    { 
                      key: "targetCalls" as const, 
                      label: "Target Phone Calls / Month", 
                      max: 1000, 
                      step: 10,
                    },
                    { 
                      key: "targetWalkins" as const, 
                      label: "Target Walk-ins / Directions", 
                      max: 800, 
                      step: 10,
                    },
                    { 
                      key: "targetBookings" as const, 
                      label: "Target Bookings / Enquiries", 
                      max: 500, 
                      step: 5,
                    },
                  ]).map((slider) => {
                    const value = form[slider.key] || 0;
                    const daily = Math.ceil(value / 30);
                    return (
                      <div key={slider.key} className="bg-white rounded-xl p-4 border-2 border-green-100">
                        <div className="flex justify-between items-center mb-3">
                          <span className="font-semibold text-green-800 text-sm">{slider.label}</span>
                          <span className="text-green-600 font-black text-lg">{value}</span>
                        </div>
                        <input
                          type="range"
                          min="0"
                          max={slider.max}
                          step={slider.step}
                          value={value}
                          onChange={(e) => setForm((p) => ({ ...p, [slider.key]: parseInt(e.target.value) }))}
                          className="w-full h-2 bg-green-200 rounded-lg appearance-none cursor-pointer accent-green-600 hover:accent-green-700"
                        />
                        {value > 0 && (
                          <p className="mt-2 text-xs text-green-600 font-semibold">
                            🎯 That&apos;s approx <span className="text-green-800">{daily}</span> leads per day
                          </p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Gap Analysis Preview */}
                {gap > 0 && (
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl p-4 text-white text-center">
                    <p className="text-green-100 p font-bold uppercase tracking-wider mb-1">Lead Gap to Capture</p>
                    <p className="text-xl font-black">+{gap.toLocaleString()} <span className="text-lg font-normal">leads/mo</span></p>
                  </div>
                )}

                {submitError && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-2 rounded-xl">
                    ⚠️ {submitError}
                  </p>
                )}

                <div className="flex gap-3 pt-2">
                  <button onClick={() => setStep(1)}
                    className="flex-1 py-3.5 rounded-xl border-2 border-green-200 text-green-700 font-semibold hover:bg-green-50 transition-all text-sm">
                    ← Back
                  </button>
                  <button
                    onClick={() => {
                      if (targetTotal <= currentTotal) {
                        setSubmitError("Target volume must be higher than current baseline");
                        return;
                      }
                      setSubmitError("");
                      setStep(3);
                    }}
                    disabled={!canProceedStep2}
                    className={`flex-[2] py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${canProceedStep2 ? "bg-gradient-to-r from-green-800 to-green-600 text-white shadow-lg shadow-green-900/25 hover:-translate-y-0.5" : "bg-green-100 text-green-400 cursor-not-allowed"}`}
                  >
                    Configure SEO Infrastructure →
                  </button>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════ STEP 3 */}
            {step === 3 && (
              <div className="space-y-6">
                <p className="text-green-700 text-sm">
                  Select your target scope and dominance level. This determines the technical infrastructure required.
                </p>

                {/* Scope Selection */}
                <div className="space-y-3">
                  {SCOPE_OPTIONS.map((scope) => (
                    <button
                      key={scope.value}
                      type="button"
                      onClick={() => setForm((p): EstimatorFormData => ({ ...p, scope: scope.value }))}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all duration-200 flex items-center gap-4
                        ${form.scope === scope.value
                          ? "border-green-600 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg shadow-green-900/10"
                          : "border-green-100 bg-white hover:border-green-300 hover:shadow-md"
                        }
                      `}
                    >
                      <span className="text-2xl">{scope.icon}</span>
                      <div className="flex-1">
                        <div className="font-bold text-green-900">{scope.label}</div>
                        <div className="text-xs text-green-600">{scope.desc}</div>
                      </div>
                      {form.scope === scope.value && (
                        <span className="text-green-600 font-bold text-sm">✓ Selected</span>
                      )}
                    </button>
                  ))}
                </div>

             

                <div className="flex gap-3 pt-2">
                  <button onClick={() => setStep(2)}
                    className="flex-1 py-3.5 rounded-xl border-2 border-green-200 text-green-700 font-semibold hover:bg-green-50 transition-all text-sm">
                    ← Back
                  </button>
                  <button
                    onClick={() => canProceedStep3 && setStep(4)}
                    disabled={!canProceedStep3}
                    className={`flex-[2] py-3.5 rounded-xl font-bold text-sm transition-all duration-300 ${canProceedStep3 ? "bg-gradient-to-r from-green-800 to-green-600 text-white shadow-lg shadow-green-900/25 hover:-translate-y-0.5" : "bg-green-100 text-green-400 cursor-not-allowed"}`}
                  >
                    Reveal Strategy & Price →
                  </button>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════ STEP 4 */}
            {step === 4 && !submitted && (
              <div className="space-y-6">

                {/* Summary recap */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-5 border border-green-200">
                  <h3 className="text-green-900 font-bold text-sm mb-3">📋 Your Strategy Summary</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { label: "Category",    value: selectedCategory },
                      { label: "Location",    value: [city, state, country].filter(Boolean).join(", ") },
                      { label: "Lead Gap",    value: `+${gap} leads/mo` },
                      { label: "Scope",       value: form.scope || "" },
                    ].map((item, i) => (
                      <div key={i} className="bg-white rounded-xl p-3 border border-green-100">
                        <p className="text-[10px] text-green-500 font-semibold uppercase tracking-wider mb-1">{item.label}</p>
                        <p className="text-sm font-bold text-green-900 leading-tight">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Blurred price teaser */}
                <div className="relative bg-gradient-to-r from-green-900 to-green-700 rounded-2xl p-6 text-center overflow-hidden">
                  <p className="text-green-300 text-xs uppercase tracking-wider mb-1">Your Monthly Investment</p>
                  <p className="text-5xl font-black text-white blur-sm select-none">
                    ${calculatedPrice.toLocaleString()}
                  </p>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/30 backdrop-blur-[500px] px-5 py-2 rounded-full text-white text-sm font-semibold">
                      🔒 Fill details below to unlock
                    </div>
                  </div>
                </div>

                {/* Contact form */}
                <div className="space-y-4">
                  {([
                    { key: "businessName" as const, label: "Business Name *",  placeholder: "Your Business Name",      type: "text",  icon: "🏢" },
                    { key: "website"      as const, label: "Website URL",       placeholder: "https://yourbusiness.com", type: "url",   icon: "🌐" },
                    { key: "email"        as const, label: "Email Address *",   placeholder: "your@email.com",           type: "email", icon: "✉️" },
                  ] as const).map((f) => (
                    <div key={f.key}>
                      <label className="block text-[11px] font-semibold text-green-800 mb-1.5 uppercase tracking-wider">
                        {f.label}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-base">{f.icon}</span>
                        <input
                          type={f.type}
                          placeholder={f.placeholder}
                          value={form[f.key]}
                          onChange={(e) => setForm((p) => ({ ...p, [f.key]: e.target.value }))}
                          className="w-full pl-10 pr-4 py-3 border-2 border-green-200 rounded-xl text-sm text-green-950 outline-none focus:border-green-600 focus:shadow-[0_0_0_3px_rgba(22,163,74,0.15)] transition-all"
                        />
                      </div>
                    </div>
                  ))}
                </div>

                {submitError && (
                  <p className="text-red-600 text-sm bg-red-50 border border-red-200 px-4 py-2 rounded-xl">
                    ⚠️ {submitError}
                  </p>
                )}

                <div className="flex gap-3">
                  <button onClick={() => setStep(3)}
                    className="flex-1 py-3.5 rounded-xl border-2 border-green-200 text-green-700 font-semibold hover:bg-green-50 transition-all text-sm">
                    ← Back
                  </button>
                  <button
                    onClick={handleSubmit}
                    disabled={!canProceedStep4 || submitting}
                    className={`flex-[2] py-4 rounded-xl font-extrabold text-sm tracking-wide transition-all duration-300 ${canProceedStep4 && !submitting ? "bg-gradient-to-r from-green-900 via-green-700 to-emerald-600 text-white shadow-xl shadow-green-900/35 hover:-translate-y-0.5 hover:shadow-2xl" : "bg-green-100 text-green-400 cursor-not-allowed"}`}
                  >
                    {submitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                        </svg>
                        Sending your strategy...
                      </span>
                    ) : "🚀 Reveal My Strategy & Price"}
                  </button>
                </div>
              </div>
            )}

            {/* ════════════════════════════════════════════════════════ SUCCESS */}
            {step === 4 && submitted && (
              <div className="space-y-6">
                <div className="text-center py-4">
                  <div className="text-5xl mb-3">🎉</div>
                  <h2 className="text-2xl font-extrabold text-green-900 mb-2">Your Strategy is Ready!</h2>
                  <p className="text-green-600 text-sm">A detailed report has been sent to your email and our team.</p>
                </div>

                {/* Price reveal */}
                <div className="relative bg-gradient-to-br from-green-900 via-green-800 to-emerald-800 rounded-2xl p-8 text-center overflow-hidden shadow-2xl shadow-green-900/40">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-56 h-56 bg-white/3 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <p className="text-green-300 text-xs uppercase tracking-widest mb-2">Monthly Investment</p>
                  <p className="text-6xl sm:text-7xl font-black text-white mb-2">
                    ${calculatedPrice.toLocaleString()}
                    <span className="text-xl font-light text-green-300">/mo</span>
                  </p>
                  <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-5 py-2 mt-2">
                    <span className="text-green-300 text-base">📈</span>
                    <span className="text-white font-semibold text-sm">
                      {tierInfo?.tier || "Custom Strategy"}
                    </span>
                  </div>
                </div>

                {/* Strategy details */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { icon: "🏢", label: "Business",       value: form.businessName },
                    { icon: "🌐", label: "Website",        value: form.website || "—" },
                    { icon: "📍", label: "Location",       value: [localArea, city, state, country].filter(Boolean).join(", ") },
                    { icon: "🏷️", label: "Category",       value: selectedCategory },
                    { icon: "🎯", label: "Lead Target",    value: `+${gap} leads/mo` },
                    { icon: "💰", label: "Est. ROI",       value: `$${(calculatedPrice * 8).toLocaleString()}+ /mo` },
                  ].map((c, i) => (
                    <div key={i} className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <div className="text-xl mb-1">{c.icon}</div>
                      <p className="text-[10px] text-green-500 font-semibold uppercase tracking-wider mb-1">{c.label}</p>
                      <p className="text-sm font-bold text-green-900 break-words leading-tight">{c.value}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-green-50 border border-green-200 rounded-xl p-4 text-center">
                  <p className="text-green-700 text-sm">
                    📧 Sent to <strong>{form.email}</strong> · Our team will reach you within 24 hours
                  </p>
                </div>

                <button onClick={handleReset}
                  className="w-full py-3.5 rounded-xl border-2 border-green-600 text-green-700 font-bold hover:bg-green-50 transition-all text-sm">
                  ← Start New Estimate
                </button>
              </div>
            )}

          </div>
        </div>

        <p className="text-center text-green-500 text-xs mt-6">
          🔒 Your information is secure and used only to provide your SEO strategy
        </p>
      </div>
    </section>
  );
}