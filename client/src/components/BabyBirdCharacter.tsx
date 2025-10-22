
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
      {emotion === 'happy' && <HappyCharacter />}
      {emotion === 'thinking' && <ThinkingCharacter />}
      {emotion === 'celebrating' && <CelebratingCharacter />}
      {emotion === 'waving' && <WavingCharacter />}
      {emotion === 'pointing' && <PointingCharacter />}
    </div>
  );
}

// Happy Character (default)
function HappyCharacter() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-float">
      {/* Head */}
      <ellipse cx="100" cy="100" rx="55" ry="60" fill="#0183F1" />
      
      {/* Light blue face patch */}
      <ellipse cx="100" cy="110" rx="40" ry="45" fill="#E8F4FD" />
      
      {/* Big Ears (rounded bear-like with tiger stripes) */}
      <ellipse cx="50" cy="70" rx="25" ry="32" fill="#0183F1" />
      <ellipse cx="150" cy="70" rx="25" ry="32" fill="#0183F1" />
      
      {/* Inner ears */}
      <ellipse cx="50" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      <ellipse cx="150" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      
      {/* Tiger stripes on ears */}
      <path d="M45 65 Q48 70 45 75" stroke="#005EB8" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M55 65 Q52 70 55 75" stroke="#005EB8" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M145 65 Q148 70 145 75" stroke="#005EB8" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M155 65 Q152 70 155 75" stroke="#005EB8" strokeWidth="2" fill="none" strokeLinecap="round" />
      
      {/* Forehead stripes (tiger-like) */}
      <path d="M75 80 Q80 82 85 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M115 80 Q120 82 125 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M70 88 Q75 90 80 88" stroke="#005EB8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M120 88 Q125 90 130 88" stroke="#005EB8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Eyes - big and friendly */}
      <ellipse cx="80" cy="95" rx="12" ry="14" fill="white" />
      <ellipse cx="120" cy="95" rx="12" ry="14" fill="white" />
      
      {/* Pupils with sparkle */}
      <circle cx="82" cy="95" r="7" fill="#1a1a1a" className="animate-pulse" />
      <circle cx="122" cy="95" r="7" fill="#1a1a1a" className="animate-pulse" />
      <circle cx="84" cy="93" r="3" fill="white" />
      <circle cx="124" cy="93" r="3" fill="white" />
      
      {/* Nose - bear/tiger hybrid */}
      <ellipse cx="100" cy="110" rx="8" ry="6" fill="#005EB8" />
      
      {/* Big friendly smile */}
      <path d="M85 120 Q100 132 115 120" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Whisker dots */}
      <circle cx="65" cy="105" r="2.5" fill="#005EB8" />
      <circle cx="70" cy="110" r="2.5" fill="#005EB8" />
      <circle cx="135" cy="105" r="2.5" fill="#005EB8" />
      <circle cx="130" cy="110" r="2.5" fill="#005EB8" />
      
      {/* Cheek blush */}
      <ellipse cx="70" cy="115" rx="8" ry="5" fill="#F7931E" opacity="0.3" />
      <ellipse cx="130" cy="115" rx="8" ry="5" fill="#F7931E" opacity="0.3" />
      
      {/* Body */}
      <ellipse cx="100" cy="160" rx="45" ry="35" fill="#0183F1" />
      <ellipse cx="100" cy="165" rx="30" ry="25" fill="#E8F4FD" />
      
      {/* Arms */}
      <ellipse cx="60" cy="150" rx="15" ry="25" fill="#0183F1" className="origin-center animate-[wave_1.5s_ease-in-out_infinite]" />
      <ellipse cx="140" cy="150" rx="15" ry="25" fill="#0183F1" className="origin-center animate-[wave_1.5s_ease-in-out_infinite]" style={{ animationDelay: '0.75s' }} />
      
      {/* Paw details */}
      <circle cx="60" cy="165" r="3" fill="#005EB8" />
      <circle cx="140" cy="165" r="3" fill="#005EB8" />
      
      {/* Sparkles */}
      <circle cx="140" cy="60" r="3" fill="#F7931E" className="animate-pulse" />
      <circle cx="150" cy="50" r="2" fill="#F7931E" className="animate-pulse" style={{ animationDelay: '0.5s' }} />
      <circle cx="60" cy="60" r="3" fill="#F7931E" className="animate-pulse" style={{ animationDelay: '1s' }} />
      <circle cx="50" cy="50" r="2" fill="#F7931E" className="animate-pulse" style={{ animationDelay: '1.5s' }} />
    </svg>
  );
}

