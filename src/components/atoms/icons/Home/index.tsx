interface HomeProps {
  width: number,
  height: number,
  color: string
}

const Home = ({ width, height, color }: HomeProps) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M16.2666 6.57788L8.17769 13.6396L8.17769 23.9112L24.3555 23.9112L24.3555 13.6396L16.2666 6.57788Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14.0381 23.689V17.5557H18.5778V23.689" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
)

export default Home;