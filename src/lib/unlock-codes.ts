// Static unlock codes for the manual DM-based pack delivery.
// When a buyer pays & DMs you the screenshot + payment code,
// reply with the matching unlock code below. They enter it on
// the checkout page → PDF download unlocks.
//
// HOW TO ADD MORE CODES: just append strings to each pack's array.
// The matching is case-insensitive. Codes are stored in the
// buyer's browser (localStorage) so they keep access on refresh.

export type PackId = "starter" | "pro" | "elite";

export const PACK_PDF: Record<PackId, { file: string; label: string }> = {
  starter: { file: "/pdfs/BeastRootMax_Starter_99.pdf", label: "BeastRootMax — Starter Pack" },
  pro:     { file: "/pdfs/BeastRootMax_Pro_499.pdf",    label: "BeastRootMax — Pro Pack" },
  elite:   { file: "/pdfs/BeastRootMax_Elite_999.pdf",  label: "BeastRootMax — Elite Pack" },
};

// Add as many codes as you want. Each one is single-buyer-friendly.
// (You can reuse a code for multiple buyers; it doesn't expire.)
export const UNLOCK_CODES: Record<PackId, string[]> = {
  starter: [
    "BEAST-S1A4", "BEAST-S2B7", "BEAST-S3C9", "BEAST-S4D2", "BEAST-S5E6",
    "BEAST-S6F1", "BEAST-S7G8", "BEAST-S8H3", "BEAST-S9J5", "BEAST-S0K4",
    // OWNER OVERRIDE — keep this private:
    "BEAST-OWNER-99",
  ],
  pro: [
    "BEAST-P1A4", "BEAST-P2B7", "BEAST-P3C9", "BEAST-P4D2", "BEAST-P5E6",
    "BEAST-P6F1", "BEAST-P7G8", "BEAST-P8H3", "BEAST-P9J5", "BEAST-P0K4",
    "BEAST-OWNER-499",
  ],
  elite: [
    "BEAST-E1A4", "BEAST-E2B7", "BEAST-E3C9", "BEAST-E4D2", "BEAST-E5E6",
    "BEAST-E6F1", "BEAST-E7G8", "BEAST-E8H3", "BEAST-E9J5", "BEAST-E0K4",
    "BEAST-OWNER-999",
  ],
};

export function isValidCode(packId: PackId, code: string): boolean {
  const norm = code.trim().toUpperCase();
  return UNLOCK_CODES[packId].some((c) => c.toUpperCase() === norm);
}

const LS_PREFIX = "brm_unlocked_";

export function isUnlocked(packId: PackId): boolean {
  if (typeof window === "undefined") return false;
  return window.localStorage.getItem(LS_PREFIX + packId) === "1";
}

export function markUnlocked(packId: PackId): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(LS_PREFIX + packId, "1");
}

// Deterministic friendly Payment Code per pack (shown instead of UPI ID).
// Buyer DMs this code + screenshot so you can match payment → buyer.
// Format: BRM-{packPrefix}{4 hex from packId}-{price}
export function paymentCode(packId: PackId, price: number): string {
  const prefix = packId[0].toUpperCase();
  // simple deterministic 4-char hash from packId string
  let h = 0;
  for (let i = 0; i < packId.length; i++) h = (h * 31 + packId.charCodeAt(i)) >>> 0;
  const hex = h.toString(16).toUpperCase().padStart(4, "0").slice(0, 4);
  return `BRM-${prefix}${hex}-${price}`;
}
