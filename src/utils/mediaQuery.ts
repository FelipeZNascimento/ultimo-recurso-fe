import { reactive } from 'vue';

export enum DeviceSize {
  xs,
  s,
  m,
  l,
  xl,
}

export type DeviceInfo = {
  windowWidth: number;
  size: DeviceSize;
};

const calcSize = (width: number): DeviceSize => {
  if (width < 640) return DeviceSize.xs;
  if (width < 1024) return DeviceSize.s;
  if (width < 1280) return DeviceSize.m;
  if (width < 2048) return DeviceSize.l;
  return DeviceSize.xl;
};

const deviceInfo = reactive({
  windowWidth: window.innerWidth,
  size: DeviceSize.xs,
});

deviceInfo.size = calcSize(window.innerWidth);

window.addEventListener('resize', () => {
  const width = window.innerWidth;
  deviceInfo.windowWidth = width;
  deviceInfo.size = calcSize(width);
});

export const useDevice = (): DeviceInfo => {
  return deviceInfo;
};

export default useDevice;
