import { IconSvgProps } from "../../types";

export const Circle = ({ width, height, color }: IconSvgProps) => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-circle"
  >
    <circle cx="12" cy="12" r="10"/>
  </svg>
)
