import React from 'react';
import { View, Text, FlatList, StyleSheet, Image, Dimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

interface QueryItem {
  id: string;
  query: string;
  response: string;
  timestamp: number;
}

const { width, height } = Dimensions.get('window');

export const QueryHistory: React.FC = () => {
  const queries = useSelector((state: RootState) => state.queryHistory.queries);
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  const formatTimestamp = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const renderItem = ({ item }: { item: QueryItem }) => (
    <View style={[
      styles.queryItem,
      { backgroundColor: isDarkMode ? '#1e1e1e' : '#fff' }
    ]}>
      <Text style={[
        styles.timestamp,
        { color: isDarkMode ? '#888' : '#666' }
      ]}>
        {formatTimestamp(item.timestamp)}
      </Text>
      <View style={[
        styles.queryContainer,
        { backgroundColor: isDarkMode ? '#2d2d2d' : '#f8f9fa' }
      ]}>
        <Text style={[
          styles.queryLabel,
          { color: isDarkMode ? '#64B5F6' : '#007AFF' }
        ]}>Question:</Text>
        <Text style={[
          styles.queryText,
          { color: isDarkMode ? '#e0e0e0' : '#333' }
        ]}>{item.query}</Text>
      </View>
      <View style={[
        styles.responseContainer,
        { backgroundColor: isDarkMode ? '#252525' : '#f0f7ff' }
      ]}>
        <Text style={[
          styles.responseLabel,
          { color: isDarkMode ? '#64B5F6' : '#007AFF' }
        ]}>Answer:</Text>
        <Text style={[
          styles.responseText,
          { color: isDarkMode ? '#e0e0e0' : '#444' }
        ]}>{item.response}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.mainContainer}>
      {queries.length === 0 && (
        <View style={styles.emptyStateContainer}>
          <Image
            source={require('../../assets/logo.webp')}
            style={styles.backgroundLogo}
            resizeMode="contain"
          />
          <Text style={[
            styles.emptyStateText,
            { color: isDarkMode ? '#666' : '#999' }
          ]}>
            Start a conversation...
          </Text>
        </View>
      )}
      <FlatList
        data={queries}
        renderItem={renderItem}
        keyExtractor={(item: QueryItem) => item.id}
        contentContainerStyle={[
          styles.container,
          { paddingBottom: queries.length > 0 ? 20 : 0 }
        ]}
        inverted
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  container: {
    padding: 16,
  },
  emptyStateContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  emptyStateText: {
    marginTop: 20,
    fontSize: 16,
    opacity: 0.6,
  },
  backgroundLogo: {
    width: width * 0.5,
    height: width * 0.5,
    opacity: 0.35,
  },
  queryItem: {
    marginBottom: 20,
    borderRadius: 15,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  queryContainer: {
    marginBottom: 12,
    padding: 16,
    borderRadius: 12,
  },
  queryLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  queryText: {
    fontSize: 16,
    lineHeight: 24,
  },
  responseContainer: {
    padding: 16,
    borderRadius: 12,
  },
  responseLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  responseText: {
    fontSize: 16,
    lineHeight: 24,
  },
  timestamp: {
    fontSize: 12,
    marginBottom: 8,
    textAlign: 'right',
  },
}); 