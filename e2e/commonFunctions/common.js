import { APIRequestContext, expect, Locator, Page } from '@playwright/test';

// Function to handle multiple fixtures
export async function multipleFixtures(page, datatable) {
    const aliasNames = [];
    if (datatable != null) {
        let i = 1;
        for (const element of datatable.hashes()) {
            let myMethod = "GET";
            if (element.method) {
                myMethod = element.method;
            }
            const returnCode = element.returnCode ? Number(element.returnCode) : 200;
            if (element.fixtureFile) {
                if (element.fixtureFile.startsWith("()=>")) {
                    const process = element.fixtureFile.slice(4);
                    switch (process) {
                        case "getLastViewedMockData": {
                            await page.route(element.pattern, (route) =>
                                route.fulfill({
                                    status: returnCode,
                                    body: JSON.stringify(getLastViewedMockData()),
                                })
                            );
                            break;
                        }
                        case "getLastViewedMockDataDRC": {
                            await page.route(element.pattern, (route) =>
                                route.fulfill({
                                    status: returnCode,
                                    body: JSON.stringify(getLastViewedMockDataDRC()),
                                })
                            );
                            break;
                        }
                        default:
                            break;
                    }
                } else {
                    // Case for static fixture file
                    const fixtureData = require(`./fixtures/${element.fixtureFile}`);
                    await page.route(element.pattern, (route) =>
                        route.fulfill({
                            status: returnCode,
                            body: JSON.stringify(fixtureData),
                        })
                    );
                }
            } else {
                await page.route(element.pattern, (route) =>
                    route.fulfill({
                        status: returnCode,
                    })
                );
            }

            aliasNames.push(`fixtureAlias${i}`);
            i += 1;
        }
    }
    return aliasNames;
}