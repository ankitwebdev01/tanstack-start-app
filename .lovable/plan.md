# BeastRootMax — Round 2 Plan

## 1. Brand Symbol (do this FIRST, in chat only)

Generate a unique BeastRootMax mark — a stylized fanged beast skull whose lower jaw transforms into upward-shooting roots, capped with a vertical arrow spine. Single-color (blood red on black), flat vector feel, scalable from favicon to PDF cover.

- Output: `src/assets/brand-mark.png` (transparent PNG, 1024×1024)
- Show in chat. **Wait for approval.**
- Once approved, wire it into:
  - Navbar (replaces text-only wordmark, mark + "BEASTROOTMAX")
  - Footer
  - Hero section (subtle large watermark behind headline)
  - Course card top-corner accent
  - Favicon (`public/favicon.png`)
  - PDF cover pages (all 3 packs) and PDF page-footer corner

## 2. Hide UPI ID — show "Payment Code" instead

On `/checkout/$packId`:
- Remove the visible `9958510843@fam` UPI line and the copy button
- Show a generated **Payment Code** like `BRM-A4F9-99` (deterministic from pack price + short random) under the QR
- QR still encodes the real UPI URL so scans/UPI-app button keep working
- Instructions updated: "Scan QR → Pay → DM screenshot + your Payment Code to @beastrootmax"
- Footer also stops listing the raw UPI

## 3. Gated PDF download (manual unlock code)

Flow:
1. Buyer pays, DMs screenshot + Payment Code to @beastrootmax
2. You reply with an **unlock code** (e.g. `BEAST-7K3M`)
3. On `/checkout/$packId` (and a new `/unlock` page reachable from navbar), buyer enters code → PDF download button appears

Implementation:
- Codes stored as a small map in `src/lib/unlock-codes.ts` (you edit this file to add/revoke codes; each code maps to a pack id). Keeps it simple, no backend.
- On valid code: show a prominent "Download your PDF" button linking to `/pdfs/BeastRootMax_<Pack>.pdf` (files placed in `public/pdfs/`)
- Wrong code: shake + "Invalid code — DM @beastrootmax"
- Code persisted in `localStorage` so refresh keeps access

## 4. Fix Pro ₹499 PDF — add the missing 4-Week Diet Chart

Rebuild `BeastRootMax_Pro_499.pdf`:
- Add a full **4-Week Diet Chart** chapter: 4 weekly tables (Mon–Sun × 6 meals: wake / breakfast / mid-morning / lunch / evening / dinner), with weekly progression notes (Wk1 foundation → Wk4 peak)
- Veg + non-veg variants per week
- Re-run visual QA (every page → JPEG → inspect for clipping/overflow)
- Same fix verified present in Elite ₹999 (it should already extend this to 8 weeks — confirm during QA)
- Re-deliver all 3 PDFs in chat as artifacts before wiring into `public/pdfs/`

## 5. New pages (multi-page expansion)

Add three new routes, each with unique `head()` SEO metadata, hero, scroll reveals, and brand mark:

- **`/results`** — Testimonials & transformation stories. Grid of student cards (name, age, weeks, height gain, quote, star rating), big "+3.2 cm avg" stat band, before/after style mock cards.
- **`/science`** — How It Works. Sections on growth plates, HGH & deep sleep, spinal decompression, nutrition stack, posture. Diagrams via icon + text blocks. Cited-feel without fake citations.
- **`/faq`** — Accordion of 15+ questions (age limits, results timeline, refund policy, delivery, vegetarian options, supplements safety, etc.)

Navbar updated to include: Home · Courses · Science · Results · FAQ · Unlock · Contact (mobile menu added if not already).

## 6. Instagram auto-reply / auto-DM — guide (chat answer, no code)

Will deliver a concise written guide in chat covering:
- **Native option:** Instagram's built-in **Saved Replies** + **Keyword auto-reply** in DMs (Professional account → Inbox tools). Limited but free.
- **Meta-approved tools:** ManyChat, MobileMonkey, Chatfuel — connect IG Business → set comment-trigger ("send pdf") → auto-reply in comments + auto-DM with link/code. ManyChat is the easiest; free tier covers ~1k contacts.
- **DIY:** Meta Graph API (Instagram Messaging API) — requires IG Business + Facebook Page + app review. Webhook on `comments` → reply + send DM. Most control, most setup.
- **Compliance notes:** must be IG Business/Creator account, 24-hour messaging window, no spammy bulk DMs (gets shadowbanned).
- **Recommended for you:** ManyChat free plan + a "comment 'GROW' to get the link" reel CTA.

---

## Execution order

1. Generate brand mark → show in chat → STOP
2. After approval: rebuild Pro PDF (add 4-week chart) + verify Elite → show all 3 in chat → STOP
3. After PDF approval: implement website changes (logo wiring, payment code, unlock flow, 3 new pages, navbar, footer, favicon, PDFs to `public/pdfs/`)
4. Reply with the IG automation guide alongside step 1 so you can start setting it up in parallel

## Out of scope (ask if you want them)

- Real backend for unlock codes (Lovable Cloud) — current plan uses a static code file you edit
- Email/SMS delivery of PDFs
- Removing the "Edit with Lovable" badge — that's already a publish setting toggle, not a CSS task; I'll flip it via publish settings when you publish
