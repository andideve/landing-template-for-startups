import React from 'react';

export default function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="16" cy="16" r="16" fill="#151719" />
      <mask
        id="mask0_0_92"
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="32"
        height="32"
      >
        <circle cx="16" cy="16" r="16" fill="white" />
      </mask>
      <g mask="url(#mask0_0_92)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M122.573 56.5956C127.177 56.5916 131.78 56.5876 136.384 56.5876V50.4006H120.469C117.06 50.4006 113.593 50.5162 110.106 50.6325C102.179 50.8969 94.1483 51.1648 86.463 50.0856C77.086 48.7686 68.157 43.4546 60.326 37.7766C51.4659 31.3524 43.7064 23.423 35.9415 15.4881L35.9411 15.4878L35.9409 15.4876C30.391 9.81617 24.8383 4.14194 18.879 -0.987443C15.311 -4.06244 11.636 -7.02944 7.75 -9.57644L7.5031 -9.7385C3.47429 -12.3841 -3.47217 -16.9456 -6.903 -11.3124C-9.5739 -6.92728 -9.53009 -0.458897 -9.49164 5.22092C-9.48177 6.67784 -9.47226 8.08287 -9.509 9.38756C-9.91901 23.9106 -11.244 44.6216 -26.224 49.2436C-29.251 50.0966 -32.331 50.3876 -35.446 50.3996C-47.764 50.4356 -60.082 50.4196 -72.4 50.4006C-73.782 50.3966 -75.164 50.3566 -76.543 50.2406C-77.97 50.1206 -79.39 49.9116 -80.796 49.6136C-89.1451 47.8453 -96.7778 43.2355 -104.395 38.6353C-115.21 32.1034 -125.993 25.5908 -138.75 27.2596C-147.37 28.3873 -154.427 33.4869 -161.489 38.5902C-168.435 43.6098 -175.386 48.633 -183.834 49.8836C-187.028 50.2976 -190.23 50.3976 -193.442 50.4016H-219V56.5896C-216.061 56.5896 -213.121 56.5934 -210.181 56.5972H-210.181H-210.181C-204.217 56.6049 -198.253 56.6127 -192.289 56.5886C-185.941 56.5626 -179.657 56.1566 -173.853 52.9656C-169.722 50.6945 -166.073 47.4646 -162.49 44.2626L-162.175 43.9812C-155.561 38.0685 -148.727 31.9583 -140.206 30.1796C-126.456 27.309 -115.033 35.1383 -103.561 43.0012C-94.3119 49.3406 -85.0309 55.7018 -74.473 56.4946C-73.097 56.5726 -71.721 56.5886 -70.344 56.5886C-66.1159 56.5886 -61.884 56.6216 -57.651 56.6546H-57.6502H-57.6494H-57.6492H-57.649C-48.6653 56.7248 -39.6761 56.7949 -30.705 56.5496C-25.69 56.3496 -20.638 55.3716 -16.644 51.7046C-12.069 47.5046 -9.89799 40.9256 -8.51199 34.6556C-7.15277 28.5041 -6.93701 22.2489 -6.7215 16.0003C-6.52951 10.4342 -6.33771 4.87325 -5.338 -0.604444C-3.472 -10.9094 3.92599 -8.40344 10.196 -4.33144C16.473 -0.254444 22.155 4.98256 27.593 10.3436C30.305 13.0156 32.951 15.7726 35.582 18.5456C46.803 30.3716 58.362 41.9376 72.176 49.8276C79.067 53.7596 86.069 56.5546 93.86 56.5846C103.431 56.6122 113.002 56.6039 122.573 56.5956ZM101.61 73.7126H136.385H136.386V67.1826H99.098C91.032 67.1816 84.077 64.8636 76.988 60.6156C72.352 57.8356 67.923 54.6196 63.626 51.2256C56.956 45.9556 50.69 40.0816 44.622 33.9656C41.7957 31.1169 39.042 28.1062 36.2779 25.0842L36.2778 25.0841L36.2775 25.0838C29.2736 17.4263 22.2042 9.69722 13.724 4.35256C10.968 2.61356 7.01401 0.256557 3.83601 1.84456C0.326309 3.59892 -0.195862 9.35394 -0.541687 13.1656L-0.572998 13.5096C-0.802094 15.9835 -0.926895 18.4667 -1.0517 20.9498V20.9499V20.95C-1.16005 23.1059 -1.2684 25.2617 -1.44499 27.4116C-2.65199 41.9146 -4.65799 63.2846 -20.105 66.5966C-26.4225 67.951 -33.2452 67.6722 -39.8949 67.4004C-42.5731 67.2909 -45.2232 67.1826 -47.801 67.1826C-50.4989 67.1826 -53.2623 67.2884 -56.0507 67.3952C-62.9436 67.6593 -69.9897 67.9292 -76.579 66.6206C-77.282 66.4816 -77.99 66.3126 -78.704 66.1136C-87.0396 63.7882 -94.1855 57.8467 -101.118 52.0829L-101.118 52.0829C-102.783 50.6983 -104.436 49.324 -106.09 48.0126C-115.109 40.8616 -125.969 32.6096 -137.575 34.1246C-147.206 35.3816 -154.245 43.4896 -160.602 50.9866C-160.846 51.2743 -161.09 51.5627 -161.334 51.8514L-161.338 51.8559C-164.216 55.2584 -167.124 58.6949 -170.496 61.4786C-176.033 66.0486 -181.983 67.1676 -188.699 67.1826H-218.999V73.7126H-186.202C-175.239 73.7096 -168.692 67.7876 -162.025 58.7156C-161.279 57.7003 -160.537 56.6677 -159.793 55.6307C-155.524 49.6873 -151.152 43.5991 -145.2 39.8026C-137.338 34.7866 -128.684 36.4906 -120.94 40.9396C-114.486 44.6475 -108.801 49.8879 -103.121 55.1236C-96.1693 61.5314 -89.2254 67.932 -80.89 71.5076C-74.0392 74.4449 -66.2346 74.1532 -58.7571 73.8736C-56.5892 73.7926 -54.4487 73.7126 -52.367 73.7126C-49.0282 73.7126 -45.6807 73.7575 -42.3305 73.8024C-35.1598 73.8987 -27.9763 73.9951 -20.837 73.6516C-17.23 73.4046 -13.703 72.5316 -10.658 70.2486C-0.456146 62.5792 0.686996 45.5145 1.59587 31.947C1.72488 30.0211 1.84918 28.1657 1.994 26.4176C2.06746 25.5123 2.1114 24.4515 2.15904 23.3014C2.39351 17.6407 2.71754 9.81825 7.091 7.74456C11.8559 5.48544 18.3562 11.2198 22.1847 14.5972L22.187 14.5992C22.4097 14.7957 22.6233 14.9841 22.827 15.1626C27.6475 19.3839 32.0456 24.153 36.4421 28.9204C38.5695 31.2272 40.6966 33.5337 42.871 35.7776C51.002 44.1656 59.412 52.2656 68.502 59.3206C73.432 63.1466 78.469 66.9216 83.959 69.6746C84.548 69.9696 85.133 70.2376 85.703 70.4906C87.301 71.1966 88.931 71.8216 90.592 72.3126C94.203 73.3746 97.887 73.6996 101.61 73.7126ZM136.384 90.8356C133.098 90.8356 129.813 90.8359 126.527 90.8362H126.471C119.918 90.8369 113.364 90.8376 106.811 90.8356C102.284 90.7886 97.866 90.0316 93.576 88.3866C82.7913 84.2473 73.7557 75.7077 65.1099 67.5364L65.1097 67.5362C64.6173 67.0708 64.1261 66.6067 63.636 66.1446C56.5325 59.4474 49.7285 52.3821 42.922 45.314C41.3042 43.6341 39.6862 41.9539 38.064 40.2786C37.3147 39.5037 36.5681 38.7218 35.8206 37.939L35.8174 37.9356C32.3655 34.3207 28.8938 30.685 25.052 27.6206C22.478 25.5666 18.965 22.8156 15.658 23.5766C11.8342 24.4566 10.8591 29.9426 10.2161 33.5607L10.2161 33.5609L10.214 33.5726C9.45566 37.8382 9.13521 42.1809 8.81499 46.5202L8.81494 46.5206C8.6386 48.9104 8.46231 51.2991 8.21301 53.6736L8.18271 53.961C7.45764 60.8383 6.71776 67.8561 4.69101 74.4226C2.27 82.2036 -2.136 88.4936 -9.573 90.2396C-11.412 90.6696 -13.292 90.8176 -15.167 90.8306C-21.7821 90.8778 -28.3982 90.8635 -35.014 90.8493H-35.0142C-38.1992 90.8424 -41.3842 90.8356 -44.569 90.8356C-47.362 90.8356 -50.2054 90.9346 -53.0666 91.0343H-53.0667C-59.5606 91.2605 -66.1458 91.4899 -72.439 90.5716C-77.752 89.7876 -82.469 86.7836 -86.714 83.2406C-92.0945 78.7503 -96.8453 73.3991 -101.584 68.062L-101.584 68.0617C-103.307 66.1211 -105.028 64.1824 -106.777 62.2876L-107.3 61.7209C-114.135 54.3096 -122.546 45.1888 -132.288 43.9126C-143.619 42.4286 -150.331 55.0136 -155.125 64.5556C-155.73 65.7589 -156.339 67.0239 -156.965 68.3212L-156.965 68.3219C-161.278 77.2678 -166.33 87.7459 -175.483 90.1066C-179.662 91.1842 -184.142 91.0505 -188.515 90.9201H-188.515H-188.515C-189.937 90.8776 -191.347 90.8356 -192.732 90.8356H-218.999V83.9686C-214.898 83.9686 -210.791 84.0164 -206.681 84.0643H-206.681C-198.105 84.1642 -189.519 84.2642 -180.969 83.9296C-180.072 83.8936 -179.169 83.8096 -178.262 83.6796C-168.102 81.63 -162.936 72.1138 -157.731 62.5245C-153.187 54.1526 -148.612 45.725 -140.657 42.1616C-126.839 35.9723 -112.701 51.1838 -102.253 62.425L-102.253 62.4253C-100.528 64.281 -98.9036 66.0284 -97.398 67.5536C-89.782 75.2676 -81.104 83.6456 -70.347 83.9466C-58.8755 84.2665 -47.3764 84.1663 -35.8851 84.0662H-35.8849L-35.882 84.0662C-30.2758 84.0174 -24.6715 83.9686 -19.073 83.9686H-18.9694C-18.3521 83.9686 -17.7368 83.9687 -17.126 83.9526C-0.852997 83.5076 3.384 66.0446 5.084 50.5816C5.42961 47.4396 5.67543 44.286 5.92128 41.1321L5.92137 41.1311L5.92142 41.1306C6.16779 37.97 6.41417 34.8091 6.761 31.6596C6.79736 31.3297 6.8331 30.9948 6.86925 30.6562V30.6561C7.25658 27.0278 7.69022 22.9658 9.42801 19.8826C11.743 15.7756 15.715 16.8106 19.041 18.7506C24.7813 22.0998 29.6404 27.3542 34.3232 32.4179C35.075 33.2309 35.8223 34.039 36.568 34.8336C42.238 40.8746 47.95 46.8826 53.855 52.6316C55.668 54.3956 57.486 56.1536 59.328 57.8786L60.1179 58.6172C69.0141 66.9385 78.3663 75.6862 89.139 80.5986C92.455 82.1096 95.895 83.1815 99.456 83.6376C107.865 84.7125 116.554 84.4524 125.164 84.1946C128.929 84.0818 132.679 83.9696 136.384 83.9696V90.8356ZM127.957 107.972C130.766 107.966 133.575 107.96 136.383 107.96V100.748C133.328 100.748 130.272 100.759 127.216 100.77C120.815 100.793 114.414 100.816 108.015 100.738C105.457 100.652 102.925 100.259 100.426 99.6476C97.282 98.7906 94.274 97.5316 91.365 95.9416C82.0338 90.8375 74.1506 82.8893 66.4696 75.1449C66.2319 74.9052 65.9944 74.6657 65.757 74.4266C60.6358 69.2661 55.5854 64.0204 50.5347 58.7744C47.87 56.0067 45.2053 53.2389 42.53 50.4836C42.2855 50.2318 42.0411 49.9798 41.7966 49.7279C39.5898 47.4534 37.3821 45.1781 35.108 42.9896C34.6426 42.5415 34.1193 42.0144 33.5495 41.4404C29.6627 37.5252 23.608 31.4262 18.943 33.3266C14.3052 35.2155 13.6673 44.0188 13.2407 49.9054C13.1683 50.9058 13.1019 51.8219 13.023 52.6056C12.8045 54.7271 12.6216 56.8531 12.4387 58.9792C12.2884 60.7264 12.1381 62.4737 11.968 64.2186C11.612 67.8596 11.237 71.5026 10.652 75.1076C8.45999 88.6206 3.25999 100.182 -10.102 100.707C-10.754 100.733 -32.053 100.748 -42.044 100.748C-44.948 100.748 -47.8854 100.83 -50.8342 100.914C-57.3732 101.098 -63.9683 101.284 -70.38 100.572C-80.452 99.4336 -88.234 90.7336 -94.937 82.9316C-97.3258 80.1511 -99.6437 77.2937 -101.962 74.4363C-105.621 69.9252 -109.28 65.4143 -113.218 61.2066C-118.894 55.1416 -126.803 47.0886 -135.246 48.4306C-144.193 49.8527 -148.917 61.4355 -152.352 69.8592C-152.537 70.3146 -152.719 70.7607 -152.898 71.1956C-153.373 72.3524 -153.846 73.541 -154.325 74.746C-157.674 83.1657 -161.343 92.3911 -168.453 97.2506C-168.916 97.5656 -169.38 97.8566 -169.846 98.1226C-170.312 98.3896 -170.779 98.6326 -171.247 98.8526C-174.338 100.307 -177.642 100.707 -180.966 100.747C-189.536 100.763 -198.107 100.758 -206.678 100.753C-210.784 100.751 -214.891 100.749 -218.998 100.749V107.958C-214.772 107.958 -210.547 107.959 -206.321 107.96C-197.869 107.962 -189.417 107.964 -180.966 107.958H-180.912C-180.031 107.958 -179.138 107.958 -178.235 107.911C-177.316 107.863 -176.39 107.747 -175.455 107.598C-174.504 107.44 -173.565 107.215 -172.639 106.922C-162.87 103.863 -157.638 93.8126 -153.899 83.9506C-153.148 81.9704 -152.411 79.682 -151.63 77.2561C-148.497 67.5275 -144.652 55.588 -136.343 52.4536C-127.403 49.0806 -118.364 59.4016 -112.705 65.9206C-108.908 70.2949 -105.363 74.9267 -101.818 79.5589C-98.7952 83.5084 -95.7723 87.4581 -92.593 91.2486C-86.016 99.0896 -78.345 107.026 -68.308 107.86C-61.8144 108.385 -55.213 108.239 -48.6437 108.093C-45.5952 108.026 -42.5537 107.959 -39.533 107.959H-10.086C-6.91 107.958 -3.729 107.831 -0.656998 106.84C12.4548 102.083 13.9082 82.6782 14.9733 68.4588C15.0994 66.7754 15.2201 65.1647 15.354 63.6596C15.428 62.8222 15.4972 61.9743 15.567 61.1196C15.9929 55.8998 16.4393 50.4294 18.127 45.6036C20.995 37.4046 27.233 40.9556 32.124 44.8976C41.3306 52.3135 49.4264 61.3737 57.5228 70.4345C67.4895 81.5885 77.4572 92.7435 89.499 100.834C95.897 105.13 102.761 107.89 110.284 107.954C116.174 108 122.066 107.986 127.957 107.972Z"
          fill="#5658DD"
        />
      </g>
    </svg>
  );
}
