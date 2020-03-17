/* *******************************************************************************************
 * PUPPETEER
 * https://pptr.dev/
 * ******************************************************************************************* */


// When you install Puppeteer, it downloads a recent version of Chromium (~170MB Mac, ~282MB Linux, ~280MB Win)
// that is guaranteed to work with the API. 
npm install puppeteer

// A lightweight version of Puppeteer for launching an existing browser installation or for connecting to a remote one.
// Be sure that the version of puppeteer-core you install is compatible with the browser you intend to connect to.
// More about the difference between puppeteer vs puppeteer-core
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-puppeteer-vs-puppeteer-core
npm install puppeteer-core


/* *******************************************************************************************
 * ENVIRONMENT VARIABLES
 * ******************************************************************************************* */

HTTP_PROXY  // Defines HTTP proxy settings that are used to download and run Chromium.
HTTPS_PROXY // Defines HTTP proxy settings that are used to download and run Chromium.
NO_PROXY    // Defines HTTP proxy settings that are used to download and run Chromium.

PUPPETEER_SKIP_CHROMIUM_DOWNLOAD // Do not download bundled Chromium during installation step.
PUPPETEER_DOWNLOAD_HOST          // Overwrite URL prefix that is used to download Chromium. Note: this includes protocol and might even include path prefix. Defaults to https://storage.googleapis.com.
PUPPETEER_CHROMIUM_REVISION      // Specify a certain version of Chromium you'd like Puppeteer to use. See puppeteer.launch([options]) on how executable path is inferred. BEWARE: Puppeteer is only guaranteed to work with the bundled Chromium, use at your own risk.
PUPPETEER_EXECUTABLE_PATH        // Specify an executable path to be used in puppeteer.launch. See puppeteer.launch([options]) on how the executable path is inferred. BEWARE: Puppeteer is only guaranteed to work with the bundled Chromium, use at your own risk.
PUPPETEER_PRODUCT                // Specify which browser you'd like Puppeteer to use. Must be one of chrome or firefox. Setting product programmatically in puppeteer.launch([options]) supercedes this environment variable. The product is exposed in puppeteer.product

/* *******************************************************************************************
 * API
 * ******************************************************************************************* */


// PUPPETEER
// Puppeteer module provides a method to launch a Chromium instance. 
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-puppeteer

const puppeteer = require('puppeteer');

puppeteer.devices; // Returns a list of devices to be used with page.emulate(options)
puppeteer.errors;  // Returns the specific error classes
puppeteer.product; // Returns the name of the browser that is under automation ("chrome" or "firefox")

puppeteer.connect(options);                // Attaches Puppeteer to an existing Chromium instance.
puppeteer.createBrowserFetcher([options]); // Create a brower fetcher instance
puppeteer.defaultArgs([options]);          // The default flags that Chromium will be launched with.
puppeteer.executablePath();                // Returns a path where Puppeteer expects to find bundled Chromium.
puppeteer.launch([options]);               // Launch a browser instance

// BROWSER FETCHER
// BrowserFetcher can download and manage different versions of Chromium.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-browserfetcher

const browserFetcher = puppeteer.createBrowserFetcher();

browserFetcher.canDownload(revision)                  // Initiates a HEAD request to check if the revision is available.
browserFetcher.download(revision[, progressCallback]) // Initiates a GET request to download the revision from the host.
browserFetcher.localRevisions()                       // Returns a list of all revisions available locally on disk.
browserFetcher.platform()                             // Returns one of mac, linux, win32 or win64.
browserFetcher.remove(revision)                       // Resolves when the revision has been removed.
browserFetcher.revisionInfo(revision)                 // Returns all the information on the revision.

// BROWSER
// A Browser is created when Puppeteer connects to a Chromium instance, either through puppeteer.launch or puppeteer.connect.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-browser

const browser = await puppeteer.launch();

browser.on('disconnected')    // Emitted when Puppeteer gets disconnected from the Chromium instance.
browser.on('targetchanged')   // Emitted when the url of a target changes.
browser.on('targetcreated')   // Emitted when a target is created, for example when a new page is opened by window.open or browser.newPage.
browser.on('targetdestroyed') // Emitted when a target is destroyed, for example when a page is closed.

