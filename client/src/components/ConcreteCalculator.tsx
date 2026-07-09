import { useState, useEffect } from 'react';

/**
 * Concrete Calculator Pro Component
 * Professional calculator with structure type selection, dynamic inputs, and truck trip breakdown
 * Matches the 'Pro' UI/UX design with dark theme, green accents, and animations
 */

interface StructureConfig {
  label1: string;
  label2: string;
  label3: string;
  ph1: string;
  ph2: string;
  ph3: string;
  badge: string;
  showDim2: boolean;
  showDim4: boolean;
}

const STRUCTURE_TYPES: Record<string, StructureConfig> = {
  slab: { label1: '📏 Length', label2: '📏 Width', label3: '📐 Thickness', ph1: 'Length', ph2: 'Width', ph3: 'Thickness', badge: 'SLAB', showDim2: true, showDim4: false },
  beam: { label1: '📏 Beam Length', label2: '📏 Beam Width (b)', label3: '📐 Beam Depth (h)', ph1: 'Beam length', ph2: 'Width', ph3: 'Depth', badge: 'BEAM', showDim2: true, showDim4: false },
  column: { label1: '📏 Column Width (b)', label2: '📏 Column Depth (h)', label3: '📐 Column Height', ph1: 'Width', ph2: 'Depth', ph3: 'Height', badge: 'COLUMN', showDim2: true, showDim4: false },
  cylinder: { label1: '📏 Diameter', label2: '', label3: '📐 Depth / Height', ph1: 'Diameter', ph2: '', ph3: 'Depth', badge: 'CYLINDER', showDim2: false, showDim4: false },
  trapezoid: { label1: '📏 Top Length (a)', label2: '📏 Width (Straight Distance)', label3: '📐 Depth / Height', ph1: 'Top length', ph2: 'Width', ph3: 'Depth', badge: 'TRAPEZOID', showDim2: true, showDim4: true },
  slope: { label1: '📏 Ramp Length', label2: '📏 Width', label3: '📐 Max Thickness (Top)', ph1: 'Length', ph2: 'Width', ph3: 'Thick at top', badge: 'RAMP', showDim2: true, showDim4: false },
  area: { label1: '📏 Area', label2: '', label3: '📐 Thickness', ph1: 'Enter area', ph2: '', ph3: 'Thickness', badge: 'AREA', showDim2: false, showDim4: false },
};

