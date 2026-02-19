# Changelog - react-dary-components

All notable changes to this component library will be documented in this file.

## [Unreleased]

### Planned
- `DataTable` component with sorting, filtering, and pagination
- `DateRangePicker` component
- `CampaignCard` compound component
- Dark mode support via CSS variables
- Storybook integration

## [1.2.0] - 2026-02-19

### Added
- `GiftCard` component with hover animations and DAR price display
- `LeadScoreIndicator` badge with color-coded tiers (Hot/Warm/Cold)
- `DARBalance` widget with animated counter
- `CampaignProgress` progress bar with budget tracking
- `StatCard` for dashboard KPI display
- TypeScript strict mode enabled across all components

### Changed
- `Button` component: added `loading` prop with spinner
- `Modal` component: improved accessibility (focus trap, ESC close)
- `Form` components: unified validation error display
- Updated Tailwind CSS to v3.4

### Fixed
- `Dropdown` z-index issue when inside Modal
- `Badge` color contrast ratio (WCAG AA compliance)
- `Input` autofill background color in dark browsers

## [1.1.0] - 2026-01-10

### Added
- `Notification` toast component with auto-dismiss
- `Avatar` component with fallback initials
- `Skeleton` loading placeholder components
- `EmptyState` component for zero-data views

### Changed
- Migrated all components to TypeScript
- Added `forwardRef` support to interactive components
- Improved bundle size with tree-shaking optimization

## [1.0.0] - 2025-12-01

### Added
- Initial component library release
- Core components: `Button`, `Input`, `Select`, `Checkbox`, `Modal`
- Layout components: `Card`, `Grid`, `Stack`, `Divider`
- Navigation: `Tabs`, `Breadcrumb`, `Pagination`
- Feedback: `Alert`, `Badge`, `Tooltip`
- TypeScript definitions for all components
- MIT License
