import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useTheme} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import s from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function Header() {
  const {colors} = useTheme();
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => {
    return state.themes;
  });

  console.log('currentTheme', currentTheme);

  return (
    <View style={[s.container, {backgroundColor: colors.headerColor}]}>
      <View style={s.row}>
        <Icon size={36} name="youtube" color="#FF0000" />
        <Text style={[s.text, {color: colors.iconColor}]}>YouTube</Text>
      </View>
      <View style={s.row}>
        <Icon name="magnify" style={[s.icon, {color: colors.iconColor}]} />
        <Icon name="video" style={[s.icon, {color: colors.iconColor}]} />
        <TouchableOpacity
          onPress={() =>
            dispatch({type: 'TOGGLE_THEME', payload: !currentTheme})
          }
        >
          <Icon
            name="theme-light-dark"
            style={[s.icon, {color: colors.iconColor}]}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Header;
