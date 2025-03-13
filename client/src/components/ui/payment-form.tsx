import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Button } from "./button";

interface PaymentFormProps {
  amount: number;
  onSuccess: (paymentIntentId: string) => void;
}

export function PaymentForm({ amount, onSuccess }: PaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const { error, paymentIntent } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/booking`,
      },
      redirect: "if_required",
    });

    if (error) {
      toast({
        title: "Payment Error",
        description: error.message,
        variant: "destructive",
      });
    } else if (paymentIntent && paymentIntent.status === "succeeded") {
      toast({
        title: "Payment Successful",
        description: "Thank you for your payment.",
      });
      onSuccess(paymentIntent.id);
    }

    setIsProcessing(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="rounded-md border border-gold/20 p-6">
        <PaymentElement
          options={{
            layout: {
              type: "tabs",
              defaultCollapsed: false,
            },
          }}
        />
      </div>

      <div className="flex justify-end">
        <Button
          variant="default"
          size="lg"
          type="submit"
          disabled={isProcessing || !stripe || !elements}
          className="w-full bg-gold text-black hover:bg-gold/80"
        >
          {isProcessing ? "Processing..." : `Pay $${amount.toLocaleString()}`}
        </Button>
      </div>
    </form>
  );
}