import { AlertType } from '..';
import { ErrorIcon, InfoIcon, SuccessIcon, WarningIcon } from '@/shared/Icons';

import { colors } from '@/styles/theme';

interface CustomAlertIconProps {
    alertType: AlertType
}

const ALERT_ICON_SIZE = 20;

export const CustomAlertIcon = ({ alertType }: CustomAlertIconProps) => {
    switch (alertType) {
        case 'info':
            return <InfoIcon color={colors.primary.blueOcean} width={ALERT_ICON_SIZE} height={ALERT_ICON_SIZE} />;
        case 'success':
            return <SuccessIcon color={colors.secondary.earthGreen} width={ALERT_ICON_SIZE} height={ALERT_ICON_SIZE} />;
        case 'warning':
            return <WarningIcon color={colors.primary.freshOrange} width={ALERT_ICON_SIZE} height={ALERT_ICON_SIZE} />;
        case 'error':
            return <ErrorIcon color={colors.secondary.redVelvet} width={ALERT_ICON_SIZE} height={ALERT_ICON_SIZE} />;
        default:
            break;
    }
};
