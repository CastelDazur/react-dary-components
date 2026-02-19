import React, { useEffect, useRef, useState } from 'react';

export interface DARBalanceProps {
  /** Current DAR balance to display */
  balance: number;
  /** Previous balance for animation (optional) */
  previousBalance?: number;
  /** Whether to animate the counter on mount/change */
  animate?: boolean;
  /** Animation duration in milliseconds */
  animationDuration?: number;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Show change indicator (+/-) */
  showChange?: boolean;
  /** Custom className */
  className?: string;
  /** Callback when animation completes */
  onAnimationComplete?: () => void;
}

const sizeStyles = {
  sm: 'text-lg font-semibold',
  md: 'text-2xl font-bold',
  lg: 'text-4xl font-extrabold',
};

/**
 * DARBalance - Animated DAR token balance display widget
 *
 * @example
 * <DARBalance balance={5000} animate previousBalance={4800} showChange />
 */
export const DARBalance: React.FC<DARBalanceProps> = ({
  balance,
  previousBalance,
  animate = true,
  animationDuration = 800,
  size = 'md',
  showChange = false,
  className = '',
  onAnimationComplete,
}) => {
  const [displayValue, setDisplayValue] = useState(
    animate ? (previousBalance ?? 0) : balance
  );
  const animationRef = useRef<number | null>(null);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(animate ? (previousBalance ?? 0) : balance);

  useEffect(() => {
    if (!animate) {
      setDisplayValue(balance);
      return;
    }

    const startValue = startValueRef.current;
    const endValue = balance;
    const diff = endValue - startValue;

    if (diff === 0) return;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / animationDuration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + diff * eased);

      setDisplayValue(current);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(step);
      } else {
        setDisplayValue(endValue);
        startTimeRef.current = null;
        startValueRef.current = endValue;
        onAnimationComplete?.();
      }
    };

    animationRef.current = requestAnimationFrame(step);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [balance, animate, animationDuration, onAnimationComplete]);

  const change = previousBalance !== undefined ? balance - previousBalance : 0;
  const isPositive = change >= 0;

  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <span
        className={`tabular-nums text-gray-900 dark:text-white ${sizeStyles[size]}`}
        aria-live="polite"
        aria-label={`DAR balance: ${balance}`}
      >
        {displayValue.toLocaleString()}
        <span className="ml-1 text-yellow-500 font-medium">DAR</span>
      </span>

      {showChange && change !== 0 && (
        <span
          className={`text-sm font-medium ${
            isPositive ? 'text-green-500' : 'text-red-500'
          }`}
        >
          {isPositive ? '+' : ''}{change.toLocaleString()}
        </span>
      )}
    </div>
  );
};

export default DARBalance;