// Thinking Character
function ThinkingCharacter() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Head tilted */}
      <ellipse cx="95" cy="100" rx="55" ry="60" fill="#0183F1" transform="rotate(-5 95 100)" />
      <ellipse cx="95" cy="110" rx="40" ry="45" fill="#E8F4FD" transform="rotate(-5 95 100)" />
      
      {/* Big Ears */}
      <ellipse cx="45" cy="70" rx="25" ry="32" fill="#0183F1" />
      <ellipse cx="145" cy="70" rx="25" ry="32" fill="#0183F1" />
      <ellipse cx="45" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      <ellipse cx="145" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      
      {/* Tiger stripes */}
      <path d="M70 80 Q75 82 80 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M110 80 Q115 82 120 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Thinking eyes */}      
      <ellipse cx="77" cy="95" rx="12" ry="14" fill="white" />
      <ellipse cx="117" cy="95" rx="12" ry="14" fill="white" />
      <circle cx="79" cy="93" r="7" fill="#1a1a1a" />
      <circle cx="119" cy="93" r="7" fill="#1a1a1a" />
      <circle cx="81" cy="91" r="3" fill="white" />
      <circle cx="121" cy="91" r="3" fill="white" />
      
      {/* Nose */}
      <ellipse cx="95" cy="110" rx="8" ry="6" fill="#005EB8" />
      
      {/* Thinking mouth */}
      <path d="M85 122 Q95 124 105 122" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Whisker dots */}
      <circle cx="62" cy="105" r="2.5" fill="#005EB8" />
      <circle cx="128" cy="105" r="2.5" fill="#005EB8" />
      
      {/* Body */}
      <ellipse cx="100" cy="160" rx="45" ry="35" fill="#0183F1" />
      <ellipse cx="100" cy="165" rx="30" ry="25" fill="#E8F4FD" />
      
      {/* Arms */}
      <ellipse cx="60" cy="150" rx="15" ry="25" fill="#0183F1" />
      <ellipse cx="140" cy="150" rx="15" ry="25" fill="#0183F1" />
      
      {/* Thought bubbles */}
      <circle cx="140" cy="40" r="15" fill="white" stroke="#0183F1" strokeWidth="2" className="animate-pulse" />
      <text x="140" y="48" textAnchor="middle" fontSize="20" fill="#0183F1">?</text>
      <circle cx="155" cy="30" r="8" fill="white" stroke="#0183F1" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
      <circle cx="165" cy="25" r="5" fill="white" stroke="#0183F1" strokeWidth="2" className="animate-pulse" style={{ animationDelay: '0.6s' }} />
    </svg>
  );
}

// Celebrating Character
function CelebratingCharacter() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full animate-bounce">
      {/* Head */}
      <ellipse cx="100" cy="100" rx="55" ry="60" fill="#0183F1" />
      <ellipse cx="100" cy="110" rx="40" ry="45" fill="#E8F4FD" />
      
      {/* Big Ears */}
      <ellipse cx="50" cy="70" rx="25" ry="32" fill="#0183F1" />
      <ellipse cx="150" cy="70" rx="25" ry="32" fill="#0183F1" />
      <ellipse cx="50" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      <ellipse cx="150" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      
      {/* Tiger stripes */}
      <path d="M75 80 Q80 82 85 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M115 80 Q120 82 125 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Excited eyes */}
      <ellipse cx="80" cy="95" rx="14" ry="16" fill="white" />
      <ellipse cx="120" cy="95" rx="14" ry="16" fill="white" />
      <circle cx="80" cy="95" r="8" fill="#1a1a1a" />
      <circle cx="120" cy="95" r="8" fill="#1a1a1a" />
      <circle cx="82" cy="93" r="3" fill="white" />
      <circle cx="122" cy="93" r="3" fill="white" />
      
      {/* Nose */}
      <ellipse cx="100" cy="110" rx="8" ry="6" fill="#005EB8" />
      
      {/* Big smile */}
      <path d="M82 118 Q100 135 118 118" stroke="#1a1a1a" strokeWidth="3.5" fill="none" strokeLinecap="round" />
      
      {/* Whisker dots */}
      <circle cx="65" cy="105" r="2.5" fill="#005EB8" />
      <circle cx="135" cy="105" r="2.5" fill="#005EB8" />
      
      {/* Body */}
      <ellipse cx="100" cy="160" rx="45" ry="35" fill="#0183F1" />
      <ellipse cx="100" cy="165" rx="30" ry="25" fill="#E8F4FD" />
      
      {/* Arms raised */}
      <ellipse cx="65" cy="130" rx="15" ry="25" fill="#0183F1" transform="rotate(-30 65 130)" />
      <ellipse cx="135" cy="130" rx="15" ry="25" fill="#0183F1" transform="rotate(30 135 130)" />
      
      {/* Confetti */}
      <rect x="50" y="40" width="6" height="6" fill="#F7931E" className="animate-ping" />
      <rect x="145" y="35" width="6" height="6" fill="#0183F1" className="animate-ping" style={{ animationDelay: '0.2s' }} />
      <circle cx="70" cy="50" r="4" fill="#00D084" className="animate-ping" style={{ animationDelay: '0.4s' }} />
      <circle cx="130" cy="45" r="4" fill="#F7931E" className="animate-ping" style={{ animationDelay: '0.6s' }} />
    </svg>
  );
}

