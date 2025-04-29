import { Stack } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Header from '~/components/home/header';
import { DATA } from '~/core/constants/data';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <Header />

      <FlatList
        data={DATA as unknown as ThreadCardProps[]}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: '#fff',
              padding: 20,
              marginVertical: 8,
              marginHorizontal: 16,
            }}>
            <Text>{item.content}</Text>
          </View>
        )}
        ListHeaderComponent={Header}
        ItemSeparatorComponent={() => <View className="h-0.5 bg-gray-200" />}
        keyExtractor={(item) => item.id}
        // showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});
