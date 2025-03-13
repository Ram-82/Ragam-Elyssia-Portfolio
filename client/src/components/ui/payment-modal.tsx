import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PaymentWrapper } from "./payment-wrapper";

interface PaymentModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  amount: number;
  onSuccess: (paymentIntentId: string) => void;
}

export function PaymentModal({
  open,
  onOpenChange,
  amount,
  onSuccess,
}: PaymentModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[475px] bg-black border border-gold/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-display text-pearl">
            Complete Payment
          </DialogTitle>
        </DialogHeader>
        <div className="mt-6">
          <PaymentWrapper amount={amount} onSuccess={onSuccess} />
        </div>
      </DialogContent>
    </Dialog>
  );
}