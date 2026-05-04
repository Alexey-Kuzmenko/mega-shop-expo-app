import { Tabs } from 'expo-router';
import { useAtomValue } from 'jotai';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { userProfileAtom } from '@/entities/user';
import { UserTabBarIcon } from '@/entities/user';
import { authAtom } from '@/entities/auth';
import { BasketIcon, HeartIcon, HomeIcon, ProfileIcon } from '@/shared';

import { colors } from '@/styles/theme';
import { TAB_BAR_ICON_SIZE } from '@/constants';
import { useUserProfile } from '@/entities/user/model/useUserProfile';
import { HomeScreenHeader, MainHeader } from '@/widgets/layout';

function TabsLayout() {
    useUserProfile();
    const { access_token } = useAtomValue(authAtom);
    const { profile } = useAtomValue(userProfileAtom);

    return (
        <SafeAreaProvider>
            <Tabs screenOptions={{
                tabBarStyle: {
                    paddingTop: 5,
                    backgroundColor: colors.primary.pureWhite,
                    shadowColor: 'rgba(0, 0, 0, 0.7)',
                    shadowOffset: {
                        width: 0,
                        height: -1
                    },
                    shadowRadius: 4,
                    shadowOpacity: 1,
                },
                tabBarActiveTintColor: colors.primary.blueOcean,
                tabBarInactiveTintColor: colors.primary.black,
                tabBarIconStyle: { width: TAB_BAR_ICON_SIZE, height: TAB_BAR_ICON_SIZE },
                tabBarLabelStyle: {
                    textTransform: 'uppercase',
                    fontSize: 10,
                    fontFamily: 'DMSansMedium',
                },
                sceneStyle: {
                    backgroundColor: colors.primary.pureWhite
                }
            }}>
                <Tabs.Screen name='index' options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <HomeIcon
                        color={color}
                        viewBox='-0.5 -1 24 24'
                    />,
                    header: () => <HomeScreenHeader />
                }}
                />
                <Tabs.Screen name='wishlist' options={{
                    title: 'Wishlist',
                    tabBarIcon: ({ color }) => <HeartIcon
                        color={color}
                        viewBox='-1.5 -2.5 24 24'
                    />,
                    header: () => <MainHeader />
                }} />
                <Tabs.Screen name='basket' options={{
                    title: 'Basket',
                    tabBarIcon: ({ color }) => <BasketIcon
                        color={color}
                        viewBox='0 -2 24 24'
                    />,
                    header: () => <MainHeader />
                }} />
                <Tabs.Screen name='user-profile' options={{
                    title: access_token ? 'Profile' : 'Login',
                    tabBarIcon: ({ color, focused }) => {
                        if (access_token && profile?.avatar) return <UserTabBarIcon
                            isActive={focused}
                            avatar={profile.avatar}
                        />;

                        return <ProfileIcon color={color} viewBox='-3 -2 24 24' />;
                    },
                    header: () => <MainHeader />
                }} />
            </Tabs>
        </SafeAreaProvider>
    );
}

export default TabsLayout;
