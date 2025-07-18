import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function ActionSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-black text-white">
      <div className="w-full max-w-none flex flex-col items-center justify-center gap-6 px-[5%] lg:px-[8%] xl:px-[12%]">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Ready to maximize your crypto assets?
          </h2>
          <p className="text-gray-300 md:text-xl/relaxed">
            Join thousands of users already earning and borrowing on DexYield.
          </p>
        </div>
        <div className="mt-4 flex flex-row gap-2 items-center justify-center">
          <Button size="lg" className="gap-1 bg-blue-600 hover:bg-blue-700">
            Launch App<ArrowRight className="h-4 w-4" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-transparent border-white/20 text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}