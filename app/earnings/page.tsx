"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function EarningsPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Earnings</h1>
        <p className="text-gray-600 mb-4">This is a placeholder for the Earnings page.</p>
        <Link href="/tutor-dashboard">
          <Button variant="outline" className="mt-4">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Dashboard
          </Button>
        </Link>
      </div>
    </div>
  );
}