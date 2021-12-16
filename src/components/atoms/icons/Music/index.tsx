interface MusicProps {
  width: number,
  height: number,
  color: string
}

const Music = ({ width, height, color }: MusicProps) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M9.99992 25.3333C11.4727 25.3333 12.6666 24.1394 12.6666 22.6667C12.6666 21.1939 11.4727 20 9.99992 20C8.52716 20 7.33325 21.1939 7.33325 22.6667C7.33325 24.1394 8.52716 25.3333 9.99992 25.3333Z" stroke={color} strokeWidth="2"/>
    <path d="M20.6667 22.6666C22.1394 22.6666 23.3333 21.4727 23.3333 19.9999C23.3333 18.5272 22.1394 17.3333 20.6667 17.3333C19.1939 17.3333 18 18.5272 18 19.9999C18 21.4727 19.1939 22.6666 20.6667 22.6666Z" stroke={color} strokeWidth="2"/>
    <path d="M12.6667 21.4167V13.25" stroke={color} strokeWidth="2" strokeLinecap="square"/>
    <path d="M23.3333 18.7499V10.5833" stroke={color} strokeWidth="2" strokeLinecap="square"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M12.6667 9.33339L23.3334 7.06152V11.3118L12.6667 13.3334V9.33339Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)

export default Music;