browser.browserContexts()                   // 
browser.close()                             // 
browser.createIncognitoBrowserContext()     // 
browser.defaultBrowserContext()             // 
browser.disconnect()                        // 
browser.isConnected()                       // 
browser.newPage()                           // 
browser.pages()                             // 
browser.process()                           // 
browser.target()                            // 
browser.targets()                           // 
browser.userAgent()                         // 
browser.version()                           // 
browser.waitForTarget(predicate[, options]) // 
browser.wsEndpoint()                        // 

// BROWSER CONTEXT
// BrowserContexts provide a way to operate multiple independent browser sessions
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-browsercontext

const context = await browser.createIncognitoBrowserContext();

browserContext.on('targetchanged')   // 
browserContext.on('targetcreated')   // 
browserContext.on('targetdestroyed') // 

browserContext.browser()                                // 
browserContext.clearPermissionOverrides()               // 
browserContext.close()                                  // 
browserContext.isIncognito()                            // 
browserContext.newPage()                                // 
browserContext.overridePermissions(origin, permissions) // 
browserContext.pages()                                  // 
browserContext.targets()                                // 
browserContext.waitForTarget(predicate[, options])      // 

// PAGE
// Page provides methods to interact with a single tab or extension background page in Chromium.
// One Browser instance might have multiple Page instances.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-page

const page = await browser.newPage();

page.on('close')            // 
page.on('console')          // 
page.on('dialog')           // 
page.on('domcontentloaded') // 
page.on('error')            // 
page.on('frameattached')    // 
page.on('framedetached')    // 
page.on('framenavigated')   // 
page.on('load')             // 
page.on('metrics')          // 
page.on('pageerror')        // 
page.on('popup')            // 
page.on('request')          // 
page.on('requestfailed')    // 
page.on('requestfinished')  // 
page.on('response')         // 
page.on('workercreated')    // 
page.on('workerdestroyed')  // 

page.accessibility // 
page.coverage      // 
page.keyboard      // 
page.mouse         // 
page.touchscreen   // 
page.tracing       // 

page.$(selector)                                                //
page.$$(selector)                                               //
page.$$eval(selector, pageFunction[, ...args])                  //
page.$eval(selector, pageFunction[, ...args])                   //
page.$x(expression)                                             //
page.addScriptTag(options)                                      //
page.addStyleTag(options)                                       //
page.authenticate(credentials)                                  //
page.bringToFront()                                             //
page.browser()                                                  //
page.browserContext(                                            //
page.click(selector[, options])                                 //
page.close([options])                                           //
page.content()                                                  //
page.cookies([...urls])                                         //
page.deleteCookie(...cookies)                                   //
page.emulate(options)                                           //
page.emulateMedia(type)                                         //
page.emulateMediaFeatures(features)                             //
page.emulateMediaType(type)                                     //
page.emulateTimezone(timezoneId)                                //
page.evaluate(pageFunction[, ...args])                          //
page.evaluateHandle(pageFunction[, ...args])                    //
page.evaluateOnNewDocument(pageFunction[, ...args])             //
page.exposeFunction(name, puppeteerFunction)                    //
page.focus(selector)                                            //
page.frames()                                                   //
page.goBack([options])                                          //
page.goForward([options])                                       //
page.goto(url[, options])                                       //
page.hover(selector)                                            //
page.isClosed()                                                 //
page.mainFrame()                                                //
page.metrics()                                                  //
page.pdf([options])                                             //
page.queryObjects(prototypeHandle)                              //
page.reload([options])                                          //
page.screenshot([options])                                      //
page.select(selector, ...values)                                //
page.setBypassCSP(enabled)                                      //
page.setCacheEnabled([enabled])                                 //
page.setContent(html[, options])                                //
page.setCookie(...cookies)                                      //
page.setDefaultNavigationTimeout(timeout)                       //
page.setDefaultTimeout(timeout)                                 //
page.setExtraHTTPHeaders(headers)                               //
page.setGeolocation(options)                                    //
page.setJavaScriptEnabled(enabled)                              //
page.setOfflineMode(enabled)                                    //
page.setRequestInterception(value)                              //
page.setUserAgent(userAgent)                                    //
page.setViewport(viewport)                                      //
page.tap(selector)                                              //
page.target()                                                   //
page.title()                                                    //
page.type(selector, text[, options])                            //
page.url()                                                      //
page.viewport()                                                 //
page.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]]) //
page.waitForFileChooser([options])                              //
page.waitForFunction(pageFunction[, options[, ...args]])        //
page.waitForNavigation([options])                               //
page.waitForRequest(urlOrPredicate[, options])                  //
page.waitForResponse(urlOrPredicate[, options])                 //
page.waitForSelector(selector[, options])                       //
page.waitForXPath(xpath[, options])                             //
page.workers()                                                  //

