#!/usr/bin/env node

import * as fs from 'fs/promises';

try {
  await fs.unlink('/tmp/hello');
  console.log('successfully deleted /tmp/hello');
} catch (error) {
  console.error('there was an error:', error.message);
}