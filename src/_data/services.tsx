import React from 'react';

const icons = [
  <svg width="26" height="24" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 19.313L6.82 21.51L8 14.628L3 9.75399L9.91 8.74999L13 2.48999L16.09 8.74999L23 9.75399L20 12.678"
      stroke="#F4F4FF"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path d="M24 22H15" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path d="M24 17H15" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
  </svg>,
  <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect
      x="1"
      y="1"
      width="22"
      height="18"
      stroke="#F4F4FF"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path d="M6 6H18" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path d="M6 10H18" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path d="M6 14H11" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse
      cx="12"
      cy="12"
      rx="5.5"
      ry="11"
      stroke="#CBCCFF"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path d="M12 1V23" stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square" />
    <path d="M1 12H23" stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square" />
    <circle cx="12" cy="12" r="11" stroke="#F4F4FF" strokeWidth="2" strokeLinecap="square" />
  </svg>,
  <svg width="23" height="25" viewBox="0 0 23 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19 24V17.7C20.8762 16.0274 21.9645 13.6443 22 11.131C22.0206 6.23125 18.1579 2.19488 13.262 2C10.83 1.92918 8.47291 2.84603 6.72799 4.54159C4.98306 6.23716 3.99897 8.56696 4 11V12L2 17L4 18V22C4 23.1046 4.89543 24 6 24H10C11.3261 24 12.5979 23.4732 13.5355 22.5355C14.4732 21.5979 15 20.3261 15 19V14"
      stroke="#F4F4FF"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <circle cx="15" cy="11" r="3" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
  </svg>,
  <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M8 22H18.229C19.1072 22.0002 19.8828 21.4274 20.141 20.588L22.91 11.588C23.0965 10.9817 22.9843 10.3228 22.6076 9.81237C22.2309 9.30195 21.6344 9.00051 21 9H14V5C14 2.627 12.749 1.506 11.236 1.14C10.9369 1.06976 10.6222 1.14002 10.3814 1.33076C10.1406 1.52149 10.0001 1.8118 10 2.119V6L5 12"
      stroke="#F4F4FF"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <rect
      x="1"
      y="10"
      width="4"
      height="12"
      stroke="#CBCCFF"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>,
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 3V1" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path
      d="M20.121 3.87899L21.536 2.46399"
      stroke="#CBCCFF"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <path d="M21 6H23" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path d="M20.121 8.121L21.536 9.536" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path d="M18 9V11" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path d="M15.879 8.121L14.464 9.536" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path d="M15 6H13" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path
      d="M15.879 3.87899L14.464 2.46399"
      stroke="#CBCCFF"
      strokeWidth="2"
      strokeLinecap="square"
    />
    <circle cx="18" cy="6" r="3" stroke="#CBCCFF" strokeWidth="2" strokeLinecap="square" />
    <path
      d="M9.86 2.17999C4.8 2.98799 1 6.59999 1 11C1 16 5.9 20 12 20C13.0475 20.0213 14.0923 19.8865 15.1 19.6L21 22L20.4 16.8C21.2506 15.9575 21.9272 14.9558 22.391 13.852"
      stroke="#F4F4FF"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>,
];

export const services = icons.map((icon) => ({
  title: 'Instant Features',
  description:
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat.',
  icon,
}));
