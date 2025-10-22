
import { cn } from '@/lib/utils';

interface BabyBirdCharacterProps {
  className?: string;
  emotion?: 'happy' | 'thinking' | 'celebrating' | 'waving' | 'pointing';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function BabyBirdCharacter({ 
  className, 
  emotion = 'happy',
  size = 'md'
}: BabyBirdCharacterProps) {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32',
    xl: 'w-48 h-48'
  };

  return (
    <div className={cn(sizes[size], className)}>
      {emotion === 'happy' && <HappyBird />}
      {emotion === 'thinking' && <ThinkingBird />}
      {emotion === 'celebrating' && <CelebratingBird />}
      {emotion === 'waving' && <WavingBird />}
      {emotion === 'pointing' && <PointingBird />}
    </div>
  );
}

// Happy Bird (default)
function HappyBird() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-float">
      {/* Body */}
      <ellipse cx="100" cy="120" rx="50" ry="60" fill="#0183F1" />
      
      {/* Belly */}
      <ellipse cx="100" cy="130" rx="35" ry="45" fill="#E8F4FD" />
      
      {/* Head */}
      <circle cx="100" cy="70" r="40" fill="#0183F1" />
      
      {/* Eyes */}
      <circle cx="88" cy="65" r="8" fill="white" />
      <circle cx="112" cy="65" r="8" fill="white" />
      <circle cx="90" cy="65" r="4" fill="#1a1a1a" className="animate-pulse" />
      <circle cx="114" cy="65" r="4" fill="#1a1a1a" className="animate-pulse" />
      
      {/* Beak */}
      <path d="M100 75 L110 80 L100 85 Z" fill="#F7931E" />
      
      {/* Happy mouth */}
      <path d="M95 80 Q100 85 105 80" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Wings */}
      <ellipse cx="65" cy="110" rx="20" ry="35" fill="#005EB8" className="origin-center animate-[wave_1.5s_ease-in-out_infinite]" />
      <ellipse cx="135" cy="110" rx="20" ry="35" fill="#005EB8" className="origin-center animate-[wave_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.75s' }} />
      
      {/* Feet */}
      <path d="M85 175 L80 185 M85 175 L85 185 M85 175 L90 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      <path d="M115 175 L110 185 M115 175 L115 185 M115 175 L120 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      
      {/* Sparkles */}
      <circle cx="140" cy="60" r="3" fill="#F7931E" className="animate-pulse" />
      <circle cx="150" cy="70" r="2" fill="#F7931E" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="60" cy="60" r="3" fill="#F7931E" className="animate-pulse" style={{ animationDelay: '1s' }} />
    </svg>
  );
}

// Thinking Bird
function ThinkingBird() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <ellipse cx="100" cy="120" rx="50" ry="60" fill="#0183F1" />
      <ellipse cx="100" cy="130" rx="35" ry="45" fill="#E8F4FD" />
      
      {/* Head slightly tilted */}
      <circle cx="95" cy="70" r="40" fill="#0183F1" />
      
      {/* Thinking eyes */}
      <circle cx="83" cy="65" r="8" fill="white" />
      <circle cx="107" cy="65" r="8" fill="white" />
      <circle cx="85" cy="63" r="4" fill="#1a1a1a" />
      <circle cx="109" cy="63" r="4" fill="#1a1a1a" />
      
      {/* Beak */}
      <path d="M95 75 L105 80 L95 85 Z" fill="#F7931E" />
      
      {/* Thinking mouth */}
      <path d="M90 82 Q95 83 100 82" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Wings */}
      <ellipse cx="65" cy="110" rx="20" ry="35" fill="#005EB8" />
      <ellipse cx="135" cy="110" rx="20" ry="35" fill="#005EB8" />
      
      {/* Feet */}
      <path d="M85 175 L80 185 M85 175 L85 185 M85 175 L90 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      <path d="M115 175 L110 185 M115 175 L115 185 M115 175 L120 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      
      {/* Thought bubbles */}
      <circle cx="140" cy="40" r="15" fill="white" stroke="#0183F1" strokeWidth="2" className="animate-pulse" />
      <text x="140" y="48" textAnchor="middle" fontSize="20">?</text>
      <circle cx="155" cy="30" r="8" fill="white" stroke="#0183F1" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="165" cy="25" r="5" fill="white" stroke="#0183F1" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
    </svg>
  );
}

