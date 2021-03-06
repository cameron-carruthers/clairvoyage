interface LaptopProps {
  width: number,
  height: number,
  color: string
}

const Laptop = ({ width, height, color }: LaptopProps) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24.5333 7.33325H8.53328C7.7969 7.33325 7.19995 7.93021 7.19995 8.66659V19.3333C7.19995 20.0696 7.7969 20.6666 8.53328 20.6666H24.5333C25.2697 20.6666 25.8666 20.0696 25.8666 19.3333V8.66659C25.8666 7.93021 25.2697 7.33325 24.5333 7.33325Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M26.5333 20.6667H6.53328C5.7969 20.6667 5.19995 21.2637 5.19995 22.0001V23.3334C5.19995 24.0698 5.7969 24.6667 6.53328 24.6667H26.5333C27.2697 24.6667 27.8666 24.0698 27.8666 23.3334V22.0001C27.8666 21.2637 27.2697 20.6667 26.5333 20.6667Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
    <path d="M15.3333 11.3333H17.9999" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default Laptop;