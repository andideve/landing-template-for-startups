import React from 'react';

export default function Play(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="12"
      height="16"
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 7.99907C12 7.67307 11.841 7.36707 11.573 7.18007L1.573 0.180066C1.269 -0.0339345 0.869 -0.0579345 0.538 0.112066C0.207 0.285066 0 0.626066 0 0.999066V15.0001C0 15.3731 0.207 15.7151 0.538 15.8871C0.869 16.0571 1.268 16.0331 1.573 15.8191L11.573 8.81907C11.841 8.63307 12 8.32707 12 8.00107C12 8.00007 12 8.00007 12 7.99907C12 8.00007 12 8.00007 12 7.99907Z"
        fill="#5D5DFF"
      />
    </svg>
  );
}
