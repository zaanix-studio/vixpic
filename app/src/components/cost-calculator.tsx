"use client";

import { useState, useMemo } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  TrendingDownIcon,
  TrendingUpIcon,
} from "lucide-react";

const SUBSCRIPTIONS = {
  midjourney: { name: "Midjourney Pro", monthly: 30, imagesIncluded: 900 },
  dalleChat: { name: "ChatGPT Plus", monthly: 20, imagesIncluded: 100 },
  leonardo: { name: "Leonardo Pro", monthly: 24, imagesIncluded: 8500 },
  ideogram: { name: "Ideogram Plus", monthly: 20, imagesIncluded: 1000 },
  adobe: {
    name: "Adobe Firefly Premium",
    monthly: 23,
    imagesIncluded: 100,
  },
} as const;

const BYOK_MODELS = {
  fluxSchnell: {
    name: "FLUX Schnell",
    costPer: 0.003,
    quality: "Fast/Draft",
  },
  fluxDev: { name: "FLUX Dev", costPer: 0.025, quality: "High Quality" },
  fluxPro: { name: "FLUX Pro", costPer: 0.05, quality: "Best" },
  dalle3Hd: { name: "DALL-E 3 HD", costPer: 0.08, quality: "OpenAI Best" },
  dalle3Std: {
    name: "DALL-E 3 Standard",
    costPer: 0.04,
    quality: "OpenAI Fast",
  },
  sdxl: { name: "SDXL", costPer: 0.002, quality: "Open Source" },
} as const;

