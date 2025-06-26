
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calculator, TrendingUp, TrendingDown } from "lucide-react";

const PercentageCalculator = () => {
  const [startingValue, setStartingValue] = useState<string>("");
  const [finalValue, setFinalValue] = useState<string>("");
  const [result, setResult] = useState<number | null>(null);
  const [isIncrease, setIsIncrease] = useState<boolean>(true);

  useEffect(() => {
    if (startingValue && finalValue) {
      const start = parseFloat(startingValue);
      const final = parseFloat(finalValue);
      
      if (!isNaN(start) && !isNaN(final) && start !== 0) {
        const percentageChange = ((final - start) / Math.abs(start)) * 100;
        setResult(percentageChange);
        setIsIncrease(percentageChange >= 0);
      } else {
        setResult(null);
      }
    } else {
      setResult(null);
    }
  }, [startingValue, finalValue]);

  const formatResult = (value: number) => {
    return Math.abs(value).toFixed(2);
  };

  return (
    <Card className="w-full shadow-lg border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Calculator className="h-6 w-6" />
          Percentage Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="starting-value" className="text-sm font-medium text-gray-700">
              Starting Value:
            </Label>
            <Input
              id="starting-value"
              type="number"
              placeholder="Enter starting value"
              value={startingValue}
              onChange={(e) => setStartingValue(e.target.value)}
              className="text-lg h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="final-value" className="text-sm font-medium text-gray-700">
              Final Value:
            </Label>
            <Input
              id="final-value"
              type="number"
              placeholder="Enter final value"
              value={finalValue}
              onChange={(e) => setFinalValue(e.target.value)}
              className="text-lg h-12 border-2 border-gray-200 focus:border-blue-500 transition-colors"
            />
          </div>
        </div>
        
        <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-6 border-2 border-dashed border-gray-200">
          <div className="text-center">
            <Label className="text-sm font-medium text-gray-600 mb-2 block">
              Answer:
            </Label>
            {result !== null ? (
              <div className="space-y-2">
                <div className={`text-3xl font-bold flex items-center justify-center gap-2 ${
                  isIncrease ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isIncrease ? (
                    <TrendingUp className="h-8 w-8" />
                  ) : (
                    <TrendingDown className="h-8 w-8" />
                  )}
                  {formatResult(result)}%
                </div>
                <p className={`text-sm font-medium ${
                  isIncrease ? 'text-green-600' : 'text-red-600'
                }`}>
                  {isIncrease ? 'Percentage Increase' : 'Percentage Decrease'}
                </p>
              </div>
            ) : (
              <div className="text-2xl text-gray-400 font-medium">
                Enter values to calculate
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PercentageCalculator;
