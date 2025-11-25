// MamaLonSpinner.tsx (Styled-Components)
import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  size?: number; // px
  ariaLabel?: string;
};

// === Animations ===
const rotate = keyframes`
  to { transform: rotate(360deg); }
`;

const pulse = keyframes`
  0%, 100% { filter: saturate(1) brightness(1); transform: scale(1); }
  50% { filter: saturate(1.05) brightness(1.05); transform: scale(0.96); }
`;

const orbit = keyframes`
  0% { transform: translate(-50%, -50%) rotate(0deg) translateX(38%); }
  50% { transform: translate(-50%, -50%) rotate(180deg) translateX(38%); }
  100% { transform: translate(-50%, -50%) rotate(360deg) translateX(38%); }
`;

// === Styled Components ===
const Wrapper = styled.div<{ size: number }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: ${(p) => p.size}px;
  height: ${(p) => p.size}px;
`;

const SpinnerMain = styled.div<{ size: number }>`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: relative;
  box-sizing: border-box;
  background: conic-gradient(#4f46e5 0deg 90deg, #06b6d4 90deg 220deg, #f59e0b 220deg 360deg);
  animation: ${rotate} 1s linear infinite, ${pulse} 1.8s ease-in-out infinite;

  /* agujero interior */
  mask: radial-gradient(circle at center, transparent 0 36%, black 37%);
  -webkit-mask: radial-gradient(circle at center, transparent 0 36%, black 37%);

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: ${(p) => p.size * 0.14}px;
    height: ${(p) => p.size * 0.14}px;
    border-radius: 50%;
    background: white;
    top: 50%;
    left: 50%;
    transform-origin: -140% -140%;
    box-shadow: 0 0 8px rgba(255,255,255,0.9);
    animation: ${orbit} 1s linear infinite reverse;
  }

  &::after {
    transform-origin: 240% -140%;
    animation-duration: 1.35s;
  }
`;

const SROnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`;

export const Spinner = ({ size = 64, ariaLabel = "Cargando" }: Props)=>{
  return (
    <Wrapper size={size} role="status" aria-label={ariaLabel}>
      <SpinnerMain size={size} />
      <SROnly>{ariaLabel}…</SROnly>
    </Wrapper>
  );
}