// WORKER
// The Worker class represents a WebWorker.
// The events workercreated and workerdestroyed are emitted on the page object to signal the worker lifecycle.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-worker

worker.evaluate(pageFunction[, ...args])       //
worker.evaluateHandle(pageFunction[, ...args]) //
worker.executionContext()                      //
worker.url()                                   //

// ACCESSIBILITY
// The Accessibility class provides methods for inspecting Chromium's accessibility tree.
// The accessibility tree is used by assistive technology such as screen readers or switches.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-accessibility

accessibility.snapshot([options]) //

// KEYBOARD
// Keyboard provides an api for managing a virtual keyboard. 
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-keyboard

keyboard.down(key[, options])  //
keyboard.press(key[, options]) //
keyboard.sendCharacter(char)   //
keyboard.type(text[, options]) //
keyboard.up(key)               //

// MOUSE
// The Mouse class operates in main-frame CSS pixels relative to the top-left corner of the viewport.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-mouse

mouse.click(x, y[, options]) //
mouse.down([options])        //
mouse.move(x, y[, options])  //
mouse.up([options])          //

// TOUCHSCREEN
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-touchscreen

touchscreen.tap(x, y) // 

// TRACING
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-tracing

tracing.start([options]) //
tracing.stop()           //

// FILE CHOOSER
// FileChooser objects are returned via the 'page.waitForFileChooser' method.
// File choosers let you react to the page requesting for a file.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-filechooser

fileChooser.accept(filePaths) //
fileChooser.cancel()          //
fileChooser.isMultiple()      //

// DIALOG
// Dialog objects are dispatched by page via the 'dialog' event.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-dialog

dialog.accept([promptText]) //
dialog.defaultValue()       //
dialog.dismiss()            //
dialog.message()            //
dialog.type()               //

// CONSOLE MESSAGE
// ConsoleMessage objects are dispatched by page via the 'console' event.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-consolemessage

consoleMessage.args()     //
consoleMessage.location() //
consoleMessage.text()     //
consoleMessage.type()     //

// FRAME
// At every point of time, page exposes its current frame tree via the page.mainFrame() and frame.childFrames() methods.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-frame

frame.$(selector)                                                //
frame.$$(selector)                                               //
frame.$$eval(selector, pageFunction[, ...args])                  //
frame.$eval(selector, pageFunction[, ...args])                   //
frame.$x(expression)                                             //
frame.addScriptTag(options)                                      //
frame.addStyleTag(options)                                       //
frame.childFrames()                                              //
frame.click(selector[, options])                                 //
frame.content()                                                  //
frame.evaluate(pageFunction[, ...args])                          //
frame.evaluateHandle(pageFunction[, ...args])                    //
frame.executionContext()                                         //
frame.focus(selector)                                            //
frame.goto(url[, options])                                       //
frame.hover(selector)                                            //
frame.isDetached()                                               //
frame.name()                                                     //
frame.parentFrame()                                              //
frame.select(selector, ...values)                                //
frame.setContent(html[, options])                                //
frame.tap(selector)                                              //
frame.title()                                                    //
frame.type(selector, text[, options])                            //
frame.url()                                                      //
frame.waitFor(selectorOrFunctionOrTimeout[, options[, ...args]]) //
frame.waitForFunction(pageFunction[, options[, ...args]])        //
frame.waitForNavigation([options])                               //
frame.waitForSelector(selector[, options])                       //
frame.waitForXPath(xpath[, options])                             //

