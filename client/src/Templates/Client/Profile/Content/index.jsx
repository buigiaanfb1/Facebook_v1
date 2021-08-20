import React from 'react';
import { useSelector } from 'react-redux';
import { arrTab } from '../../../../common/TabsProfileArray';

const Content = () => {
  const currentTab = useSelector((state) => state.tabsStore.tabProfile);

  // find the Component that same name with currentTab in Redux Store;
  const handleRenderComponent = () => {
    for (const tab of arrTab) {
      if (tab.cons === currentTab) return <tab.component />;
    }
  };
  return <div>{handleRenderComponent()}</div>;
};

export default React.memo(Content);
