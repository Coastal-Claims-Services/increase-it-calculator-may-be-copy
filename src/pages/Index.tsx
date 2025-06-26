
import PercentageCalculator from "@/components/PercentageCalculator";
import FormulaDisplay from "@/components/FormulaDisplay";
import ExampleSection from "@/components/ExampleSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Percentage Increase Calculator
          </h1>
          <p className="text-gray-600 text-lg">
            Calculate the percentage increase between two values
          </p>
        </div>
        
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <PercentageCalculator />
            <FormulaDisplay />
          </div>
          
          <div>
            <ExampleSection />
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <div className="bg-white rounded-lg shadow-sm p-6 max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">
              How to Calculate Percentage Increase
            </h3>
            <div className="text-left space-y-2 text-gray-600">
              <p>1. Subtract final value minus starting value</p>
              <p>2. Divide that amount by the absolute value of the starting value</p>
              <p>3. Multiply by 100 to get percent increase</p>
              <p className="text-sm text-gray-500 mt-3">
                If the percentage is negative, it means there was a decrease and not an increase.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
