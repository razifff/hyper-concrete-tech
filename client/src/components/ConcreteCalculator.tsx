import { useState, useEffect } from 'react';
import { Calculator } from 'lucide-react';

/**
 * Concrete Calculator Component
 * Calculate concrete volume and truck trips needed
 */

export default function ConcreteCalculator() {
  const [volume, setVolume] = useState<string>('');
  const [unit, setUnit] = useState<string>('m3');
  const [result, setResult] = useState<number | null>(null);
  const [truckBreakdown, setTruckBreakdown] = useState<{
    trips6m3: number;
    trips3m3: number;
    trips1m3: number;
  } | null>(null);

  // Truck capacities in m³
  const TRUCK_CAPACITIES = {
    '6m3': 6,
    '3m3': 3,
    '1m3': 1,
  };

  // Convert volume to m³
  const convertToM3 = (vol: number, u: string): number => {
    const conversions: Record<string, number> = {
      'm3': 1,
      'cubic_feet': 0.0283168,
      'cubic_yards': 0.764555,
      'liters': 0.001,
    };
    return vol * (conversions[u] || 1);
  };

  // Calculate truck trips
  const calculateTrips = (volumeM3: number) => {
    // Optimize for 6m³ trucks first, then 3m³, then 1m³
    let remaining = volumeM3;
    
    const trips6m3 = Math.floor(remaining / TRUCK_CAPACITIES['6m3']);
    remaining -= trips6m3 * TRUCK_CAPACITIES['6m3'];
    
    const trips3m3 = Math.floor(remaining / TRUCK_CAPACITIES['3m3']);
    remaining -= trips3m3 * TRUCK_CAPACITIES['3m3'];
    
    const trips1m3 = Math.ceil(remaining / TRUCK_CAPACITIES['1m3']);

    return { trips6m3, trips3m3, trips1m3 };
  };

  // Handle calculation
  const handleCalculate = () => {
    if (!volume || isNaN(Number(volume)) || Number(volume) <= 0) {
      alert('Please enter a valid volume');
      return;
    }

    const volumeM3 = convertToM3(Number(volume), unit);
    setResult(volumeM3);
    setTruckBreakdown(calculateTrips(volumeM3));
  };

  // Handle Enter key
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        handleCalculate();
      }
    };
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [volume, unit]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 md:p-12 mb-12 border-2 border-primary/20">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Calculator className="w-6 h-6 text-primary" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">Concrete Calculator</h3>
            <p className="text-sm text-muted-foreground">Calculate volume and truck trips needed</p>
          </div>
        </div>

        {/* Input Section */}
        <div className="space-y-4 mb-6">
          {/* Volume Input */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Volume</label>
            <input
              type="number"
              value={volume}
              onChange={(e) => setVolume(e.target.value)}
              placeholder="Enter volume"
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-foreground font-semibold"
              onKeyPress={(e) => e.key === 'Enter' && handleCalculate()}
            />
          </div>

          {/* Unit Selection */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-2">Unit</label>
            <select
              value={unit}
              onChange={(e) => setUnit(e.target.value)}
              className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-foreground font-semibold"
            >
              <option value="m3">Cubic Meters (m³)</option>
              <option value="cubic_feet">Cubic Feet (ft³)</option>
              <option value="cubic_yards">Cubic Yards (yd³)</option>
              <option value="liters">Liters (L)</option>
            </select>
          </div>

          {/* Calculate Button */}
          <button
            onClick={handleCalculate}
            className="w-full bg-primary text-primary-foreground font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors mt-6"
          >
            Calculate
          </button>
        </div>

        {/* Results Section */}
        {result !== null && (
          <div className="bg-white rounded-xl p-6 border-2 border-primary/20">
            {/* Total Volume */}
            <div className="mb-6">
              <p className="text-sm text-muted-foreground mb-2">Total Volume (m³)</p>
              <div className="text-4xl font-bold text-primary">{result.toFixed(2)} m³</div>
            </div>

            {/* Truck Breakdown */}
            {truckBreakdown && (
              <div className="space-y-3">
                <p className="text-sm font-semibold text-foreground mb-4">Recommended Truck Trips:</p>
                
                {truckBreakdown.trips6m3 > 0 && (
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-semibold text-foreground">6m³ Trucks</span>
                    <span className="text-lg font-bold text-primary">{truckBreakdown.trips6m3} trip{truckBreakdown.trips6m3 !== 1 ? 's' : ''}</span>
                  </div>
                )}

                {truckBreakdown.trips3m3 > 0 && (
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-semibold text-foreground">3m³ Trucks</span>
                    <span className="text-lg font-bold text-primary">{truckBreakdown.trips3m3} trip{truckBreakdown.trips3m3 !== 1 ? 's' : ''}</span>
                  </div>
                )}

                {truckBreakdown.trips1m3 > 0 && (
                  <div className="flex justify-between items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="font-semibold text-foreground">1m³ Trucks</span>
                    <span className="text-lg font-bold text-primary">{truckBreakdown.trips1m3} trip{truckBreakdown.trips1m3 !== 1 ? 's' : ''}</span>
                  </div>
                )}

                <div className="mt-4 p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-xs text-muted-foreground mb-1">Total Trips</p>
                  <p className="text-2xl font-bold text-yellow-600">
                    {truckBreakdown.trips6m3 + truckBreakdown.trips3m3 + truckBreakdown.trips1m3}
                  </p>
                </div>
              </div>
            )}

            {/* CTA */}
            <a href="/get-quote" className="block mt-6">
              <button className="w-full bg-primary text-primary-foreground font-bold py-3 px-4 rounded-lg hover:bg-blue-600 transition-colors">
                Request Quote for This Volume
              </button>
            </a>
          </div>
        )}

        {/* Info Box */}
        <div className="mt-8 p-4 bg-blue-100 rounded-lg border border-blue-300">
          <p className="text-sm text-blue-900">
            <strong>💡 Tip:</strong> This calculator helps estimate the number of truck trips needed. For accurate quotes, please submit your project details through our quote form.
          </p>
        </div>
      </div>
    </div>
  );
}
