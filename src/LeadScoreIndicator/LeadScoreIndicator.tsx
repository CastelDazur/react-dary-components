import React from 'react';

export type LeadTier = 'hot' | 'warm' | 'cold' | 'unknown';

export interface LeadScoreIndicatorProps {
  /** Lead score from 0 to 100 */
  score: number;
  /** Show numeric score value */
  showScore?: boolean;
  /** Show tier label (Hot/Warm/Cold) */
  showLabel?: boolean;
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Custom className */
  className?: string;
}

const getTier = (score: number): LeadTier => {
  if (score >= 70) return 'hot';
  if (score >= 40) return 'warm';
  if (score >= 0) return 'cold';
  return 'unknown';
};

const tierConfig: Record<LeadTier, { label: string; color: string; bg: string; dot: string }> = {
  hot: {
    label: 'Hot',
    color: 'text-red-700',
    bg: 'bg-red-100 border-red-200',
    dot: 'bg-red-500',
  },
  warm: {
    label: 'Warm',
    color: 'text-orange-700',
    bg: 'bg-orange-100 border-orange-200',
    dot: 'bg-orange-400',
  },
  cold: {
    label: 'Cold',
    color: 'text-blue-700',
    bg: 'bg-blue-100 border-blue-200',
    dot: 'bg-blue-400',
  },
  unknown: {
    label: 'Unknown',
    color: 'text-gray-500',
    bg: 'bg-gray-100 border-gray-200',
    dot: 'bg-gray-400',
  },
};

const sizeStyles = {
  sm: { badge: 'px-2 py-0.5 text-xs', dot: 'w-1.5 h-1.5' },
  md: { badge: 'px-2.5 py-1 text-sm', dot: 'w-2 h-2' },
  lg: { badge: 'px-3 py-1.5 text-base', dot: 'w-2.5 h-2.5' },
};

/**
 * LeadScoreIndicator - Displays a color-coded badge indicating lead quality tier
 *
 * Tiers:
 * - Hot (70-100): Red badge - high priority leads
 * - Warm (40-69): Orange badge - medium priority leads
 * - Cold (0-39): Blue badge - low priority leads
 *
 * @example
 * <LeadScoreIndicator score={85} showScore showLabel />
 * // Renders: [dot] Hot 85
 */
export const LeadScoreIndicator: React.FC<LeadScoreIndicatorProps> = ({
  score,
  showScore = true,
  showLabel = true,
  size = 'md',
  className = '',
}) => {
  const tier = getTier(score);
  const config = tierConfig[tier];
  const styles = sizeStyles[size];

  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border font-medium
        ${config.bg} ${config.color} ${styles.badge} ${className}`}
      title={`Lead Score: ${score}/100`}
      role="status"
      aria-label={`Lead tier: ${config.label}, score: ${score}`}
    >
      <span
        className={`rounded-full ${config.dot} ${styles.dot} flex-shrink-0`}
        aria-hidden="true"
      />
      {showLabel && <span>{config.label}</span>}
      {showScore && <span className="opacity-75">{score}</span>}
    </span>
  );
};

export default LeadScoreIndicator;
