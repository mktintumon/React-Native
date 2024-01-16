import {SafeAreaView, ScrollView} from 'react-native';
import React from 'react';
import FLatCard from './components/FLatCard';
import ElevatedCards from './components/ElevatedCards';
import FancyCards from './components/FancyCards';
import ActionCard from './components/ActionCard';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <FLatCard />
        <ElevatedCards />
        <FancyCards/>
        <FancyCards/>
        <ActionCard/>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
