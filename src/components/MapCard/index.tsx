import { View, Text, ViewProps } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style';

interface MapCardProps extends ViewProps {
  status: String;
  [key: string]: any;
}

const MapCard: React.FC<MapCardProps> = ({ status }) => {
  console.log("stat", status);
  const [minutes, setMinutes] = useState<number>(status == 'Pending' ? 50 : 15);
  const [seconds, setSeconds] = useState<number>(0);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      } else if (minutes > 0) {
        setMinutes(minutes - 1);
        setSeconds(59);
      } else {
        clearInterval(countdown);
      }
    }, 1000);

    return () => clearInterval(countdown);
  }, [minutes, seconds]);
  const formatTime = (num: number) => (num < 10 ? `0${num}` : num.toString());
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>
        {status == "In Transit"
          ? `Your Order is on the way`
          : status == "Pending"
          ? "We recieve your order we will contact you in a while"
          : "Your Order is delivered.Thank you"}
      </Text>
      {status === "Delivered" ? null : (
        <Text style={styles.timerText}>{`${formatTime(minutes)}:${formatTime(
          seconds
        )}`}</Text>
      )}
    </View>
  );
};

export default MapCard;