// Celebrating Bird
function CelebratingBird() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-bounce">
      {/* Body */}
      <ellipse cx="100" cy="120" rx="50" ry="60" fill="#0183F1" />
      <ellipse cx="100" cy="130" rx="35" ry="45" fill="#E8F4FD" />
      
      {/* Head */}
      <circle cx="100" cy="70" r="40" fill="#0183F1" />
      
      {/* Excited eyes */}
      <circle cx="88" cy="65" r="10" fill="white" />
      <circle cx="112" cy="65" r="10" fill="white" />
      <circle cx="88" cy="65" r="5" fill="#1a1a1a" />
      <circle cx="112" cy="65" r="5" fill="#1a1a1a" />
      
      {/* Beak open */}
      <path d="M100 75 L115 82 L100 90 Z" fill="#F7931E" />
      
      {/* Big smile */}
      <path d="M90 78 Q100 88 110 78" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Wings up */}
      <ellipse cx="60" cy="90" rx="20" ry="35" fill="#005EB8" transform="rotate(-30 60 90)" />
      <ellipse cx="140" cy="90" rx="20" ry="35" fill="#005EB8" transform="rotate(30 140 90)" />
      
      {/* Feet */}
      <path d="M85 175 L80 185 M85 175 L85 185 M85 175 L90 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      <path d="M115 175 L110 185 M115 175 L115 185 M115 175 L120 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      
      {/* Confetti */}
      <rect x="50" y="40" width="6" height="6" fill="#F7931E" className="animate-ping" />
      <rect x="145" y="35" width="6" height="6" fill="#0183F1" className="animate-ping" style={{ animationDelay: '0.2s' }} />
      <circle cx="70" cy="50" r="4" fill="#00D084" className="animate-ping" style={{ animationDelay: '0.4s' }} />
      <circle cx="130" cy="45" r="4" fill="#F7931E" className="animate-ping" style={{ animationDelay: '0.6s' }} />
    </svg>
  );
}

// Waving Bird
function WavingBird() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <ellipse cx="100" cy="120" rx="50" ry="60" fill="#0183F1" />
      <ellipse cx="100" cy="130" rx="35" ry="45" fill="#E8F4FD" />
      
      {/* Head */}
      <circle cx="100" cy="70" r="40" fill="#0183F1" />
      
      {/* Friendly eyes */}
      <path d="M85 65 Q88 62 91 65" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M109 65 Q112 62 115 65" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Beak */}
      <path d="M100 75 L110 80 L100 85 Z" fill="#F7931E" />
      
      {/* Smile */}
      <path d="M92 82 Q100 87 108 82" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Left wing normal */}
      <ellipse cx="65" cy="110" rx="20" ry="35" fill="#005EB8" />
      
      {/* Right wing waving */}
      <ellipse cx="145" cy="85" rx="20" ry="35" fill="#005EB8" className="origin-center animate-[wave_0.8s_ease-in-out_infinite]" />
      
      {/* Feet */}
      <path d="M85 175 L80 185 M85 175 L85 185 M85 175 L90 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      <path d="M115 175 L110 185 M115 175 L115 185 M115 175 L120 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      
      {/* Wave lines */}
      <path d="M165 75 Q170 70 175 75" stroke="#0183F1" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-pulse" />
      <path d="M170 85 Q175 80 180 85" stroke="#0183F1" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
    </svg>
  );
}

// Pointing Bird
function PointingBird() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Body */}
      <ellipse cx="100" cy="120" rx="50" ry="60" fill="#0183F1" />
      <ellipse cx="100" cy="130" rx="35" ry="45" fill="#E8F4FD" />
      
      {/* Head */}
      <circle cx="100" cy="70" r="40" fill="#0183F1" />
      
      {/* Eyes */}
      <circle cx="88" cy="65" r="8" fill="white" />
      <circle cx="112" cy="65" r="8" fill="white" />
      <circle cx="90" cy="65" r="4" fill="#1a1a1a" />
      <circle cx="114" cy="65" r="4" fill="#1a1a1a" />
      
      {/* Beak */}
      <path d="M100 75 L110 80 L100 85 Z" fill="#F7931E" />
      
      {/* Smile */}
      <path d="M92 82 Q100 87 108 82" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Left wing normal */}
      <ellipse cx="65" cy="110" rx="20" ry="35" fill="#005EB8" />
      
      {/* Right wing pointing */}
      <ellipse cx="150" cy="100" rx="18" ry="32" fill="#005EB8" transform="rotate(-45 150 100)" />
      
      {/* Feet */}
      <path d="M85 175 L80 185 M85 175 L85 185 M85 175 L90 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      <path d="M115 175 L110 185 M115 175 L115 185 M115 175 L120 185" stroke="#F7931E" strokeWidth="3" strokeLinecap="round" />
      
      {/* Pointing indicator */}
      <circle cx="175" cy="85" r="4" fill="#F7931E" className="animate-ping" />
    </svg>
  );
}
