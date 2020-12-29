import React, {Component} from 'react';

class RatingCircle extends Component {
  render() {
    const {
      radius,
      rating,
      height,
      width,
      strokeColor,
      strokeWidth,
      textColor,
      showText,
      textSize
    } = this.props
    const cx = width / 2
    const cy = height / 2
    const circumference = 2 * Math.PI * radius
    const progress = ((10 - rating) / 10) * circumference
    return (
      <svg height={height} width={width}>
        {showText && <text
          x="50%"
          y="50%"
          textAnchor="middle"
          alignmentBaseline="middle"
          fill={textColor}
          fontSize={textSize}
        >
          {rating.toFixed(1)}
        </text>}
        <circle
          r={radius}
          cx={cx}
          cy={cy}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          opacity="0.2"/>
        <circle
          r={radius}
          cx={cx}
          cy={cy}
          fill="transparent"
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={progress}
          strokeLinecap="round"/>
      </svg>
    )
  }
}

export default RatingCircle;