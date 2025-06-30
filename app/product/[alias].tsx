import { Typography } from '@/shared/Typography/Typography';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';

export default function ProductPage() {
    const { alias } = useLocalSearchParams();

    return (
        <SafeAreaView>
            <Typography text={`Product alias: ${alias}`} />
        </SafeAreaView>
    );
}