# Mitch Robertson Co. Brand Style Guide

## Typography

### Fonts
- **Headings**: Oswald (var(--font-oswald))
  - Used for section titles and main headings
  - Text transform: Uppercase for main section headings
  - Example: "ABOUT", "SPEAKING TOPICS"

- **Body**: Poppins (var(--font-poppins))
  - Used for body text, buttons, and general content
  - Clean, modern, highly readable

### Text Sizes
- **Headings**: text-3xl
- **Body Text**: text-base
- **Button Text**: text-sm

## Colors

### Primary Colors
- **Background**: Black/Dark
- **Text**: 
  - Primary: White (#FFFFFF)
  - Secondary: White with opacity
    - High emphasis: white/80 (80% opacity)
    - Medium emphasis: white/70 (70% opacity)
    - Low emphasis: white/20 (20% opacity)

### Interactive Elements
- **Buttons & Links**:
  - Border: white/80 (80% opacity)
  - Hover: bg-white/5 (5% white background)
  - Transition: transition-colors

## Layout & Spacing

### Containers
- **Section Padding**: 
  - Horizontal: mx-10 (desktop: lg:mx-20)
  - Vertical: space-y-6 or space-y-8

### Grid & Flexbox
- **Flex Layouts**:
  - Direction: flex flex-col
  - Alignment: items-center
  - Spacing: gap-4 (for horizontal lists)

### Component Spacing
- **Between Sections**: space-y-6
- **Between Elements**: space-y-4
- **Icon Spacing**: gap-2 (between icon and text)

## Interactive Elements

### Buttons
```jsx
className="inline-flex items-center gap-2 border border-white/80 px-6 py-3 text-sm hover:bg-white/5 transition-colors"
```

### Social Links
```jsx
className="text-white/70 hover:text-white transition-colors"
```

### Icons
- **Size**: 
  - Default: w-5 h-5
  - Social Icons: w-8 h-8 (desktop: md:w-10 md:h-10)

## Animations & Transitions

### Transitions
- **Type**: transition-colors
- **Duration**: Default (300ms)
- **Elements**: 
  - Buttons
  - Links
  - Interactive elements

### Hover States
- **Links**: Opacity change or color transition
- **Buttons**: Subtle background fade (white/5)

## Responsive Design

### Breakpoints
- **Mobile**: Default styles
- **Desktop**: lg: prefix
  - Margins: lg:mx-20
  - Icon sizes: md:w-10 md:h-10

## Best Practices

1. **Consistency**
   - Use predefined spacing scales (space-y-4, space-y-6, space-y-8)
   - Maintain consistent text hierarchies
   - Use standard button and link styles

2. **Accessibility**
   - Maintain sufficient color contrast
   - Include hover states for interactive elements
   - Use semantic HTML elements
   - Include sr-only text for icons

3. **Component Structure**
   - Keep components modular and reusable
   - Follow consistent naming conventions
   - Use Tailwind's utility classes for styling

4. **Dark Theme Optimization**
   - Design primarily for dark theme
   - Use opacity variations for hierarchy
   - Maintain readable contrast ratios
