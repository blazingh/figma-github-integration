import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './tabs';

import '../styles/style.css';

function App() {
  React.useEffect(() => {
    // This is how we read messages sent from the plugin controller
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-rectangles') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div className="w-full p-4">
      <Tabs defaultValue="components" className="w-full">
        <TabsList className="flex w-full">
          <TabsTrigger value="components" className="w-full">
            Components
          </TabsTrigger>
          <TabsTrigger value="icons" className="w-full">
            Icons
          </TabsTrigger>
          <TabsTrigger value="settings" className="w-full">
            Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="components"> Components </TabsContent>
        <TabsContent value="icons"> Icons </TabsContent>
        <TabsContent value="settings"> Settings </TabsContent>
      </Tabs>
    </div>
  );
}

export default App;
