import * as React from 'react';
import Svg, { Path, SvgProps } from 'react-native-svg';
const Search = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M11.5 21.5a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22.5l-2-2"
    />
  </Svg>
);
const Home = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="m9.02 2.84-5.39 4.2C2.73 7.74 2 9.23 2 10.36v7.41c0 2.32 1.89 4.22 4.21 4.22h11.58c2.32 0 4.21-1.9 4.21-4.21V10.5c0-1.21-.81-2.76-1.8-3.45l-6.18-4.33c-1.4-.98-3.65-.93-5 .12Z"
    />
    <Path fill={props.color} d="M12 17.99v-3 3Z" />
    <Path
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 17.99v-3"
    />
  </Svg>
);
const Heart = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill={props.color}
      d="M17.527 1.92c.624 0 1.242.138 1.818.409.575.27 1.096.666 1.533 1.165.9 1.024 1.405 2.403 1.405 3.84 0 1.437-.505 2.817-1.405 3.84L12 21.244l-8.878-10.07c-.9-1.023-1.405-2.403-1.405-3.84 0-1.437.505-2.816 1.405-3.84A4.71 4.71 0 0 1 4.656 2.33a4.264 4.264 0 0 1 1.817-.41c.623 0 1.241.14 1.816.41a4.71 4.71 0 0 1 1.534 1.165L12 5.99l2.168-2.476a4.684 4.684 0 0 1 1.535-1.18 4.234 4.234 0 0 1 1.825-.414Zm0-1.92c-.852 0-1.695.189-2.481.558-.786.37-1.498.91-2.095 1.592L12 3.226l-.951-1.076A6.437 6.437 0 0 0 8.953.56a5.828 5.828 0 0 0-2.48-.558c-.852 0-1.696.19-2.481.559a6.436 6.436 0 0 0-2.096 1.59C.681 3.535 0 5.4 0 7.343c0 1.943.68 3.808 1.896 5.194L12 24l10.104-11.462C23.319 11.152 24 9.287 24 7.344s-.68-3.808-1.896-5.194A6.438 6.438 0 0 0 20.009.56 5.829 5.829 0 0 0 17.527 0Z"
    />
  </Svg>
);
const User = (props: SvgProps) => (
  <Svg width={24} height={25} fill="none" {...props}>
    <Path fill={props.color} d="M12 12.5a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <Path
      fill={props.color}
      stroke={props.color}
      d="M3.41 22.5c0-3.778 3.762-7 8.59-7 4.828 0 8.59 3.222 8.59 7H3.41Z"
    />
  </Svg>
);

export { Heart, Home, Search, User };
