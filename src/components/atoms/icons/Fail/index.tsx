interface FailProps {
  width: number,
  height: number,
  color: string
}

const Fail = ({ width, height, color }: FailProps) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20 12L12 20M12 12L20 20" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25 16C25 20.9706 20.9706 25 16 25C11.0294 25 7 20.9706 7 16C7 11.0294 11.0294 7 16 7C20.9706 7 25 11.0294 25 16Z" stroke={color} strokeWidth="2"/>
  </svg>
)

export default Fail;