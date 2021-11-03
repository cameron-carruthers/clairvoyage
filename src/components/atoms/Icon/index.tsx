import Image from "next/image";

function capitalizeFirstLetter(string: string) {
  return string.slice(0).toUpperCase() + string.slice(1);
}

interface IconProps {
  iconName: string
}

const Icon = ({ iconName }: IconProps) => (
  <Image src={`/${iconName}.svg`} alt={`${capitalizeFirstLetter(iconName)} Icon`} width={32} height={32} />
)

export default Icon;