export function CostCalculator() {
  const [imagesPerMonth, setImagesPerMonth] = useState(500);
  const [currentSub, setCurrentSub] =
    useState<keyof typeof SUBSCRIPTIONS>("midjourney");
  const [byokModel, setByokModel] =
    useState<keyof typeof BYOK_MODELS>("fluxDev");
  const [vixpicTier, setVixpicTier] = useState<29 | 59 | 149>(59);

  const calculations = useMemo(() => {
    const sub = SUBSCRIPTIONS[currentSub];
    const model = BYOK_MODELS[byokModel];

    const subAnnual = sub.monthly * 12;
    const apiCostMonthly = imagesPerMonth * model.costPer;
    const apiCostAnnual = apiCostMonthly * 12;
    const byokYear1 = vixpicTier + apiCostAnnual;
    const byokYear2Plus = apiCostAnnual;
    const savingsYear1 = subAnnual - byokYear1;
    const savingsPercent = Math.round((savingsYear1 / subAnnual) * 100);
    const sub3Year = subAnnual * 3;
    const byok3Year = vixpicTier + apiCostAnnual * 3;
    const savings3Year = sub3Year - byok3Year;

    return {
      subMonthly: sub.monthly,
      subAnnual,
      apiCostMonthly,
      apiCostAnnual,
      byokYear1,
      byokYear2Plus,
      savingsYear1,
      savingsYear2Plus: subAnnual - byokYear2Plus,
      savingsPercent,
      sub3Year,
      byok3Year,
      savings3Year,
      costPerImage: model.costPer,
    };
  }, [imagesPerMonth, currentSub, byokModel, vixpicTier]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatCurrencyPrecise = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="bg-white/[0.03] border-white/[0.06]">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-foreground">Your Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium text-muted-foreground">
                  Images per month
                </label>
                <span className="text-sm font-bold text-[#c9a87c]">
                  {imagesPerMonth.toLocaleString()}
                </span>
              </div>
              <Slider
                value={[imagesPerMonth]}
                onValueChange={(v) => setImagesPerMonth(Array.isArray(v) ? v[0] : v)}
                min={50}
                max={5000}
                step={50}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>50</span>
                <span>5,000</span>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                Current subscription
              </label>
              <Select
                value={currentSub}
                onValueChange={(v) =>
                  v && setCurrentSub(v as keyof typeof SUBSCRIPTIONS)
                }
              >
                <SelectTrigger className="bg-white/[0.03] border-white/[0.08]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(SUBSCRIPTIONS).map(([key, sub]) => (
                    <SelectItem key={key} value={key}>
                      {sub.name} (${sub.monthly}/mo)
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/[0.03] border-white/[0.06]">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg text-foreground">VixPic Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                AI Model
              </label>
              <Select
                value={byokModel}
                onValueChange={(v) =>
                  v && setByokModel(v as keyof typeof BYOK_MODELS)
                }
              >
                <SelectTrigger className="bg-white/[0.03] border-white/[0.08]">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {Object.entries(BYOK_MODELS).map(([key, model]) => (
                    <SelectItem key={key} value={key}>
                      {model.name} ({model.quality}) — ${model.costPer}/img
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div>
              <label className="text-sm font-medium text-muted-foreground block mb-2">
                VixPic License
              </label>
              <div className="flex gap-2">
                {([29, 59, 149] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setVixpicTier(tier)}
                    className={`flex-1 py-2 px-3 rounded-lg border text-sm font-medium transition-all ${
                      vixpicTier === tier
                        ? "border-[#c9a87c]/50 bg-[#c9a87c]/10 text-[#c9a87c]"
                        : "border-white/[0.08] text-muted-foreground hover:border-white/[0.15] hover:text-muted-foreground"
                    }`}
                  >
                    ${tier}
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Results */}
      <div className="grid md:grid-cols-2 gap-4">
        <Card className="border-destructive/20 bg-destructive/5">
          <CardHeader>
            <CardTitle className="text-destructive flex items-center gap-2">
              <TrendingUpIcon size={20} strokeWidth={2} />
              Current Subscription
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {SUBSCRIPTIONS[currentSub].name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-muted-foreground">
                <span>Monthly cost</span>
                <span className="font-semibold">
                  {formatCurrency(calculations.subMonthly)}/mo
                </span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="font-semibold text-foreground">
                  Year 1 Total
                </span>
                <span className="font-bold text-destructive">
                  {formatCurrency(calculations.subAnnual)}
                </span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="font-semibold text-foreground">
                  3-Year Total
                </span>
                <span className="font-bold text-destructive">
                  {formatCurrency(calculations.sub3Year)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-success/20 bg-success/5">
          <CardHeader>
            <CardTitle className="text-success flex items-center gap-2">
              <TrendingDownIcon size={20} strokeWidth={2} />
              VixPic + BYOK
            </CardTitle>
            <CardDescription className="text-muted-foreground">
              {BYOK_MODELS[byokModel].name} at{" "}
              {formatCurrencyPrecise(calculations.costPerImage)}/image
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>VixPic license (one-time)</span>
                <span className="font-semibold">
                  {formatCurrency(vixpicTier)}
                </span>
              </div>
              <div className="flex justify-between text-sm text-muted-foreground">
                <span>
                  API costs ({imagesPerMonth.toLocaleString()} imgs/mo)
                </span>
                <span className="font-semibold">
                  {formatCurrencyPrecise(calculations.apiCostMonthly)}/mo
                </span>
              </div>
              <div className="flex justify-between text-lg pt-2 border-t border-white/[0.06]">
                <span className="font-semibold text-foreground">
                  Year 1 Total
                </span>
                <span className="font-bold text-success">
                  {formatCurrency(calculations.byokYear1)}
                </span>
              </div>
              <div className="flex justify-between text-muted-foreground">
                <span>Year 2+ (no license)</span>
                <span className="font-semibold text-success">
                  {formatCurrency(calculations.byokYear2Plus)}/yr
                </span>
              </div>
              <div className="flex justify-between text-lg pt-2 border-t border-white/[0.06]">
                <span className="font-semibold text-foreground">
                  3-Year Total
                </span>
                <span className="font-bold text-success">
                  {formatCurrency(calculations.byok3Year)}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Savings Banner */}
      <Card className="bg-[#c9a87c] border-0">
        <CardContent className="py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#08080a]">
                {formatCurrency(calculations.savingsYear1)}
              </div>
              <div className="text-[#08080a]/60 mt-1 text-sm">
                Saved in Year 1
              </div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#08080a]">
                {calculations.savingsPercent}%
              </div>
              <div className="text-[#08080a]/60 mt-1 text-sm">Lower Cost</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[#08080a]">
                {formatCurrency(calculations.savings3Year)}
              </div>
              <div className="text-[#08080a]/60 mt-1 text-sm">
                Saved Over 3 Years
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model Comparison */}
      <Card className="bg-white/[0.03] border-white/[0.06]">
        <CardHeader>
          <CardTitle className="text-lg text-foreground">
            API Cost Reference
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            What you&apos;d pay directly to AI providers for{" "}
            {imagesPerMonth.toLocaleString()} images/month
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {Object.entries(BYOK_MODELS).map(([key, model]) => {
              const monthlyCost = imagesPerMonth * model.costPer;
              const isSelected = key === byokModel;
              return (
                <button
                  key={key}
                  onClick={() => setByokModel(key as keyof typeof BYOK_MODELS)}
                  className={`p-3 rounded-xl border text-left transition-all ${
                    isSelected
                      ? "border-[#c9a87c]/50 bg-[#c9a87c]/10"
                      : "border-white/[0.08] hover:border-white/[0.15]"
                  }`}
                >
                  <div className="font-semibold text-sm truncate text-foreground">
                    {model.name}
                  </div>
                  <div className="text-xs text-muted-foreground">{model.quality}</div>
                  <div className="text-lg font-bold mt-1 text-[#c9a87c]">
                    {formatCurrencyPrecise(monthlyCost)}
                  </div>
                  <div className="text-xs text-muted-foreground">/month</div>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
