import React, { useState, useEffect } from 'react';
import noti from '../common/sounds/notification.mp3';

export const useAudio = () => {
  const audio = new Audio(noti);

  const toggle = () => {
    audio.play();
  };

  return { toggle };
};
