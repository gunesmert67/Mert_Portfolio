'use client';

import React, { useEffect, useRef } from 'react';
import Lottie, { LottieRefCurrentProps } from 'lottie-react';

interface AnimatedLottieIconProps {
    animationData: any;
    size?: number;
    speed?: number;
    className?: string;
}

const AnimatedLottieIcon = ({
    animationData,
    size = 24,
    speed = 1,
    className = '',
}: AnimatedLottieIconProps) => {
    const lottieRef = useRef<LottieRefCurrentProps>(null);

    useEffect(() => {
        if (lottieRef.current) {
            lottieRef.current.setSpeed(speed);
        }
    }, [speed]);

    return (
        <div
            className={`relative flex items-center justify-center ${className}`}
            style={{ width: size, height: size }}
        >
            <Lottie
                lottieRef={lottieRef}
                animationData={animationData}
                loop={true}
                autoplay={true}
                className="w-full h-full"
            />
        </div>
    );
};

export default AnimatedLottieIcon;
