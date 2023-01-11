import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import { IoIosArrowUp } from "react-icons/io";
import "./css/gototop.css";

const GoToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const goToBtn = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const listenToScroll = () => {
    let heightToHidden = 20;
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (winScroll > heightToHidden) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenToScroll);
    return () => window.removeEventListener("scroll", listenToScroll);
  }, []);

  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center',position:'relative'}}>
      {isVisible && (
        <div className="top-btn" onClick={goToBtn}>
          <IoIosArrowUp  />
        </div>
      )}
    </div>
  );
};

// const Wrapper = styled.section`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;

//   .top-btn {
// /*    font-size: 2.4rem;
//     width: 6rem;
//     height: 6rem;
//     color: #fff;
//     background-color: ${({ theme }) => theme.colors.btn};
//     box-shadow: ${({ theme }) => theme.colors.shadow};
//     border-radius: 50%;
//     position: fixed;
//     bottom: 5rem;
//     right: 5rem;
//     z-index: 999;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     cursor: pointer;*/

//     &--icon {
//       animation: gototop 1.2s linear infinite alternate-reverse;
//     }

//     @keyframes gototop {
//       0% {
//         transform: translateY(-0.5rem);
//       }
//       100% {
//         transform: translateY(1rem);
//       }
//     }
//   }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .top-btn {
//       right: 0;
//       left: 40%;
//     }
//   }
// `;

export default GoToTop;