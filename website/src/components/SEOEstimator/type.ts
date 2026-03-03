export interface GeoOption {
  label: string;
  value: string;
}

export interface BaselineOption {
  label: string;
  leadsMin: number;
  leadsMax: number;
  leadsDisplay: string;
  multiplier: number;
  description: string;
  icon: string;
}

export interface SeoLevelOption {
  label: string;
  basePrice: number;
  description: string;
  icon: string;
  popular?: boolean;
}



export interface EstimatePayload {
  category: string;
  country: string;
  state: string;
  city: string;
  localArea: string;
  baselineIndex: number;
  seoLevelIndex: number;
  totalPrice: number;
  leadsDisplay: string;
  seoLabel: string;
  form: EstimatorFormData;
}
export type ScopeType = "Area" | "City" | "Region" | "National" | "Global";

export interface EstimatorFormData {
  businessName: string;
  website: string;
  email: string;
  // Step 2 - Baseline data
  currentCalls?: number;
  currentWalkins?: number;
  currentBookings?: number;
  targetCalls?: number;
  targetWalkins?: number;
  targetBookings?: number;
  // Step 3 - Scope selection
  scope?: ScopeType;
}

export type Step = 1 | 2 | 3 | 4;
