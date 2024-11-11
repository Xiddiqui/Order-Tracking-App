import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './style';

const MapCard = () => {
      const [minutes, setMinutes] = useState<number>(15);
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
      <Text style={styles.heading}>Your Order is on the way</Text>
      <Text style={styles.timerText}>{`${formatTime(minutes)}:${formatTime(
        seconds
      )}`}</Text>
    </View>
  );
}

export default MapCard;