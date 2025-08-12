import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle, XCircle, Loader2, ArrowLeft, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const TerminalPaymentCallback = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [paymentStatus, setPaymentStatus] = useState('loading');
  const [paymentData, setPaymentData] = useState(null);
  const [error, setError] = useState(null);

  const reference = searchParams.get('reference');
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
        } else {
          setPaymentStatus('error');
          setError(result.error || 'Payment verification failed');
        }
      } catch (err) {
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
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
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
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
            </motion.div>
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
              <ArrowLeft className="w-4 h-4 mr-2" />
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
      </motion.div>
    </div>
  );
};

export default TerminalPaymentCallback;
