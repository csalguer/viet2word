import React from 'react';

import styles from './NightModeSwitch.css';
import { useColorScheme } from '@mantine/hooks';
import { Switch } from '@mantine/core';


export interface NightModeSwitchProps {

}


const SunIcon = () => {
  return (
    <>
    </>
  )
}
const MoonIcon = () => {
  return (
    <>
    </>
  )
}

export function NightModeSwitch({prop = 'default value'}: NightModeSwitchProps) {
  const colorScheme = useColorScheme();

  return (
    <Switch onLabel={} offLabel={}></Switch>
  )
}
