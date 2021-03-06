interface PictureProps {
  width: number,
  height: number,
  color: string
}

const Picture = ({ width, height, color }: PictureProps) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24.1334 7.6001H8.13338C7.397 7.6001 6.80005 8.19705 6.80005 8.93343V22.5168C6.80005 23.2531 7.397 23.8501 8.13338 23.8501H24.1334C24.8698 23.8501 25.4667 23.2531 25.4667 22.5168V8.93343C25.4667 8.19705 24.8698 7.6001 24.1334 7.6001Z" stroke={color} strokeWidth="2"/>
    <path d="M20.4668 14.4751C21.5023 14.4751 22.3418 13.6356 22.3418 12.6001C22.3418 11.5646 21.5023 10.7251 20.4668 10.7251C19.4313 10.7251 18.5918 11.5646 18.5918 12.6001C18.5918 13.6356 19.4313 14.4751 20.4668 14.4751Z" stroke={color} strokeWidth="2"/>
    <path d="M6.80005 20.872L12.3234 13.1392L17.2681 19.97L19.8641 17.4977L25.1731 23.0709" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default Picture;