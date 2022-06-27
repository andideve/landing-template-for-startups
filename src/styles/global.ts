import { newTransition, media, Theme } from '@andideve/ds-react';

const global = (theme: Theme) => `
  :root {
    --transition-color: ${newTransition('color', { duration: 200 })};
    --transition-background-color: ${newTransition('background-color')};

    --color-white: ${theme.colors.white};
    // --color-white: hsl(205deg, 29%, 88%);
    --color-black: hsl(210deg, 9%, 9%);

    // Overrides

    --color-foreground: var(--color-white);
    --color-background: var(--color-black);

    --color-primary: hsl(240deg, 100%, 68%);
    --color-primary-hovered: hsl(240deg, 100%, 63%);
    --color-primary-contrast: var(--color-white);

    --color-secondary: hsl(206deg, 14%, 66%);
    --color-secondary-hovered: var(--color-white);
    --color-secondary-contrast: var(--color-black);
    
    --color-border: hsl(214deg, 6%, 21%);
    --color-border-hovered: var(--color-primary);

    --color-card: hsl(214deg, 9%, 16%);
    --color-card-hovered: hsl(214deg, 6%, 21%);
  }
  * {
    -webkit-tap-highlight-color: transparent;
  }
  #__next {
    overflow-x: hidden;
    position: relative;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1 1 auto;
  }
  hr {
    border: 0;
    border-top: 1px solid var(--color-border);
  }

  // Anchor

  .nav-link {
    &.active {
      color: var(--color-secondary-hovered);
    }
  }
  .underlined {
    position: relative;
    transition: var(--color-transition);
    &:focus {
      text-decoration: none;
    }
    &:not(.underlined):focus {
      text-decoration: none;
    }
    &:before {
      position: absolute;
      content: '';
      right: 0;
      bottom: 0;
      left: 0;
      height: 1px;
      background-color: var(--color-primary);
      margin-right: 100%;
      transition: ${newTransition('margin-right', { duration: 200 })};
    }
    &:focus:before {
      margin-right: 0;
    }
    ${media('lg')} {
      &:hover:before {
        margin-right: 0;
      }
    }
  }

  // Colors

  .color-primary {
    color: var(--color-primary);
  }
  .color-secondary,
  .color-secondary--hoverable,
  .nav-link {
    color: var(--color-secondary);
  }
  .color-secondary--hoverable,
  .nav-link {
    transition: var(--transition-color);
    &:focus {
      color: var(--color-secondary-hovered);
    }
    ${media('lg')} {
      &:hover {
        color: var(--color-secondary-hovered);
      }
    }
  }
  .bg-color-card {
    background-color: var(--color-card);
  }

  // Layouts

  .overlay--before:before,
  .overlay--after:after {
    content: '';
  }
  .overlay,
  .overlay--before:before,
  .overlay--after:after {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
  }
  .inset-0,
  .overlay,
  .overlay--before:before,
  .overlay--after:after {
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .inline-list {
    display: flex;
    flex-wrap: wrap;
  }
  ul.inline-list {
    list-style: none;
  }
  .p-relative {
    position: relative;
  }
  .p-absolute {
    position: absolute;
  }
  .p-fixed {
    position: fixed;
  }
  .d-block {
    display: block;
  }
  .d-inline-block {
    display: inline-block;
  }
  .d-flex {
    display: flex;
  }
  .items-center {
    align-items: center;
  }
  .justify-center {
    justify-content: center;
  }
  .justify-between {
    justify-content: space-between;
  }
  .overflow-hidden {
    overflow: hidden;
  }

  // Typography

  .font-regular {
    font-weight: 400 !important;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600 !important;
  }
  .font-bold {
    font-weight: 700 !important;
  }
  .font-extrabold {
    font-weight: 800 !important;
  }
  .text-center {
    text-align: center;
  }

  // Radii

  .rounded {
    border-radius: ${theme.radii.base};
  }
  .rounded-full {
    border-radius: ${theme.radii.full} !important;
  }

  // Others

  .sr-only {
    position: absolute;
    left: -100vw;
  }
  .focus-visible:focus-visible {
    outline: 1px solid var(--color-foreground);
  }
  .divider {
    border-top: 1px solid var(--color-border);
  }
`;

export { global as globalStyles };