export default function ConcreteCalculator() {
  const [structureType, setStructureType] = useState<string>('');
  const [dim1, setDim1] = useState<string>('');
  const [dim1Unit, setDim1Unit] = useState<string>('feet');
  const [dim2, setDim2] = useState<string>('');
  const [dim2Unit, setDim2Unit] = useState<string>('feet');
  const [dim3, setDim3] = useState<string>('');
  const [dim3Unit, setDim3Unit] = useState<string>('inch');
  const [dim4, setDim4] = useState<string>('');
  const [dim4Unit, setDim4Unit] = useState<string>('feet');
  
  const [result, setResult] = useState<number | null>(null);
  const [beforeRoundup, setBeforeRoundup] = useState<number | null>(null);
  const [truckBreakdown, setTruckBreakdown] = useState<{
    trips6m3: number;
    trips3m3: number;
    wastage6: number;
    wastage3: number;
  } | null>(null);
  const [error, setError] = useState<string>('');

  const config = structureType ? STRUCTURE_TYPES[structureType] : null;

  // Unit conversion to meters
  const convertToMeter = (value: number, unit: string): number => {
    const conversions: Record<string, number> = {
      'feet': 0.3048,
      'inch': 0.0254,
      'meter': 1,
      'cm': 0.01,
      'mm': 0.001,
      'sqft': 0.092903,
      'sqm': 1,
    };
    return value * (conversions[unit] || 1);
  };

  // Calculate volume based on structure type
  const calculateVolume = () => {
    setError('');

    if (!structureType) {
      setError('Please select a structure type');
      return;
    }

    if (!dim1 || isNaN(Number(dim1)) || Number(dim1) <= 0) {
      setError('Please enter valid dimension 1');
      return;
    }

    if (config?.showDim2 && (!dim2 || isNaN(Number(dim2)) || Number(dim2) <= 0)) {
      setError('Please enter valid dimension 2');
      return;
    }

    if (!dim3 || isNaN(Number(dim3)) || Number(dim3) <= 0) {
      setError('Please enter valid dimension 3');
      return;
    }

    if (config?.showDim4 && (!dim4 || isNaN(Number(dim4)) || Number(dim4) <= 0)) {
      setError('Please enter valid dimension 4');
      return;
    }

    let volumeM3 = 0;
    const d1 = convertToMeter(Number(dim1), dim1Unit);
    const d2 = config?.showDim2 ? convertToMeter(Number(dim2), dim2Unit) : 0;
    const d3 = convertToMeter(Number(dim3), dim3Unit);
    const d4 = config?.showDim4 ? convertToMeter(Number(dim4), dim4Unit) : 0;

    switch (structureType) {
      case 'slab':
      case 'beam':
        volumeM3 = d1 * d2 * d3;
        break;
      case 'column':
        volumeM3 = d1 * d2 * d3;
        break;
      case 'cylinder':
        const radius = d1 / 2;
        volumeM3 = Math.PI * radius * radius * d3;
        break;
      case 'trapezoid':
        volumeM3 = ((d1 + d4) / 2) * d2 * d3;
        break;
      case 'slope':
        volumeM3 = (d1 * d2 * d3) / 2;
        break;
      case 'area':
        volumeM3 = d1 * d3;
        break;
      default:
        volumeM3 = 0;
    }

    // Add 5% wastage allowance
    const withWastage = volumeM3 * 1.05;
    setBeforeRoundup(volumeM3);
    setResult(withWastage);

    // Calculate truck trips
    let remaining = withWastage;
    const trips6m3 = Math.floor(remaining / 6);
    remaining -= trips6m3 * 6;
    const trips3m3 = Math.ceil(remaining / 3);

    // Calculate wastage percentages
    const total6m3 = trips6m3 * 6;
    const total3m3 = trips3m3 * 3;
    const wastage6 = ((total6m3 - withWastage) / total6m3) * 100;
    const wastage3 = ((total3m3 - withWastage) / total3m3) * 100;

    setTruckBreakdown({
      trips6m3,
      trips3m3,
      wastage6: Math.max(0, wastage6),
      wastage3: Math.max(0, wastage3),
    });
  };

  const resetCalculator = () => {
    setStructureType('');
    setDim1('');
    setDim2('');
    setDim3('');
    setDim4('');
    setResult(null);
    setBeforeRoundup(null);
    setTruckBreakdown(null);
    setError('');
  };

  // Handle Enter key
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        calculateVolume();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [structureType, dim1, dim1Unit, dim2, dim2Unit, dim3, dim3Unit, dim4, dim4Unit]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1a1f5e] via-[#0c1033] to-[#060920] py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Container Card */}
        <div className="bg-[#151B54] rounded-3xl p-7 md:p-8 shadow-2xl border border-[#6AFB92]/15 backdrop-blur-xl">
          
          {/* Header */}
          <div className="text-center mb-6">
            <div className="flex justify-center mb-4">
              <img 
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663388603059/DZbEmEKMRkcTG2RVHbRh5e/logo_fe4ed37f.jpg"
                alt="Hyper Concrete Logo"
                className="w-32 h-16 rounded-2xl border-3 border-[#6AFB92] shadow-lg"
              />
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-1 tracking-wider">CONCRETE CALCULATOR</h2>
            <p className="text-xs text-[#B0E0E6] font-semibold uppercase tracking-widest">Hyper Concrete Technologies Sdn Bhd</p>
          </div>

          {/* Structure Type Selection */}
          <div className="mb-5">
            <label className="block text-xs font-bold text-[#6AFB92] uppercase tracking-wider mb-2">
              🏗️ Structure Type
              {structureType && <span className="ml-2 inline-block bg-[#6AFB92]/15 text-[#6AFB92] text-xs font-bold px-2 py-1 rounded-full">{config?.badge}</span>}
            </label>
            <select
              value={structureType}
              onChange={(e) => {
                setStructureType(e.target.value);
                setError('');
                setResult(null);
              }}
              className="w-full px-4 py-3 bg-white text-[#151B54] font-semibold rounded-2xl border-2 border-transparent focus:border-[#6AFB92] focus:outline-none shadow-lg transition-all"
            >
              <option value="">!! PLEASE CHOOSE STRUCTURE !!</option>
              <option value="slab">SLAB</option>
              <option value="beam">BEAM</option>
              <option value="column">COLUMN</option>
              <option value="cylinder">CYLINDER / BORE PILE</option>
              <option value="trapezoid">TRAPEZOIDAL</option>
              <option value="slope">RAMP (DROP TO 0)</option>
              <option value="area">AREA (sq ft / m²)</option>
            </select>
          </div>

          {/* Volume Display */}
          {structureType && (
            <>
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-xs font-bold text-[#6AFB92] uppercase tracking-wider">📐 Volume</label>
                  {beforeRoundup !== null && (
                    <span className="text-xs font-black bg-yellow-400 text-[#0c1033] px-2 py-1 rounded-lg">
                      Before: {beforeRoundup.toFixed(2)} m³
                    </span>
                  )}
                </div>
                <div className="bg-yellow-400 text-[#0c1033] font-black text-4xl md:text-5xl py-4 px-4 rounded-2xl border-3 border-[#6AFB92] text-center shadow-xl">
                  {result !== null ? `${result.toFixed(2)} m³` : '0.0 m³'}
                </div>
              </div>

              {/* Dimension Inputs */}
              <div className="space-y-4 mb-6">
                {/* Dimension 1 */}
                <div>
                  <label className="block text-xs font-bold text-[#6AFB92] uppercase tracking-wider mb-2">{config?.label1}</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={dim1}
                      onChange={(e) => setDim1(e.target.value)}
                      placeholder={config?.ph1}
                      inputMode="decimal"
                      className="flex-1 px-4 py-3 bg-white text-[#151B54] font-semibold rounded-2xl border-2 border-transparent focus:border-[#6AFB92] focus:outline-none shadow-lg transition-all"
                    />
                    <select
                      value={dim1Unit}
                      onChange={(e) => setDim1Unit(e.target.value)}
                      className="flex-0 w-24 px-3 py-3 bg-white text-[#151B54] font-semibold rounded-2xl border-2 border-transparent focus:border-[#6AFB92] focus:outline-none shadow-lg transition-all"
                    >
                      <option value="feet">Feet</option>
                      <option value="inch">Inch</option>
                      <option value="meter">Meter</option>
                      <option value="mm">mm</option>
                      {structureType === 'area' && <option value="sqft">sq ft</option>}
                      {structureType === 'area' && <option value="sqm">m²</option>}
                    </select>
                  </div>
                </div>

                {/* Dimension 2 */}
                {config?.showDim2 && (
                  <div>
                    <label className="block text-xs font-bold text-[#6AFB92] uppercase tracking-wider mb-2">{config?.label2}</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={dim2}
                        onChange={(e) => setDim2(e.target.value)}
                        placeholder={config?.ph2}
                        inputMode="decimal"
                        className="flex-1 px-4 py-3 bg-white text-[#151B54] font-semibold rounded-2xl border-2 border-transparent focus:border-[#6AFB92] focus:outline-none shadow-lg transition-all"
                      />
                      <select
                        value={dim2Unit}
                        onChange={(e) => setDim2Unit(e.target.value)}
                        className="flex-0 w-24 px-3 py-3 bg-white text-[#151B54] font-semibold rounded-2xl border-2 border-transparent focus:border-[#6AFB92] focus:outline-none shadow-lg transition-all"
                      >
                        <option value="feet">Feet</option>
                        <option value="inch">Inch</option>
                        <option value="meter">Meter</option>
                        <option value="mm">mm</option>
                      </select>
                    </div>
                  </div>
                )}

                {/* Dimension 3 */}
                <div>
                  <label className="block text-xs font-bold text-[#6AFB92] uppercase tracking-wider mb-2">{config?.label3}</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      value={dim3}
                      onChange={(e) => setDim3(e.target.value)}
                      placeholder={config?.ph3}
                      inputMode="decimal"
                      className="flex-1 px-4 py-3 bg-white text-[#151B54] font-semibold rounded-2xl border-2 border-transparent focus:border-[#6AFB92] focus:outline-none shadow-lg transition-all"
                    />
                    <select
                      value={dim3Unit}
                      onChange={(e) => setDim3Unit(e.target.value)}
                      className="flex-0 w-24 px-3 py-3 bg-white text-[#151B54] font-semibold rounded-2xl border-2 border-transparent focus:border-[#6AFB92] focus:outline-none shadow-lg transition-all"
                    >
                      <option value="inch">Inch</option>
                      <option value="feet">Feet</option>
                      <option value="meter">Meter</option>
                      <option value="cm">cm</option>
                      <option value="mm">mm</option>
                    </select>
                  </div>
                </div>

                {/* Dimension 4 (Trapezoid only) */}
                {config?.showDim4 && (
                  <div>
                    <label className="block text-xs font-bold text-[#6AFB92] uppercase tracking-wider mb-2">📏 Bottom Length (b)</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        value={dim4}
                        onChange={(e) => setDim4(e.target.value)}
                        placeholder="Bottom length"
                        inputMode="decimal"
                        className="flex-1 px-4 py-3 bg-white text-[#151B54] font-semibold rounded-2xl border-2 border-transparent focus:border-[#6AFB92] focus:outline-none shadow-lg transition-all"
                      />
                      <select
                        value={dim4Unit}
                        onChange={(e) => setDim4Unit(e.target.value)}
                        className="flex-0 w-24 px-3 py-3 bg-white text-[#151B54] font-semibold rounded-2xl border-2 border-transparent focus:border-[#6AFB92] focus:outline-none shadow-lg transition-all"
                      >
                        <option value="feet">Feet</option>
                        <option value="inch">Inch</option>
                        <option value="meter">Meter</option>
                        <option value="mm">mm</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>

              {/* Error Message */}
              {error && (
                <div className="mb-4 p-3 bg-[#F75D59]/20 border border-[#F75D59] rounded-xl text-[#F75D59] text-sm font-semibold">
                  ⚠️ {error}
                </div>
              )}

              {/* Buttons */}
              <div className="flex gap-4 mb-6">
                <button
                  onClick={calculateVolume}
                  className="flex-1 bg-[#8CC63F] text-[#1A1A1A] font-black py-4 px-4 rounded-2xl hover:bg-[#7CB342] transition-all shadow-lg text-lg"
                >
                  Calculate<br />Now
                </button>
                <button
                  onClick={resetCalculator}
                  className="flex-1 bg-[#E35B47] text-[#1A1A1A] font-black py-4 px-4 rounded-2xl hover:bg-[#D84315] transition-all shadow-lg text-lg"
                >
                  Reset<br />Data
                </button>
              </div>

              {/* Truck Breakdown */}
              {truckBreakdown && (
                <div className="bg-[#B0E0E6]/10 backdrop-blur-sm border border-[#B0E0E6]/25 rounded-2xl p-4 mb-6">
                  <div className="text-center text-xs font-black text-yellow-400 mb-3 animate-pulse">
                    ↓↓↓ PLEASE CONSIDER THE RECOMMENDED WASTAGE ALLOWANCE ↓↓↓
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-white text-sm py-1">
                      <span>6 m³ Truck: {truckBreakdown.trips6m3} trip{truckBreakdown.trips6m3 !== 1 ? 's' : ''}</span>
                      <span className="bg-yellow-400 text-[#0c1033] text-xs font-black px-2 py-1 rounded">{truckBreakdown.wastage6.toFixed(1)}% waste</span>
                    </div>
                    <div className="flex justify-between items-center text-white text-sm py-1">
                      <span>3 m³ Truck: {truckBreakdown.trips3m3} trip{truckBreakdown.trips3m3 !== 1 ? 's' : ''}</span>
                      <span className="bg-yellow-400 text-[#0c1033] text-xs font-black px-2 py-1 rounded">{truckBreakdown.wastage3.toFixed(1)}% waste</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Reference Table */}
              <div className="mb-6">
                <div className="text-xs text-[#B0E0E6] font-bold uppercase tracking-widest text-center mb-3">📋 Coverage Reference (per 1m³) 📋</div>
                <table className="w-full text-xs border-collapse bg-white/5 rounded-xl overflow-hidden border border-[#B0E0E6]/25">
                  <thead>
                    <tr className="bg-[#6AFB92] text-[#0c1033]">
                      <th className="px-3 py-2 font-bold">Thickness</th>
                      <th className="px-3 py-2 font-bold">Coverage (sq.ft)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-[#B0E0E6]/25 hover:bg-[#6AFB92]/10">
                      <td className="px-3 py-2 text-[#e0e0e0]">3 Inch</td>
                      <td className="px-3 py-2 text-[#e0e0e0]">141 sf</td>
                    </tr>
                    <tr className="border-t border-[#B0E0E6]/25 hover:bg-[#6AFB92]/10">
                      <td className="px-3 py-2 text-[#e0e0e0]">4 Inch</td>
                      <td className="px-3 py-2 text-[#e0e0e0]">106 sf</td>
                    </tr>
                    <tr className="border-t border-[#B0E0E6]/25 hover:bg-[#6AFB92]/10">
                      <td className="px-3 py-2 text-[#e0e0e0]">5 Inch</td>
                      <td className="px-3 py-2 text-[#e0e0e0]">85 sf</td>
                    </tr>
                    <tr className="border-t border-[#B0E0E6]/25 hover:bg-[#6AFB92]/10">
                      <td className="px-3 py-2 text-[#e0e0e0]">6 Inch</td>
                      <td className="px-3 py-2 text-[#e0e0e0]">70 sf</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* CTA Button */}
              <a href="/get-quote" className="block">
                <button className="w-full bg-[#6AFB92] text-[#0c1033] font-black py-3 px-4 rounded-2xl hover:bg-[#5AEB82] transition-all shadow-lg">
                  REQUEST QUOTE FOR THIS VOLUME
                </button>
              </a>
            </>
          )}

          {/* Footer */}
          <div className="text-center mt-6 text-xs text-[#B0E0E6]/50 font-medium">© 2020–2027 Hyper Concrete Technologies</div>
        </div>
      </div>
    </div>
  );
}
