interface EditProps {
  width: number,
  height: number,
  color: string
}

const Edit = ({ width, height, color }: EditProps) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
  <path fillRule="evenodd" clipRule="evenodd" d="M22.1282 6.76709L9.30597 19.5893L7.98604 24.6805L13.0772 23.3605L25.8994 10.5383L22.1282 6.76709Z" stroke={color} strokeWidth="2" strokeLinejoin="round"/>
  </svg>
)

export default Edit;