import React, { ReactNode, memo, useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { X } from 'lucide-react-native';
import { SCREEN_H } from '../constants/config';
import theme from '../constants/theme';
import IconButton from './IconButton';

type Props = {
  visible: boolean;
  title: string;
  heightRatio: number;
  onClose: () => void;
  children: ReactNode;
};

/** Shared scrim + bottom-sheet shell for the Theme Library and Settings. */
function SheetModalBase({
  visible,
  title,
  heightRatio,
  onClose,
  children,
}: Props) {
  const sheetHeight = Math.round(SCREEN_H * heightRatio);
  const slide = useRef(new Animated.Value(sheetHeight)).current;

  useEffect(() => {
    Animated.timing(slide, {
      toValue: visible ? 0 : sheetHeight,
      duration: 280,
      easing: Easing.out(Easing.cubic),
      useNativeDriver: true,
    }).start();
  }, [sheetHeight, slide, visible]);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
      onRequestClose={onClose}>
      <View style={styles.root}>
        <Pressable
          style={styles.scrim}
          onPress={onClose}
          accessibilityRole="button"
          accessibilityLabel="CLOSE SHEET"
        />
        <Animated.View
          pointerEvents="box-none"
          style={[
            styles.sheet,
            { height: sheetHeight, transform: [{ translateY: slide }] },
          ]}>
          <View style={styles.headerRow}>
            <Text style={styles.title}>{title}</Text>
            <IconButton
              Icon={X}
              onPress={onClose}
              label={'CLOSE ' + title}
              tinted={false}
            />
          </View>
          <View style={styles.body}>{children}</View>
        </Animated.View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(14,27,46,0.8)',
  },
  scrim: {
    ...StyleSheet.absoluteFillObject,
  },
  sheet: {
    width: '100%',
    backgroundColor: theme.colors.surface.card,
    borderTopLeftRadius: theme.radius.sheet,
    borderTopRightRadius: theme.radius.sheet,
    paddingHorizontal: 18,
    paddingTop: 10,
  },
  headerRow: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: 1.2,
    color: theme.colors.text.primary,
  },
  body: {
    flex: 1,
    paddingBottom: 24,
  },
});

export const SheetModal = memo(SheetModalBase);
export default SheetModal;
