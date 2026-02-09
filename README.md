# 📦 React DARY Components

**Professional React UI Components Library** - Reusable, TypeScript-ready components extracted from DARY Platform

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

---

## 🎯 Features

- ✅ **Production-tested** components from real SaaS platform
- 🎨 **Customizable** styling with CSS modules
- 📊 **Card components** for balance, gifts, referrals, campaigns
- 🖘️ **Form components** with validation
- 📦 **Modal & Button** components
- 🌍 **i18n ready** - multilingual support
- 📦 **Lightweight** - minimal dependencies

---

## 📥 Installation

```bash
npm install react-dary-components
# or
yarn add react-dary-components
```

---

## 💡 Quick Start

```jsx
import { BalanceCard, GiftCard, Button } from 'react-dary-components';

function App() {
  return (
    <div>
      <BalanceCard 
        balance={25}
        currency="DAR"
        label="Your Balance"
      />
      
      <GiftCard
        brandName="Nike"
        amount={10}
        status="ready"
        onClaim={() => console.log('Claimed!')}
      />
      
      <Button variant="primary" onClick={() => alert('Hello!')}>
        Click Me
      </Button>
    </div>
  );
}
```

---

## 🧑‍💻 Components

### Cards

#### `<BalanceCard />`
Display user balance with currency

**Props:**
- `balance` (number) - Balance amount
- `currency` (string) - Currency symbol (DAR, EUR, USD)
- `label` (string) - Card label
- `onClick` (function) - Click handler

**Example:**
```jsx
<BalanceCard balance={25} currency="DAR" label="DARY Rewards" />
```

---

#### `<GiftCard />`
Display gift with brand logo and claim button

**Props:**
- `brandName` (string) - Brand name
- `brandLogo` (string) - Logo URL
- `amount` (number) - Gift amount
- `status` ('ready' | 'claimed' | 'expired') - Gift status
- `onClaim` (function) - Claim handler

**Example:**
```jsx
<GiftCard
  brandName="Nike"
  brandLogo="/nike-logo.png"
  amount={10}
  status="ready"
  onClaim={handleClaim}
/>
```

---

#### `<ReferralCard />`
Display referral invitation with share buttons

**Props:**
- `campaignName` (string) - Campaign name
- `code` (string) - Referral code
- `status` ('pending' | 'ready' | 'activated') - Status
- `reward` (number) - Reward amount
- `onShare` (function) - Share handler

**Example:**
```jsx
<ReferralCard
  campaignName="Summer Sale"
  code="REF-A2B3"
  status="ready"
  reward={5}
  onShare={handleShare}
/>
```

---

#### `<PromocodeCard />`
Display promo code with expiry and redeem button

**Props:**
- `code` (string) - Promo code
- `brandName` (string) - Brand name  
- `expiresAt` (Date) - Expiry date
- `status` ('available' | 'reserved' | 'redeemed') - Status
- `onRedeem` (function) - Redeem handler

---

### Forms

#### `<Button />`
Customizable button component

**Props:**
- `variant` ('primary' | 'secondary' | 'danger') - Button style
- `size` ('sm' | 'md' | 'lg') - Button size
- `disabled` (boolean) - Disabled state
- `onClick` (function) - Click handler

**Example:**
```jsx
<Button variant="primary" size="lg" onClick={handleClick}>
  Activate Gift
</Button>
```

---

#### `<Input />`
Form input with validation

**Props:**
- `label` (string) - Input label
- `type` (string) - Input type
- `placeholder` (string) - Placeholder text
- `error` (string) - Error message
- `onChange` (function) - Change handler

---

#### `<Modal />`
Modal dialog component

**Props:**
- `isOpen` (boolean) - Modal state
- `title` (string) - Modal title
- `onClose` (function) - Close handler
- `children` (ReactNode) - Modal content

**Example:**
```jsx
<Modal isOpen={isOpen} title="Confirm Action" onClose={handleClose}>
  <p>Are you sure?</p>
  <Button onClick={handleConfirm}>Confirm</Button>
</Modal>
```

---

## 🎨 Styling

Components use CSS modules. Import styles:

```jsx
import { BalanceCard } from 'react-dary-components';
import 'react-dary-components/dist/styles.css';
```

Custom styling:
```css
.custom-balance-card {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 16px;
}
```

---

## 🌐 i18n Support

Components support internationalization:

```jsx
import { BalanceCard } from 'react-dary-components';
import { useTranslation } from 'react-i18next';

function App() {
  const { t } = useTranslation();
  
  return <BalanceCard label={t('balance.label')} />;
}
```

---

## 📋 TypeScript

Full TypeScript support:

```typescript
import { BalanceCardProps, GiftCardProps } from 'react-dary-components';

const props: BalanceCardProps = {
  balance: 25,
  currency: 'DAR',
  label: 'Your Balance'
};
```

---

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run Storybook
npm run storybook

# Build
npm run build

# Test
npm test
```

---

## 📚 Examples

See `/examples` folder for:
- Basic usage
- Form validation
- Modal interactions
- Custom styling
- TypeScript examples

---

## 👨‍💻 Author

**Dmytro Romanov** - Full-Stack Developer  
📧 casteldazur@gmail.com  
🔗 [LinkedIn](https://linkedin.com/in/casteldazur) | [GitHub](https://github.com/CastelDazur)

---

## 📝 License

MIT License - see [LICENSE](LICENSE) file

---

## 👍 Contributing

Contributions welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md)

---

## 📦 Available Components

### Cards & Display
- **BalanceCard** - Display user balance with currency formatting
- **GiftCard** - Show gift/reward items with images
- **StatCard** - Statistics and metrics display

### Forms & Inputs
- **Input** - Text input with validation
- **Select** - Dropdown selection
- **DatePicker** - Date selection component
- **FileUpload** - File upload with preview

### Buttons & Actions
- **Button** - Primary action button
- **IconButton** - Icon-only button
- **LoadingButton** - Button with loading state

### Modals & Overlays
- **Modal** - Dialog/popup component
- **Toast** - Notification messages
- **Tooltip** - Contextual help text

---

## 🎨 Customization

All components support custom styling through CSS modules or styled-components:

```jsx
import { Button } from 'react-dary-components';

<Button 
  variant="primary"
  size="large"
  className="custom-class"
  style={{ borderRadius: '8px' }}
>
  Custom Button
</Button>
```

---

## 🌍 Internationalization

Built-in i18n support for multiple languages:

```jsx
import { DaryProvider } from 'react-dary-components';

<DaryProvider locale="fr">
  <App />
</DaryProvider>
```

Supported languages: EN, FR, DE, ES, IT

---

## 📱 Responsive Design

All components are mobile-first and fully responsive:
- Adapts to different screen sizes
- Touch-friendly interactions
- Optimized for performance

---

## 🔧 Tech Stack

- **React 18+** - Latest React features
- **TypeScript** - Full type safety
- **CSS Modules** - Scoped styling
- **Storybook** - Component documentation
- **Jest + RTL** - Testing suite

---

<p align="center">
  <i>Extracted from DARY Platform - B2B SaaS with AI-generated rewards</i>
</p>

---

<p align="center">
  Made with ❤️ for the React community
</p>

<p align="center">
  <i>Extracted from DARY Platform - B2B SaaS with AI-generated rewards</i>
</p>
