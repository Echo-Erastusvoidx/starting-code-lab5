# Design Decisions & Challenges – Styling Lab

## Design Decisions

### 1. **CSS Variables & Theming**
- **CSS Variables** are used for all major colors, spacing, and transitions. This makes theme switching and customization easy and consistent.
- The `:root` selector defines the default palette, and JavaScript updates these variables for live customization.
- **Theme switching** is handled by toggling a `.dark-theme` class and updating variables for other themes (blue, green, etc.), ensuring all components adapt instantly.

### 2. **Component Structure**
- **Cards, Buttons, Chips, Navigation, Forms, etc.** are styled with clear separation, using BEM-like class names for maintainability.
- **Shadow, border-radius, and transitions** are applied to create a modern, tactile feel.
- **Flex and Grid layouts** are used for responsive arrangements, especially for grids and navigation.

### 3. **Accessibility & Usability**
- **Hover and focus states** are implemented for interactive elements, improving usability and accessibility.
- **Disabled states** for buttons and clear active indicators for navigation and chips help users understand current context.

### 4. **Responsiveness**
- **Media queries** ensure layouts collapse gracefully on mobile, with single-column grids and stacked navigation.
- **Touch support** for the customization panel improves mobile usability.

### 5. **Animations**
- **Transitions** and simple keyframe animations (fade, slide, bounce) add polish to interactions like toasts, modals, and panel toggles.

### 6. **Component Variants**
- **Button variants** (success, warning, info, outline) use semantic colors for clarity.
- **Chips** and **badges** use color and icons for quick recognition.
- **Alerts** and **toasts** use left borders and icons for severity indication.

## Challenges Faced

### 1. **Consistent Theming**
- Ensuring all components respond correctly to theme changes required careful use of variables and some overrides for dark mode.

### 2. **Responsive Grid**
- Making the grid flexible for cards and widgets, while keeping spacing and alignment consistent, involved balancing `grid-template-columns` and gap settings.

### 3. **Complex Interactivity**
- The customization panel needed to work with both mouse and touch, and close when clicking outside or pressing Escape. This required extra event handling in JS.

### 4. **Component Overlap**
- Some components needed extra CSS to ensure icons and text aligned well and didn’t break on small screens.

### 5. **Accessibility**
- Ensuring focus states and keyboard navigation worked for all interactive elements was a challenge, especially with custom controls.


