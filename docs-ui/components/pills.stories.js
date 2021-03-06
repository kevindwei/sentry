import React from 'react';
import {storiesOf} from '@storybook/react';
import {withInfo} from '@storybook/addon-info';

import Pills from 'sentry-ui/pills';
import Pill from 'sentry-ui/pill';

// eslint-disable-next-line
storiesOf('Pills', module).add(
  'all',
  withInfo('When you have key/value data but are tight on space.')(() => (
    <Pills>
      <Pill name="key" value="value" />
      <Pill name="good" value={true}>
        thing
      </Pill>
      <Pill name="bad" value={false}>
        thing
      </Pill>
      <Pill name="generic">thing</Pill>
    </Pills>
  ))
);
