'use client';

// @mui
import { useTheme } from '@mui/material/styles';

/***************************  IMAGE - PATTERN 2  ***************************/

export default function Pattern2({ fill }: { fill?: string }) {
  const theme = useTheme();

  return (
    <svg viewBox="0 0 326 227" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M275.5 113.5C275.5 175.91 225.13 226.5 163 226.5C100.87 226.5 50.5 175.91 50.5 113.5C50.5 51.0897 100.87 0.5 163 0.5C225.13 0.5 275.5 51.0897 275.5 113.5Z"
        fill={fill || 'none'}
        stroke={theme.palette.primary.lighter}
      />
      <path
        d="M320.251 138.518C319.95 140.371 318.648 142.083 316.296 143.628C313.946 145.173 310.603 146.512 306.35 147.629C297.848 149.863 285.824 151.177 271.132 151.54C241.755 152.266 201.814 149.184 158.275 142.119C114.736 135.054 75.8695 125.346 48.2301 115.368C34.4064 110.378 23.4153 105.329 16.0553 100.521C12.3738 98.1168 9.62626 95.789 7.88508 93.5803C6.14314 91.3706 5.44895 89.3348 5.74963 87.4819C6.05031 85.629 7.35267 83.9172 9.70397 82.3717C12.0543 80.827 15.3968 79.4875 19.6499 78.3705C28.1524 76.1374 40.1762 74.8228 54.8685 74.4599C84.2449 73.7344 124.187 76.8156 167.725 83.8809C211.264 90.9462 250.131 100.654 277.77 110.632C291.594 115.622 302.585 120.671 309.945 125.479C313.626 127.883 316.374 130.211 318.115 132.42C319.857 134.629 320.551 136.665 320.251 138.518Z"
        stroke={theme.palette.primary.lighter}
      />
      <path
        d="M321.693 99.0223C321.858 100.892 321.017 102.872 319.119 104.949C317.221 107.024 314.311 109.146 310.464 111.275C302.773 115.533 291.442 119.767 277.292 123.735C248.998 131.67 209.527 138.516 165.588 142.386C121.65 146.256 81.5901 146.415 52.345 143.548C37.7183 142.115 25.8224 139.926 17.5055 137.079C13.3453 135.655 10.1093 134.075 7.87802 132.363C5.64573 130.65 4.47173 128.847 4.30703 126.978C4.14234 125.108 4.98321 123.128 6.88171 121.051C8.77939 118.975 11.6894 116.854 15.5366 114.725C23.2277 110.467 34.5579 106.233 48.7087 102.265C77.0025 94.33 116.474 87.4838 160.412 83.6137C204.35 79.7437 244.41 79.5847 273.655 82.4515C288.282 83.8853 300.178 86.0736 308.495 88.921C312.655 90.3454 315.891 91.9251 318.122 93.6372C320.355 95.3501 321.529 97.1524 321.693 99.0223Z"
        stroke={theme.palette.primary.lighter}
      />
    </svg>
  );
}
