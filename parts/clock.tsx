"use client";
import { useEffect, useState } from "react";
export default function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    return (
    <span className="font-mono text-4xl mt-8">
      {time.toLocaleTimeString()}
    </span>
    );
}