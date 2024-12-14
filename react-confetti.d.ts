declare module 'react-confetti' {
    import { ComponentType } from 'react';
  
    interface ConfettiProps {
      width?: number;
      height?: number;
      numberOfPieces?: number;
      recycle?: boolean;
      // Add other props as needed based on the library's documentation
    }
  
    const Confetti: ComponentType<ConfettiProps>;
    export default Confetti;
  }