// EXECUTION CONTEXT
// The class represents a context for JavaScript execution.
// Besides pages, execution contexts can be found in workers.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-executioncontext

executionContext.evaluate(pageFunction[, ...args])       //
executionContext.evaluateHandle(pageFunction[, ...args]) //
executionContext.frame()                                 //
executionContext.queryObjects(prototypeHandle)           //

// JSHANDLE
// JSHandle represents an in-page JavaScript object.
// JSHandles can be created with the page.evaluateHandle method.
// const windowHandle = await page.evaluateHandle(() => window);

jsHandle.asElement()                             //
jsHandle.dispose()                               //
jsHandle.evaluate(pageFunction[, ...args])       //
jsHandle.evaluateHandle(pageFunction[, ...args]) //
jsHandle.executionContext()                      //
jsHandle.getProperties()                         //
jsHandle.getProperty(propertyName)               //
jsHandle.jsonValue()                             //

// ELEMENTHANDLE
// ElementHandle represents an in-page DOM element.
// ElementHandles can be created with the page.$ method.
// const hrefElement = await page.$('a');

elementHandle.$(selector)                               //
elementHandle.$$(selector)                              //
elementHandle.$$eval(selector, pageFunction[, ...args]) //
elementHandle.$eval(selector, pageFunction[, ...args])  //
elementHandle.$x(expression)                            //
elementHandle.asElement()                               //
elementHandle.boundingBox()                             //
elementHandle.boxModel()                                //
elementHandle.click([options])                          //
elementHandle.contentFrame()                            //
elementHandle.dispose()                                 //
elementHandle.evaluate(pageFunction[, ...args])         //
elementHandle.evaluateHandle(pageFunction[, ...args])   //
elementHandle.executionContext()                        //
elementHandle.focus()                                   //
elementHandle.getProperties()                           //
elementHandle.getProperty(propertyName)                 //
elementHandle.hover()                                   //
elementHandle.isIntersectingViewport()                  //
elementHandle.jsonValue()                               //
elementHandle.press(key[, options])                     //
elementHandle.screenshot([options])                     //
elementHandle.select(...values)                         //
elementHandle.tap()                                     //
elementHandle.toString()                                //
elementHandle.type(text[, options])                     //
elementHandle.uploadFile(...filePaths)                  //

// REQUEST
// Represents a request which are sent by a page.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-request

request.abort([errorCode])    //
request.continue([overrides]) //
request.failure()             //
request.frame()               //
request.headers()             //
request.isNavigationRequest() //
request.method()              //
request.postData()            //
request.redirectChain()       //
request.resourceType()        //
request.respond(response)     //
request.response()            //
request.url()                 //

// RESPONSE
// Response class represents responses which are received by page.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-response

response.buffer()            //
response.frame()             //
response.fromCache()         //
response.fromServiceWorker() //
response.headers()           //
response.json()              //
response.ok()                //
response.remoteAddress()     //
response.request()           //
response.securityDetails()   //
response.status()            //
response.statusText()        //
response.text()              //
response.url()               //

// SECURITY DETAILS
// SecurityDetails class represents the security details when response was received over the secure connection.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-securitydetails

securityDetails.issuer()      //
securityDetails.protocol()    //
securityDetails.subjectName() //
securityDetails.validFrom()   //
securityDetails.validTo()     //

// TARGET
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-target

target.browser()          //
target.browserContext()   //
target.createCDPSession() //
target.opener()           //
target.page()             //
target.type()             //
target.url()              //
target.worker()           //

// CDPSESSION
// The CDPSession instances are used to talk raw Chrome Devtools Protocol
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-cdpsession

cdpSession.detach()               //
cdpSession.send(method[, params]) //

// COVERAGE
// Coverage gathers information about parts of JavaScript and CSS that were used by the page.
// https://pptr.dev/#?product=Puppeteer&version=v2.1.1&show=api-class-coverage

coverage.startCSSCoverage([options]) //
coverage.startJSCoverage([options])  //
coverage.stopCSSCoverage()           //
coverage.stopJSCoverage()            //
