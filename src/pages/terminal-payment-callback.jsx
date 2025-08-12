import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { CheckCircle, XCircle, Loader2, Terminal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';

const TerminalPaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState('loading');
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);
  const [showCheckPrompt, setShowCheckPrompt] = useState(false);

  const reference = searchParams.get('reference') || searchParams.get('trxref');
  const trxref = searchParams.get('trxref');

  useEffect(() => {
    const verifyPayment = async () => {
      if (!reference) {
        setPaymentStatus('error');
        setError('No payment reference found');
        return;
      }

      try {
        const response = await fetch('https://better-portfolio.onrender.com/verify-payment', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ reference }),
        });

        const result = await response.json();

        if (result.success) {
          setPaymentStatus('success');
          setPaymentData(result.data);

          // Trigger confetti and audio for successful payment
          try {
            confetti({
              particleCount: 100,
              spread: 70,
              origin: { y: 0.6 }
            });
          } catch (error) {
            console.log('Confetti failed to load:', error);
          }

          // Play success audio (optional - will fail gracefully if file doesn't exist)
          try {
            const audio = new Audio('/success.mp3');
            audio.volume = 0.5;
            audio.play().catch(() => {
              // Audio play failed, that's okay
            });
          } catch (error) {
            // Audio not available, that's okay
            console.log('Audio file not found:', error);
          }

          // Show check prompt after a delay
          setTimeout(() => {
            setShowCheckPrompt(true);
          }, 2000);
        } else {
          setPaymentStatus('error');
          setError(result.error || 'Payment verification failed');
        }
              } catch {
          setPaymentStatus('error');
          setError('Failed to verify payment. Please try again.');
        }
    };

    verifyPayment();
  }, [reference]);

  const getStatusIcon = () => {
    switch (paymentStatus) {
      case 'loading':
        return <Loader2 className="w-16 h-16 text-blue-500 animate-spin" />;
      case 'success':
        return <CheckCircle className="w-16 h-16 text-green-500" />;
      case 'error':
        return <XCircle className="w-16 h-16 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusMessage = () => {
    switch (paymentStatus) {
      case 'loading':
        return 'Verifying your payment...';
      case 'success':
        return 'Payment Successful!';
      case 'error':
        return 'Payment Failed';
      default:
        return '';
    }
  };

  const getStatusDescription = () => {
    switch (paymentStatus) {
      case 'loading':
        return 'Please wait while we verify your terminal sponsorship payment.';
      case 'success':
        return `Thank you for your sponsorship of ${paymentData?.amount} KES! Your support helps keep this terminal running.`;
      case 'error':
        return error || 'Something went wrong with your payment. Please try again.';
      default:
        return '';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center p-4">
      <div
        className="max-w-md w-full"
      >
        <div className="bg-gray-800 rounded-2xl p-8 shadow-2xl border border-gray-700">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white mb-2">Terminal Payment</h1>
            <p className="text-gray-400">Payment verification result</p>
          </div>

          {/* Status Icon */}
          <div className="flex justify-center mb-6">
            {getStatusIcon()}
          </div>

          {/* Status Message */}
          <div className="text-center mb-6">
            <h2 className="text-xl font-semibold text-white mb-2">
              {getStatusMessage()}
            </h2>
            <p className="text-gray-300 text-sm leading-relaxed">
              {getStatusDescription()}
            </p>
          </div>

          {/* Payment Details */}
          {paymentStatus === 'success' && paymentData && (
            <div
              className="bg-gray-700 rounded-lg p-4 mb-6"
            >
              <h3 className="text-white font-semibold mb-3">Payment Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Amount:</span>
                  <span className="text-white font-mono">{paymentData.amount} KES</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Reference:</span>
                  <span className="text-white font-mono text-xs">{paymentData.reference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 font-semibold">{paymentData.status}</span>
                </div>
              </div>
            </div>
          )}

          {/* Reference Info */}
          {reference && (
            <div className="bg-gray-700 rounded-lg p-4 mb-6">
              <h3 className="text-white font-semibold mb-2">Reference Information</h3>
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400">Reference:</span>
                  <span className="text-white font-mono text-xs">{reference}</span>
                </div>
                {trxref && (
                  <div className="flex justify-between">
                    <span className="text-gray-400">Transaction Ref:</span>
                    <span className="text-white font-mono text-xs">{trxref}</span>
                  </div>
                )}
              </div>
            </div>
          )}

                    {/* Check Payment Prompt */}
          {showCheckPrompt && paymentStatus === 'success' && (
            <div
              className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4"
            >
              <h4 className="text-emerald-800 font-semibold mb-2">Check Payment Status?</h4>
              <p className="text-emerald-700 text-sm mb-3">
                Would you like to verify your payment status in the terminal?
              </p>
              <div className="flex gap-2">
                <Button
                  onClick={() => {
                    navigate('/terminal');
                    // Store reference in localStorage for terminal to use
                    localStorage.setItem('lastPaymentReference', reference);
                  }}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm px-4 py-2"
                >
                  Yes, check status
                </Button>
                <Button
                  onClick={() => setShowCheckPrompt(false)}
                  variant="outline"
                  className="border-emerald-300 text-emerald-700 hover:bg-emerald-50 text-sm px-4 py-2"
                >
                  No, thanks
                </Button>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => navigate('/')}
              className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-lg transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Button>

            <Button
              onClick={() => navigate('/terminal')}
              variant="outline"
              className="w-full border-gray-600 text-gray-300 hover:bg-gray-700 font-semibold py-3 rounded-lg transition-colors"
            >
              <Terminal className="w-4 h-4 mr-2" />
              Back to Terminal
            </Button>
          </div>

          {/* Footer */}
          <div className="text-center mt-6 pt-6 border-t border-gray-700">
            <p className="text-gray-500 text-xs">
              Thank you for supporting this project! 💻
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalPaymentCallback;
