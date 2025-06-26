
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";

const ExampleSection = () => {
  return (
    <Card className="w-full shadow-lg border-0 bg-white h-fit">
      <CardHeader className="bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-xl">
          <Lightbulb className="h-6 w-6" />
          Example Calculation
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="bg-green-50 rounded-lg p-4 border-l-4 border-green-500">
            <h4 className="font-semibold text-green-800 mb-2">Problem:</h4>
            <p className="text-green-700 text-sm">
              Last year your favorite jeans cost $36 per pair. This year they cost $45 per pair. 
              What is the percentage increase in the price?
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-800">Solution:</h4>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                <span>Starting Value:</span>
                <span className="font-mono font-bold">$36</span>
              </div>
              <div className="flex justify-between items-center bg-gray-50 p-2 rounded">
                <span>Final Value:</span>
                <span className="font-mono font-bold">$45</span>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-lg p-3 space-y-2 text-sm">
              <div className="font-mono">45 - 36 = 9</div>
              <div className="font-mono">9 ÷ 36 = 0.25</div>
              <div className="font-mono">0.25 × 100 = 25%</div>
            </div>
            
            <div className="bg-green-100 rounded-lg p-3 border border-green-200">
              <p className="text-green-800 font-semibold text-center">
                The price increased by 25%
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExampleSection;
