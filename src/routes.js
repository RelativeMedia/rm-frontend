import React from 'react';
import { Route } from 'react-router';

import BaseLayout from 'layouts/BaseLayout';
import App from 'containers';
import NotFound from 'components/NotFound';

export default (<Route>
  <Route component={BaseLayout}>
    <Route path='/' component={App.Home} navigation name='Home' />
  </Route>
  <Route path='*' component={NotFound} />
</Route>);
