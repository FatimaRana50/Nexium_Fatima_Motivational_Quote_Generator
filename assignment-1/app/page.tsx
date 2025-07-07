import QuoteForm from "@/components/ui/QuoteForm";

export default function Home() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Motivational Quote Generator</h1>
      <QuoteForm />
    </main>
  );
}
