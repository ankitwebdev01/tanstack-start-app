import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PACKS } from "@/components/CourseCard";
import { QRCodeSVG } from "qrcode.react";
import { Check, ArrowLeft, Download, Lock, Copy } from "lucide-react";
import { useEffect, useState } from "react";
import {
  PACK_PDF,
  isValidCode,
  isUnlocked,
  markUnlocked,
  paymentCode,
  type PackId,
} from "@/lib/unlock-codes";

export const Route = createFileRoute("/checkout/$packId")({
  component: Checkout,
  notFoundComponent: () => (
    <div className="min-h-screen grid place-items-center">
      <p>Pack not found.</p>
    </div>
  ),
});

const UPI_ID = "9958510843@fam";
const PAYEE_NAME = "BeastRootMax";

function Checkout() {
  const { packId } = Route.useParams();
  const pack = PACKS.find((p) => p.id === packId);
  if (!pack) throw notFound();

  const id = pack.id as PackId;
  const payCode = paymentCode(id, pack.price);
  const pdf = PACK_PDF[id];

  const upiUrl = `upi://pay?pa=${encodeURIComponent(UPI_ID)}&pn=${encodeURIComponent(
    PAYEE_NAME
  )}&am=${pack.price}&cu=INR&tn=${encodeURIComponent(payCode)}`;

  const [unlocked, setUnlocked] = useState(false);
  const [codeInput, setCodeInput] = useState("");
  const [err, setErr] = useState(false);
  const [codeCopied, setCodeCopied] = useState(false);

  useEffect(() => {
    setUnlocked(isUnlocked(id));
  }, [id]);

  const tryUnlock = () => {
    if (isValidCode(id, codeInput)) {
      markUnlocked(id);
      setUnlocked(true);
      setErr(false);
    } else {
      setErr(true);
      setTimeout(() => setErr(false), 1200);
    }
  };

  const copyPayCode = () => {
    navigator.clipboard.writeText(payCode);
    setCodeCopied(true);
    setTimeout(() => setCodeCopied(false), 1500);
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-32 pb-20 container mx-auto px-6 max-w-5xl">
        <Link
          to="/courses"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-blood transition-smooth"
        >
          <ArrowLeft className="w-4 h-4" /> Back to packs
        </Link>

        <div className="grid lg:grid-cols-2 gap-10 mt-8">
          {/* Order summary */}
          <div className="glass rounded-2xl p-8">
            <span className="text-blood text-xs uppercase tracking-widest">Order Summary</span>
            <h1 className="font-display text-5xl mt-2">{pack.name} PACK</h1>
            <p className="text-muted-foreground text-sm mt-1">{pack.tagline}</p>
            <ul className="mt-6 space-y-2 text-sm">
              {pack.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <Check className="w-4 h-4 text-blood mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="border-t border-border/50 mt-8 pt-6 flex justify-between items-baseline">
              <span className="uppercase tracking-widest text-sm">Total</span>
              <span className="font-display text-5xl text-blood">₹{pack.price}</span>
            </div>

            {/* Download / Unlock block */}
            <div className="mt-8 pt-6 border-t border-border/50">
              {unlocked ? (
                <>
                  <div className="flex items-center gap-2 text-blood text-xs uppercase tracking-widest mb-3">
                    <Check className="w-4 h-4" /> Pack Unlocked
                  </div>
                  <a
                    href={pdf.file}
                    download
                    className="w-full inline-flex items-center justify-center gap-2 py-4 rounded-md bg-gradient-blood font-bold uppercase tracking-widest text-sm shadow-blood hover:scale-[1.02] transition-smooth"
                  >
                    <Download className="w-4 h-4" /> Download {pack.name} PDF
                  </a>
                  <p className="text-[11px] text-muted-foreground mt-3">
                    Save the PDF to your device. You can re-download anytime from this page.
                  </p>
                </>
              ) : (
                <>
                  <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-3">
                    <Lock className="w-4 h-4" /> Enter Unlock Code
                  </div>
                  <p className="text-xs text-muted-foreground mb-3">
                    After payment, DM your screenshot + <span className="text-blood">Payment Code</span> to
                    {" "}<span className="text-blood">@beastrootmax</span>. You'll receive an unlock code within 12 hours.
                  </p>
                  <div className={`flex gap-2 ${err ? "animate-shake" : ""}`}>
                    <input
                      value={codeInput}
                      onChange={(e) => setCodeInput(e.target.value)}
                      onKeyDown={(e) => e.key === "Enter" && tryUnlock()}
                      placeholder="BEAST-XXXX"
                      className={`flex-1 px-4 py-3 rounded-md bg-card/50 border ${
                        err ? "border-blood" : "border-border/50"
                      } font-mono text-sm uppercase tracking-wider focus:outline-none focus:border-blood`}
                    />
                    <button
                      onClick={tryUnlock}
                      className="px-5 py-3 rounded-md bg-gradient-blood font-bold uppercase tracking-widest text-xs shadow-blood hover:scale-105 transition-smooth"
                    >
                      Unlock
                    </button>
                  </div>
                  {err && (
                    <p className="text-xs text-blood mt-2">
                      Invalid code — DM @beastrootmax for help.
                    </p>
                  )}
                </>
              )}
            </div>
          </div>

          {/* Payment */}
          <div className="glass rounded-2xl p-8">
            <span className="text-blood text-xs uppercase tracking-widest">Pay via UPI</span>
            <h2 className="font-display text-3xl mt-2">SCAN OR PAY</h2>

            <div className="mt-6 grid place-items-center bg-white p-5 rounded-xl mx-auto w-fit shadow-blood">
              <QRCodeSVG value={upiUrl} size={210} bgColor="#ffffff" fgColor="#000000" />
            </div>

            {/* Payment Code (replaces UPI ID) */}
            <div className="mt-6 flex items-center justify-between glass rounded-lg p-4">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Payment Code</div>
                <div className="font-mono text-blood text-lg tracking-wider">{payCode}</div>
              </div>
              <button
                onClick={copyPayCode}
                className="px-3 py-2 rounded-md border border-border hover:bg-card transition-smooth flex items-center gap-2 text-xs uppercase tracking-widest"
              >
                {codeCopied ? <Check className="w-4 h-4 text-blood" /> : <Copy className="w-4 h-4" />}
                {codeCopied ? "Copied" : "Copy"}
              </button>
            </div>

            <a
              href={upiUrl}
              className="mt-3 block text-center py-3 rounded-md bg-gradient-blood font-bold uppercase tracking-widest text-sm shadow-blood hover:scale-[1.02] transition-smooth"
            >
              Open UPI App · ₹{pack.price}
            </a>

            <ol className="text-xs text-muted-foreground mt-6 space-y-2 list-decimal pl-4">
              <li>Scan the QR or tap the button — pays ₹{pack.price} to BeastRootMax.</li>
              <li>Take a screenshot of the payment success screen.</li>
              <li>
                DM <span className="text-blood">@beastrootmax</span> on Instagram with the screenshot
                + your Payment Code <span className="font-mono text-blood">{payCode}</span>.
              </li>
              <li>You'll receive a <b>BEAST-XXXX</b> unlock code within 12 hours.</li>
              <li>Enter the unlock code (left panel) to download your PDF instantly.</li>
            </ol>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
