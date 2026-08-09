import { Device } from '@capacitor/device';

export const getDeviceInfoObject = async () => {
    try {
        const deviceIdInfo = await Device.getId();
        const deviceInfo = await Device.getInfo();

        return {
            device_id:   deviceIdInfo.identifier,
            device_name: `${deviceInfo.manufacturer} ${deviceInfo.model}`,
        };
    } catch (error) {
        console.error("Error fetching device info:", error);
        return {
            device_id:   "",
            device_name: "",
        };
    }
};