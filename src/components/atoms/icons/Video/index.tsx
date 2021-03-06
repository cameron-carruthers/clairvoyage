interface VideoProps {
  width: number,
  height: number,
  color: string
}

const Video = ({ width, height, color }: VideoProps) => (
  <svg 
    width={width} 
    height={height} 
    viewBox="0 0 32 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M6.51109 8.93335H20.9555C21.7533 8.93335 22.4 9.5303 22.4 10.2667V21.1833C22.4 21.9197 21.7533 22.5167 20.9555 22.5167H6.51109C5.71335 22.5167 5.06665 21.9197 5.06665 21.1833V10.2667C5.06665 9.5303 5.71335 8.93335 6.51109 8.93335Z" stroke={color} strokeWidth="2"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M23.1009 11.4288L25.7676 9.99226C26.4159 9.64303 27.2245 9.88547 27.5738 10.5338C27.6784 10.7281 27.7332 10.9454 27.7332 11.1661V20.4494C27.7332 21.1858 27.1363 21.7827 26.3999 21.7827C26.2102 21.7827 26.0228 21.7423 25.85 21.6641L23.1833 20.4567C22.7063 20.2408 22.3999 19.7656 22.3999 19.2421V12.6026C22.3999 12.1122 22.6691 11.6613 23.1009 11.4288Z" stroke={color} strokeWidth="2"/>
  </svg>
)

export default Video;