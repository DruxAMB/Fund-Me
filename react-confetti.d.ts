declare module 'react-confetti' {
    import { ComponentType } from 'react';
  
    interface ConfettiProps {
      width?: number;
      height?: number;
      colors?: string[];
    }
  
    const Confetti: ComponentType<ConfettiProps>;
    export default Confetti;
  }