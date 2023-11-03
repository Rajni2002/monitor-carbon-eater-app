import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

const gaugeColor = (valuePercent: number) => {
  let gaugeStyle = {
    textColor: "black",
    bgcolor: "",
    status: ""
  }
  switch (true) {
    case (0 <= valuePercent && valuePercent <= 10):
      gaugeStyle.bgcolor = "#00B050";
      gaugeStyle.status = "Good"
      break;
    case (10 < valuePercent && valuePercent <= 20):
      gaugeStyle.bgcolor = "#92D050";
      gaugeStyle.status = "Satisfactory"
      break;
    case (20 < valuePercent && valuePercent <= 40):
      gaugeStyle.bgcolor = "#FFD700";
      gaugeStyle.status = "Moderately polluted"
      break;
    case (40 < valuePercent && valuePercent <= 60):
      gaugeStyle.bgcolor = "#FF9900";
      gaugeStyle.textColor = "white"
      gaugeStyle.status = "Poor"
      break;
    case (60 < valuePercent && valuePercent <= 80):
      gaugeStyle.bgcolor = "#FF0000";
      gaugeStyle.textColor = "white";
      gaugeStyle.status = "Very Poor";
      break;
    case (80 < valuePercent && valuePercent <= 100):
      gaugeStyle.bgcolor = "#C00000";
      gaugeStyle.textColor = "white";
      gaugeStyle.status = "Severe";
      break

    default:
      break;
  }
  return gaugeStyle
}

const checkEnvironment = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://monitor-carbon-eater-app.vercel.app/"; // https://v2ds.netlify.app

  return base_url;
};

export { gaugeColor, checkEnvironment }