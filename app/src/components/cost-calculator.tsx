"use client";

import { useState, useMemo } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Slider } from "@/components/ui/slider";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const SUBSCRIPTIONS = {
  midjourney: { name: "Midjourney Pro", monthly: 30, imagesIncluded: 900 },
  dalleChat: { name: "ChatGPT Plus", monthly: 20, imagesIncluded: 100 },
  leonardo: { name: "Leonardo Pro", monthly: 24, imagesIncluded: 8500 },
  ideogram: { name: "Ideogram Plus", monthly: 20, imagesIncluded: 1000 },
  adobe: { name: "Adobe Firefly Premium", monthly: 23, imagesIncluded: 100 },
} as const;

const BYOK_MODELS = {
  fluxSchnell: { name: "FLUX Schnell", costPer: 0.003, quality: "Fast/Draft" },
  fluxDev: { name: "FLUX Dev", costPer: 0.025, quality: "High Quality" },
  fluxPro: { name: "FLUX Pro", costPer: 0.05, quality: "Best" },
  dalle3Hd: { name: "DALL-E 3 HD", costPer: 0.08, quality: "OpenAI Best" },
  dalle3Std: { name: "DALL-E 3 Standard", costPer: 0.04, quality: "OpenAI Fast" },
  sdxl: { name: "SDXL", costPer: 0.002, quality: "Open Source" },
} as const;

