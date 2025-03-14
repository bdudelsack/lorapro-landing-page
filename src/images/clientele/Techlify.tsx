'use client';

// @mui
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';

/***************************  IMAGE - TECHLIFY  ***************************/

export default function Techlify({ imageSize }: { imageSize?: { width: number; height: number } }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        lineHeight: 0,
        '& svg': { width: imageSize?.width || { xs: 84, sm: 100, md: 136 }, height: imageSize?.height || { xs: 22, sm: 25, md: 38 } }
      }}
    >
      <svg viewBox="0 0 136 38" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M19.9316 5.3949C19.9316 3.57484 22.1451 2.67781 23.4122 3.98435L35.0876 16.0232C35.8566 16.816 36.2866 17.8771 36.2866 18.9816V32.9165C36.2866 34.7365 34.0732 35.6335 32.8061 34.327L21.1306 22.2882C20.3617 21.4953 19.9316 20.4342 19.9316 19.3297V5.3949Z"
          fill={theme.palette.secondary.lighter}
        />
        <path
          d="M9.79688 4.99939C9.79688 3.17933 12.0103 2.2823 13.2774 3.58884L24.7806 15.45C25.66 16.3568 26.1518 17.5704 26.1518 18.8336V32.521C26.1518 34.341 23.9384 35.238 22.6713 33.9315L10.9958 21.8927C10.2269 21.0998 9.79688 20.0387 9.79688 18.9342V4.99939Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M0 5.3949C0 3.57484 2.21342 2.67781 3.48052 3.98435L15.156 16.0232C15.9249 16.816 16.3549 17.8771 16.3549 18.9816V32.9165C16.3549 34.7365 14.1415 35.6335 12.8744 34.327L1.19896 22.2882C0.430024 21.4953 0 20.4342 0 19.3297V5.3949Z"
          fill={theme.palette.primary.main}
        />
        <path
          d="M51.6602 26.458V12.5717H46.9151V10.1759H59.4058V12.5717H54.6375V26.458H51.6602ZM65.0575 26.7371C63.8945 26.7371 62.8633 26.489 61.9639 25.9928C61.0645 25.4966 60.359 24.7988 59.8472 23.8994C59.3355 23 59.0797 21.961 59.0797 20.7825C59.0797 19.5885 59.3278 18.5263 59.824 17.5959C60.3357 16.6655 61.0335 15.9444 61.9174 15.4327C62.8168 14.9055 63.8713 14.6418 65.0808 14.6418C66.2128 14.6418 67.213 14.8899 68.0813 15.3862C68.9497 15.8824 69.6243 16.5647 70.105 17.4331C70.6012 18.2859 70.8493 19.2396 70.8493 20.2941C70.8493 20.4646 70.8416 20.643 70.826 20.829C70.826 21.0151 70.8183 21.209 70.8028 21.4105H62.0337C62.0957 22.3099 62.4059 23.0155 62.9641 23.5272C63.5379 24.0389 64.2279 24.2948 65.0343 24.2948C65.639 24.2948 66.143 24.163 66.5462 23.8994C66.9649 23.6203 67.275 23.2636 67.4766 22.8294H70.5004C70.2833 23.5582 69.9189 24.225 69.4072 24.8298C68.911 25.4191 68.2907 25.8843 67.5464 26.2254C66.8175 26.5666 65.9879 26.7371 65.0575 26.7371ZM65.0808 17.0609C64.352 17.0609 63.7084 17.2702 63.1502 17.6889C62.5919 18.0921 62.2353 18.7124 62.0802 19.5497H67.8255C67.779 18.7899 67.4998 18.1851 66.9881 17.7354C66.4764 17.2857 65.8406 17.0609 65.0808 17.0609ZM79.0056 26.7371C77.8271 26.7371 76.7882 26.4813 75.8888 25.9695C74.9894 25.4578 74.2761 24.7445 73.7488 23.8296C73.2371 22.9147 72.9812 21.868 72.9812 20.6895C72.9812 19.511 73.2371 18.4643 73.7488 17.5494C74.2761 16.6345 74.9894 15.9211 75.8888 15.4094C76.7882 14.8977 77.8271 14.6418 79.0056 14.6418C80.4788 14.6418 81.7193 15.0295 82.7273 15.8048C83.7352 16.5647 84.3787 17.6191 84.6579 18.9682H81.5177C81.3627 18.41 81.0525 17.9758 80.5873 17.6657C80.1376 17.34 79.6026 17.1772 78.9824 17.1772C78.1605 17.1772 77.4627 17.4873 76.889 18.1076C76.3152 18.7279 76.0283 19.5885 76.0283 20.6895C76.0283 21.7905 76.3152 22.6511 76.889 23.2714C77.4627 23.8916 78.1605 24.2018 78.9824 24.2018C79.6026 24.2018 80.1376 24.0467 80.5873 23.7366C81.0525 23.4264 81.3627 22.9845 81.5177 22.4107H84.6579C84.3787 23.7133 83.7352 24.76 82.7273 25.5509C81.7193 26.3417 80.4788 26.7371 79.0056 26.7371ZM87.3004 26.458V9.71068H90.2777V16.6887C90.6654 16.053 91.1849 15.5567 91.8362 15.2001C92.503 14.8279 93.2628 14.6418 94.1157 14.6418C95.5423 14.6418 96.6433 15.0915 97.4186 15.9909C98.2094 16.8903 98.6049 18.2084 98.6049 19.9452V26.458H95.6508V20.2243C95.6508 19.2318 95.4492 18.472 95.0461 17.9448C94.6584 17.4176 94.0381 17.1539 93.1853 17.1539C92.3479 17.1539 91.6501 17.4486 91.0918 18.0378C90.5491 18.6271 90.2777 19.4489 90.2777 20.5034V26.458H87.3004ZM101.452 26.458V9.71068H104.429V26.458H101.452ZM109.076 13.1299C108.534 13.1299 108.084 12.9671 107.727 12.6415C107.386 12.3158 107.215 11.9049 107.215 11.4087C107.215 10.9125 107.386 10.5093 107.727 10.1991C108.084 9.8735 108.534 9.71068 109.076 9.71068C109.619 9.71068 110.061 9.8735 110.402 10.1991C110.759 10.5093 110.937 10.9125 110.937 11.4087C110.937 11.9049 110.759 12.3158 110.402 12.6415C110.061 12.9671 109.619 13.1299 109.076 13.1299ZM107.588 26.458V14.921H110.565V26.458H107.588ZM114.208 26.458V17.4098H112.626V14.921H114.208V13.5719C114.208 12.1763 114.556 11.1838 115.254 10.5946C115.968 10.0053 116.929 9.71068 118.139 9.71068H119.418V12.246H118.604C118.092 12.246 117.728 12.3468 117.51 12.5484C117.293 12.75 117.185 13.0912 117.185 13.5719V14.921H119.674V17.4098H117.185V26.458H114.208ZM123.474 31.5752L126.149 25.6904H125.451L120.962 14.921H124.195L127.428 23.0388L130.801 14.921H133.964L126.637 31.5752H123.474Z"
          fill={theme.palette.primary.main}
        />
      </svg>
    </Box>
  );
}
