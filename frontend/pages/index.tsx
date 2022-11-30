import { Button } from 'antd';

import React, { Fragment, useState } from 'react';

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <Fragment>
      <h2>home page</h2>
      <Button type="primary">Click on this button</Button>
    </Fragment>
  )
}