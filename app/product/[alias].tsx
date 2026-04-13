import { SafeAreaView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useAtom } from 'jotai';

import { Typography } from '@/shared/Typography';
import { userProfileAtom } from '@/entities/user/model/user.state';

export default function ProductPage() {
    const { alias } = useLocalSearchParams();
    const [profile] = useAtom(userProfileAtom);

    return (
        <SafeAreaView>
            <Typography text={`Product alias: ${alias}`} />
            <Typography text={String(profile.isLoading)} />
        </SafeAreaView>
    );
}
