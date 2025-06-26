
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen } from "lucide-react";

const FormulaDisplay = () => {
  return (
    <Card className="w-full shadow-lg border-0 bg-white">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-xl">
          <BookOpen className="h-6 w-6" />
          Percentage Increase Formula
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-indigo-500">
            <div className="text-center">
              <div className="text-lg font-mono text-gray-800 mb-2">
                Percentage Increase =
              </div>
              <div className="text-xl font-mono text-indigo-600 font-bold">
                (Final Value - Starting Value) / |Starting Value| × 100
              </div>
            </div>
          </div>
          
          <div className="text-sm text-gray-600 space-y-1">
            <p><strong>Where:</strong></p>
            <p>• Final Value = The new or ending value</p>
            <p>• Starting Value = The original or beginning value</p>
            <p>• |Starting Value| = Absolute value of the starting value</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default FormulaDisplay;
