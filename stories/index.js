import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import App from '../src/App';

storiesOf('Welcome', module).add('to Storybook', () => <App message="storybook" />);
