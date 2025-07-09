import { test, expect, chromium } from '@playwright/test';

// //* downloading the file and saved it to destination folder
// /**
//  * For every attachment downloaded by the page, page.on('download') event is emitted. All these attachments are downloaded into a temporary folder. 
//  * You can obtain the download url, file name and payload stream using the Download object from the event
//  */
// Start waiting for download before clicking. Note no await.
const downloadPromise = page.waitForEvent('download');
await page.getByText('Download file').click();
const download = await downloadPromise;

// Wait for the download process to complete and save the downloaded file somewhere.
await download.saveAs('/path/to/save/at/' + download.suggestedFilename());


// //* uploading the files
// /**
//  * Upload files
// You can select input files for upload using the locator.setInputFiles() method. It expects first argument to point to an input element with the type "file". Multiple files can be passed in the array. If some of the file paths are relative, they are resolved relative to the current working directory. Empty array clears the selected files.
// */
// Select one file
await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'myfile.pdf'));

// Select multiple files
await page.getByLabel('Upload files').setInputFiles([
  path.join(__dirname, 'file1.txt'),
  path.join(__dirname, 'file2.txt'),
]);

//* uploading files without type="file"


 //* Start waiting for file chooser before clicking. Note no await.
const fileChooserPromise = page.waitForEvent('filechooser');
await page.getByLabel('Upload file').click();
const fileChooser = await fileChooserPromise;
await fileChooser.setFiles(path.join(__dirname, 'myfile.pdf'));


/**
 * 🧾 Your Code:

const fileChooserPromise = page.waitForEvent('filechooser');
await page.locator("#jsupload").click();
const fileChooser = await fileChooserPromise;
🔍 Step-by-Step Explanation:
✅ Line 1:

const fileChooserPromise = page.waitForEvent('filechooser');
You're telling Playwright:
👉 "Hey, start listening for the filechooser event — when it happens, store the result in this promise."

But you don’t use await here yet, because:

The file chooser hasn’t opened yet.

You’re just preparing — you want to start listening before the event is triggered.

✅ Line 2:

await page.locator("#jsupload").click();
This line simulates a user clicking the element with the ID #jsupload.

Presumably, this element (like a button or label) is wired in the web page to open a file dialog — maybe via JavaScript code.

That click causes the browser to try to open the file dialog, which triggers the 'filechooser' event.

✅ Line 3:

const fileChooser = await fileChooserPromise;
Now you're saying:
👉 "Okay, wait for that filechooser event to actually happen, and give me the result."

Since the event has been triggered by the click, the promise resolves, and you now get access to the fileChooser object.

You can now do things like:

await fileChooser.setFiles('path/to/your/file.png');
📦 What is fileChooser?
It's an object representing the file chooser dialog.

You use it to set the files that will be "chosen" in the dialog.
 */

//* final summary
/**
| Line                                                           | What's Happening                                        |
| -------------------------------------------------------------- | ------------------------------------------------------- |
| `const fileChooserPromise = page.waitForEvent('filechooser');` | Start listening for file chooser event (don't wait yet) |
| `await page.locator("#jsupload").click();`                     | Click the element that triggers file dialog             |
| `const fileChooser = await fileChooserPromise;`                | Now wait for the event result (dialog opened)           |

 */
test('handling file upload without input file type', async ({ page }) => {

    await page.goto("https://www.file-upload.net/");
    const fileChooserPromise=page.waitForEvent('filechooser');
    await page.locator("#jsupload").click();
    const fileChooser=await fileChooserPromise;
    await  fileChooser.setFiles("C:/Users/sadvanapu/Downloads/Advanapu Sivasa krishna_Resume.pdf");
});