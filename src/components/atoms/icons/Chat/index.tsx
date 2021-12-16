interface ChatProps {
  width: number,
  height: number,
  color: string
}

const Chat = ({ width, height, color }: ChatProps) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M16.6667 7.33325C11.1439 7.33325 6.66675 10.8939 6.66675 15.2862C6.66675 17.2381 7.55097 19.0259 9.01823 20.4098L8.66675 24.6666L13.0404 22.7001C14.1647 23.0482 15.3877 23.2391 16.6667 23.2391C22.1896 23.2391 26.6667 19.6785 26.6667 15.2862C26.6667 10.8939 22.1896 7.33325 16.6667 7.33325Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default Chat;