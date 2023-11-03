import { gaugeColor } from "@/lib/utils";

export const Gauge = ({
    value,
    size = "small",
    showValue = true,
}: {
    value: number;
    size: "small" | "medium" | "large";
    showValue: boolean;
}) => {
    const valuePercent = ((value / 500) * 100);
    const circumference = 332; //2 * Math.PI * 53; // 2 * pi * radius
    const valueInCircumference = ((100 - valuePercent) / 100) * circumference;
    const strokeDasharray = `${circumference} ${circumference}`;
    const initialOffset = circumference;
    const strokeDashoffset = initialOffset - valueInCircumference;

    const sizes = {
        small: {
            width: "36",
            height: "36",
            textSize: "text-lg",
        },
        medium: {
            width: "72",
            height: "72",
            textSize: "text-xl",
        },
        large: {
            width: "144",
            height: "144",
            textSize: "text-2xl",
        },
    };

    return (
        <div className="flex flex-col items-center justify-center relative mt-5">
            <svg
                fill="none"
                shapeRendering="crispEdges"
                height={sizes[size].height}
                width={sizes[size].width}
                viewBox="0 0 120 120"
                strokeWidth="2"
                className="transform -rotate-90"
            >
                <circle
                    className="text-[#cecece] dark:text-[#2e2e2e]"
                    strokeWidth="12"
                    stroke="currentColor"
                    fill="transparent"
                    shapeRendering="geometricPrecision"
                    r="53"
                    cx="60"
                    cy="60"
                />
                <circle
                    className="animate-gauge_fill"
                    strokeWidth="12"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={initialOffset}
                    shapeRendering="geometricPrecision"
                    strokeLinecap="round"
                    stroke={gaugeColor(valuePercent).bgcolor}
                    fill="transparent"
                    r="53"
                    cx="60"
                    cy="60"
                    style={{
                        strokeDashoffset: strokeDashoffset,
                        transition: "stroke-dasharray 1s ease 0s,stroke 1s ease 0s",
                    }}
                />
            </svg>
            {showValue ? (
                <div className="absolute flex animate-gauge_fadeIn">
                    <p className={`dark:text-gray-100 text-gray-400 font-semibold ${sizes[size].textSize}`}>AQI {value}</p>
                </div>
            ) : null}
        </div>
    );
};