export function CostCalculator() {
  const [imagesPerMonth, setImagesPerMonth] = useState(500);
  const [currentSub, setCurrentSub] = useState<keyof typeof SUBSCRIPTIONS>("midjourney");
  const [byokModel, setByokModel] = useState<keyof typeof BYOK_MODELS>("fluxDev");
  const [vixpicTier, setVixpicTier] = useState<29 | 59 | 149>(59);

  const calculations = useMemo(() => {
    const sub = SUBSCRIPTIONS[currentSub];
    const model = BYOK_MODELS[byokModel];
    
    // Subscription costs (annual)
    const subAnnual = sub.monthly * 12;
    
    // BYOK costs (annual) = VixPic license + API costs
    const apiCostMonthly = imagesPerMonth * model.costPer;
    const apiCostAnnual = apiCostMonthly * 12;
    const byokYear1 = vixpicTier + apiCostAnnual;
    const byokYear2Plus = apiCostAnnual;
    
    // Savings
    const savingsYear1 = subAnnual - byokYear1;
    const savingsYear2Plus = subAnnual - byokYear2Plus;
    const savingsPercent = Math.round((savingsYear1 / subAnnual) * 100);
    
    // 3-year comparison
    const sub3Year = subAnnual * 3;
    const byok3Year = vixpicTier + (apiCostAnnual * 3);
    const savings3Year = sub3Year - byok3Year;

    return {
      subMonthly: sub.monthly,
      subAnnual,
      apiCostMonthly,
      apiCostAnnual,
      byokYear1,
      byokYear2Plus,
      savingsYear1,
      savingsYear2Plus,
      savingsPercent,
      sub3Year,
      byok3Year,
      savings3Year,
      costPerImage: model.costPer,
    };
  }, [imagesPerMonth, currentSub, byokModel, vixpicTier]);

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  const formatCurrencyPrecise = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <div className="space-y-8">
      {/* Controls */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">Your Usage</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <label className="text-sm font-medium">Images per month</label>
                <span className="text-sm font-bold text-purple-600">{imagesPerMonth.toLocaleString()}</span>
              </div>
              <Slider
                value={[imagesPerMonth]}
                onValueChange={([v]) => setImagesPerMonth(v)}
                min={50}
                max={5000}
                step={50}
                className="py-2"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>50</span>
                <span>5,000</span>
              </div>
            </div>
            
            <div>
              <label className="text-sm font-medium block mb-2">Current subscription</label>
              <Select value={currentSub} onValueChange={(v) => setCurrentSub(v as keyof typeof SUBSCRIPTIONS)}>
                <SelectTrigger>
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

        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-lg">VixPic Setup</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <label className="text-sm font-medium block mb-2">AI Model</label>
              <Select value={byokModel} onValueChange={(v) => setByokModel(v as keyof typeof BYOK_MODELS)}>
                <SelectTrigger>
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
              <label className="text-sm font-medium block mb-2">VixPic License</label>
              <div className="flex gap-2">
                {([29, 59, 149] as const).map((tier) => (
                  <button
                    key={tier}
                    onClick={() => setVixpicTier(tier)}
                    className={`flex-1 py-2 px-3 rounded-lg border-2 text-sm font-medium transition-colors ${
                      vixpicTier === tier
                        ? "border-purple-600 bg-purple-50 text-purple-700"
                        : "border-gray-200 hover:border-gray-300"
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
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-2 border-red-200 bg-red-50">
          <CardHeader>
            <CardTitle className="text-red-700 flex items-center gap-2">
              <span>🔴</span> Current Subscription
            </CardTitle>
            <CardDescription>
              {SUBSCRIPTIONS[currentSub].name}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span>Monthly cost</span>
                <span className="font-semibold">{formatCurrency(calculations.subMonthly)}/mo</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="font-semibold">Year 1 Total</span>
                <span className="font-bold text-red-700">{formatCurrency(calculations.subAnnual)}</span>
              </div>
              <div className="flex justify-between text-lg">
                <span className="font-semibold">3-Year Total</span>
                <span className="font-bold text-red-700">{formatCurrency(calculations.sub3Year)}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-green-200 bg-green-50">
          <CardHeader>
            <CardTitle className="text-green-700 flex items-center gap-2">
              <span>🟢</span> VixPic + BYOK
            </CardTitle>
            <CardDescription>
              {BYOK_MODELS[byokModel].name} at {formatCurrencyPrecise(calculations.costPerImage)}/image
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between text-sm">
                <span>VixPic license (one-time)</span>
                <span className="font-semibold">{formatCurrency(vixpicTier)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>API costs ({imagesPerMonth.toLocaleString()} imgs/mo)</span>
                <span className="font-semibold">{formatCurrencyPrecise(calculations.apiCostMonthly)}/mo</span>
              </div>
              <div className="flex justify-between text-lg pt-2 border-t">
                <span className="font-semibold">Year 1 Total</span>
                <span className="font-bold text-green-700">{formatCurrency(calculations.byokYear1)}</span>
              </div>
              <div className="flex justify-between">
                <span>Year 2+ (no license)</span>
                <span className="font-semibold text-green-600">{formatCurrency(calculations.byokYear2Plus)}/yr</span>
              </div>
              <div className="flex justify-between text-lg pt-2 border-t">
                <span className="font-semibold">3-Year Total</span>
                <span className="font-bold text-green-700">{formatCurrency(calculations.byok3Year)}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Savings Banner */}
      <Card className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <CardContent className="py-8">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold">
                {formatCurrency(calculations.savingsYear1)}
              </div>
              <div className="text-purple-100 mt-1">Saved in Year 1</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">
                {calculations.savingsPercent}%
              </div>
              <div className="text-purple-100 mt-1">Lower Cost</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold">
                {formatCurrency(calculations.savings3Year)}
              </div>
              <div className="text-purple-100 mt-1">Saved Over 3 Years</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Model Comparison Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">API Cost Reference</CardTitle>
          <CardDescription>
            What you'd pay directly to AI providers for {imagesPerMonth.toLocaleString()} images/month
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
                  className={`p-3 rounded-lg border-2 text-left transition-all ${
                    isSelected
                      ? "border-purple-600 bg-purple-50"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  <div className="font-semibold text-sm truncate">{model.name}</div>
                  <div className="text-xs text-gray-500">{model.quality}</div>
                  <div className="text-lg font-bold mt-1 text-purple-600">
                    {formatCurrencyPrecise(monthlyCost)}
                  </div>
                  <div className="text-xs text-gray-500">/month</div>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
