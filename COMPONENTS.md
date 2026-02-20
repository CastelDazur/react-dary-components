# Component Reference

Complete documentation for all React components in the `react-dary-components` library.

## Installation

```bash
npm install react-dary-components
# or
yarn add react-dary-components
```

## Quick Start

```tsx
import { GiftCard, RewardButton, CampaignBadge } from 'react-dary-components';
import 'react-dary-components/dist/styles.css';

function App() {
  return (
    <div>
      <GiftCard
        title="Special Offer"
        tokens={50}
        imageUrl="/gift.jpg"
        onActivate={() => console.log('activated')}
      />
    </div>
  );
}
```

---

## Components

### `<GiftCard />`

Displays a gift card with AI-generated image, token balance, and activation button.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | required | Gift card title |
| `tokens` | `number` | required | DAR token reward amount |
| `imageUrl` | `string` | required | URL of the AI gift image |
| `brandName` | `string` | `''` | Brand that issued the gift |
| `expiresAt` | `Date` | `undefined` | Expiration date |
| `status` | `'active' \| 'used' \| 'expired'` | `'active'` | Current gift status |
| `onActivate` | `() => void` | required | Callback on activation |
| `onShare` | `() => void` | `undefined` | Callback on share click |
| `className` | `string` | `''` | Additional CSS class |
| `loading` | `boolean` | `false` | Show loading skeleton |

**Example:**

```tsx
<GiftCard
  title="Welcome Gift"
  tokens={100}
  imageUrl="https://cdn.dary.one/gifts/abc123.jpg"
  brandName="Nike"
  expiresAt={new Date('2026-06-30')}
  status="active"
  onActivate={handleActivate}
  onShare={handleShare}
/>
```

---

### `<RewardButton />`

Animated button with DAR token counter for reward actions.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tokens` | `number` | required | Token amount to display |
| `onClick` | `() => void` | required | Click handler |
| `variant` | `'primary' \| 'secondary' \| 'ghost'` | `'primary'` | Visual style |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `disabled` | `boolean` | `false` | Disable state |
| `loading` | `boolean` | `false` | Loading spinner |
| `icon` | `ReactNode` | `undefined` | Left icon |

**Example:**

```tsx
<RewardButton
  tokens={50}
  variant="primary"
  size="lg"
  onClick={handleClaim}
>
  Claim Reward
</RewardButton>
```

---

### `<CampaignBadge />`

Badge showing campaign status with animated indicator.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `status` | `'active' \| 'paused' \| 'completed' \| 'draft'` | required | Campaign status |
| `label` | `string` | auto | Custom label text |
| `showDot` | `boolean` | `true` | Show animated status dot |
| `size` | `'sm' \| 'md'` | `'md'` | Badge size |

---

### `<TokenBalance />`

Animated DAR token balance display with optional history sparkline.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `balance` | `number` | required | Current token balance |
| `currency` | `string` | `'DAR'` | Currency symbol |
| `showHistory` | `boolean` | `false` | Show mini sparkline chart |
| `history` | `number[]` | `[]` | Historical balance data |
| `trend` | `'up' \| 'down' \| 'neutral'` | `'neutral'` | Balance trend indicator |
| `animated` | `boolean` | `true` | Animate number changes |

---

### `<ReferralLink />`

Copyable referral link component with share options.

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `url` | `string` | required | Referral URL |
| `code` | `string` | required | Short referral code |
| `onCopy` | `() => void` | `undefined` | Callback after copy |
| `showQR` | `boolean` | `false` | Show QR code popover |
| `shareChannels` | `('whatsapp' \| 'telegram' \| 'email')[]` | `[]` | Share channel buttons |

---

### `<CampaignWizard />`

Multi-step campaign creation wizard (5 steps).

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `onComplete` | `(data: CampaignData) => void` | required | Submit handler |
| `onCancel` | `() => void` | required | Cancel handler |
| `initialData` | `Partial<CampaignData>` | `{}` | Pre-fill data |
| `aiModels` | `AIModel[]` | required | Available AI models |
| `maxBudget` | `number` | `undefined` | Maximum budget cap |

---

## Theming

All components support CSS custom properties for theming:

```css
:root {
  --dary-primary: #6366f1;
  --dary-secondary: #8b5cf6;
  --dary-token-color: #f59e0b;
  --dary-success: #10b981;
  --dary-error: #ef4444;
  --dary-radius: 12px;
  --dary-font: 'Inter', sans-serif;
}
```

## TypeScript Support

All components are fully typed. Import types directly:

```typescript
import type {
  GiftCardProps,
  RewardButtonProps,
  CampaignBadgeProps,
  TokenBalanceProps,
  ReferralLinkProps,
  CampaignWizardProps,
  CampaignData,
  AIModel,
} from 'react-dary-components';
```

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

---

*Generated with ❤️ for the DARY Platform ecosystem*