// Waving Character
function WavingCharacter() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Head */}
      <ellipse cx="100" cy="100" rx="55" ry="60" fill="#0183F1" />
      <ellipse cx="100" cy="110" rx="40" ry="45" fill="#E8F4FD" />
      
      {/* Big Ears */}
      <ellipse cx="50" cy="70" rx="25" ry="32" fill="#0183F1" />
      <ellipse cx="150" cy="70" rx="25" ry="32" fill="#0183F1" />
      <ellipse cx="50" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      <ellipse cx="150" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      
      {/* Tiger stripes */}
      <path d="M75 80 Q80 82 85 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M115 80 Q120 82 125 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Friendly eyes */}
      <path d="M75 95 Q80 92 85 95" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M115 95 Q120 92 125 95" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Nose */}
      <ellipse cx="100" cy="110" rx="8" ry="6" fill="#005EB8" />
      
      {/* Smile */}
      <path d="M85 120 Q100 130 115 120" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Whisker dots */}
      <circle cx="65" cy="105" r="2.5" fill="#005EB8" />
      <circle cx="135" cy="105" r="2.5" fill="#005EB8" />
      
      {/* Cheek blush */}
      <ellipse cx="70" cy="115" rx="8" ry="5" fill="#F7931E" opacity="0.3" />
      <ellipse cx="130" cy="115" rx="8" ry="5" fill="#F7931E" opacity="0.3" />
      
      {/* Body */}
      <ellipse cx="100" cy="160" rx="45" ry="35" fill="#0183F1" />
      <ellipse cx="100" cy="165" rx="30" ry="25" fill="#E8F4FD" />
      
      {/* Left arm normal */}
      <ellipse cx="60" cy="150" rx="15" ry="25" fill="#0183F1" />
      
      {/* Right arm waving */}
      <ellipse cx="145" cy="125" rx="15" ry="25" fill="#0183F1" className="origin-center animate-[wave_0.8s_ease-in-out_infinite]" />
      
      {/* Wave lines */}
      <path d="M165 115 Q170 110 175 115" stroke="#0183F1" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-pulse" />
      <path d="M170 125 Q175 120 180 125" stroke="#0183F1" strokeWidth="2" fill="none" strokeLinecap="round" className="animate-pulse" style={{ animationDelay: '0.3s' }} />
    </svg>
  );
}

// Pointing Character
function PointingCharacter() {
  return (
    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      {/* Head */}
      <ellipse cx="100" cy="100" rx="55" ry="60" fill="#0183F1" />
      <ellipse cx="100" cy="110" rx="40" ry="45" fill="#E8F4FD" />
      
      {/* Big Ears */}
      <ellipse cx="50" cy="70" rx="25" ry="32" fill="#0183F1" />
      <ellipse cx="150" cy="70" rx="25" ry="32" fill="#0183F1" />
      <ellipse cx="50" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      <ellipse cx="150" cy="75" rx="15" ry="20" fill="#E8F4FD" />
      
      {/* Tiger stripes */}
      <path d="M75 80 Q80 82 85 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M115 80 Q120 82 125 80" stroke="#005EB8" strokeWidth="3" fill="none" strokeLinecap="round" />
      
      {/* Eyes */}
      <ellipse cx="80" cy="95" rx="12" ry="14" fill="white" />
      <ellipse cx="120" cy="95" rx="12" ry="14" fill="white" />
      <circle cx="82" cy="95" r="7" fill="#1a1a1a" />
      <circle cx="122" cy="95" r="7" fill="#1a1a1a" />
      <circle cx="84" cy="93" r="3" fill="white" />
      <circle cx="124" cy="93" r="3" fill="white" />
      
      {/* Nose */}
      <ellipse cx="100" cy="110" rx="8" ry="6" fill="#005EB8" />
      
      {/* Smile */}
      <path d="M85 120 Q100 130 115 120" stroke="#1a1a1a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      
      {/* Whisker dots */}
      <circle cx="65" cy="105" r="2.5" fill="#005EB8" />
      <circle cx="135" cy="105" r="2.5" fill="#005EB8" />
      
      {/* Body */}
      <ellipse cx="100" cy="160" rx="45" ry="35" fill="#0183F1" />
      <ellipse cx="100" cy="165" rx="30" ry="25" fill="#E8F4FD" />
      
      {/* Left arm normal */}
      <ellipse cx="60" cy="150" rx="15" ry="25" fill="#0183F1" />
      
      {/* Right arm pointing */}
      <ellipse cx="150" cy="140" rx="14" ry="28" fill="#0183F1" transform="rotate(-45 150 140)" />
      
      {/* Pointing indicator */}
      <circle cx="175" cy="125" r="4" fill="#F7931E" className="animate-ping" />
    </svg>
  );
}
