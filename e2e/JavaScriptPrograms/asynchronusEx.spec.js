// testFile.spec.ts
import { test, expect } from '@playwright/test';
import { One } from './aynchronusProgramming';

test('Handling alerts', async ({ page }) => {
  const new1 = new One(page);

  
  // Using .then to handle the returned promise
  await new1.navigate();
  await new1.text().then((e)=>{

    console.log(e)
  })
    
});