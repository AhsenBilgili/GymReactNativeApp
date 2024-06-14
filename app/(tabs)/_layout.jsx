import { View, Text, Image, StyleSheet } from 'react-native';
import { Tabs, Redirect } from 'expo-router';
import { icons } from '../../constants';

const TabIcon = ({ icon, color, name, focused }) => {
    return (
        <View style={styles.iconContainer}>
         
            <Text style={[styles.text, focused && styles.focusedText, { color }]}>
                {name}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({

    icon: {
        width: 24,
        height: 24,
    },
    text: {
        fontSize: 10, 
        
    },
    focusedText: {
        fontWeight: 'bold', 
    },
});

const TabsLayout = () => {
    return (
        <>
            <Tabs
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor:"#FFA001",
                    tabBarInactiveTintColor:"CDCDE0",
                    tabBarPosition:'Top',
                    
                }}
            >
                <Tabs.Screen
                    name="gyms"
                    options={{
                        title: 'Gyms',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                color={color}
                                name='TESİSLERİMİZ'
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="courses"
                    options={{
                        title: 'Courses',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                color={color}
                                name='KURSLARIMIZ'
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="prices"
                    options={{
                        title: 'Prices',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                color={color}
                                name='ÜCRETLERİMİZ'
                                focused={focused}
                            />
                        ),
                    }}
                />
                <Tabs.Screen
                    name="profile"
                    options={{
                        title: 'Profile',
                        headerShown: false,
                        tabBarIcon: ({ color, focused }) => (
                            <TabIcon
                                color={color}
                                name='PROFİL'
                                focused={focused}
                            />
                        ),
                    }}
                />
            </Tabs>
        </>
    );
};

export default TabsLayout;
