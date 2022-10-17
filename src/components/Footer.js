import React from 'react'
import { useStaticQuery, graphql, Link } from "gatsby"
import Container from './Container'

const Footer = () => {
  const data = useStaticQuery(graphql`
  {
    wp {
      acfOptionsThemeOption {
        themeOptions {
          footerDescription
          footerMenuTitle
          footerMenu {
            title {
              ... on WpPage {
                title
                slug
              }
            }
          }
          policyTitle
          policyMenu {
            title {
              ... on WpPage {
                title
                slug
              }
            }
          }
          socialMediaTitle
          socialMedia {
            icon
            link {
              title
              url
            }
          }
          emailTitle
          phoneTitle
          contactItems {
            icon
            link {
              title
              url
            }
          }
          topFooterTitle
          footerButton {
            ... on WpPage {
              title
              slug
            }
          }
        }
      }
    }
  }
`)
  let options = data.wp.acfOptionsThemeOption.themeOptions
  let footerMenu = options.footerMenu
  let policyMenu = options.policyMenu
  return (
    <>
    <div className="top-footer">
     <Container>
        <p>{options.topFooterTitle}</p>
        <Link to={`/${options.footerButton.slug}`}><button>{options.footerButton.title}</button></Link>
      </Container>
    </div>
    <footer className='site-footer'>
      <Container>
        <div className="footer-wrapper">
          <div className="footer-logo">
            <svg className='logo' width="340" height="60" viewBox="0 0 340 60" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M69.9173 29.5478C67.5052 27.2272 65.1637 24.8416 62.7987 22.4667C60.3684 20.0358 57.9508 17.594 55.5188 15.1649C55.0375 14.6843 54.2789 14.6156 53.7351 15.0241C48.2168 19.1694 43.9858 24.9452 42.619 31.8085C42.3661 33.0427 42.2284 34.2976 42.2076 35.5572C44.3642 35.9572 46.162 36.131 47.8963 37.4361C49.5999 38.7194 50.9772 40.2381 51.2925 42.6545C44.1646 42.544 37.051 41.9811 29.9946 40.9693C29.9602 40.8406 29.942 40.708 29.9402 40.5747C29.9676 40.3657 30.0143 40.1597 30.0798 39.9593C30.7141 38.066 32.0099 36.8333 33.9345 36.3681C35.4768 35.9953 37.0571 35.7762 38.7008 35.4758C38.7371 35.2169 38.7697 34.9327 38.8168 34.6341C39.056 33.1498 39.1792 31.633 39.5616 30.1831C41.0115 24.6388 43.7571 19.8186 47.9307 15.8491C51.5172 12.4389 55.5586 9.71656 60.5297 8.99434C61.5446 8.84772 61.4359 8.88212 62.9092 8.63233C62.8929 8.53277 62.3529 8.31556 61.8056 8.18343C61.1362 8.06383 60.4576 8.00327 59.7776 8.00242C56.356 7.89744 54.6398 8.25402 51.1494 9.15725C50.2287 9.39618 49.6995 9.26404 48.9058 8.63052L47.0759 7.17562C45.1708 5.66085 42.4753 5.63956 40.5673 7.15069C39.3762 8.09408 38.1674 9.06719 37.5373 9.62063C29.8116 16.412 32.9088 13.6462 29.8116 16.412C29.585 16.6148 29.3386 16.7994 28.9199 17.1361C28.9199 17.632 28.8837 16.3957 28.9199 17.1361C28.9199 17.1361 28.8819 11.981 28.8148 11.1501C28.7478 10.3193 22.1239 14.2092 22.1239 16.5804C22.1239 18.9516 22.1239 16.9134 22.1239 16.9134C22.1927 19.5453 22.2254 20.3707 22.3051 23.0025C22.3287 23.7971 22.0043 24.3655 21.457 24.9031C19.9231 26.4069 18.4015 27.9247 16.8921 29.4564C16.4383 29.917 16.185 30.538 16.185 31.1846C16.185 32.5489 17.291 33.6548 18.6553 33.6548H19.9582L19.9872 33.6277L20.0633 33.6548H20.4113V53.0914C20.7549 54.5032 21.5456 55.7665 22.6658 56.6935C24.3312 58.1017 26.2686 58.4185 28.3255 58.4257C32.1591 58.4366 35.9921 58.4408 39.8244 58.4384C46.0732 58.4384 52.3291 58.4601 58.567 58.4547C59.0564 58.4558 59.5452 58.4213 60.0295 58.3515C60.1818 58.3316 60.3304 58.3045 60.4771 58.2737H60.537C62.4634 57.8773 64.0618 56.8437 65.2271 54.992C65.9249 53.8824 66.2112 52.6805 66.3145 51.4334V33.6566H67.8461C69.2933 33.6566 70.4664 32.4835 70.4664 31.0363V30.9985C70.4664 30.4596 70.3071 29.9198 69.9173 29.5478ZM52.9598 52.5919C51.858 52.7729 50.7525 52.9303 49.647 53.0842L48.8496 53.1946C48.1953 53.2851 47.2493 53.4317 46.7509 52.8543C46.4964 52.551 46.3219 52.1888 46.2435 51.8008C46.1692 51.4913 46.1293 51.1583 46.0786 50.8017C46.0007 50.2587 45.9064 49.7374 45.8285 49.1491C45.611 47.9508 45.6745 47.4892 45.6473 47.806C45.5023 48.168 45.2848 49.2541 45.1652 49.6324C44.984 50.1591 44.8172 50.6876 44.656 51.2198C44.5708 51.4931 44.491 51.7628 44.4149 52.0434C44.2337 52.6787 43.8567 52.9484 43.217 52.8543C41.1293 52.5629 39.0198 52.3765 36.9628 51.9493C35.081 51.5357 33.2304 50.9914 31.4245 50.3202C28.7604 49.3518 27.6187 49.4767 28.7478 45.757C28.7967 45.5923 28.8511 45.4203 28.9109 45.2393C29.0669 44.7528 29.2546 44.2769 29.4727 43.8148C30.2139 42.2835 30.5999 42.1025 32.2437 42.45C35.7577 43.1976 35.6707 42.8663 35.5058 44.9968C35.4333 45.9977 35.3427 46.3833 35.2339 47.9309C35.2339 48.0105 35.223 48.092 35.2176 48.1789L35.3408 47.9671C35.4333 47.8096 35.5964 47.5309 35.8845 47.0403C36.4282 46.0321 36.6457 45.5507 36.7363 45.357C37.2419 44.2709 36.8994 44.8501 37.4612 43.7876C37.6189 43.4854 38.1372 43.2681 38.4543 43.2754C41.5872 43.3514 44.7206 43.4763 47.8546 43.6501C48.0395 43.6818 48.2151 43.7541 48.3686 43.8618C48.5222 43.9695 48.6499 44.1098 48.7426 44.2727C49.9859 46.9716 50.9065 48.3653 52.8438 50.5537C53.3562 51.1518 53.9269 51.6975 54.5474 52.1828C53.9095 52.3421 53.4437 52.514 52.9598 52.5919ZM55.43 51.609C55.3087 51.6514 55.1781 51.66 55.0523 51.6339C54.9265 51.6077 54.8102 51.5478 54.7159 51.4606C52.6988 49.6342 50.2251 45.4565 49.5165 44.2202C49.5006 44.193 49.4926 44.1618 49.4936 44.1302C49.4946 44.0987 49.5044 44.068 49.522 44.0418C49.5396 44.0156 49.5642 43.9948 49.593 43.9819C49.6218 43.9689 49.6537 43.9643 49.685 43.9686C50.1679 44.024 50.6563 44.0088 51.1348 43.9234C51.2211 43.9097 51.3095 43.9241 51.3868 43.9646C51.4642 44.005 51.5265 44.0693 51.5644 44.1478C53.5271 48.1011 57.2368 50.742 57.2368 50.742C57.1027 50.9935 56.0244 51.4008 55.4336 51.609H55.43Z" fill="#007BD5" />
              <path d="M71.175 12.1783C70.6658 11.342 70.9576 10.1311 70.7963 9.22784C70.2671 9.89757 69.7796 10.9347 68.9641 11.4289C68.1485 11.923 66.7476 11.7674 66.0264 11.8959C66.6135 12.4643 67.951 12.9095 68.3678 13.7748C68.7846 14.64 68.5617 15.9975 68.6777 17.2139C68.984 16.698 69.2667 16.3089 69.4751 15.8672C70.249 14.249 70.7038 13.9702 72.498 14.068C72.9275 14.0933 73.3625 14.0915 73.9714 14.106C72.971 13.3874 71.6589 12.9783 71.175 12.1783Z" fill="#5CD1A7" />
              <path d="M62.4743 15.1993C61.9469 14.935 61.7077 14.22 61.3344 13.811C61.2782 14.325 61.3615 15.0092 61.1042 15.5251C60.8469 16.041 60.0803 16.4084 59.7522 16.7035C60.2343 16.8066 61.0607 16.6057 61.5518 16.9134C62.043 17.2211 62.3655 17.9904 62.8204 18.5769C62.8204 18.2149 62.8204 17.9235 62.7951 17.6338C62.6736 16.5587 62.8168 16.2709 63.7646 15.7459C63.993 15.6192 64.2123 15.4817 64.5312 15.2916C63.7809 15.2409 62.9799 15.4527 62.4743 15.1993Z" fill="#5CD1A7" />
              <path d="M78.1251 16.8211C77.6847 16.2365 77.8152 15.3097 77.6304 14.649C77.2824 15.192 76.9943 15.9957 76.4216 16.4229C75.8489 16.8501 74.7905 16.8374 74.265 16.984C74.7434 17.3659 75.7728 17.6031 76.1479 18.2167C76.5231 18.8303 76.4524 19.862 76.6282 20.7653C76.8185 20.3598 76.9997 20.0412 77.1229 19.7046C77.5851 18.4375 77.904 18.2004 79.2487 18.1443C79.5732 18.1316 79.8939 18.0972 80.3524 18.0646C79.5532 17.5922 78.5456 17.3822 78.1251 16.8211Z" fill="#5CD1A7" />
              <path d="M35.2303 48.1662C35.2303 48.0793 35.2412 47.9979 35.2466 47.9182C35.281 47.9291 35.3173 47.94 35.3535 47.9544L35.2303 48.1662Z" fill="#5CD1A7" />
              <path d="M0.169934 38.8099C-1.86888 22.0142 14.177 -0.235241 62.4489 0.00187943C62.4489 0.00187943 36.1527 1.74498 21.7941 10.3193C7.59847 18.7905 3.78906 40.4535 20.4113 45.2538C20.6378 45.319 20.6867 45.3823 20.9223 45.4348C20.9223 45.4348 23.7586 46.2982 28.2712 47.7861C28.4524 49.4152 28.7677 49.3319 31.4318 50.3003C33.2376 50.9715 35.0882 51.5158 36.9701 51.9294C39.027 52.3638 41.1383 52.5502 43.2243 52.8344C43.864 52.9231 44.2464 52.6534 44.4222 52.0235C44.4983 51.7484 44.578 51.4805 44.6632 51.1999L46.2471 51.7809C46.3255 52.1689 46.5 52.5311 46.7546 52.8344C47.253 53.4118 48.2044 53.2652 48.8532 53.1747L49.6506 53.0643C55.0421 55.1422 59.3735 57.0627 60.537 58.2429H60.4771L60.0295 58.3207C54.3915 59.2692 3.60239 67.0182 0.169934 38.7719" fill="#5CD1A7" />
              <path d="M38.0574 52.2069C38.0574 52.2069 38.9318 51.3654 39.5073 49.5962C39.5073 49.5962 39.2842 51.8925 39.2514 52.3113C38.3986 52.2591 38.0574 52.2069 38.0574 52.2069Z" fill="#5CD1A7" />
              <path d="M82.9956 60V35.1542H87.7057V43.5895C88.7867 43.385 90.0864 43.2061 91.605 43.0527C93.1235 42.8993 94.8608 42.8226 96.8169 42.8226H98.7473C100.034 42.8226 101.025 43.0016 101.72 43.3594C102.415 43.7173 102.904 44.1646 103.187 44.7014C103.496 45.2382 103.676 45.7878 103.728 46.3501C103.805 46.8869 103.843 47.347 103.843 47.7304V60H99.1334V47.6538C99.1334 46.6313 98.5156 46.1201 97.2802 46.1201H88.8639C88.3749 46.1201 88.0531 46.1712 87.8987 46.2734C87.77 46.3501 87.7057 46.5802 87.7057 46.9636V60H82.9956Z" fill="#5CD1A7" />
              <path d="M113.004 60C111.279 60 109.993 59.6549 109.143 58.9648C108.32 58.2746 107.908 57.1499 107.908 55.5906V47.7304C107.908 47.347 107.933 46.8869 107.985 46.3501C108.062 45.7878 108.242 45.2382 108.525 44.7014C108.834 44.1646 109.336 43.7173 110.031 43.3594C110.752 43.0016 111.743 42.8226 113.004 42.8226H123.659C124.946 42.8226 125.937 43.0016 126.632 43.3594C127.327 43.7173 127.816 44.1646 128.099 44.7014C128.408 45.2382 128.588 45.7878 128.64 46.3501C128.717 46.8869 128.756 47.347 128.756 47.7304V55.0922C128.756 55.5523 128.717 56.0635 128.64 56.6259C128.588 57.1882 128.408 57.725 128.099 58.2362C127.79 58.7475 127.288 59.1692 126.594 59.5015C125.899 59.8338 124.921 60 123.659 60H113.004ZM114.471 56.7026H122.192C123.454 56.7026 124.084 56.1913 124.084 55.1689V47.6538C124.084 46.6313 123.454 46.1201 122.192 46.1201H114.471C113.236 46.1201 112.618 46.6313 112.618 47.6538V55.1689C112.618 56.1913 113.236 56.7026 114.471 56.7026Z" fill="#5CD1A7" />
              <path d="M132.989 60V42.8226H136.155L137.12 43.2827C137.866 43.1549 138.78 43.0527 139.861 42.976C140.942 42.8738 142.229 42.8226 143.722 42.8226H145.652C146.398 42.8226 147.119 42.9249 147.814 43.1294C148.509 43.3083 149.024 43.5767 149.358 43.9346C150.027 43.6023 150.954 43.3339 152.138 43.1294C153.322 42.9249 154.866 42.8226 156.771 42.8226H158.701C159.988 42.8226 160.979 43.0016 161.674 43.3594C162.369 43.7173 162.858 44.1646 163.141 44.7014C163.45 45.2382 163.63 45.7878 163.681 46.3501C163.759 46.8869 163.797 47.347 163.797 47.7304V60H159.087V47.6538C159.087 46.6313 158.469 46.1201 157.234 46.1201H151.829C151.417 46.1201 151.134 46.1712 150.98 46.2734C150.825 46.3757 150.748 46.6057 150.748 46.9636V60H146.038V47.6538C146.038 46.6313 145.42 46.1201 144.185 46.1201H138.857C138.368 46.1201 138.046 46.1712 137.892 46.2734C137.763 46.3501 137.699 46.5802 137.699 46.9636V60H132.989Z" fill="#5CD1A7" />
              <path d="M172.95 60C171.663 60 170.673 59.8338 169.978 59.5015C169.283 59.1692 168.781 58.7475 168.472 58.2362C168.189 57.725 168.009 57.1882 167.931 56.6259C167.88 56.0635 167.854 55.5523 167.854 55.0922V47.7304C167.854 47.347 167.88 46.8869 167.931 46.3501C168.009 45.7878 168.189 45.2382 168.472 44.7014C168.781 44.1646 169.283 43.7173 169.978 43.3594C170.698 43.0016 171.689 42.8226 172.95 42.8226H181.251C182.95 42.8226 184.275 42.9888 185.227 43.3211C186.205 43.6278 186.888 44.1391 187.274 44.8548C187.685 45.5705 187.891 46.5291 187.891 47.7304V53.4051H181.135C178.819 53.4051 176.927 53.354 175.46 53.2517C174.019 53.1495 173.053 53.0856 172.564 53.06V55.1689C172.539 56.1913 173.156 56.7026 174.417 56.7026H176.386C177.776 56.7026 179.128 56.6898 180.44 56.6642C181.779 56.6131 183.001 56.562 184.108 56.5108C185.215 56.4342 186.103 56.3703 186.772 56.3191L188.316 58.8114C188.316 59.6038 185.781 60 180.71 60H172.95ZM172.564 50.1077H183.181V47.6538C183.181 47.1425 183.117 46.7847 182.988 46.5802C182.885 46.3757 182.551 46.2479 181.984 46.1968C181.418 46.1456 180.453 46.1201 179.089 46.1201H174.417C173.182 46.1201 172.564 46.6313 172.564 47.6538V50.1077Z" fill="#5CD1A7" />
              <path d="M196.891 60C195.604 60 194.613 59.8338 193.919 59.5015C193.224 59.1692 192.722 58.7475 192.413 58.2362C192.13 57.725 191.95 57.1882 191.872 56.6259C191.821 56.0635 191.795 55.5523 191.795 55.0922V47.7304C191.795 47.347 191.821 46.8869 191.872 46.3501C191.95 45.7878 192.13 45.2382 192.413 44.7014C192.722 44.1646 193.224 43.7173 193.919 43.3594C194.639 43.0016 195.63 42.8226 196.891 42.8226H202.258C205.475 42.8226 207.753 42.9121 209.091 43.091C210.455 43.2444 211.137 43.4106 211.137 43.5895L210.365 46.5035C209.645 46.4524 208.731 46.4013 207.624 46.3501C206.517 46.2734 205.321 46.2223 204.034 46.1968C202.772 46.1456 201.537 46.1201 200.327 46.1201H198.358C197.123 46.1201 196.505 46.6313 196.505 47.6538V55.1689C196.479 56.1913 197.097 56.7026 198.358 56.7026H200.327C201.717 56.7026 203.068 56.6898 204.381 56.6642C205.719 56.6131 206.942 56.562 208.049 56.5108C209.155 56.4342 210.043 56.3703 210.713 56.3191L212.257 58.8114C212.257 59.6038 209.722 60 204.651 60H196.891Z" fill="#007BD5" />
              <path d="M215.339 60V38.7584L214.953 35.691H220.049V60H215.339Z" fill="#007BD5" />
              <path d="M229.391 60C228.104 60 227.113 59.8338 226.418 59.5015C225.723 59.1692 225.221 58.7475 224.912 58.2362C224.629 57.725 224.449 57.1882 224.372 56.6259C224.32 56.0635 224.294 55.5523 224.294 55.0922V47.7304C224.294 47.347 224.32 46.8869 224.372 46.3501C224.449 45.7878 224.629 45.2382 224.912 44.7014C225.221 44.1646 225.723 43.7173 226.418 43.3594C227.139 43.0016 228.129 42.8226 229.391 42.8226H237.691C239.39 42.8226 240.715 42.9888 241.668 43.3211C242.646 43.6278 243.328 44.1391 243.714 44.8548C244.126 45.5705 244.332 46.5291 244.332 47.7304V53.4051H237.575C235.259 53.4051 233.367 53.354 231.9 53.2517C230.459 53.1495 229.494 53.0856 229.005 53.06V55.1689C228.979 56.1913 229.597 56.7026 230.858 56.7026H232.827C234.216 56.7026 235.568 56.6898 236.88 56.6642C238.219 56.6131 239.441 56.562 240.548 56.5108C241.655 56.4342 242.543 56.3703 243.212 56.3191L244.756 58.8114C244.756 59.6038 242.221 60 237.151 60H229.391ZM229.005 50.1077H239.621V47.6538C239.621 47.1425 239.557 46.7847 239.428 46.5802C239.325 46.3757 238.991 46.2479 238.425 46.1968C237.858 46.1456 236.893 46.1201 235.529 46.1201H230.858C229.622 46.1201 229.005 46.6313 229.005 47.6538V50.1077Z" fill="#007BD5" />
              <path d="M253.602 60C251.646 60 250.23 59.5527 249.355 58.658C248.48 57.7378 248.042 56.4853 248.042 54.9005C248.042 53.239 248.493 51.9609 249.394 51.0662C250.32 50.1716 251.723 49.7243 253.602 49.7243H255.571C257.501 49.7243 259.238 49.7754 260.783 49.8776C262.327 49.9799 263.601 50.0821 264.605 50.1844V47.6538C264.605 47.4237 264.579 47.1937 264.528 46.9636C264.476 46.708 264.322 46.5035 264.064 46.3501C263.807 46.1968 263.369 46.1201 262.752 46.1201H260.821C258.016 46.1201 255.674 46.1712 253.795 46.2734C251.916 46.3501 250.642 46.4268 249.973 46.5035L249.548 43.5895C249.548 43.2316 250.526 43.0143 252.482 42.9377C254.438 42.861 257.707 42.8226 262.288 42.8226H264.219C265.506 42.8226 266.497 43.0016 267.191 43.3594C267.886 43.7173 268.375 44.1646 268.659 44.7014C268.967 45.2382 269.148 45.7878 269.199 46.3501C269.276 46.8869 269.315 47.347 269.315 47.7304V60H266.149L264.643 59.2331C263.562 59.4121 262.263 59.591 260.744 59.7699C259.226 59.9233 257.488 60 255.532 60H253.602ZM254.606 56.7026H263.447C264.013 56.7026 264.347 56.6514 264.45 56.5492C264.553 56.4469 264.605 56.1274 264.605 55.5906V52.6383H254.606C253.911 52.6383 253.422 52.8044 253.138 53.1367C252.881 53.469 252.752 53.993 252.752 54.7088C252.752 55.4245 252.907 55.9357 253.216 56.2424C253.525 56.5492 253.988 56.7026 254.606 56.7026Z" fill="#007BD5" />
              <path d="M273.769 60V42.8226H276.935L278.479 43.5895C279.56 43.385 280.86 43.2061 282.378 43.0527C283.897 42.8993 285.634 42.8226 287.59 42.8226H289.521C290.807 42.8226 291.798 43.0016 292.493 43.3594C293.188 43.7173 293.677 44.1646 293.96 44.7014C294.269 45.2382 294.449 45.7878 294.501 46.3501C294.578 46.8869 294.617 47.347 294.617 47.7304V60H289.907V47.6538C289.907 46.6313 289.289 46.1201 288.053 46.1201H279.637C279.148 46.1201 278.826 46.1712 278.672 46.2734C278.543 46.3501 278.479 46.5802 278.479 46.9636V60H273.769Z" fill="#007BD5" />
              <path d="M303.777 60C302.49 60 301.499 59.8338 300.804 59.5015C300.109 59.1692 299.608 58.7475 299.299 58.2362C299.016 57.725 298.835 57.1882 298.758 56.6259C298.707 56.0635 298.681 55.5523 298.681 55.0922V47.7304C298.681 47.347 298.707 46.8869 298.758 46.3501C298.835 45.7878 299.016 45.2382 299.299 44.7014C299.608 44.1646 300.109 43.7173 300.804 43.3594C301.525 43.0016 302.516 42.8226 303.777 42.8226H312.078C313.776 42.8226 315.102 42.9888 316.054 43.3211C317.032 43.6278 317.714 44.1391 318.1 44.8548C318.512 45.5705 318.718 46.5291 318.718 47.7304V53.4051H311.962C309.645 53.4051 307.754 53.354 306.287 53.2517C304.845 53.1495 303.88 53.0856 303.391 53.06V55.1689C303.365 56.1913 303.983 56.7026 305.244 56.7026H307.213C308.603 56.7026 309.954 56.6898 311.267 56.6642C312.605 56.6131 313.828 56.562 314.935 56.5108C316.041 56.4342 316.929 56.3703 317.598 56.3191L319.143 58.8114C319.143 59.6038 316.607 60 311.537 60H303.777ZM303.391 50.1077H314.008V47.6538C314.008 47.1425 313.944 46.7847 313.815 46.5802C313.712 46.3757 313.377 46.2479 312.811 46.1968C312.245 46.1456 311.28 46.1201 309.916 46.1201H305.244C304.009 46.1201 303.391 46.6313 303.391 47.6538V50.1077Z" fill="#007BD5" />
              <path d="M323.008 60V42.8226H326.174L327.641 43.5895C328.31 43.2316 329.031 42.9504 329.803 42.746C330.575 42.5415 331.553 42.4392 332.737 42.4392C334.616 42.4392 336.134 42.6437 337.293 43.0527C338.476 43.4617 339.262 43.7684 339.648 43.9729L338.296 47.3087C337.987 47.1553 337.473 46.9636 336.752 46.7336C336.057 46.4779 335.234 46.2479 334.281 46.0434C333.329 45.8389 332.286 45.7367 331.154 45.7367H330.729C329.494 45.7367 328.683 45.9795 328.297 46.4652C327.937 46.9508 327.744 47.756 327.718 48.8807V60H323.008Z" fill="#007BD5" />
            </svg>
            <p className="short-derscription">{options.footerDescription}</p>
            <div className="location">
              <div className="icon" dangerouslySetInnerHTML={{ __html: options.contactItems[0].icon }}></div>
              <p>{options.contactItems[0].link.title}</p>
            </div>
          </div>
          <div className="footer-menu-wrapper">
            <h3>{options.footerMenuTitle}</h3>
            <ul className="footer-menu">
              {
                footerMenu.map((menuItem, index) => 
                  <li key={index}><Link to={`/${menuItem.title.slug}`}>{menuItem.title.title}</Link></li>
                )
              }
            </ul>
          </div>
          <div className="policy-menu-wrapper">
            <h3>{options.policyTitle}</h3>
            <ul className="policy-menu">
              {
                policyMenu.map((menuItem, index) => 
                <li key={index}><Link to={`/${menuItem.title.slug}`}>{menuItem.title.title}</Link></li>
              )
              }
            </ul>
          </div>
          <div className="footer-contacts">
            <h3>{options.socialMediaTitle}</h3>
              <div className="sm-item">
                {
                  options.socialMedia.map((smItem, index) => 
                  <a href={smItem.link.url} key={index} dangerouslySetInnerHTML={{ __html: smItem.icon }}></a>
                  )
                }
              </div>
              <h3>{options.emailTitle}</h3>
              <a href={options.contactItems[1].link.url}>{options.contactItems[1].link.title}</a>
              <h3>{options.phoneTitle}</h3>
              <a href={options.contactItems[2].link.url}>{options.contactItems[2].link.title}</a>
          </div>
        </div>
        <div className="copyright">
          <p>© Copyright A1Hauswartung GmbH.</p>
          <p>Made with love by <a href="https://www.nerdycreative.ch/">Nerdy Creative</a></p>
        </div>
      </Container>
    </footer>
    </>
  )
}

export default Footer



