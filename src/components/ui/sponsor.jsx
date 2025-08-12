import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, Coffee, Star, Gift, Sparkles, CreditCard, CheckCircle, Terminal, AlertCircle } from 'lucide-react';

const SponsorButton = ({ onSponsor, className = "" }) => {
  return (
    <Button
      onClick={onSponsor}
      className={`bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 hover:border-gray-500 transition-all duration-200 flex items-center gap-2 ${className}`}
    >
      <Heart className="w-5 h-5 text-green-500 fill-none stroke-2" />
      Sponsor My Work
    </Button>
  );
};

const SponsorModal = ({ isOpen, onClose, onSponsor }) => {
  const [selectedAmount, setSelectedAmount] = useState(49);
  const [customAmount, setCustomAmount] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [showTerminalTip, setShowTerminalTip] = useState(false);

  // Updated pricing structure - minimum 49, custom minimum 29
  const presetAmounts = [49, 99, 199, 499, 999, 1999];

  const handleSponsor = async () => {
    const amount = customAmount ? parseInt(customAmount) : selectedAmount;

    // Validate minimum amounts
    if (customAmount && amount < 29) {
      alert('Custom amount must be at least 29 KES');
      return;
    }

    if (amount < 49) {
      alert('Minimum sponsorship amount is 49 KES');
      return;
    }

    setIsProcessing(true);

    try {
      // Initialize Paystack payment
      const handler = window.PaystackPop.setup({
        key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_your_paystack_key_here',
        email: import.meta.env.VITE_SPONSOR_EMAIL || 'barack.ouma@example.com', // Replace with your email
        amount: amount * 100, // Paystack expects amount in kobo (smallest currency unit)
        currency: 'KES', // Using Kenyan Shilling - update this to your supported currency
        ref: `sponsor_${Date.now()}`,
        callback: function(response) {
          console.log('Payment successful:', response);

          // Send sponsorship notification email via backend
          fetch('http://localhost:3001/sponsorship-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              amount: amount,
              email: 'sponsor@example.com', // You can collect this from the payment form
              name: 'Anonymous Sponsor', // You can collect this from the payment form
              reference: response.reference
            }),
          }).catch(error => {
            console.error('Error sending sponsorship notification:', error);
          });

          onSponsor(amount, response.reference);
          onClose();
        },
        onClose: function() {
          console.log('Payment cancelled');
          setIsProcessing(false);
        }
      });
      handler.openIframe();
    } catch (error) {
      console.error('Payment error:', error);
      setIsProcessing(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="bg-gray-800 border-gray-600 max-w-md w-full">
        <CardHeader className="text-center">
          <CardTitle className="text-white flex items-center justify-center gap-2">
            <Heart className="w-6 h-6 text-green-500" />
            Sponsor My Work
          </CardTitle>
          <p className="text-gray-200 text-sm">
            Support my open source projects and content creation
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Terminal Payment Awareness Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-3 text-white text-sm">
            <div className="flex items-center gap-2 mb-2">
              <Terminal className="w-4 h-4" />
              <span className="font-semibold">💡 Pro Tip!</span>
            </div>
            <p className="text-blue-100">
              Try the <strong>Terminal Mode</strong> for an even cooler sponsorship experience!
              Type <code className="bg-blue-700 px-1 rounded">sponsor</code> in the terminal.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {presetAmounts.map((amount) => (
              <Button
                key={amount}
                variant={selectedAmount === amount ? "default" : "outline"}
                onClick={() => setSelectedAmount(amount)}
                className={`text-sm ${
                  selectedAmount === amount
                    ? "bg-emerald-600 hover:bg-emerald-700 text-white"
                    : "bg-gray-700 hover:bg-gray-600 text-white border-gray-500"
                }`}
              >
                {amount}
              </Button>
            ))}
          </div>

          <div className="space-y-2">
            <label className="text-sm text-gray-200 font-medium">
              Custom Amount <span className="text-yellow-400">(Min: 29 KES)</span>
            </label>
            <input
              type="number"
              value={customAmount}
              onChange={(e) => setCustomAmount(e.target.value)}
              placeholder="Enter amount (min 29)"
              min="29"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-500 rounded text-white placeholder-gray-300 focus:border-green-500 focus:ring-1 focus:ring-green-500"
            />
            {customAmount && parseInt(customAmount) < 29 && (
              <div className="flex items-center gap-2 text-red-400 text-xs">
                <AlertCircle className="w-3 h-3" />
                <span>Custom amount must be at least 29 KES</span>
              </div>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              onClick={handleSponsor}
              disabled={isProcessing || (customAmount && parseInt(customAmount) < 29)}
              className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white font-medium"
            >
              {isProcessing ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4 mr-2" />
                  Sponsor {customAmount || selectedAmount}
                </>
              )}
            </Button>
            <Button
              variant="outline"
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 text-white border-gray-500 hover:border-gray-400"
            >
              Cancel
            </Button>
          </div>

          <div className="text-xs text-gray-300 text-center">
            Powered by Paystack • Secure payment processing
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const SponsorSuccess = ({ amount, onClose }) => {
  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="bg-gray-800 border-gray-600 max-w-md w-full text-center">
        <CardContent className="p-6">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-xl font-bold text-white mb-2">Thank You! 🎉</h3>
          <p className="text-gray-200 mb-4">
            Your sponsorship of {amount} has been received. Your support means the world to me!
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-300 mb-4">
            <Sparkles className="w-4 h-4" />
            <span>You're helping me create amazing content</span>
          </div>
          <Button
            onClick={handleClose}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white"
          >
            Continue Exploring
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export { SponsorButton, SponsorModal, SponsorSuccess };
