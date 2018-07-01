import * as React from 'react';
import styled from 'styled-components';

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;

interface ISvgWrapperProps {
  size?: number;
}

export const SvgWrapper = styled.div<ISvgWrapperProps>`
  display: inline-block;
  flex: 0 0 ${props => (props.size ? `${props.size}px` : '32px')};
  width: ${props => (props.size ? `${props.size}px` : '32px')};
  height: ${props => (props.size ? `${props.size}px` : '32px')};
  min-width: ${props => (props.size ? `${props.size}px` : '32px')};
  min-height: ${props => (props.size ? `${props.size}px` : '32px')};
  position: relative;
  color: inherit;
`;

interface IGlyphProps {
  glyph: string;
  color: string;
}

export const Glyph = ({ glyph, color }: IGlyphProps) => {
  switch (glyph) {
    case 'settings':
      return <path fill={color} d="M9.752,9.489l2.302,0.705c0.552,-0.373 1.161,-0.669 1.81,-0.873l0.885,-2.239c0.397,-0.054 0.803,-0.082 1.216,-0.082c0.413,0 0.819,0.028 1.217,0.082l0.884,2.239c0.649,0.204 1.258,0.5 1.81,0.873l2.302,-0.705c0.588,0.56 1.1,1.2 1.519,1.901l-1.2,2.088c0.238,0.616 0.391,1.274 0.446,1.959l1.987,1.361c-0.073,0.828 -0.257,1.624 -0.539,2.372l-2.383,0.364c-0.341,0.583 -0.764,1.111 -1.253,1.57l0.176,2.403c-0.673,0.446 -1.408,0.804 -2.191,1.057l-1.77,-1.636c-0.328,0.048 -0.664,0.072 -1.005,0.072c-0.341,0 -0.676,-0.024 -1.005,-0.072l-1.77,1.636c-0.782,-0.253 -1.518,-0.611 -2.19,-1.057l0.175,-2.403c-0.489,-0.459 -0.912,-0.987 -1.253,-1.57l-2.383,-0.364c-0.281,-0.748 -0.466,-1.544 -0.539,-2.372l1.987,-1.361c0.055,-0.685 0.208,-1.343 0.446,-1.959l-1.199,-2.088c0.419,-0.701 0.93,-1.341 1.518,-1.901Zm6.213,10.511c2.209,0 4,-1.791 4,-4c0,-2.209 -1.791,-4 -4,-4c-2.209,0 -4,1.791 -4,4c0,2.209 1.791,4 4,4Z" />;
    case 'twitter':
      return <path fill={color} d="M16,28c11,0 12,-1 12,-12c0,-11 -1,-12 -12,-12c-11,0 -12,1 -12,12c0,11 1,12 12,12Zm5.825,-13.901c0,3.669 -2.889,7.901 -8.172,7.901l0,0c-1.622,0 -3.132,-0.46 -4.403,-1.248c0.225,0.026 0.454,0.039 0.685,0.039c1.346,0 2.585,-0.444 3.568,-1.189c-1.258,-0.022 -2.318,-0.825 -2.684,-1.928c0.175,0.032 0.355,0.05 0.54,0.05c0.262,0 0.516,-0.034 0.758,-0.098c-1.315,-0.255 -2.305,-1.377 -2.305,-2.722c0,-0.013 0,-0.024 0.001,-0.036c0.387,0.208 0.829,0.333 1.301,0.348c-0.772,-0.498 -1.279,-1.348 -1.279,-2.312c0,-0.509 0.143,-0.985 0.389,-1.396c1.417,1.681 3.534,2.786 5.921,2.902c-0.049,-0.204 -0.074,-0.416 -0.074,-0.633c0,-1.533 1.286,-2.777 2.872,-2.777c0.826,0 1.573,0.338 2.097,0.877c0.654,-0.124 1.269,-0.356 1.824,-0.674c-0.215,0.649 -0.67,1.192 -1.263,1.536c0.581,-0.067 1.134,-0.216 1.649,-0.437c-0.384,0.557 -0.872,1.046 -1.433,1.438c0.006,0.119 0.008,0.239 0.008,0.359Z" />;
  };
  return null;
};

interface IconProps {
  className?: string;
  color: string;
  glyph: string;
  size: number;
}

export class Icon extends React.Component<IconProps> {
  public render () {
    const {
      className,
      glyph,
      size,
      color,
    } = this.props;
    return (
      <SvgWrapper
        size={size}
        className={className}
      >
        <InlineSvg
          fillRule="evenodd"
          clipRule="evenodd"
          strokeLinejoin="round"
          strokeMiterlimit="1.414"
          xmlns="http://www.w3.org/2000/svg"
          aria-labelledby={glyph}
          viewBox="0 0 32 32"
          preserveAspectRatio="xMidYMid meet"
          id={glyph}
        >
          <title id="title">{glyph}</title>
          <Glyph glyph={glyph} color={color} />
        </InlineSvg>
      </SvgWrapper>
    );
  }
}
